import { Link } from "react-router-dom";
import main from "../assets/images/main-alternative.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import { Logo } from "../components";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo/>
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
          Job <span>Tracking</span> App
          </h1>
          <p>
          I'm baby franzen biodiesel ennui XOXO seitan DSA godard asymmetrical keffiyeh tousled knausgaard street art retro. Flexitarian keytar photo booth, fanny pack intelligentsia tofu shoreditch copper mug tote bag woke XOXO vibecession pop-up retro jianbing.
          </p>
          <Link to="/auth" className="btn btn-hero">Login/Register</Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>

    </Wrapper>
  )
}

export default Landing;