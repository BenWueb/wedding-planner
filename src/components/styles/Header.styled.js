import styled from "styled-components";
import header from "../../assets/header.jpg";

export const StyledHeader = styled.header`
  background: linear-gradient(
      to top,
      rgba(255, 255, 255, 0.6) 0%,

      rgba(255, 255, 255, 0.6) 100%
    ),
    url(${header}) no-repeat;

  margin: 0 auto;
  background-attachment: fixed;
  background-size: cover;
  color: rgba(75, 75, 75);
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 20px;
  width: 100%;
`;

export const Logo = styled.img`
  height: 75px;
  width: 75px;
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;

  h5 {
    margin-left: 20px;
    text-transform: uppercase;
    font-size: 12px;
    position: relative;
    letter-spacing: 3px;
  }

  h5:hover {
    cursor: pointer;
  }

  h5::after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: -2px;
    left: 0;
    background-color: rgba(75, 75, 75);
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }

  h5:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
  button {
    margin-left: 20px;
  }
`;

export const Cta = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 80%;
  margin: auto;
  padding: 150px 0;
  h1 {
    line-height: 150px;
    margin-bottom: 80px;
    font-size: 80px;
    letter-spacing: 10px;
  }

  span {
    font-family: "Great Vibes", cursive;
    font-size: 150px;
    letter-spacing: 0px;
  }

  h4 {
    margin-bottom: 40px;
    font-weight: 500;
  }
`;

export const Button = styled.button`
  font-weight: 600;
  text-align: center;
  display: flex;
  letter-spacing: 3px;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  display: inline-block;
  font-family: inherit;
  cursor: pointer;
  text-decoration: none;
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding || "0.5em 1.5em"};
  border: ${({ border }) => border || "2px solid rgba(75, 75, 75)"};
  font-size: ${({ fontSize }) => fontSize || "var(--fs-1000)"};
  background-color: ${({ bg }) => bg || "rgba(75, 75, 75)"};
  color: ${({ color }) => color || "rgba(75, 75, 75)"};
`;
