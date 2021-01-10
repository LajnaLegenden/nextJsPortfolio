import { useRouter } from "next/dist/client/router";
import React from "react";
import {
  Button,
  Form,
  FormControl,
  Nav,
  NavDropdown,
  Navbar,
} from "react-bootstrap";
import styles from "./../../styles/Navbar.module.css";

const paths = [
  { url: "/", name: "Home" },
  { url: "/projects", name: "My Work" },
  { url: "/about", name: "About Me" },
  { url: "/contact", name: "Contact Me" },
];

const MainNavbar = ({}) => {
  const router = useRouter();
  return (
    <Navbar bg="dark" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {paths.map((path, index) => {
            return (
              <Nav.Link
                key={"navLink" + index}
                active={path.url == router.route}
                href={path.url}
              >
                {path.name}
              </Nav.Link>
            );
          })}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default MainNavbar;
