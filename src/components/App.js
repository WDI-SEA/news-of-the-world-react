import '../App.css'
import Layout from './layout/Layout'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Display from './pages/Display'
import Landing from './pages/Landing'

function App () {
  const [headlines, setHeadlines] = useState([])
  const [endpoint, setEndpoint] = useState(
    `https://newsapi.org/v2/top-headlines?apiKey=${process.env.REACT_APP_NOTW_API_KEY}&country=`
  )
  const [visitorLocation, setVisitorLocation] = useState('')
  const [countryCode, setCountryCode] = useState('ca')
  const [ip, setIp] = useState('')

  const getUserLocation = () => {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        console.log(position)
      },
      function (error) {
        console.error('Error Code = ' + error.code + ' - ' + error.message)
      }
    )
  }

  // useEffect(()=> {
  //   (async()=> {
  //     const res = await fetch('https://geolocation-db.com/json/')
  //     const json = await res.json()
  //     // console.log(json.IPv4)
  //     setIp(json.IPv4)
  //     setCountryCode(json.country_code.toLowerCase())
  //     console.log('useeffct 1 : ', countryCode)
  //   })()
  // },[])
  // const [apiMessage, setApiMessage] = useState('')
  useEffect(() => {
    // iife
    ;(async () => {
      const res = await fetch(endpoint + countryCode)
      const json = await res.json()
      // setApiMessage(`Message: ${json.message}`)
      console.log(json.message)
      // setHeadlines(json.articles)
      getUserLocation()
    })()
  }, [])

  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route
              path='/'
              element={<Landing headlines={headlines} ipaddr={ip} />}
            />
            <Route path='/display' element={<Display />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  )
}

export default App
