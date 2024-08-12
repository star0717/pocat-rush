import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { Image, Wrapper } from "../Style/StyledComponents";

function GameIntro() {
  return (
    <>
      <Header />
      <Wrapper padding={`120px 0`}>
        <Image src="/images/GameIntro.png" maxWidth={`800px`} />
      </Wrapper>
      <Footer />
    </>
  );
}

export default GameIntro;
