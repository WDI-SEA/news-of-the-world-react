import { Link } from 'react-router-dom';
import '../../App.css';


function Landing(props) {
    console.log('this is props\n', props)
    const articleList = props.articles.map((a, i) => {
        return (
            <li key={i} className='articleContainer'>
                <h3 className='title'><Link to = {`/display/${i}`}>{a.title}</Link></h3>
                {/* <small>{a.author}</small> */}
                {/* <img src={a.urlToImage} alt={a.title} className='img' /> */}
            </li>
        )
    })

    const allFaves = props.faves.map((f, i) => {
        return (
            <li key={i}>
                <h3><Link to = {`/display/${i}`}>{f.title}</Link></h3>
            </li>
        )
    })

    return (
        <div>
            <div className='searchContainer'>
                <label htmlFor='articleSearch'>Search for an article: </label>
                <input
                    id='articleSearch'
                    type='text'
                    value={props.search}
                    onChange={props.handleChange}
                    className='searchInput'
                />
            </div>
            <ul className='listContainer'>
                {articleList}
            </ul>
            <div>
                <h1>Here are your saved articles: </h1>
                <ul className='favContainer'>
                    {allFaves}
                </ul>
            </div>
        </div>
    )
}

export default Landing;