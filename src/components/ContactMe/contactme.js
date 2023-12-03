import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import sendEmail from "./sendEmail";

export default function ContactMe() {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        else{
            sendEmail()
        }

        setValidated(true);
    };
    return (
        <Container>
            <h1 className="text-white">Contact Me</h1>
            <Form noValidate validated={validated} onChange={handleSubmit}>
                <Form.Group className="mb-3" controlId="name">
                <Form.Label className="text-white">Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter Name"
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="email">
                <Form.Label className="text-white">Email</Form.Label>
                    <Form.Control
                        required
                        type="email"
                        placeholder="Enter Email"
                    />
                    <Form.Control.Feedback type="invalid">Please enter a valid email address!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="message">
                    <Form.Label className="text-white">Message</Form.Label>
                    <Form.Control required type="text" as="textarea" rows={3} />
                    <Form.Control.Feedback type="invalid">Please enter a message!</Form.Control.Feedback>
                </Form.Group>
                <Button type="submit" variant="dark" onClick={handleSubmit}>Send!</Button>
            </Form>
        </Container>

    )
};