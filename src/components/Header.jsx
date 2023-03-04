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

function Header() {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src={logo} />
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
        </Nav>

        <Cta>
          <h1>
            LET US PLAN <br />
            <span>Your Wedding</span>
          </h1>
          <h4>We'll handle the hard stuff so you can focus on what matters</h4>
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
