import React from "react";
import { Container, Stack, Row, Col, Image, Card } from "react-bootstrap";
import Mike from '../../Assets/Images/me1.jpg';

export default function Aboutme() {
    return (
        <Container>
            <h1 className="text-white">About Me</h1>
            <Stack gap={4}>
                <Row>
                    <Col>
                        <Image src={Mike} rounded />
                    </Col>
                </Row>
                <Row>
                    <Card className="bg-secondary text-white">
                        <Card.Body>
                            <Card.Text>
                            Hello! My name is Michael Heer and I am a Deli Manager turned Programmer! For the past decade
                                I have spent my time mastering deli business management, food merchandising, menu
                                development, and other standard business practices such as inventory management, P&L
                                management, etc. While I loved the industry, it was time for me to make a change into
                                something I was more passionate about. After establishing a family, I decided it was time to
                                pursue my dream as a programmer and take steps towards a new tomorrow. Now I am working
                                towards mastering my new skillset: full stack web devlopment. With that, I am here to help
                                you and your business provide your customers with a seamless and enjoyable web experience.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Row>
            </Stack>
        </Container>
    )
}