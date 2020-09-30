import React from "react"
import { Form, FormGroup, Input, Row, Col, Button, Label } from "reactstrap"
import "./ContactMe.css"

export default function ContactMeForm() {
    return (
        <>
        <div className="contactform-container">
            <div className="container pt-5">
                <h2>Send me a message!</h2>
                <Form>
                    <fieldset>
                        <Row>
                            <Col md={6}>
                                <FormGroup>
                                    <Label>Name</Label>
                                    <Input
                                        type="text"
                                        className="contactme-input"
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label>Email</Label>
                                    <Input 
                                        type="text"
                                        className="contactme-input"
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12}>
                                <FormGroup>
                                    <Label>Message</Label>
                                    <Input 
                                        type="textarea"
                                        className="contactme-input textarea-input"
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                    </fieldset>
                    <Button className="sendmessage-button">Send</Button>
                </Form>
            </div>
        </div>

        </>
    )
}