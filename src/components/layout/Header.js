import { Link } from 'react-router-dom'

export default function Header () {
  return (
    <>
      <div className='flex-container'>
        <div>
          <img src='newsoftheworldlogo.png' alt='logo' />
        </div>
        <div className='centered-element align-right'>
          <input placeholder='Search...' />
        </div>
      </div>
    </>
  )
}
