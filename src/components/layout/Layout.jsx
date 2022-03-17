import Header from './Header'
import Footer from './Footer'

export default function Layout (props) {
    return (
        <>
            <h1>News of the World - React</h1>
            <Header />
            <main>
                {props.children}
            </main>
            <Footer />
        </>
    )
}