interface HomeSearchbarProps {
    search: string;
    setSearch: (value: string) => void;
    setFilteredType: (value: string) => void;
}

export default function HomeSearchbar({ search, setSearch, setFilteredType }: HomeSearchbarProps) {

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };

    const handleFocus = () => {
        setFilteredType(""); 
    };

    return (
        <div className="flex items-center gap-3 border-2 border-baseLight w-[30dvw] rounded-xl py-3 pl-6">
            <img src="/assets/mglass.png" alt="icone de loupe" className="w-3 h-3 h-full"/>
            <input
                type="text"
                value={search}
                onChange={handleInputChange}
                onFocus={handleFocus}
                placeholder="Rechercher ..."
                className="w-full bg-transparent border-none focus:outline-none font-visby font-thin placeholder-baseLight"
            />
        </div>
    );
}
