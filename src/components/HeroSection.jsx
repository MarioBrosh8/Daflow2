import { Container, Row, Col, Button } from 'react-bootstrap';

export const HeroSection = () => {
    return (
        <Container className='hero-section-container'>
            <Row className='h-100'>
                <Col xs md="8" className='d-flex flex-column justify-content-center text-start px-4'>
                    <div className="mx-4">
                        <h1>UNLABELED</h1>
                        <p>lorem ipsum</p>
                    </div>
                    <div className="btns-wrapper">
                        <a href="/">Who are we?</a>
                        <button variant="secondary">Learn More</button>
                    </div>
                </Col>
                <Col xs md="4">
                    <div className="img-wrapper"></div>
                </Col>
            </Row>
        </Container>
    )
}
