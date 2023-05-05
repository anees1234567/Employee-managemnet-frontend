import React from 'react'
import './Profile.css'
import { Card ,Row} from 'react-bootstrap'

function Profile() {
  return (
    <>
    
      <div className="container">
        <Card className='shadow col-lg-6 mx-auto mt-5'>

        <Card.Body>
            <Row>
                <div className="col">
                    <div className="profile_imsage d-flex justify-content-center">
                    <img className='border p-1 rounded-circle' width={'250px'} height={'250px'} src="https://cdn-icons-png.flaticon.com/512/219/219988.png" alt="proPic" />
                 </div>
                </div>
            </Row>


            <div className="text-center mt-3">
                <h3>Max MIllor</h3>
                <h4><i className='fa solid fa-envelope'></i>:-<span>max@gmail.com</span></h4>
                <h4><i className='fa solid fa-mobile'></i>:-<span>989622441</span></h4>
                <h4><i className='fa solid fa-venus-mars'></i>:-<span>male</span></h4>
                <h4><i className='fa solid fa-location'></i>:-<span>kakkanad</span></h4>

                <h4><i class="fa-solid fa-wave"></i>:-<span>Active</span></h4>



            </div>
        </Card.Body>
        </Card>
      </div>
    
    
    </>
   
  )
}

export default Profile