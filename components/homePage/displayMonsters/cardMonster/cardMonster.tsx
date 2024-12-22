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
}

export default function CardMonster({name, imgPath, classOrder, emmaOrder, metagOrder, emmaLevel, metagLevel, setEmmaLevel, setMetagLevel}: CardMonsterProps) {
    return (
        <div className="h-[35dvh] relative flex justify-center items-center my-14">

            <p className="absolute z-0 text-[250px] uppercase whitespace-nowrap">{name}</p>

            <div className="relative z-10 w-[90dvw] h-full flex items-center justify-between 
            bg-baseDark/97 border-4 border-baseLight rounded-3xl p-10">
                <img 
                src={imgPath} alt={`Illustration du Monstre ${name}`}
                className="h-[35dvh]"
                />
                <ClassCardMonster 
                classOrder={classOrder}
                emmaOrder={emmaOrder}
                metagOrder={metagOrder}
                emmaLevel={emmaLevel}
                metagLevel={metagLevel}
                setEmmaLevel={setEmmaLevel}
                setMetagLevel={setMetagLevel}
                />
            </div>

        </div>
    );
}