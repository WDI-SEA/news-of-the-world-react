import Header from './Header'
// import Navigation from './Navigation'

export default function Layout ({ children }) {
  return (
    <>
      <header>
        <Header />
      </header>

      <main>
        {/* <Navigation /> */}
        {children}
      </main>
      <footer>Powered by : NewsAPI.org</footer>
    </>
  )
}
