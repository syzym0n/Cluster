import { useState, useEffect } from "react";
import { LevelType, Bountys } from "@/types/types";

interface ClassCardMonsterProps {
    id: string;
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
    avisTracking: Bountys | null;
    setAvisTracking: (newBountys: Bountys) => void;
    isBountyTrueClassFiltered: boolean | null;
}

export default function ClassCardMonster({id, classOrder,emmaLevel,metagLevel,emmaOrder,metagOrder,setEmmaLevel,setMetagLevel, 
    filteredType, filteredClass, isLevelSupOrderCase, avisTracking, setAvisTracking, isBountyTrueClassFiltered}: ClassCardMonsterProps) {
    


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
        if (filteredType === 'avis' && avisTracking) {

            const bountyId = Object.keys(avisTracking).find((avisId) => avisId === id);

            if (bountyId) {
                setAvisTracking({
                    ...avisTracking,
                    [bountyId]: {
                        ...avisTracking[bountyId],
                        [classItem]: !avisTracking[bountyId][classItem], 
                    },
                });
            }
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
                const isBountyFalse = avisTracking && avisTracking[id] && avisTracking[id][classItem] === false;

                const opacityClass = isEmmaMatch || isMetagMatch || isBountyFalse ? "opacity-100" : "opacity-30";

                const buttonClass = filteredClass === "all" ? `h-1/3 w-[calc(100%/7)] ${opacityClass}` : `h-full w-1/2`;

                const imageGreenClass = isLevelSupOrderCase || isBountyTrueClassFiltered ? "opacity-70" : "opacity-100 ";
                const buttonGreenClass = isLevelSupOrderCase || isBountyTrueClassFiltered ? "bg-baseGreen" : "bg-transparent";

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
