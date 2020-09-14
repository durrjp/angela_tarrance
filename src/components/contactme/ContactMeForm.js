import React from "react"
import { Form, FormGroup, Input, Row, Col, Button, Label } from "reactstrap"
import "./ContactMe.css"

export default function ContactMeForm() {
    return (
        <>
        <div className="contactform-container">
            <div className="container pt-5">
                <p>I would love to connect. Send me a message and I will respond via email</p>
                <Form>
                    <fieldset>
                        <Row>
                            <Col md={4}>
                                <FormGroup>
                                    <Label>Name</Label>
                                    <Input
                                        type="text" 
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                                <FormGroup>
                                    <Label>Email</Label>
                                    <Input 
                                        type="text"
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={8}>
                                <FormGroup>
                                    <Label>Message</Label>
                                    <Input 
                                        type="textarea"
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                    </fieldset>
                    <Button>Send</Button>
                </Form>
            </div>
        </div>

        </>
    )
}