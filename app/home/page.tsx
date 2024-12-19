'use client';

import { useEffect, useState } from "react";

import HomeHeader from "@/components/homePage/header/homeHeader/homeHeader";
import HomeClassFilter from "@/components/homePage/centralFilter/homeClassFilter/homeClassFilter";
import HomeTypeFilter from "@/components/homePage/centralFilter/homeTypeFilter/homeTypeFilter";



export default function Home() {

    const [frontData, setFrontData] = useState<any>(null); 
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null); 

    const [search, setSearch] = useState<string>("");
    const [filteredClass, setFilteredClass] = useState<string>("all");

    const [filteredType, setFilteredType] = useState<string>("emma");
    const [filteredTypePlus, setFilteredTypePlus] = useState<number>(0);

    useEffect(() => {
        const fetchFrontData = async () => {
            try {
                const response = await fetch("/frontendDataTest.json"); 
                if (!response.ok) {
                    throw new Error(`Error : ${response.status}`);
                }
                const jsonData = await response.json();
                setFrontData(jsonData);
            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchFrontData();
    }, []);

    if (loading) return <p>Chargement...</p>;
    if (error) return <p>Erreur: {error}</p>;

    const DataFetch = frontData.length > 0 ? frontData[0].nickname : "Rien trouvé";

    return (
        <div>
        <HomeHeader 
        nickname={frontData[0].nickname}
        search={search}
        setSearch={setSearch}
        />
        <HomeClassFilter 
            classOrder={frontData[0].classOrder}
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