import styled from "styled-components";
import celebrate from "../../assets/celebrate.svg";

export const InstaSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 0;
  text-align: center;
  h2 {
    margin-bottom: 40px;
    text-transform: uppercase;
    font-size: 24px;
    letter-spacing: 3px;
    position: relative;
    width: 100%;
  }

  h2:after,
  h2:before {
    content: "";
    height: 2px;
    background-color: rgba(75, 75, 75);
    position: absolute;
    top: 30px;
    right: -350px;
    width: 50%;
  }

  h2:before {
    left: -350px;
  }
`;
export const InstaPhotos = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto auto auto auto auto auto auto auto;
  gap: 10px;

  justify-content: space-around;
`;
export const Insta = styled.img`
  height: 250px;
  width: 250px;
  object-fit: cover;
`;
