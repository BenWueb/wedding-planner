import styled from "styled-components";

export const SectionFourContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 80px;
  width: 1500px;
  margin: 0 auto;
  gap: 40px;

  @media screen and (max-width: 430px) {
    flex-direction: column;
    width: 80%;
    padding: 40px 0;
  }
`;
export const SectionFourImgContainer = styled.div`
  height: 600px;
  width: 500px;

  @media screen and (max-width: 430px) {
    width: 100%;
  }
`;
export const SectionFourImg = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
export const SectionFourText = styled.div`
  width: 600px;

  @media screen and (max-width: 430px) {
    width: 100%;
  }
  h3,
  h4 {
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 3px;
  }

  h3 {
    line-height: 60px;
    color: #f3977d;

    @media screen and (max-width: 430px) {
      margin-bottom: 20px;
    }
  }

  h4 {
    font-size: 12px;
    margin-bottom: 20px;
    font-weight: 500;
  }

  hr {
    width: 80px;
    margin: auto;
    margin-bottom: 20px;
  }

  p {
    font-size: 16px;
    margin-bottom: 20px;
  }

  button {
    margin: 0 auto;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;
