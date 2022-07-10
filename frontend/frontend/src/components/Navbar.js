import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <Nav className="justify-content-center" activeKey="" justify="true">
        <Nav.Item>
          <Link to="">Home</Link>
        </Nav.Item>

        <Nav.Item>
            <Link to="projects">Projects</Link>
        </Nav.Item>

        <Nav.Item>
            <Link to="send-email">Contact</Link>    
        </Nav.Item>
  </Nav>
  
  )
}

export default Navbar