import { useState, useEffect } from "react";

import CardMonster from "../cardMonster/cardMonster";

import { Monster, AvisMonster, LevelType } from "@/types/types";



interface GlobalDisplayMonstersProps {
    staticData: (Monster | AvisMonster)[];
    filteredType: string;
    filteredTypePlus: number;
    classOrder: string[];
    search: string;
    emmaLevel: LevelType;
    metagLevel: LevelType;
}


export default function HomeDisplayMonsters({staticData,filteredType,filteredTypePlus, classOrder, search, emmaLevel, metagLevel}:GlobalDisplayMonstersProps) {
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
    
        const filteredMonsters = staticData
        .filter((monster) => {
            if (filteredType === "emma" && monster.emmaOrder !== null) {
                return monster.emmaOrder >= indexMin && monster.emmaOrder <= indexMax;
            } else if (filteredType === "metag" && monster.metagOrder !== null) {
                return monster.metagOrder >= indexMin && monster.metagOrder <= indexMax;
            } else if (filteredType === "avis") {
                return monster.categoryId === 333 && monster.order >= indexMin && monster.order <= indexMax;
            } else if (search !== "" && filteredType === "") {
                return monster.boss.toLowerCase().includes(search.toLowerCase());
            }
            return false;
        })
        .sort((a, b) => {
            if (filteredType === 'emma' && a.emmaOrder !== null && b.emmaOrder !== null) {
                return a.emmaOrder - b.emmaOrder;
            }
            if (filteredType === 'metag' && a.metagOrder !== null && b.metagOrder !== null) {
                return a.metagOrder - b.metagOrder;
            }
            if (filteredType === 'avis' && a.order !== null && b.order !== null) {
                return a.order - b.order;
            }
            return 0;
        });


    
    
        return(
        <div>
                {filteredMonsters.length > 0 ? (
                    filteredMonsters.map((monster) => (
                        <CardMonster 
                            key={monster.id} 
                            name={monster.boss}
                            imgPath = {monster.imgPath}
                            classOrder={classOrder}
                            emmaOrder={monster.emmaOrder}
                            metagOrder={monster.metagOrder}
                            emmaLevel={emmaLevel}
                            metagLevel={metagLevel}
                            />
                    ))
                ) : (
                    <p className="font-visby font-light text-center text-xl m-10">
                        Clique sur un des trois personnages ou tape dans la barre de recherche.
                    </p>
                )}
            </div>
        );
    }