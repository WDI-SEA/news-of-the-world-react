import Header from "./Header";
import Navigation from "./Navigation";

export default function Layout({children}) {
    
    return(
        <>
        <header>
            <Header/>    
        </header>                
        <main>
            <Navigation />
            <div className="main">
                {children}    
            </div>
        </main>        
        <footer>
          Powered by : NewsAPI.org
        </footer>
        </>
    )
}