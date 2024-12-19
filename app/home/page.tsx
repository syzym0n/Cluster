'use client';

import { useEffect, useState } from "react";

import HomeHeader from "@/components/homePage/homeHeader/homeHeader";



export default function Home() {

    const [frontData, setFrontData] = useState<any>(null); 
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null); 

    /* const [filteredClass, setFilteredClass] = useState<string>(""); */

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

    const DataFetch = frontData.length > 0 ? frontData[0] : "Rien trouvé";

    return (
        <div>
        <HomeHeader />
        <h1>Home</h1>
        <p className="text-sm font-light font-visby">{typeof DataFetch === "object" ? JSON.stringify(DataFetch, null, 2) : DataFetch}</p>
        </div>
    );
}