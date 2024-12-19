interface CardTypeFilterProps {
    filteredType: string;
    setFilteredType: (value: string) => void;
    model: string;
    setFilteredTypePlus: (value: number) => void;
}


export default function CardTypeFilter({filteredType, setFilteredType, model, setFilteredTypePlus}: CardTypeFilterProps) {

    const handleClick = () => {
        setFilteredType(model);
        setFilteredTypePlus(0);
    };


    return (
        <div onClick={handleClick}
        className={`flex flex-col items-center border-2 rounded-3xl p-5 bg-baseDark cursor-pointer transition-all duration-200 
            ${filteredType === model ? "border-baseLight" : "border-baseDark"}`}
        >
            <img 
            src={`/assets/${model}.png`}
            alt={`Icone ${model}`}
            className={`transition-all duration-200 ${filteredType === model ? "opacity-100" : "opacity-30"}`}
            />
            <p className={`transition-all duration-200 uppercase font-visby font-semibold mt-6 ${filteredType === model ? "opacity-100" : "opacity-30"}`}>{model}</p>
        </div>
    );
}