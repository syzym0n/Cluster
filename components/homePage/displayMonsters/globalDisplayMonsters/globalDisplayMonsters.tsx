import { useState, useEffect } from "react";

import CardMonster from "../cardMonster/cardMonster";

import { Monster, AvisMonster } from "@/types/types";

interface GlobalDisplayMonstersProps {
    staticData: (Monster | AvisMonster)[];
    filteredType: string;
    filteredTypePlus: number;
}


export default function HomeDisplayMonsters({staticData,filteredType,filteredTypePlus}:GlobalDisplayMonstersProps) {
    const stepEmma = [1, 7, 13, 18, 24, 30];
        const stepMetag = [1, 5, 11, 17, 22, 28];
        const stepAvis = [0, 11, 23, 28, 31, 35, 42, 46, 52, 62];
    
        const [indexMin, setIndexMin] = useState<number>(0);
        const [indexMax, setIndexMax] = useState<number>(0);
    
        useEffect(() => {
    
            if (filteredType === "emma"){
                setIndexMin(stepEmma[filteredTypePlus])
                setIndexMax(stepEmma[filteredTypePlus+1]-1)
            } else if (filteredType === "metag"){
                setIndexMin(stepMetag[filteredTypePlus])
                setIndexMax(stepMetag[filteredTypePlus+1]-1)
            } else if (filteredType === "avis"){
                setIndexMin(stepAvis[filteredTypePlus])
                setIndexMax(stepAvis[filteredTypePlus+1]-1)
            }
        }, [filteredType, filteredTypePlus]);
    
        const filteredMonsters = staticData.filter((monster) => {
            if (filteredType === "emma" && monster.emmaOrder !== null) {
              return monster.emmaOrder >= indexMin && monster.emmaOrder <= indexMax;
            } else if (filteredType === "metag" && monster.metagOrder !== null) {
              return monster.metagOrder >= indexMin && monster.metagOrder <= indexMax;
            } else if (filteredType === "avis") {
              return monster.categoryId === 333 && monster.order >= indexMin && monster.order <= indexMax;
            }
            return false; 
          });
    
    
        return(
        <div>
                {filteredMonsters.length > 0 ? (
                    filteredMonsters.map((monster) => (
                        <CardMonster 
                            key={monster.id} 
                            name={monster.boss}
                            imgPath = {monster.imgPath}
                            />
                    ))
                ) : (
                    <p>Aucun monstre à afficher.</p>
                )}
            </div>
        );
    }