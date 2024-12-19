interface HomeFilterbarProps {
    filteredClass: string;
    setFilteredClass: (value: string) => void;
}

export default function HomeFilterbar({ filteredClass, setFilteredClass }: HomeFilterbarProps) {

    const classIcons = [ 
        "class/Cra.png", "class/Eca.png", "class/Eli.png", "class/Eni.png", "class/Enu.png", 
        "class/Fec.png", "class/For.png", "class/Hup.png", "class/Iop.png", "class/Osa.png", 
        "class/Oug.png", "class/Pan.png", "class/Rou.png", "class/Sac.png", "class/Sad.png", 
        "class/Sra.png", "class/Ste.png", "class/Xel.png", "class/Zoz.png" 
      ]

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
                {classIcons.map((icon) => {
                    const classRegistration = icon.slice(6, 9);
                    const isSelected = filteredClass === classRegistration;
                    const opacityClass = filteredClass === "all" ? "opacity-100" : (isSelected ? "opacity-100" : "opacity-30");

                    return (
                        <button
                            key={classRegistration}
                            className={`transition-all duration-200 transform ${isSelected ? 'scale-150' : 'scale-100'} ${opacityClass}`}
                            onClick={() => handleClick(classRegistration)} 
                        >
                            <img
                                src={`/${icon}`}
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