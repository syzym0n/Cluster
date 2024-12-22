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
    filteredType: string;
    filteredClass: string;
    isLevelSupOrderCase: boolean | null;
}

export default function ClassCardMonster({classOrder,emmaLevel,metagLevel,emmaOrder,metagOrder,setEmmaLevel,setMetagLevel, 
    filteredType, filteredClass, isLevelSupOrderCase}: ClassCardMonsterProps) {
    


    const handleClick = (classItem: string) => {
        if (filteredType === 'emma' && emmaOrder !== null && emmaLevel && emmaLevel[classItem] !== emmaOrder) {
            setEmmaLevel({
                ...emmaLevel,
                [classItem]: emmaOrder,
            });
        }

        if (filteredType=== 'metag' && metagOrder !== null && metagLevel && metagLevel[classItem] !== metagOrder) {
            setMetagLevel({
                ...metagLevel,
                [classItem]: metagOrder,
            });
        }
    };

    const classesToMap =
    filteredClass === "all" ? classOrder : [filteredClass];

    const containerClass =
        filteredClass === "all" ? "justify-start" : "justify-center";



    return (
        <div className={`h-[20dvh] flex w-2/5 items-start flex-wrap gap-0 ${containerClass}`}>
            {classesToMap.map((classItem) => {
                const isEmmaMatch = emmaLevel && emmaLevel[classItem] === emmaOrder;
                const isMetagMatch = metagLevel && metagLevel[classItem] === metagOrder;
                const opacityClass = (isEmmaMatch || isMetagMatch) ? 'opacity-100' : 'opacity-30';

                const buttonClass = filteredClass === "all" ? `h-1/3 w-[calc(100%/7)] ${opacityClass}` : `h-full w-1/2`;

                const imageGreenClass = isLevelSupOrderCase ? "opacity-70" : "opacity-100 ";
                const buttonGreenClass = isLevelSupOrderCase ? "bg-baseGreen" : "bg-transparent";

                return (
                    <button
                        key={classItem}
                        className={`${buttonClass} ${buttonGreenClass} rounded-lg`}
                        onClick={() => handleClick(classItem)}
                    >
                        <img
                            src={`/class/${classItem}.png`}
                            alt={`Classe ${classItem}`}
                            className={`object-cover h-full w-full rounded-lg ${imageGreenClass}`}
                        />
                    </button>
                );
            })}
        </div>
    );
}
