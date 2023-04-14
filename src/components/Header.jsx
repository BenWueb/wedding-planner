import {
  StyledHeader,
  Menu,
  Logo,
  Nav,
  Button,
  Cta,
} from "../components/styles/Header.styled";
import { Container } from "./styles/Container.styled";
import logo from "../assets/weddinglogo.png";
import { useEffect, useState } from "react";

function Header() {
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => {
        setWindowSize(window.innerWidth);
      },
      []
    );
  });

  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src={logo} />
          {windowSize > "430" && (
            <Menu>
              <h5>Weddings</h5>
              <h5>Events</h5>
              <h5>Services</h5>
              <h5>Gallery</h5>
              <h5>Press</h5>
              <h5>About</h5>
              <Button bg="transparent" fontSize="16px">
                Contact Us
              </Button>
            </Menu>
          )}
        </Nav>

        <Cta>
          <h1>
            LET US PLAN <br />
            <span>Your Wedding</span>
          </h1>
          <Button
            bg="transparent"
            fontSize="36px"
            border="4px solid rgba(75, 75, 75)"
          >
            start planning
          </Button>
        </Cta>
      </Container>
    </StyledHeader>
  );
}
export default Header;
