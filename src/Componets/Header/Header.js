import React from 'react'
import { Navbar,Container} from 'react-bootstrap'

function Header() {
  return (
    <>
       <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/">EMS application</Navbar.Brand>
         
        </Container>
      </Navbar>
    </>
  )
}

export default Header