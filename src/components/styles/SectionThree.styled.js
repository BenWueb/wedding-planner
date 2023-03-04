import styled from "styled-components";
import bg from "../../assets/insta2.jpg";

export const SectionThreeContainer = styled.div`
  background: linear-gradient(
      to top,
      rgba(255, 255, 255, 0.6) 0%,

      rgba(255, 255, 255, 0.6) 100%
    ),
    url(${bg}) no-repeat;
  background-attachment: fixed;
  background-size: cover;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 150px;
`;
export const Logo = styled.img`
  height: 200px;
  width: auto;
  margin-bottom: 80px;
`;

export const SectionThreeText = styled.div`
  text-align: center;
  width: 600px;
  p {
    margin-bottom: 40px;
    font-size: 24px;
  }
`;
