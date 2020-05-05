import React, { useEffect } from "react";
import Layout from "../layouts";
import Intro from "../components/mask";
import SEO from "../components/seo";
import Carousel from "../components/carousel";
import AboutSection from "../components/aboutSection";
import CardExample from "../components/card";
import { MDBRow } from "mdbreact";
import { StaticQuery, graphql } from "gatsby";

const CartItems = [];

const Home = () => {
  useEffect(() => {
    if (!sessionStorage.getItem("CartItems")) {
      sessionStorage.setItem("CartItems", JSON.stringify(CartItems));
    }
  }, []);

  return (
    <Layout>
      <SEO
        title="Accueil"
        keywords={[
          `gatsby`,
          `MDBReact`,
          `react`,
          `Material Design For Bootstrap`,
        ]}
      />
      <Carousel />
      <Intro />
      <main>
        <AboutSection />
        <section
          id="cardSection"
          style={{ paddingTop: "15vh", paddingBottom: "15vh" }}
        >
          <h2 className="h1-responsive text-center font-weight-bold mb-5">
            Nos Meilleurs offres de la semaine
          </h2>
          <StaticQuery
            query={graphql`
              query CatalogueFirstThreeQuery {
                products: allDatoCmsProduct(limit: 3) {
                  edges {
                    node {
                      id
                      name
                      price
                      image {
                        url
                        sizes(maxWidth: 300, imgixParams: { fm: "jpg" }) {
                          ...GatsbyDatoCmsSizes
                        }
                      }
                    }
                  }
                }
                site {
                  siteMetadata {
                    siteName
                  }
                }
              }
            `}
            render={(data) => (
              <MDBRow className="m-0" center>
                {data.products.edges.map(({ node: product }) => (
                  <CardExample infos={product} />
                ))}
              </MDBRow>
            )}
          />
        </section>
      </main>
    </Layout>
  );
};

export default Home;
