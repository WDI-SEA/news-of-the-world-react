function FilterButtons(props) {
    return (
        <div className="mt-2 flex gap-2">
            <button onClick={() => props.handleFilterClick("all")} 
                className={`rounded-lg px-2 py-0.5
                ${props.filter === "all" ? "bg-black text-white hover:text-black hover:bg-gray-200" : "hover:text-gray-700 hover:bg-gray-200"}`}>
                All
            </button>
            <button onClick={() => props.handleFilterClick("saved")} 
                className={`rounded-lg px-2 py-0.5
                ${props.filter === "saved" ? "bg-black text-white hover:text-black hover:bg-gray-200" : "hover:text-gray-700 hover:bg-gray-200"}`}>
                Saved
            </button>
        </div>
    );
}

export default FilterButtons;
