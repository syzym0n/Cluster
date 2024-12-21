import ClassCardMonster from "../classCardMonster/classCardMonster";

interface CardMonsterProps {
    name: string | undefined;
    imgPath: string | undefined;
}

export default function CardMonster({name, imgPath}: CardMonsterProps) {
    return (
        <div className="h-[30dvh] relative flex justify-center items-center my-14">

            <p className="absolute z-0 text-[150px] uppercase whitespace-nowrap">{name}</p>

            <div className="relative z-10 w-[90dvw] h-full flex items-center justify-between 
            bg-baseDark/97 border-4 border-baseLight rounded-3xl p-10">
                <img 
                src={imgPath} alt={`Illustration du Monstre ${name}`}
                className="h-[35dvh]"
                />
                <ClassCardMonster />
            </div>

        </div>
    );
}