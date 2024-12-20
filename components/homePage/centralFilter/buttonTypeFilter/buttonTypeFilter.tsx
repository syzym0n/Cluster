interface buttonTypeFilterProps {
    filteredType: string;

    filteredTypePlus: number;
    setFilteredTypePlus: (value: number) => void;
}


export default function buttonTypeFilter({filteredType, filteredTypePlus, setFilteredTypePlus}: buttonTypeFilterProps) {

    const emmaContentButton = ["Première Édition", "Donjons Avancés", "Donjons 3.5", "Siège de Donjons", "Tornades de Donjons"];
    const metagContentButton = ["Start", "Sbires du Maître", "Juge Hystérique", "Encore des Donjons", "Voie du Guerrier"];
    const avisContentButton = ["Astrub", "Amakna", "Justiciers", "Sufokia", "Saharach", "Bourgade", "Village Enseveli", "Chateau du Comte Harebourg", "Dimensions"];

    const stepEmma = [1, 7, 13, 18, 24];
    const stepMetag = [1, 5, 11, 17, 22];
    const stepAvis = [0, 11, 23, 28, 31, 35, 42, 46, 52];

    let options: string[] = [];

    if (filteredType === "emma") {
        options = emmaContentButton;
    } else if (filteredType === "metag") {
        options = metagContentButton;
    } else if (filteredType === "avis") {
        options = avisContentButton;
    }
    
    return (
        <div className="flex flex-wrap justify-center gap-4 w-[70dvw] mt-4">
            {options.map((option, index) => (
                <button
                    key={index}
                    onClick={() => setFilteredTypePlus(index)}
                    className={`font-visby font-light border-[1px] border-baseLight px-4 py-2 rounded-lg transition-all ${
                        filteredTypePlus === index ? "bg-baseLight text-baseDark" : "bg-baseDark text-baseLight"
                    }`}
                >
                    {option}
                </button>
                
            ))}
        </div>
    );
}