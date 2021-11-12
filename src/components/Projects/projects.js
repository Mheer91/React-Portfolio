import React from "react";
import { Container, Card, Button, Row } from "react-bootstrap";
import fn from '../../Assets/Images/LandingPageFue.jpg';
import locale from '../../Assets/Images/LandingPagejpg.jpg';
import popquiz from '../../Assets/Images/popquiz.jpg';
import teamprofile from '../../Assets/Images/teamProfile.png';
import workplanner from '../../Assets/Images/workPlanner.png';
import weather from '../../Assets/Images/weatherforecast.png';


export default function Projects() {
    return (
        <Container>
            <h1 className="text-white">Portfolio</h1>
            <Row className="justify-content-between pb-5">
                <Card className="col-md-3 col-sm-12 bg-secondary text-white pt-1">
                    <Card.Img variant="top" src={fn} />
                    <Card.Body>
                        <Card.Title>Fue or Nay?</Card.Title>
                        <Card.Text>
                        A website built for gamers, by gamers. Find your favorite games, read reviews, and leave your own reviews!
                        </Card.Text>
                            <Row>
                                <Button variant="dark" className="mb-2" href="https://github.com/Fue-Or-Nay/Fue-Or-Nay" target="_blank">GitHub</Button>
                                <Button variant="dark" href="https://fue-or-nay.herokuapp.com/" target="blank">Deployment</Button>
                            </Row>
                    </Card.Body>
                </Card>
                <div className="col-md-1 col-sm-12 pb-5"></div>
                <Card className="col-md-3 col-sm-12 bg-secondary text-white pt-1">
                    <Card.Img variant="top" src={locale} />
                    <Card.Body>
                        <Card.Title>Loc-Ale</Card.Title>
                        <Card.Text>
                        Local brewery finder. Whether you are traveling or just relaxing in your home town, this tool will help find breweries near you!
                        </Card.Text>
                        <Row>
                                <Button variant="dark" className="mb-2" href="https://github.com/br-through/loc-ale" target="_blank">GitHub</Button>
                                <Button variant="dark" href="https://br-through.github.io/loc-ale/" target="_blank">Deployment</Button>
                            </Row>
                    </Card.Body>
                </Card>
                <div className="col-md-1 col-sm-12 pb-5"></div>
                <Card className="col-md-3 col-sm-12 bg-secondary text-white pt-1">
                    <Card.Img variant="top" src={popquiz} />
                    <Card.Body>
                        <Card.Title>Code Pop Quiz!</Card.Title>
                        <Card.Text>
                        Test your basic web dev skills with this code pop quiz!
                        </Card.Text>
                        <Row>
                                <Button variant="dark" className="mb-2" href="https://github.com/Mheer91/Code-Pop-Quiz" target="_blank">GitHub</Button>
                                <Button variant="dark" href="https://mheer91.github.io/Code-Pop-Quiz/" target="_blank">Deployment</Button>
                            </Row>
                    </Card.Body>
                </Card>
                </Row>
                <Row className="justify-content-between pb-5">
                <Card className="col-md-3 col-sm-12 bg-secondary text-white pt-1">
                    <Card.Img variant="top" src={teamprofile} />
                    <Card.Body>
                        <Card.Title>Team Profile Generator</Card.Title>
                        <Card.Text>
                        Manage your employees/work team with this team profile generator!
                        </Card.Text>
                        <Row>
                                <Button variant="dark" className="mb-2" href="https://github.com/Mheer91/Team-Profile-Generator" target="_blank">GitHub</Button>
                                <Button variant="dark" disabled>Deployment</Button>
                            </Row>
                    </Card.Body>
                </Card>
                <div className="col-md-1 col-sm-12 pb-5"></div>
                <Card className="col-md-3 col-sm-12 bg-secondary text-white pt-1">
                    <Card.Img variant="top" src={weather} />
                    <Card.Body>
                        <Card.Title>Weather Dashboard</Card.Title>
                        <Card.Text>
                        Sleek weather dashboard that displays weather information for any city upon search!
                        </Card.Text>
                        <Row>
                                <Button variant="dark" className="mb-2" href="https://github.com/Mheer91/weather-forecast" target="_blank">GitHub</Button>
                                <Button variant="dark" href="https://mheer91.github.io/weather-forecast/ " target="_blank">Deployment</Button>
                            </Row>
                    </Card.Body>
                </Card>
                <div className="col-md-1 col-sm-12 pb-5"></div>
                <Card className="col-md-3 col-sm-12 bg-secondary text-white pt-1">
                    <Card.Img variant="top" src={workplanner} />
                    <Card.Body>
                        <Card.Title>Work Planner</Card.Title>
                        <Card.Text>
                        Help keep your work day organized with this daily planner!
                        </Card.Text>
                        <Row>
                                <Button variant="dark" className="mb-2" href="https://github.com/Mheer91/Work-Planner-" target="_blank">GitHub</Button>
                                <Button variant="dark" href="https://mheer91.github.io/Work-Planner-/" target="_blank">Deployment</Button>
                            </Row>
                    </Card.Body>
                </Card>
            </Row>

        </Container>
    )
};