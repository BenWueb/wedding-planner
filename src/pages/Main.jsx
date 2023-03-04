import { Container } from "../components/styles/Container.styled";
import Header from "../components/Header";
import SectionOne from "../components/SectionOne";
import FeaturedIn from "../components/FeaturedIn";
import Testimonials from "../components/Testimonials";
import SectionTwo from "../components/SectionTwo";
import SectionThree from "../components/SectionThree";
import SectionFour from "../components/SectionFour";
import Instagram from "../components/Instagram";
import Footer from "../components/Footer";

function Main() {
  return (
    <>
      <Header />
      <SectionOne />
      <FeaturedIn />
      <Testimonials />
      <SectionFour />
      <SectionThree />
      <SectionTwo />
      <Instagram />
      <Footer />
    </>
  );
}
export default Main;
