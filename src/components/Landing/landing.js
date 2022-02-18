import React from "react";
import { Container } from "react-bootstrap";
import { TextLoop } from "react-text-loop-next";


export default function Landing() {
    return (
        <Container style={{display: "flex", height: "100vh", justifyContent: "center", alignItems: "center", flexWrap: "wrap"}}>
            <h1 className="text-white myName">Hi, I'm <span className="myName2">Michael Heer</span></h1>

                        <h1 className="text-white">
                            I'm your next:{' '}
                            <TextLoop>
                                <span className="textLoop">React Developer</span>
                                <span className="textLoop">JavaScript Engineer</span>
                                <span className="textLoop">Database Builder</span>
                                <span className="textLoop">Node Programmer</span>
                                <span className="textLoop">Full Stack Creator</span>
                            </TextLoop>
                        </h1>


        </Container>
    )
}