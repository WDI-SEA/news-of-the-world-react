import { Link } from 'react-router-dom'
function ReadingList (props) {
    console.log('Reading Faves: ', props.faves)
    let faveList = props.faves.map((a, i) => {
        return (
            <li className="artLi">
                <Link to={`/article/:id`} onClick={()=>props.handleClick(a)} id={i}>{a.title}</Link>
            </li>
        )
    })
    return (
        <div id="readingList">
            <h3>Reading List</h3>
            <ul className="artList">
                {faveList}
            </ul>
        </div>
    )
}

export default ReadingList