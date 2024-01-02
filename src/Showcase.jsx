import Accordion from 'react-bootstrap/Accordion';
import Carousel from 'react-bootstrap/Carousel';
import k1 from './assets/kitchen1.jpeg'
import k2 from './assets/kitchen2.jpeg'
import 'bootstrap/dist/css/bootstrap.min.css';

import bath1 from './assets/hotel-bathroom-interior-villa-preview.jpg'
import bath2 from './assets/interior-deisgn-bathroom-modern-style-with-vanity_31965-122908.jpg.avif'
import deck1 from './assets/Curved-deck-accent.1).jpg'
import deck2 from './assets/panoramic-lounge-deck-over-lake-templene-pristine-decks-and-design-img~3381306609207502_4-2114-1-308794b.jpg'



function Showcase() {



    return(
        <div className="accord">
        <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0" flush >
                <Accordion.Header>kitchens</Accordion.Header>
                    <Accordion.Body>
                        <Carousel>
                            <Carousel.Item>
                                <img className="Kitchen-img" src={k1} alt="" style={{ width:'100%', height: '300px',marginRight:'400px' }}/>
                                    <Carousel.Caption  className="custom-carousel-caption">
                                        <h6>Modern</h6>
                                        <p>Explore our gallery showcasing meticulous remodeling efforts. Expert craftsmanship, innovative design, and a commitment to perfection reflect the beauty of our kitchens, creating spaces that resonate with enduring charm.</p>
                                    </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item >
                                <img className="Kitchen-img Kitchen-img-2" src={k2} alt="" style={{ width:'100%', height: '300px', marginRight:'400px'}}/>
                                    <Carousel.Caption  className="custom-carousel-caption">
                                        <h6>Modern Design 2</h6>
                                        <p>Explore our gallery showcasing meticulous remodeling efforts. Expert craftsmanship, innovative design, and a commitment to perfection reflect the beauty of our kitchens, creating spaces that resonate with enduring charm.</p>
                                    </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
    
                    </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1" flush>
                <Accordion.Header>Bathrooms</Accordion.Header>
                    <Accordion.Body>
                        <Carousel>
                            <Carousel.Item>
                                <img className="Kitchen-img" src={bath1} alt="" style={{ width:'100%', height: '300px',marginRight:'400px' }}/>
                                    <Carousel.Caption  className="custom-carousel-caption">
                                        <h6>minimalistic </h6>
                                        <p>Explore our gallery showcasing meticulous remodeling efforts. Expert craftsmanship, innovative design, and a commitment to perfection reflect the beauty of our kitchens, creating spaces that resonate with enduring charm.</p>
                                    </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item >
                                <img className="Kitchen-img Kitchen-img-2" src={bath2} alt="" style={{ width:'100%', height: '300px', marginRight:'400px'}}/>
                                    <Carousel.Caption  className="custom-carousel-caption">
                                        <h6>minimalistic 2</h6>
                                        <p>Explore our gallery showcasing meticulous remodeling efforts. Expert craftsmanship, innovative design, and a commitment to perfection reflect the beauty of our kitchens, creating spaces that resonate with enduring charm.</p>
                                    </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
    
                    </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2" flush>
                <Accordion.Header>Decks</Accordion.Header>
                    <Accordion.Body>
                        <Carousel>
                            <Carousel.Item>
                                <img className="Kitchen-img" src={deck1} alt="" style={{ width:'100%', height: '300px',marginRight:'400px' }}/>
                                    <Carousel.Caption  className="custom-carousel-caption">
                                        <h3>WildCard</h3>
                                        <p>Explore our gallery showcasing meticulous remodeling efforts. Expert craftsmanship, innovative design, and a commitment to perfection reflect the beauty of our kitchens, creating spaces that resonate with enduring charm.</p>
                                    </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item >
                                <img className="Kitchen-img Kitchen-img-2" src={deck2} alt="" style={{ width:'100%', height: '300px', marginRight:'400px'}}/>
                                    <Carousel.Caption  className="custom-carousel-caption">
                                        <h3>WildCard 2</h3>
                                        <p>Explore our gallery showcasing meticulous remodeling efforts. Expert craftsmanship, innovative design, and a commitment to perfection reflect the beauty of our kitchens, creating spaces that resonate with enduring charm.</p>
                                    </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
    
                    </Accordion.Body>
            </Accordion.Item>
        </Accordion>
        </div>
    )
}

export default Showcase