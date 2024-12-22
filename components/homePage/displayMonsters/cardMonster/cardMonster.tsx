import { useState, useEffect } from "react";

import ClassCardMonster from "../classCardMonster/classCardMonster";

import { LevelType } from "@/types/types";

interface CardMonsterProps {
    name: string | undefined;
    imgPath: string | undefined;
    classOrder: string[];
    emmaOrder: number | null;
    metagOrder: number | null;
    emmaLevel: LevelType | null;
    metagLevel: LevelType | null;
    setEmmaLevel: (newLevel: LevelType) => void;
    setMetagLevel: (newLevel: LevelType) => void;
    filteredType: string;
    filteredClass: string;
}

export default function CardMonster({name, imgPath, classOrder, emmaOrder, metagOrder, 
    emmaLevel, metagLevel, setEmmaLevel, setMetagLevel, filteredType, filteredClass}: CardMonsterProps) {


    const isGreenCase =
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

 
    const greenClass = isGreenCase ? "border-baseGreen " : "border-baseLight";
    const opacityDecrease = isGreenCase ? "opacity-90" : "opacity-100";
    const greenText = isGreenCase ? 'text-baseGreen' : 'text-baseLight';


    
        
    return (
        <div className={`h-[35dvh] relative flex justify-center items-center my-14 ${opacityDecrease}`}>

            <p className={`absolute z-0 text-[250px] uppercase whitespace-nowrap ${greenText}`}>{name}</p>

            <div className={`relative z-10 w-[90dvw] h-full flex items-center justify-between
                bg-baseDark/97 border-4 rounded-3xl p-10 ${greenClass}`}
            >
                <img 
                src={imgPath} alt={`Illustration du Monstre ${name}`}
                className="w-1/4"
                />
                <p className={`uppercase w-1/3 text-3xl text-center mr-10 ${greenText}`}>{name}</p>
                <ClassCardMonster 
                classOrder={classOrder}
                emmaOrder={emmaOrder}
                metagOrder={metagOrder}
                emmaLevel={emmaLevel}
                metagLevel={metagLevel}
                setEmmaLevel={setEmmaLevel}
                setMetagLevel={setMetagLevel}
                filteredType={filteredType}
                filteredClass={filteredClass}
                isGreenCase={isGreenCase}
                />
            </div>

        </div>
    );
}