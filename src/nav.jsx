import './App.css'
import go from '../public/go.svg'

function Nav() {

  return (
    <>
      <nav className='flex items-center justify-between'>
        <div className="font-medium logo">
          mabdesign
        </div>
        <div className='hidden md:block'>
          <ul className='flex gap-5 font-regular items-center'>
            <li>About</li>
            <li>Services</li>
            <li>Our works</li>
            <li className='bg-[#94D82D] px-4 py-2 text-white flex items-center'> Contact <img src={go} /></li>
          </ul>

        </div>
      </nav>
    </>
  )
}

export default Nav
