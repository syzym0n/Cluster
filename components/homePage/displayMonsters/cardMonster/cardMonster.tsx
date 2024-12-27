import { useState, useEffect } from "react";

import ClassCardMonster from "../classCardMonster/classCardMonster";

import { LevelType, Bountys } from "@/types/types";

interface CardMonsterProps {
    id: string;
    name: string;
    imgPath: string;
    classOrder: string[];
    emmaOrder: number | null;
    metagOrder: number | null;
    emmaLevel: LevelType | null;
    metagLevel: LevelType | null;
    setEmmaLevel: (newLevel: LevelType) => void;
    setMetagLevel: (newLevel: LevelType) => void;
    filteredType: string;
    filteredClass: string;
    avisTracking: Bountys | null;
        setAvisTracking: (newBountys: Bountys) => void;
}

export default function CardMonster({id, name, imgPath, classOrder, emmaOrder, metagOrder, 
    emmaLevel, metagLevel, setEmmaLevel, setMetagLevel, filteredType, filteredClass, avisTracking, setAvisTracking}: CardMonsterProps) {


    const isLevelSupOrderCase =
        filteredClass !== "all" &&
        ((filteredType === "emma" &&
            emmaOrder !== null &&
            emmaLevel &&
            emmaLevel[filteredClass] !== undefined &&
            emmaOrder < emmaLevel[filteredClass]) ||
        (filteredType === "metag" &&
            metagOrder !== null &&
            metagLevel &&
            metagLevel[filteredClass] !== undefined &&
            metagOrder < metagLevel[filteredClass])
        );

    const isOrderSupLevelCase =
    filteredClass !== "all" &&
    ((filteredType === "emma" &&
        emmaOrder !== null &&
        emmaLevel &&
        emmaLevel[filteredClass] !== undefined &&
        emmaOrder > emmaLevel[filteredClass]) ||
    (filteredType === "metag" &&
        metagOrder !== null &&
        metagLevel &&
        metagLevel[filteredClass] !== undefined &&
        metagOrder > metagLevel[filteredClass])
    
    );

    const isBountyTrueClassFiltered = 
        filteredClass !== "all" && 
        filteredType === "avis" && 
        avisTracking && 
        avisTracking[id] && 
        avisTracking[id][filteredClass] === true;

 
    const greenClass = isLevelSupOrderCase || isBountyTrueClassFiltered ? "border-baseGreen " : "border-baseLight";
    const opacityDecrease = isLevelSupOrderCase || isBountyTrueClassFiltered ? "opacity-60" : "opacity-100";
    const greenText = isLevelSupOrderCase || isBountyTrueClassFiltered ?  'text-baseGreen' : 'text-baseLight';

    const opacityDown = isOrderSupLevelCase ? 'opacity-30' : 'opacity-100'


    
        
    return (
        <div className={`h-[25dvh] relative flex justify-center items-center my-10 ${opacityDecrease} ${opacityDown} group`}>

            <p className={`absolute z-0 text-[200px] uppercase whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${greenText}`}>{name}</p>

            <div className={`relative z-10 w-[90dvw] h-full flex items-center justify-between
                bg-baseDark/97 border-4 rounded-3xl p-10 ${greenClass}`}
            >
                <img 
                src={imgPath} alt={`Illustration du Monstre ${name}`}
                className="h-[25dvh]"
                />
                <p className={`uppercase w-1/3 text-3xl text-center mr-10 ${greenText}`}>{name}</p>
                <ClassCardMonster
                id={id}
                classOrder={classOrder}
                emmaOrder={emmaOrder}
                metagOrder={metagOrder}
                emmaLevel={emmaLevel}
                metagLevel={metagLevel}
                setEmmaLevel={setEmmaLevel}
                setMetagLevel={setMetagLevel}
                filteredType={filteredType}
                filteredClass={filteredClass}
                isLevelSupOrderCase={isLevelSupOrderCase}
                avisTracking={avisTracking}
                setAvisTracking={setAvisTracking}
                isBountyTrueClassFiltered={isBountyTrueClassFiltered}
                />
            </div>

        </div>
    );
}