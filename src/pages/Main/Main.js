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
        <div className="First_div d-flex justify-content-between ">
          {/* serach button and add emplyee */}
          <div className='search d-flex justify-content-between'>
                    <div className="serach_add ">
                        
                        <Form className='d-flex'>
                            <Form.Control type="text" placeholder='search' className='me-2'/>
                            <Button   variant='primary'>Search</Button>
                        </Form>
                    </div>
            </div>
                    <div className="add_btn">
                        <Button onClick={adduser}  style={{width:"140px"}}   variant='success'><i className='fa-solid fa-User-Plus'></i>ADD Employee</Button>
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