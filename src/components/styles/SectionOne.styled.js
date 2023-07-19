import styled from "styled-components";
import logo from "../../assets/weddinglogo.png";

export const StyledSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 50px;
  justify-content: space-around;
  padding: 80px;
  position: relative;
  background: linear-gradient(
      to top,
      rgba(255, 255, 255, 0.6) 0%,

      rgba(255, 255, 255, 0.6) 100%
    ),
    url(${logo});
  background-attachment: fixed;
  margin: 0 auto;

  @media screen and (max-width: 430px) {
    flex-direction: column;
    gap: 50px;
    align-items: center;
  }
`;

export const Card = styled.div`
  background-image: url(${({ bgimage }) => bgimage});
  height: 400px;
  width: 300px;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  outline: 4px solid white;
  outline-offset: -10px;
  box-shadow: var(--bs);
`;

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.8);
  margin: 0 20px 20px;
  padding: 20px 0;
  text-transform: uppercase;
  height: 175px;
  h4 {
    margin-bottom: 10px;
    font-size: 24px;
    letter-spacing: 3px;
  }
`;

export const Button = styled.button`
  padding: 0.5em 1.5em;

  text-align: center;
  display: flex;
  letter-spacing: 3px;
  justify-content: flex-end;
  align-items: center;

  display: inline-block;
  font-family: inherit;
  cursor: pointer;
  text-decoration: none;
  border: ${({ border }) => border || "1px solid rgba(75, 75, 75)"};
  font-size: ${({ fontSize }) => fontSize || "var(--fs-1000)"};
  background-color: ${({ bg }) => bg || "rgba(75, 75, 75)"};
  color: ${({ color }) => color || "rgba(75, 75, 75)"};
`;
