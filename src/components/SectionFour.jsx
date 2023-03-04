import {
  SectionFourContainer,
  SectionFourImg,
  SectionFourText,
  SectionFourImgContainer,
  ButtonContainer,
} from "../components/styles/SectionFour.styled";
import { Button } from "../components/styles/Header.styled";

import insta7 from "../assets/insta7.jpg";

function SectionFour() {
  return (
    <>
      <SectionFourContainer>
        <SectionFourImgContainer>
          <SectionFourImg src={insta7} />
        </SectionFourImgContainer>
        <SectionFourText>
          <h3>What makes our process unique</h3>
          <h4>weddingplanning doesn't need to be stressful</h4>
          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            dignissimos, ea facilis a deleniti natus esse unde alias eligendi
            fuga temporibus, molestiae consequatur quae asperiores rem eum
            dolorem odit blanditiis deserunt possimus. Ab nisi voluptatum
            delectus expedita veniam tempore, consequuntur, porro distinctio
            possimus quis esse nulla minus aut quod illum!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            dignissimos, ea facilis a deleniti natus esse unde alias eligendi
            fuga temporibus, molestiae consequatur quae asperiores rem eum
            dolorem odit blanditiis deserunt possimus. Ab nisi voluptatum
            delectus expedita veniam tempore, consequuntur, porro distinctio
            possimus quis esse nulla minus aut quod illum!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil neque
            ipsum totam. Dolorum molestias veritatis rem alias rerum suscipit
            doloremque?
          </p>
          <ButtonContainer>
            <Button
              bg="transparent"
              border="1px solid"
              fontSize="12px"
              padding="10px 20px"
            >
              Our services
            </Button>
          </ButtonContainer>
        </SectionFourText>
      </SectionFourContainer>
    </>
  );
}
export default SectionFour;
