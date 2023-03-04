import {
  SectionTwoStyled,
  CtaTwo,
} from "../components/styles/SectionTwo.styled";
import { Button } from "../components/styles/Header.styled";

function SectionTwo() {
  return (
    <>
      <SectionTwoStyled>
        <CtaTwo>
          <h2>Are you ready to start planning?</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, fugit?
            Temporibus ullam tempore qui similique laudantium officiis quos
            incidunt ut.
          </p>
          <Button color="white" bg="#f3977d" border="2px solid white">
            Let's talk
          </Button>
        </CtaTwo>
      </SectionTwoStyled>
    </>
  );
}
export default SectionTwo;
