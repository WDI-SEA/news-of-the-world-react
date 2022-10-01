function FilterButtons(props) {
    return (
        <div className="flex gap-2">
            <button onClick={() => props.handleFilterClick("all")}>
                All
            </button>
            <button onClick={() => props.handleFilterClick("favorites")}>
                Favorites
            </button>
        </div>
    );
}

export default FilterButtons;
