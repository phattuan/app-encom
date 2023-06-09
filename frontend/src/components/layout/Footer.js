import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <Fragment>
      <footer className="footer">
        {/* Footer Top */}
        <br />
        <div className="footer-top section w-100">
          <div className="container">
            <div className="row">
              <div className="flex flex-column w-100 justify-content-center align-items-center">
                {/* Single Widget */}
                <div className="single-footer about flex justify-content-center align-items-center w-100">
                  <div className="logo">
                    <h1 className="logo-tp" style={{ fontSize: '2rem', textTransform: 'uppercase', color: 'white', textShadow: '5px 5px 10px black' }}>store tp</h1>
                  </div>
                  <p className="text">Website mô phỏng bán hàng và hình thức thanh toán thông qua visa (sở dạng kiểm thử dev )</p>

                </div>
                {/* End Single Widget */}
              </div>
            </div>
          </div>
        </div>
       
      </footer>
    </Fragment>
  )
}

export default Footer
