'use client';

import { useEffect, useState } from "react";

import HomeHeader from "@/components/homePage/header/homeHeader/homeHeader";
import HomeClassFilter from "@/components/homePage/centralFilter/homeClassFilter/homeClassFilter";
import HomeTypeFilter from "@/components/homePage/centralFilter/homeTypeFilter/homeTypeFilter";

export default function Home() {

    const [frontData, setFrontData] = useState<any>(null);
    const [staticData, setStaticData] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null); 

    const [search, setSearch] = useState<string>("");
    const [filteredClass, setFilteredClass] = useState<string>("all");
    const [filteredType, setFilteredType] = useState<string>("emma");
    const [filteredTypePlus, setFilteredTypePlus] = useState<number>(0);


    const fetchStaticData = async () => {
        const staticDataFiles = [
            "staticJSON/AVIS.json",
            "staticJSON/D1A50.json",
            "staticJSON/D51A100.json",
            "staticJSON/D101A150.json",
            "staticJSON/D151A190.json",
            "staticJSON/D191A200.json",
            "staticJSON/DE.json"
        ];

        try {
            const responses = await Promise.all(
                staticDataFiles.map(file => fetch(file))
            );

            const jsonData = await Promise.all(
                responses.map(response => {
                    if (!response.ok) {
                        throw new Error(`Erreur: ${response.status}`);
                    }
                    return response.json();
                    
                })
            );

            setStaticData(jsonData);
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const fetchFrontData = async () => {
        try {
            const response = await fetch("/frontendDataTest.json"); // Exemple de fetch pour des données modulables
            if (!response.ok) {
                throw new Error(`Erreur: ${response.status}`);
            }
            const jsonData = await response.json();
            setFrontData(jsonData);
        } catch (err: any) {
            setError(err.message);
        }
    };

    useEffect(() => {
        fetchStaticData();
        console.log(staticData);
    }, []); 

   
    useEffect(() => {
        if (!frontData) {
            fetchFrontData();
        }
    }, [frontData]);

    if (loading) return <p>Chargement...</p>;
    if (error) return <p>Erreur: {error}</p>;

    

    return (
        <div>
            <HomeHeader 
                nickname={frontData[0]?.nickname || "Inconnu"} 
                search={search} 
                setSearch={setSearch} 
            />
            <HomeClassFilter 
                classOrder={frontData[0]?.classOrder || []}
                filteredClass={filteredClass} 
                setFilteredClass={setFilteredClass} 
            />
            <HomeTypeFilter 
                filteredType={filteredType} 
                setFilteredType={setFilteredType}
                filteredTypePlus={filteredTypePlus} 
                setFilteredTypePlus={setFilteredTypePlus}  
            />
        </div>
    );
}
