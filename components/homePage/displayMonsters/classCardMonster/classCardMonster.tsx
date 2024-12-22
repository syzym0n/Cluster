import { LevelType } from "@/types/types";

interface ClassCardMonsterProps {
    classOrder: string[];
    emmaOrder: number | null;
    metagOrder: number | null;
    emmaLevel: LevelType;
    metagLevel: LevelType;
}

export default function ClassCardMonster({ classOrder, emmaLevel, metagLevel, emmaOrder, metagOrder}: ClassCardMonsterProps) {
    return (
        <div className="h-[25dvh] flex w-1/2 justify-start items-start flex-wrap gap-0">
            {classOrder.map((classItem) => {
                const isEmmaMatch = emmaLevel[classItem] === emmaOrder;
                const isMetagMatch = metagLevel[classItem] === metagOrder;
                const opacityClass = (isEmmaMatch || isMetagMatch) ? 'opacity-100' : 'opacity-30';
                return (
                    <button key={classItem} className={`h-1/3 w-[calc(100%/7)] ${opacityClass}`}>
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