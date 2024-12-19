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
        <div className="relative">
            <div className="flex items-center border-baseLight border-[1px] rounded-xl p-1 overflow-visible">
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
                                className="w-8 h-8 object-cover rounded-lg"
                            />
                        </button>
                    );
                })}
            </div>
            <p className="absolute right-0 text-sm">FILTRER</p>
        </div>
    );
}