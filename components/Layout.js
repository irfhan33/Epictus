import Container from "./Container";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ children, categories }) {
  return (
    <Container>
      <Navbar categories={categories} />
      {children}
      <Footer />
    </Container>
  );
}
