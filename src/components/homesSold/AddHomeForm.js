import React, {useContext, useState} from "react"
import {Modal, Button, ModalHeader, ModalBody, Form, FormGroup, Label, Input, Row, Col} from "reactstrap"
import * as firebase from "firebase/app";
import 'firebase/auth'
import 'firebase/storage'
import { HomeContext } from "../../providers/HomeProvider";

export default function AddHomeForm({toggle, modal}) {
    const {addHome} = useContext(HomeContext)
    const [city, setCity] = useState()
    const [description, setDescription] = useState()
    const [forSale, setForSale] = useState()
    const [price, setPrice] = useState()
    const [state, setState] = useState()
    const [street, setStreet] = useState()
    const [zipCode, setZipCode] = useState()
    const [imageFileName, setImageFileName] = useState();

    const storage = firebase.storage().ref()
    const storeImage = (event) => {
        const file = event.target.files[0]
        const homeImagesRef = storage.child(`homeimages/${event.target.value}`)
        if(file) {
            homeImagesRef.put(file)
            setImageFileName(event.target.value)
        }
    }

    const storeHome = () => {
        const forSaleVar = ""
        if(forSale === 1) {
            forSaleVar = true
        } else {
            forSaleVar = false
        }
        
        const homeObj = {
            City: city,
            Description: description,
            ForSale: forSaleVar,
            Price: price,
            State: state,
            Street: street,
            ZipCode: zipCode,
            Image: imageFileName
        }
        addHome(homeObj)
    }

    return (
        <>
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Add Home</ModalHeader>
            <ModalBody>
                <Form>
                    <FormGroup>
                        <Label for="address">Address</Label>
                        <Input
                            type="text"
                            name="address"
                            onChange={(e) => setStreet(e.target.value)}
                        />
                    </FormGroup>
                    <Row form>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="city">City</Label>
                                <Input 
                                    type="text" 
                                    name="city"
                                    onChange={(e) => setCity(e.target.value)}
                                />
                            </FormGroup>
                        </Col>
                        <Col md={4}>
                            <FormGroup>
                                <Label for="state">State</Label>
                                <Input 
                                    type="text" 
                                    name="state"
                                    onChange={(e) => setState(e.target.value)}
                                />
                            </FormGroup>
                        </Col>
                        <Col md={2}>
                            <FormGroup>
                                <Label for="zip">Zip</Label>
                                <Input 
                                    type="text"
                                    name="zip"
                                    onChange={(e) => setZipCode(e.target.value)}
                                />
                            </FormGroup>  
                        </Col>
                    </Row>
                    <Row>
                        <Col md={4}>
                            <FormGroup>
                                <Label for="forSale">For Sale</Label>
                                <Input
                                    type="select"
                                    name="forSale"
                                    onChange = {(e) => setForSale(e.target.value)}
                                >
                                    <option value={1}>Yes</option>
                                    <option value={0}>No</option>
                                </Input>
                            </FormGroup>
                        </Col>
                        <Col md={5}>
                            <FormGroup>
                                <Label for="price">Price</Label>
                                <Input
                                    type="number"
                                    name="price"
                                    onChange={(e) => setPrice(e.target.value)} 
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                    <FormGroup>
                        <Label>Images</Label>
                        <Input
                            type="file"
                            name="image"
                            onChange={(e) => {
                                setImageFileName(e.target.value)
                                storeImage(e)
                            }}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="description">Description</Label>
                        <Input 
                            type="textarea"
                            name="description"
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Button color="primary" onClick={(e) => {
                            e.preventDefault()
                            storeHome()
                            toggle()
                        }}>Save</Button>
                    </FormGroup>
                </Form>
            </ModalBody>
        </Modal>
        </>
    )
}