import React from 'react'
import imo from '../images/imo.png'
const Error = () => {
    return (
        <>
          {/* <div className="errorpages">
             <h1> 404 </h1> 
             <h2>Page Not Found 
           </h2>
           <img src={imo} alt="Error" />
            <p>We're sorry, the page you requested could not be found.please go back to the homepage.  </p> 
            </div> */}
            <div className="errorpages">
            <a href="http://localhost:3000/" target="_blank">
             <button className="home-btn"> HOME </button>
             </a>
                
            {/* <img src={errorpage} alt="Error" /> */}
            </div>
        </>
    )
}

export default Error