import React, { useState } from "react"
import { Form, FormGroup, Input, Row, Col, Button, Label } from "reactstrap"
import "./ContactMe.css"
import * as emailjs from "emailjs-com"

export default function ContactMeForm() {
    const [fromName, setFromName] = useState("")
    const [fromEmail, setFromEmail] = useState("")
    const [message, setMessage] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        let template_params = {
            from_name: `${fromName} - ${fromEmail}`,
            to_name: "default_service",
            message_html: message

        }

        emailjs.send(
            'default_service',
            'template_18falyi',
            template_params,
            'user_tJZEjGIkVYce60J3odJJ5'
        )
        alert("Thank you for contacting me!")
    }

    const handleNameChange = (value) => {
        setFromName(value)
    }

    const handleEmailChange = (value) => {
        setFromEmail(value)
    }

    const handleMessageChange = (value) => {
        setMessage(value)
    }

    return (
        <>
        <div className="contactform-container">
            <div className="container pt-5">
                <h2>Send me a message!</h2>
                <Form onSubmit={handleSubmit}>
                    <fieldset>
                        <Row>
                            <Col md={6}>
                                <FormGroup>
                                    <Label>Name</Label>
                                    <Input
                                        type="text"
                                        className="contactme-input"
                                        onChange={(e) => handleNameChange(e.target.value)}
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label>Email</Label>
                                    <Input 
                                        type="text"
                                        className="contactme-input"
                                        onChange={(e) => handleEmailChange(e.target.value)}
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
                                        onChange={(e) => handleMessageChange(e.target.value)}
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                    </fieldset>
                    <Button className="sendmessage-button" type="submit">Send</Button>
                </Form>
            </div>
        </div>

        </>
    )
}