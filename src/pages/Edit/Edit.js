import React from 'react'
import './Edit.css'
import { Card ,Form,Row,Button} from 'react-bootstrap'
import Select from 'react-select'


function Edit() {
    const option=[
        {value:'Active',label:'Active'},
        {value:'inActive',label:'inActive'}
    
      ]
    return (
    
    <>
            <div className="container mt-5">
        <h2 className='text-center mt-3'>Register Employee Deatails</h2>
        <Card className='shadow mt-3 p-3'>
            <div className="text-center">
            <img className='border p-1 rounded-circle' width={'50px'} height={'50px'} src="https://cdn-icons-png.flaticon.com/512/219/219988.png" alt="proPic" />
            </div>

          <Form>
            <Row>
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicfname">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="type" name='fname' placeholder="First name" />
              </Form.Group>

              <Form.Group className="mb-3 col-lg-6" controlId="formBasiclname">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="type" name='lname' placeholder="Last name" />
              </Form.Group>

              <Form.Group className="mb-3 col-lg-6" controlId="formBasicmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="type" name='email' placeholder="Email Address" />
              </Form.Group>

              <Form.Group className="mb-3 col-lg-6" controlId="formBasicmobile">
                <Form.Label>Mobile</Form.Label>
                <Form.Control type="type" name='mobile' placeholder="Mobile" />
              </Form.Group>

              <Form.Group className="mb-3 col-lg-6" controlId="formBasicmobile">
                <Form.Label>Select gender</Form.Label>
                 <Form.Check // prettier-ignore
                        type={'radio'}
                        label={`gender`}
                        name='gender'
                        value={'male'}
                    />

<Form.Check // prettier-ignore
                        type={'radio'}
                        label={`Female`}
                        name='gender'
                        value={'female'}
                    />
              </Form.Group>

              <Form.Group className="mb-3 col-lg-6" controlId="formBasicstatus">
                <Form.Label>Select Employee Status</Form.Label>
                <Select options={option}></Select>
              </Form.Group>

              <Form.Group className="mb-3 col-lg-6" controlId="formBasicstatus">
                <Form.Label>choose profile profile</Form.Label>
                <Form.Control type="file" name='iserprofile'/>

              </Form.Group>


              <Form.Group className="mb-3 col-lg-6" controlId="formBasicmobile">
                <Form.Label>Employee location</Form.Label>
                <Form.Control type="text" name='location ' placeholder="enter location" />
              </Form.Group>
            <Button className='mt-3'varinant='primary' type='submit'>Submit</Button>
            </Row>
          </Form>

        </Card>
    </div>
    
    
    
    </>
  )
}

export default Edit