import CardTypeFilter from "../cardTypeFilter/cardTypeFilter";
import ButtonTypeFilter from "../buttonTypeFilter/buttonTypeFilter";

interface homeTypeFilterProps {
    filteredType: string;
    setFilteredType: (value: string) => void;

    filteredTypePlus: number;
    setFilteredTypePlus: (value: number) => void;
}


export default function homeTypeFilter({filteredType, setFilteredType, filteredTypePlus, setFilteredTypePlus}: homeTypeFilterProps) {
    return (
        <div className="flex flex-col justify-center items-center">

            <div className="relative w-dvw flex justify-center">

                <div className="absolute Z-0 w-full h-3 bg-baseLight top-[50%] translate-y-[50%]"></div>

                <div className="relative z-10 flex gap-10 items-center justify-center mt-10 w-[35dvw]">
                <CardTypeFilter 
                filteredType={filteredType}
                setFilteredType={setFilteredType}
                model={"emma"}
                setFilteredTypePlus={setFilteredTypePlus} 
                /> 
                <CardTypeFilter 
                filteredType={filteredType}
                setFilteredType={setFilteredType}
                model={"metag"}
                setFilteredTypePlus={setFilteredTypePlus} 
                /> 
                <CardTypeFilter 
                filteredType={filteredType}
                setFilteredType={setFilteredType}
                model={"avis"}
                setFilteredTypePlus={setFilteredTypePlus} 
                /> 
                </div>

            </div>

            
            <ButtonTypeFilter 
            filteredType={filteredType}
            filteredTypePlus={filteredTypePlus}
            setFilteredTypePlus={setFilteredTypePlus} 
            />
        </div>
    );
}