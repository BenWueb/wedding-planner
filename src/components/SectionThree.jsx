import {
  SectionThreeContainer,
  SectionThreeText,
  Logo,
} from "../components/styles/SectionThree.styled";
import { Button } from "../components/styles/Header.styled";
import logo from "../assets/weddinglogo.png";

function SectionThree() {
  return (
    <>
      <SectionThreeContainer>
        <Logo src={logo} />

        <SectionThreeText>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Perferendis tempore sed quo inventore sapiente officia qui cumque
            pariatur beatae, ex, eaque voluptas et molestias dolore quod cum
            nihil consequuntur, error eum facilis suscipit modi repudiandae
            rerum! Cumque blanditiis labore nobis.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic,
            quisquam quam! Quasi, architecto laborum placeat sit iusto fuga
            asperiores ut in nobis earum incidunt rem maxime sapiente neque
            beatae eius!
          </p>
          <Button bg="transparent" fontSize="16px">
            Inquire
          </Button>
        </SectionThreeText>
      </SectionThreeContainer>
    </>
  );
}
export default SectionThree;
