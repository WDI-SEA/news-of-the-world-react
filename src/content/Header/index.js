export const Header = (props) => {
    return (
        <div className="header">
            <div className="search">
                <h1>News of the World!</h1>
                <form>
                <input 
                    type="text"
                    placeholder="Search your keyword in news today"
                    onChange={props.handleChange}
                />
                <button
                    type="submit"
                    value="Search"
                    onClick={props.searchNews}
                ><strong>Go</strong></button>
                </form>
            </div>
        </div>
    )
}