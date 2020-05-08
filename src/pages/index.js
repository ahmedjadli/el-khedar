import React, { useEffect, useState } from "react";
import Layout from "../layouts";
import Intro from "../components/mask";
import SEO from "../components/seo";
import Carousel from "../components/carousel";
import AboutSection from "../components/aboutSection";
import CardExample from "../components/card";
import {
  MDBRow,
  MDBModal,
  MDBModalHeader,
  MDBModalBody,
  MDBModalFooter,
  MDBIcon,
  MDBBtn,
} from "mdbreact";
import { StaticQuery, graphql } from "gatsby";

const CartItems = [];

const Home = () => {
  const [isOpen, setIsOpen] = useState(true);
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
        <AboutSection setIsOpen={setIsOpen} />
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

        <MDBModal
          toggle={() => {
            setIsOpen(!isOpen);
          }}
          isOpen={isOpen}
          centered
        >
          <MDBModalHeader
            className="green white-text"
            toggle={() => {
              setIsOpen(!isOpen);
            }}
          >
            <MDBIcon size="1x" fab icon="pagelines" /> Nos Fermes
          </MDBModalHeader>
          <MDBModalBody>
            <h4>Ferme 1:</h4>
            <p>
              <strong>adresse:</strong> Bouskoura, Casablanca <br />
              <strong>contact: +212 5 22 22 33 44</strong>
              <br />
            </p>
            <hr />
            <h4>Ferme 2:</h4>
            <p>
              adresse: Dar Bouazza, Casablanca <br />
              contact: +212 5 22 22 33 44
              <br />
            </p>
            <hr />
            <h4>Ferme 3:</h4>
            <p>
              adresse: Sidi Bennour , EL JADIDA <br />
              contact: +212 5 22 22 33 44
              <br />
            </p>
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn
              color="green"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Fermer
            </MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </main>
    </Layout>
  );
};

export default Home;
