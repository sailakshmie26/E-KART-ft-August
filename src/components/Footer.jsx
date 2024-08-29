import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
      <div style={{width:'100%', height:'300px'}} 
      className='d-flex justify-content-center align-items-center flex-column mt-5 bg-primary'>
        <div className='d-flex justify-content-evenly align-items-center mb-5 w-100' style={{color:'white'}}>
            
            <div style={{width:'400px', color:'white'}}>
              <h4 style={{color:'#ffad33'}} ><i style={{color:'#ffad33'}} class="fa-solid fa-cart-shopping me-3"></i>E-KART</h4>
              <h6>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum maxime quia, dicta harum officiis, neque pariatur voluptate veniam aperiam voluptatem eligendi a magni nostrum doloribus. Reiciendis quas sequi repudiandae architecto?</h6>
            </div>

            <div className='d-flex flex-column'>
            <h4 style={{color:'#ffad33'}} >Links</h4>
            <Link to={'/'} style={{textDecoration:'none', color:'white'}}>Home</Link>
            <Link to={'/cart'} style={{textDecoration:'none', color:'white'}}>Cart</Link>
            <Link to={'wishlist'} style={{textDecoration:'none', color:'white'}}>Wishlist</Link>
            </div>
            <div className='d-flex flex-column'>
              <h4 style={{color:'#ffad33'}} >Guides</h4>
              <Link to={'https://react.dev/'} style={{textDecoration:'none', color:'white'}} target='_blank'>React</Link>
              <Link to={'https://react.dev/'} style={{textDecoration:'none', color:'white'}} target='_blank'>React Bootstrap</Link>
              <Link to={'https://react.dev/'} style={{textDecoration:'none', color:'white'}} target='_blank'>Boots watch</Link>
            </div>
            <div>
              <h4 style={{color:'#ffad33'}} >Contact</h4>
              <div className='d-flex'>
                <input type="text" className='form-control' placeholder='Enter Email Id' />
                <button className='btn btn-warning ms-2'>Subscribe</button>
              </div>
              <div className='d-flex justify-content-evenly mt-3'>
                <Link style={{textDecoration:'none', color:'white'}}><i class="fa-brands fa-instagram fa-2x"></i></Link>
                <Link style={{textDecoration:'none', color:'white'}}><i class="fa-brands fa-twitter fa-2x"></i></Link>
                <Link style={{textDecoration:'none', color:'white'}}><i class="fa-brands fa-reddit fa-2x"></i></Link>
                <Link style={{textDecoration:'none', color:'white'}}><i class="fa-brands fa-facebook fa-2x"></i></Link>
              </div>
            </div>

        </div>
        <p style={{color:'white'}}>Copyright &#169; 2024 E-Kart built with React Redux</p>
      </div>
    </>
  )
}

export default Footer
