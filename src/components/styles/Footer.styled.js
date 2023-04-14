import styled from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 40px;
  text-transform: uppercase;
  letter-spacing: 3px;

  @media screen and (max-width: 430px) {
    flex-direction: column;
    gap: 40px;
  }
`;

export const FooterLinksContainer = styled.div`
  text-align: center;
  h5 {
    margin-bottom: 20px;
  }
`;
export const FooterLinks = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 10px 30px;
  text-align: start;
`;
export const FooterLogo = styled.div``;
export const Logo = styled.img`
  height: 200px;
  width: auto;
`;
export const SocialLinksContainer = styled.div`
  text-align: center;
  h5 {
    margin-bottom: 20px;
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;
