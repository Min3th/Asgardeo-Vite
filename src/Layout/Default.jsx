import { Header } from "../Components/Header";
import { Footer } from "/src/Components/Footer.jsx";

import PropTypes from "prop-types";
export const DefaultLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
