function FilterButtons(props) {
    return (
        <div className="mt-2 flex gap-2">
            <button onClick={() => props.handleFilterClick("all")} className="hover:text-gray-700">
                All
            </button>
            <button onClick={() => props.handleFilterClick("favorites")} className="hover:text-gray-700">
                Favorites
            </button>
        </div>
    );
}

export default FilterButtons;
