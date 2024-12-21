interface ClassCardMonsterProps {
    classOrder: string[]; 
}

export default function ClassCardMonster({ classOrder }: ClassCardMonsterProps) {
    return (
        <div className="h-[25dvh] flex w-1/2 justify-start items-start flex-wrap gap-0">
            {classOrder.map((classItem) => {
                return (
                    <button key={classItem} className="h-1/3 w-[calc(100%/7)]">
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