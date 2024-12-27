'use client';

import React, { useState } from 'react';
import { DndContext, DragEndEvent } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';

import SortableItem from '../sortableItem/sortableItem'

interface DndClassOrderProps {
  initialOrder: string[];
}

function DndClassOrder({ initialOrder }: DndClassOrderProps) {
  const [classOrder, setClassOrder] = useState<string[]>(initialOrder);


  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;


    if (!over) return;

    
    const oldIndex = classOrder.indexOf(active.id as string);
    const newIndex = classOrder.indexOf(over.id as string);

    if (oldIndex === newIndex) return;

    const updatedOrder = [...classOrder];
    updatedOrder.splice(oldIndex, 1);
    updatedOrder.splice(newIndex, 0, active.id as string);

    setClassOrder(updatedOrder);
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <SortableContext items={classOrder} strategy={verticalListSortingStrategy}>
        <div className="grid grid-cols-10 grid-rows-2 gap-4 p-4">
          {classOrder.map((className) => (
            <SortableItem key={className} id={className} />
          ))}
        </div>
      </SortableContext>
    </DndContext>
  );
}



export default DndClassOrder;


