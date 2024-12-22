import { useState, useEffect } from "react";
import { LevelType } from "@/types/types";

interface ClassCardMonsterProps {
    classOrder: string[];
    emmaOrder: number | null;
    metagOrder: number | null;
    emmaLevel: LevelType | null;
    metagLevel: LevelType | null;
    setEmmaLevel: (newLevel: LevelType) => void;
    setMetagLevel: (newLevel: LevelType) => void;
}

export default function ClassCardMonster({
    classOrder,
    emmaLevel,
    metagLevel,
    emmaOrder,
    metagOrder,
    setEmmaLevel,
    setMetagLevel,
}: ClassCardMonsterProps) {
    const [level, setLevel] = useState<'emma' | 'metag'>('emma');

    const handleClick = (classItem: string) => {
        if (level === 'emma' && emmaOrder !== null && emmaLevel && emmaLevel[classItem] !== emmaOrder) {
            setEmmaLevel({
                ...emmaLevel,
                [classItem]: emmaOrder,
            });
        }

        if (level === 'metag' && metagOrder !== null && metagLevel && metagLevel[classItem] !== metagOrder) {
            setMetagLevel({
                ...metagLevel,
                [classItem]: metagOrder,
            });
        }
    };

    return (
        <div className="h-[25dvh] flex w-1/2 justify-start items-start flex-wrap gap-0">
            {classOrder.map((classItem) => {
                const isEmmaMatch = emmaLevel && emmaLevel[classItem] === emmaOrder;
                const isMetagMatch = metagLevel && metagLevel[classItem] === metagOrder;
                const opacityClass = (isEmmaMatch || isMetagMatch) ? 'opacity-100' : 'opacity-30';

                return (
                    <button
                        key={classItem}
                        className={`h-1/3 w-[calc(100%/7)] ${opacityClass}`}
                        onClick={() => handleClick(classItem)}
                    >
                        <img
                            src={`/class/${classItem}.png`}
                            alt={`Classe ${classItem}`}
                            className="object-cover h-full w-full rounded-lg"
                        />
                    </button>
                );
            })}
        </div>
    );
}
