import React from 'react'
import { Carousel } from 'react-bootstrap';

export default function SingleProduct() {
    return (
        <React.Fragment>
            <Carousel id="carousel">
                {/* ----Carousel item 1---- */}
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src='../assets/Banner1.png'
                        alt="Banner1"
                    />
                </Carousel.Item>
                {/* ----Carousel item 2---- */}
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src='../assets/Banner2.png'
                        alt="Banner1"
                    />
                </Carousel.Item>
                {/* ----Carousel item 3---- */}
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src='../assets/Banner1.png'
                        alt="Banner1"
                    />
                </Carousel.Item>
                {/* ----Carousel item 4---- */}
                            <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src='../assets/Banner2.png'
                        alt="Banner1"
                    />
                </Carousel.Item>
        </Carousel>{/* ----Carousel end---- */}
        </React.Fragment> 
    );
};
