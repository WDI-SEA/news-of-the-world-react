import { Link } from 'react-router-dom'
function ReadingList (props) {
    console.log('Reading Faves: ', props.faves)
    let faveList = props.faves.map((a, i) => {
        return (
            <li >
                <Link to={`/article/:id`} onClick={()=>props.handleClick(a)} id={i}>{a.title}</Link>
            </li>
        )
    })
    return (
        <div id="readingList">
            <h3>Reading List</h3>
            <ul>
                {faveList}
            </ul>
        </div>
    )
}

export default ReadingList