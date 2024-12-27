import { useSortable} from '@dnd-kit/sortable';

interface SortableItemProps {
    id: string;
  }
  
  function SortableItem({id}: SortableItemProps) {
    const { attributes, listeners, setNodeRef, transform, isDragging } = useSortable({id});
    
    const style = {
      transform: `translate3d(${transform?.x ?? 0}px, ${transform?.y ?? 0}px, 0) ${isDragging ? 'scale(1.3)' : ''}`,
      zIndex: isDragging ? 1000 : 1,
    };
  
    return (
      <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
        <img
            src={`/class/${id}.png`}
            alt={id}
            className="w-16 h-16 object-contain rounded-lg"
            />
      </div>
    );
  }

  export default SortableItem