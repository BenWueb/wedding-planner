import cosmo from "../assets/logos/cosmo.svg";
import nytimes from "../assets/logos/nytimes.svg";
import people from "../assets/logos/people.svg";
import realsimple from "../assets/logos/realsimple.svg";
import southernliving from "../assets/logos/southernliving.svg";
import {
  FeaturedContainer,
  FeaturedImg,
  FeaturedImgContainer,
} from "./styles/FeaturedIn.styled";

function FeaturedIn() {
  const logos = [cosmo, nytimes, people, realsimple, southernliving];

  return (
    <>
      <FeaturedContainer>
        <h3>Featured In</h3>

        <FeaturedImgContainer>
          {logos.map((logo) => (
            <FeaturedImg src={logo} />
          ))}
        </FeaturedImgContainer>
      </FeaturedContainer>
    </>
  );
}
export default FeaturedIn;
