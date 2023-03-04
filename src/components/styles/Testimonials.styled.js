import styled from "styled-components";
import bg from "../../assets/insta1.jpg";

export const TestimonialBg = styled.div`
  background: linear-gradient(
      to top,
      rgba(255, 255, 255, 0.6) 0%,

      rgba(255, 255, 255, 0.6) 100%
    ),
    url(${bg}) no-repeat;
  background-attachment: fixed;
  background-size: cover;
  height: 100%;
  width: 100%;
`;

export const TestimonialsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 0;
  width: 1500px;
  margin: 0 auto;
  position: relative;

  h3 {
    text-transform: uppercase;
    background-color: white;
    transform: translateY(20px);
    padding: 0 20px;
    font-size: 16px;
    letter-spacing: 3px;
  }
`;

export const Testimonial = styled.div`
  border: 2px double rgba(75, 75, 75);

  padding: 100px 200px;
  width: 100%;

  h4 {
    margin-bottom: 40px;
    line-height: 45px;
  }

  h5 {
    text-align: center;
    font-family: Great Vibes;
    font-size: 60px;
  }

  p {
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 3px;
  }
`;
