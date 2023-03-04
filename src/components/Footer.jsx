import {
  FooterContainer,
  FooterLinksContainer,
  FooterLogo,
  Logo,
  SocialLinksContainer,
  FooterLinks,
  SocialLinks,
} from "../components/styles/Footer.styled";

import {
  FaInstagram,
  FaPinterestSquare,
  FaFacebookSquare,
  FaTwitterSquare,
} from "react-icons/fa";

import logo from "../assets/weddinglogo.png";

function Footer() {
  return (
    <>
      <hr />
      <FooterContainer>
        <FooterLinksContainer>
          <h5>Sitemap</h5>
          <FooterLinks>
            <p>Home</p>
            <p>About</p>
            <p>Contact</p>
            <p>Socials</p>
            <p>Gallery</p>
            <p>Press</p>
            <p>services</p>
            <p>weddings</p>
            <p>events</p>
          </FooterLinks>
        </FooterLinksContainer>
        <FooterLogo>
          <Logo src={logo} />
        </FooterLogo>
        <SocialLinksContainer>
          <h5>Find us on</h5>
          <SocialLinks>
            <FaInstagram style={{ height: "40px", width: "40px" }} />
            <FaPinterestSquare style={{ height: "40px", width: "40px" }} />
            <FaFacebookSquare style={{ height: "40px", width: "40px" }} />
            <FaTwitterSquare style={{ height: "40px", width: "40px" }} />
          </SocialLinks>
        </SocialLinksContainer>
      </FooterContainer>
      <hr />
    </>
  );
}
export default Footer;
