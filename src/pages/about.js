import * as React from "react";
import Layout from "../components/Layout";
import About from "../components/about";
import Seo from "../components/Seo";
import ShapedCard from "../components/shapedCard";

const Apropos = () => {
  return (
    <Layout>
      <About />
      
    </Layout>
  );
};

export default Apropos;

export const Head = () => <Seo title={"A Propos"} />;
