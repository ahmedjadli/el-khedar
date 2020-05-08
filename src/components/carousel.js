import React from "react";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBMask,
} from "mdbreact";
import Img from "gatsby-image";
import image4 from "../images/bg_1.jpg";
import image2 from "../images/bg_2.jpg";
import image3 from "../images/bg_3.jpg";

const CarouselPage = () => {
  return (
    <MDBCarousel activeItem={1} length={3} className="z-depth-1 w-100">
      <MDBCarouselInner>
        <MDBCarouselItem itemId="1">
          <MDBView>
            <img
              className="d-block w-100"
              loading="lazy"
              src={image4}
              alt="First slide"
            />
            <MDBMask overlay="black-strong" />
          </MDBView>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="2">
          <MDBView>
            <img
              className="d-block w-100"
              loading="lazy"
              src={image2}
              alt="Second slide"
            />
            <MDBMask overlay="black-strong" />
          </MDBView>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="3">
          <MDBView>
            <img
              className="d-block w-100"
              loading="lazy"
              src={image3}
              alt="Mattonit's item"
            />
            <MDBMask overlay="black-strong" />
          </MDBView>
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
  );
};

export default CarouselPage;
