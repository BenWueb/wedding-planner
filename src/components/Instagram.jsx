import {
  InstaSection,
  InstaPhotos,
  Insta,
} from "../components/styles/Instagram.styled";
import insta from "../assets/insta.jpg";
import insta1 from "../assets/insta1.jpg";
import insta2 from "../assets/insta2.jpg";
import insta3 from "../assets/insta3.jpg";
import insta4 from "../assets/insta4.jpg";
import insta5 from "../assets/insta5.jpg";
import insta6 from "../assets/insta6.jpg";

import insta8 from "../assets/insta8.jpg";

function Instagram() {
  const images = [insta, insta1, insta2, insta3, insta4, insta5, insta6];

  return (
    <>
      <InstaSection>
        <h2>Experience our events on Instagram</h2>
        <InstaPhotos>
          {images.map((image) => (
            <Insta src={image} />
          ))}
        </InstaPhotos>
      </InstaSection>
    </>
  );
}
export default Instagram;
