import React from 'react'
import { Card, Dropdown, Row, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
function HomeTable() {
  return (
    <>
        <div className="container mt-5" >

                <Row>
                   <div className='col'>
                        <Card className="shadow">
                            <Table className='align-items-center' responsive='sm'>
                                    <thead className='thead-dark'>
                                        <tr className='table-dark'>
                                        <th>Id</th>
                                        <th>Full Name</th>
                                        <th>Email</th>
                                        <th>Gender</th>
                                        <th>status</th>
                                        <th>profile</th>
                                        <th>action</th>

                                        </tr>
                                    </thead>

                            <tbody>
                                <tr>
                                    <td>12</td>
                                    <td>PAVAN</td>
                                    <td>pavan123@gmail</td>
                                    <td>M</td>
                                    <td>
                                    <Dropdown>
                                            <Dropdown.Toggle  id="dropdown-basic">
                                                Active
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item >Active</Dropdown.Item>
                                                <Dropdown.Item>INactive</Dropdown.Item>
                                            </Dropdown.Menu>
                                 </Dropdown>
                                    </td>
                                    <td><img className='rounded' width={'50px'} height={'50px'} src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png'></img></td>
                                    <td>
                                    <Dropdown>
                                      <Dropdown.Toggle variant='white' id="dropdown-basic1">
                                        <i className='fa-solid fa-ellipsis-vertical fs-4'></i>
                                      </Dropdown.Toggle>
                                
                                      <Dropdown.Menu>
                                      <Dropdown.Item >
                                      <Link to={'/profile/1'} className='text-decoration-none'>
                                        <i className='fa-solid fa-eye text-success me-2 fs-5'></i>
                                        <span className='fs-5 text-dark'>View</span>
                                        </Link>
                                        </Dropdown.Item>


                                        <Dropdown.Item >
                                        <Link to={'/edit/1'} className='text-decoration-none'>
                                        <i className='fa-solid fa-pen text-primary me-2 fs-5'></i>
                                        <span className='fs-5 text-dark'>Edit</span>
                                        </Link>
                                        </Dropdown.Item>

                                        <Dropdown.Item >                                       
                                        <i className='fa-solid fa-trash text-danger me-2 fs-5'></i>
                                        <span className='fs-5 text-dark'>Delete</span>                                      
                                        </Dropdown.Item>
                                
                                      </Dropdown.Menu>
                                    </Dropdown>
                            </td>
                               
                                </tr>
                            </tbody>
                            </Table>
                            
                        </Card>
    
                   </div>
                </Row>


        </div>
    
    </>
  )
}

export default HomeTable