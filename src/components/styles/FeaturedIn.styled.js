import styled from "styled-components";

export const FeaturedContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  padding: 30px;
  position: relative;

  h3 {
    text-align: center;
    text-transform: uppercase;
    font-size: 24px;
    color: white;
    position: relative;
    margin-bottom: 20px;
  }

  h3:after,
  h3:before {
    content: "";
    height: 2px;
    background-color: white;
    position: absolute;
    top: 20px;
    right: -100px;
    width: 50%;
  }

  h3:before {
    left: -100px;
  }
`;

export const FeaturedImgContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1500px;
  margin: 0 auto;
`;

export const FeaturedImg = styled.img`
  height: 150px;
  width: auto;
  fill: rgba(0, 0, 0, 0.5);
`;
