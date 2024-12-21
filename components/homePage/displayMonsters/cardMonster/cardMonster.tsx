import ClassCardMonster from "../classCardMonster/classCardMonster";

interface CardMonsterProps {
    name: string | undefined;
    imgPath: string | undefined;
}

export default function CardMonster({name, imgPath}: CardMonsterProps) {
    return (
        <div>
            <p>{name}</p>
            <img src={imgPath} alt={`Illustration du Monstre ${name}`}></img>
            <ClassCardMonster />
        </div>
    );
}