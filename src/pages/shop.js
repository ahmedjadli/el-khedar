import React, { useState, useEffect } from "react";
import { StaticQuery, graphql } from "gatsby";
import Layout from "../layouts/index";
import CardExample from "../components/card";
import { MDBRow, MDBContainer, MDBNotification } from "mdbreact";
import SEO from "../components/seo";

export default () => {
  const [isShown, setIsShown] = useState(false);
  const [CartItems, setCartItems] = useState([]);

  useEffect(() => {
    setCartItems(JSON.parse(sessionStorage.getItem("CartItems")));
  }, []);

  return (
    <StaticQuery
      query={graphql`
        query CatalogueQuery {
          products: allDatoCmsProduct {
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
        <Layout site={data.site}>
          <SEO
            title="Shop"
            keywords={[
              `gatsby`,
              `MDBReact`,
              `react`,
              `Material Design For Bootstrap`,
            ]}
          />
          <main
            style={{
              paddingTop: "8rem",
              backgroundColor: "rgba(221, 221, 221, 0.5)",
            }}
            className="Catalogue"
          >
            <MDBContainer size="sm">
              <MDBNotification
                iconClassName="text-primary"
                show={isShown}
                fade
                title="Bootstrap"
                message="Hello, world! This is a toast message."
                text="11 mins ago"
              />

              <MDBRow style={{ padding: "5em 0 8em 0" }} className="m-0" center>
                {data.products.edges.map(({ node: product }) => (
                  <CardExample
                    CartItems={CartItems}
                    setCartItems={setCartItems}
                    infos={product}
                  />
                ))}
              </MDBRow>
            </MDBContainer>
          </main>
        </Layout>
      )}
    />
  );
};
