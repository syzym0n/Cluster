import AvisDisplayMonsters from "../avisDisplayMonsters/avisDisplayMonsters";
import EmmaDisplayMonsters from "../emmaDisplayMonsters/emmaDisplayMonsters"
import MetagDisplayMonsters from "../metagDisplayMonsters/metagDisplayMonsters";

import { Monster, AvisMonster } from "@/types/types";

interface GlobalDisplayMonstersProps {
    emmaData: Monster[];
    metagData: Monster[];
    avisData: AvisMonster[];
    filteredType: string;
    filteredTypePlus: number;
}


export default function HomeDisplayMonsters({emmaData,metagData,avisData,filteredType,filteredTypePlus}:GlobalDisplayMonstersProps) {
    return (
        <div>
            <section className={filteredType === "emma" ? "block" : "hidden"}>
            <EmmaDisplayMonsters />
            </section>

            <section className={filteredType === "metag" ? "block" : "hidden"}>
            <MetagDisplayMonsters />
            </section>

            <section className={filteredType === "avis" ? "block" : "hidden"}>
            <AvisDisplayMonsters />
            </section>
        </div>
    );
}