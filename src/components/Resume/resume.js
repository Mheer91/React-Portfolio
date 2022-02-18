import React from "react";
import { Container, Stack, ListGroup } from "react-bootstrap";

export default function Resume(){
    return(
        <Container>
            <Stack gap={4}>
                <h1 className="text-white mb-5">Resume</h1>
                <h3><a className="text-white" href="https://docs.google.com/document/d/1hi0IBrEdgSI9lJAN2MNqs5XQshOyI8YrG5aCJyE5ZAI/edit?usp=sharing" target="_blank" rel="noreferrer">Click for my resume!</a></h3>
                
                <h3 className="text-white text-align-right">Front End Skills</h3>
                <ListGroup>
  <ListGroup.Item variant="dark" className="text-danger">React</ListGroup.Item>
  <ListGroup.Item variant="dark" className="text-danger">Materialize</ListGroup.Item>
  <ListGroup.Item variant="dark" className="text-danger">Bootstrap</ListGroup.Item>
  <ListGroup.Item variant="dark" className="text-danger">Material UI</ListGroup.Item>
  <ListGroup.Item variant="dark" className="text-danger">CSS</ListGroup.Item>
</ListGroup>
<h3 className="text-white text-align-right">Back End Skills</h3>
<ListGroup>
  <ListGroup.Item variant="dark" className="text-danger">Node.js</ListGroup.Item>
  <ListGroup.Item variant="dark" className="text-danger">Express</ListGroup.Item>
  <ListGroup.Item variant="dark" className="text-danger">MySQL / sequelize</ListGroup.Item>
  <ListGroup.Item variant="dark" className="text-danger">MongoDB / mongoose</ListGroup.Item>
  <ListGroup.Item variant="dark" className="text-danger">GraphQL / Apollo</ListGroup.Item>
  <ListGroup.Item variant="dark" className="text-danger">RESTful API's</ListGroup.Item>
</ListGroup>
            </Stack>


        </Container>
    )
};