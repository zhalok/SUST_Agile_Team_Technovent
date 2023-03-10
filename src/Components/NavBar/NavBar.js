import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import SearchIcon from "@mui/icons-material/Search";
import "../../Style/CustomStyle.css";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

export default function NavBar(props) {
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const jwt = Cookies.get("jwt");
    if (!jwt) setLoggedIn(false);
    else setLoggedIn(true);
  }, []);

  const loggedOutNavbar = (
    <>
      <Nav.Link href="/login">
        <button type="" className="btn  px-4 py-2 btn-light ">
          Log In
        </button>
      </Nav.Link>
      <Nav.Link href="/signup">
        <button type="" className="btn px-4 py-2 text-light btn-outline-light ">
          Sign Up
        </button>
      </Nav.Link>
    </>
  );

  const loggedInNavbar = (
    <>
      <Nav.Link href="/profile">
        <button type="" className="btn  px-4 py-2 btn-light ">
          Profile
        </button>
      </Nav.Link>
      <Nav.Link>
        <button
          type=""
          className="btn px-4 py-2 text-light btn-outline-light "
          onClick={() => {
            Cookies.remove("jwt");
            navigate("/");
          }}
        >
          Logout
        </button>
      </Nav.Link>
    </>
  );

  return (
    <div>
      <Navbar expand="lg" className="navbg px-4">
        <Container fluid>
          <Navbar.Brand href="/" className="text-light fw-bold fs-4">
            {" "}
            Lab Buddy
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="my-2 my-lg-0 text-light"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/" className="text-light">
                {" "}
                Home
              </Nav.Link>
              <Nav.Link href="/dashboard" className="text-light">
                {" "}
                Class
              </Nav.Link>
              <Nav.Link href="/dashboard" className="text-light">
                {" "}
                Lab
              </Nav.Link>
              <Nav.Link href="/dashboard" className="text-light">
                {" "}
                Exam
              </Nav.Link>
            </Nav>
            <Form className="d-flex mx-auto rounded-pill bg-light rounded-pill">
              <Form.Control
                type="search"
                placeholder="Search"
                className="border-0 rounded-pill"
                aria-label="Search"
              />
              <SearchIcon className="my-auto p-1 mx-2" />
            </Form>

            {/* <Nav.Link href="/login">
              <button type="" className="btn  px-4 py-2 btn-light ">
                Log In
              </button>
            </Nav.Link>
            <Nav.Link href="/signup">
              <button
                type=""
                className="btn px-4 py-2 text-light btn-outline-light "
              >
                Sign Up
              </button>
            </Nav.Link> */}
            {loggedIn ? loggedInNavbar : loggedOutNavbar}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
