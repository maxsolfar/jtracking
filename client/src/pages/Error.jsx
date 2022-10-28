import { Container } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import img from "../assets/images/not-found.svg";

const Error = () => {
  return (
    <Container className="full-page">
      <img src={img} alt="error-not-found" className="error-img"/>
      <h3>Ohh! Page not found</h3>
      <p className="error-text">We can't seem to find the page you're looking for</p>
      <Link to="/" className="error-link">Back Home</Link>
    </Container>
  )
}

export default Error;