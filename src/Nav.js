import React , { useState , useEffect} from 'react';
import './Nav.css'

function Nav() {
    const [show,handleShow] = useState(false)
    useEffect(() => {
      window.addEventListener("scroll", function listener(){
        if(window.scrollY > 100){
          handleShow(true)
        }else handleShow(false)
        
        return () => {
          window.removeEventListener("scroll",listener)
        }
      })
    },[])
    
  return (
    <div className={`nav ${show && 'nav-black'}`}>
      <img
      className='nav-logo'
      src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg'
      alt='Netflix Logo '/>
      <img
      className='nav-avatar'
      src='https://www.pngmart.com/files/7/Dark-Souls-Remastered-PNG-File.png'
      alt='Netflix Logo '/>
    </div>
  );
}

export default Nav;
