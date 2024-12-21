import AvisDisplayMonsters from "../avisDisplayMonsters/avisDisplayMonsters";
import EmmaDisplayMonsters from "../emmaDisplayMonsters/emmaDisplayMonsters"
import MetagDisplayMonsters from "../metagDisplayMonsters/metagDisplayMonsters";

export default function HomeDisplayMonsters() {
    return (
        <div>
            <EmmaDisplayMonsters />
            <MetagDisplayMonsters />
            <AvisDisplayMonsters />
        </div>
    );
}