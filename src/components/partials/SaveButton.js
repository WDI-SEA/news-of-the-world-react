import { Link } from "react-router-dom";

function SaveButton(props) {
    return (props.isSaved ? 
        props.filter === "saved" ? 
            <div className="self-end mt-2">
                <Link to="/">
                    <button className="border rounded-lg px-2 py-1 bg-green-500 hover:bg-red-500"
                        // isSaved was true when button clicked
                        onClick={() => {
                            props.setIsSaved(false);
                            props.handleSaveClick(props.article, true)
                        }}>
                        Unsave
                    </button>
                </Link>
            </div>
            :
            <div className="self-end mt-2">
                <button className="border rounded-lg px-2 py-1 bg-green-500 hover:bg-red-500"
                    // isSaved was true when button clicked
                    onClick={() => {
                        props.setIsSaved(false);
                        props.handleSaveClick(props.article, true)
                    }}>
                    Unsave
                </button>
            </div>
        :
        <div className="self-end mt-2">
            <button className="border rounded-lg px-2 py-1 bg-blue-500 hover:bg-blue-600"
                // isSaved was false when button clicked
                onClick={() => {
                    props.setIsSaved(true);
                    props.handleSaveClick(props.article, false)
                }}>
                Save
            </button>
        </div>

    );
}

export default SaveButton;
