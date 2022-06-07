import React from 'react';
import { Button, Carousel } from 'react-bootstrap';


const Home = () => {
    return (
        <div>
            
            <Carousel fade>
            <Carousel.Item>
                <img
                    className="d-block w-100 h-100"
                    src="https://media.contentapi.ea.com/content/dam/gin/images/2017/01/harry-potter-deathly-hallows-part-2-key-art.jpg.adapt.crop16x9.575p.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 h-100"
                    src="http://scriptshadow.net/wp-content/uploads/2021/06/y20utinjnzgsdqtzabj0.jpg"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 h-100"
                    src="https://cdn.onebauer.media/one/empire-tmdb/films/12445/images/oPmZDHPkdmhuvxYGmwtKcQefeNr.jpg?format=jpg&quality=80&width=960&height=540&ratio=16-9&resize=aspectfill"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </div>
    );
};

export default Home;


<Button variant="primary" size="lg">
                Start
            </Button>


