import styled from "styled-components";

export const SectionTwoStyled = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
  color: white;

  @media screen and (max-width: 430px) {
    flex-direction: column;
  }
`;

export const CtaTwo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h2,
  p {
    margin-bottom: 20px;

    @media screen and (max-width: 430px) {
      text-align: center;
    }
  }
`;
