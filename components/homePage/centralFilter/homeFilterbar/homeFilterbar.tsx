interface HomeFilterbarProps {
    classOrder: string[]; 
    filteredClass: string;
    setFilteredClass: (value: string) => void;
}

export default function HomeFilterbar({ classOrder, filteredClass, setFilteredClass }: HomeFilterbarProps) {

      const handleClick = (classRegistration: string) => {
        if (filteredClass === classRegistration) {
            setFilteredClass("all");
        } else {
            setFilteredClass(classRegistration);
        }
    };

    
    return (
        <div className="flex flex-col items-center">
            <div className="flex items-center border-baseLight border-2 rounded-2xl p-1 overflow-visible w-[70dvw]">
                {classOrder.map((classRegistration) => {

                    const isSelected = filteredClass === classRegistration;

                    const opacityClass = filteredClass === "all" ? "opacity-100" : (isSelected ? "opacity-100" : "opacity-30");

                    return (
                        <button
                            key={classRegistration}
                            className={`transition-all duration-200 transform ${isSelected ? 'scale-150' : 'scale-100'} ${opacityClass}`}
                            onClick={() => handleClick(classRegistration)} 
                        >
                            <img
                                src={`/class/${classRegistration}.png`}
                                alt={`Classe ${classRegistration}`}
                                className="object-cover rounded-lg"
                            />
                        </button>
                    );
                })}
            </div>
                <p className="text-lg">FILTRER</p>
        </div>
    );
}