import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import InputGroup from 'react-bootstrap/InputGroup';
import { FaSearch } from 'react-icons/fa';
import NavbarCollapse from 'react-bootstrap/NavbarCollapse';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function TopNav() {
  const expand = 'lg';
  const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate('/user-profile');
  };
  return (
    <Navbar expand={expand} className="bg-body-white mb-3 pt-3 shadow-sm w-100">
      <Container fluid>
      <Navbar.Brand as={Link} to="/" className='px-3'>
      <img
            src="Myntra_Logo.png"
            alt="Logo"
            width="50"
            height="35"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls={`myntraNavbar-expand-${expand}`} />
        <NavbarCollapse id={`myntraNavbar-expand-${expand}`}>
          <Nav className="me-auto ms-3 bold">
            <Nav.Link href="#men">MEN</Nav.Link>
            <Nav.Link href="#women">WOMEN</Nav.Link>
            <Nav.Link href="#kids">KIDS</Nav.Link>
            <Nav.Link href="#home&living">HOME & LIVING</Nav.Link>
            <Nav.Link href="#beauty">BEAUTY</Nav.Link>
            <Nav.Link href="#media">MEDIA</Nav.Link>
            <Nav.Link as={Link} to="/style-buddies">STYLE BUDDIES</Nav.Link>
          </Nav>
          <Form className="d-flex ms-auto">
            <InputGroup>
              <InputGroup.Text style={{ height: '100%', display: 'flex', alignItems: 'center' }}>
                <FaSearch />
              </InputGroup.Text>
              <Form.Control
                type="search"
                placeholder="Search"
                aria-label="Search"
                style={{ width: '500px', height: '35px' }} // Adjust the width and height as needed
              />
            </InputGroup>
          </Form>
          <Nav className="ms-auto me-3 d-flex align-items-center">
          <Nav.Link onClick={handleProfileClick}>
              <img src="/profile.png" alt="Profile" style={{ width: '35px', height: '35px' }} />
            </Nav.Link>
            <Nav.Link href="#"><img src="/wish.png" alt="Wishlist" style={{ width: '30px', height: '25px' }} /></Nav.Link>
            <Nav.Link href="#"><img src="/bag1.png" alt="Bag" style={{ width: '30px', height: '30px' }} /></Nav.Link>
          </Nav>
        </NavbarCollapse>
      </Container>
    </Navbar>
  );
}

export default TopNav;
