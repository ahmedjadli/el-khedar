import React, { useState } from "react";
import { StaticQuery, graphql } from "gatsby";
import Layout from "../layouts/index";
import CardExample from "../components/card";
import { MDBRow, MDBContainer, MDBNotification } from "mdbreact";
import SEO from "../components/seo";

export default () => {
  const [isShown, setIsShown] = useState(false);

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
              <MDBRow className="m-0" center>
                {data.products.edges.map(({ node: product }) => (
                  <CardExample setIsShown={setIsShown} infos={product} />
                  // <div className="Catalogue__item" key={product.id}>
                  //   <div
                  //     className="Product snipcart-add-item"
                  //     data-item-id={product.id}
                  //     data-item-price={product.price}
                  //     data-item-image={product.image.url}
                  //     data-item-name={product.name}
                  //     data-item-url={`/`}
                  //   >
                  //     <div className="Product__image">
                  //       <Img sizes={product.image.sizes} />
                  //     </div>{" "}
                  //     <div className="Product__details">
                  //       <div className="Product__name">
                  //         {product.name}
                  //         <div className="Product__price">{product.price} MAD</div>
                  //       </div>
                  //       <span className="Product__buy">Buy now</span>
                  //     </div>
                  //   </div>
                  // </div>
                ))}
              </MDBRow>
            </MDBContainer>
          </main>
        </Layout>
      )}
    />
  );
};
