import {
  TestimonialsContainer,
  Testimonial,
  TestimonialBg,
} from "./styles/Testimonials.styled";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

function Testimonials() {
  return (
    <>
      <TestimonialBg>
        <TestimonialsContainer>
          <h3>What Our Clients Have to Say</h3>
          <Testimonial>
            <RiDoubleQuotesL
              style={{
                height: "80px",
                width: "80px",
                position: "absolute",
                top: "130px",
                left: -20,
              }}
            />
            <h4>
              When it came tot he execution of all the details of my wedding she
              did it flawlessly and far exceeded my expectations! The night
              flowed effortlessly without any hiccups
            </h4>
            <h5>- Melissa</h5>
            <p>bride</p>
            <RiDoubleQuotesR
              style={{
                height: "80px",
                width: "80px",
                position: "absolute",
                bottom: "0px",
                right: -20,
              }}
            />
          </Testimonial>
        </TestimonialsContainer>
      </TestimonialBg>
    </>
  );
}
export default Testimonials;
