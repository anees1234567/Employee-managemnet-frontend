import React from 'react'
import './Main.css'
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import HomeTable from '../../Componets/HomeTable/HomeTable';



function Main() {
            
    
    const navigate=useNavigate()
      const adduser=()=>{
        navigate('/register')              
            }            
    return(
    <>
    

    <div className='container mt-5 '>
        <div className="First_div">
          {/* serach button and add emplyee */}
          <div className='search col-md-4'>
                    <div className="serach_add d-flex justify-content-between">
                        
                        <Form>
                            <Form.Control type="text" placeholder='search' className='me-2'/>
                            <Button variant='primary'>Search</Button>
                        </Form>
                    </div>
            </div>
                    <div className="add_btn">
                        <Button onClick={adduser} variant='success'><i className='fa-solid fa-User-Plus'></i>ADD</Button>
                    </div>
         

        </div>



            <div className="second_div">
                {/* table */}

                <HomeTable/>
            </div>


    </div>
    
    
    
    
    </>
    )
  }

export default Main