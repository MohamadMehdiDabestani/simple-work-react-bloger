import { Fragment } from "react";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Container from "@material-ui/core/Container";
import Load from "../../Components/Load/Load";
const Layout: React.FC = (props) => {
  console.log("render layout");
  return (
    <Fragment>
      <Header />
      <Container maxWidth="md">
        <Fragment>{props.children}</Fragment>
      </Container>
      <Load />
      <Footer />
    </Fragment>
  );
};

export default Layout;
