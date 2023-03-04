import {
  StyledSection,
  Card,
  CardInfo,
  Button,
} from "../components/styles/SectionOne.styled";

import weddingone from "../assets/weddingone.jpg";
import weddingtwo from "../assets/weddingtwo.jpg";
import wedding from "../assets/wedding.jpg";
import weddingthree from "../assets/insta5.jpg";
import weddingfour from "../assets/insta2.jpg";

function SectionOne() {
  return (
    <>
      <StyledSection>
        <Card bgimage={wedding}>
          <CardInfo>
            <h4>Venue Dressing</h4>
            <Button fontSize="12px" bg="transparent">
              Learn more
            </Button>
          </CardInfo>
        </Card>
        <Card bgimage={weddingone}>
          <CardInfo>
            <h4>Wedding Management</h4>
            <Button fontSize="12px" bg="transparent">
              Learn more
            </Button>
          </CardInfo>
        </Card>
        <Card bgimage={weddingtwo}>
          <CardInfo>
            <h4>Full Service Planning</h4>
            <Button fontSize="12px" bg="transparent">
              Learn more
            </Button>
          </CardInfo>
        </Card>
        <Card bgimage={weddingthree}>
          <CardInfo>
            <h4>Award winning service</h4>
            <Button fontSize="12px" bg="transparent">
              Learn more
            </Button>
          </CardInfo>
        </Card>
        <Card bgimage={weddingfour}>
          <CardInfo>
            <h4>Professional Experience</h4>
            <Button fontSize="12px" bg="transparent">
              Learn more
            </Button>
          </CardInfo>
        </Card>
      </StyledSection>
    </>
  );
}
export default SectionOne;
