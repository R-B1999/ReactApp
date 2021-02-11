import React from 'react'
import { Row, Label, Col, Button } from 'reactstrap';
import { Form, Control, Errors, actions } from 'react-redux-form';
import { toast } from 'react-toastify';

const required = (val) => val && val.length;
const minLength = (len) => (val) => !val || (val.length >= len);
const maxLength = (len) => (val) => !val || (val.length <= len);
const isNumber = (val) => !isNaN(Number(val));
// const isEmail = (val) => /^[A-Za-z0-9._]+@[A-Za-z0-9._]+\.[A-Za-z]{2-4}$/i.test(val);
const isEmail = (val) => /^\S+@\S+\.\S+$/i.test(val);


export const Contact = (props) => {

    const submitHandle = (values) => {
        // alert(JSON.stringify(values));

        if (values.firstname && values.lastname && values.contact && values.email && values.message) {

            props.addFeedback(values);
            props.resetFeedbackForm();
        } else {
            toast.warning("fill all fields", { position: toast.POSITION.TOP_CENTER });
        }

        // return(false);
    }

    return (
        <div className="contact">
            <div className="container">
                <div className="__header " />
                <div className="row row-content bg-success text-light p-2 shadow m-2">
                    <div className="col-12">
                        <h2>Location Information</h2>
                    </div>
                    <div className="col-12 col-sm-5 offset-sm-1">
                        <h4>Our Address</h4>
                        <address><p className="py-2">
                            100ft road, near Ghore Wala Chowk,<br />
                        Bathinda, 151001<br />
                        Punjab, India<br />
                            <i className="fa fa-phone"></i> : +91 90568 08352<br />
                            <i className="fa fa-envelope"></i> : <a href="mailto:rk1484990@gmail.com" style={{ textDecoration: "none", color: "white" }}>rk1484990@gmail.com</a>
                        </p></address>
                    </div>
                    <div className="col-12 col-sm-6">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d55165.56880555824!2d74.949515!3d30.212884!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391732a35afcc18f%3A0x3294aa2abf6bea1e!2sBatinda%2C%20Bathinda%2C%20Punjab%20151001!5e0!3m2!1sen!2sin!4v1612627908261!5m2!1sen!2sin" width="100%" height="100%"></iframe>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-12 col-md-6">
                        <h2>Contact us</h2>
                    </div>
                    <div className="col-12 col-md-6">

                    </div>
                </div>
                <div className="form">
                    <Form model="feedback" onSubmit={(values) => submitHandle(values)}>
                        <Row className="form-group">
                            <Label htmlFor="firstname" md={2}>First Name</Label>
                            <Col md={10}>
                                <Control.text model=".firstname"
                                    id="firstname"
                                    name="firstname"
                                    placeholder="First Name"
                                    className="form-control"
                                    validators={{
                                        required,
                                        minLength: minLength(3),
                                        maxLength: maxLength(15)
                                    }} />
                                <Errors model=".firstname"
                                    className="text-danger"
                                    show={(field) => field.touched}
                                    messages={{
                                        required: 'Required',
                                        minLength: '3 characters atleast',
                                        maxLength: 'Maximum 15 characters'
                                    }} />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="lastname" md={2}>Last Name</Label>
                            <Col md={10}>
                                <Control.text model=".lastname"
                                    id="lastname"
                                    name="lastname"
                                    placeholder="Last Name"
                                    className="form-control"
                                    validators={{
                                        required
                                    }} />
                                <Errors model=".lastname"
                                    className="text-danger"
                                    show={(field) => field.touched}
                                    messages={{
                                        required: "Required"
                                    }} />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="contact" md={2}>Contact No.</Label>
                            <Col md={10}>
                                <Control.text model=".contact"
                                    id="contact"
                                    name="contact"
                                    placeholder="Contact No."
                                    className="form-control"
                                    validators={{
                                        required,
                                        isNumber,
                                        minLength: minLength(10),
                                        maxLength: maxLength(10)
                                    }} />
                                <Errors model=".contact"
                                    className="text-danger"
                                    show={(field) => field.touched}
                                    messages={{
                                        required: "Required",
                                        isNumber: "Must be only digits",
                                        minLength: "Not less than 10 digits",
                                        maxLength: "Not more than 10 digits"

                                    }} />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="email" md={2}>Email ID</Label>
                            <Col md={10}>
                                <Control.text model=".email"
                                    id="email"
                                    name="email"
                                    placeholder="Email Address"
                                    className="form-control"
                                    validators={{
                                        required,
                                        isEmail
                                    }} />
                                <Errors model=".email"
                                    className="text-danger"
                                    show={(field) => field.touched}
                                    messages={{
                                        required: "Required",
                                        isEmail: "Provide correct email"
                                    }} />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Col md={{ size: 6, offset: 2 }}>
                                <div className="form-check">
                                    <Label check>
                                        <Control.checkbox model=".agree"
                                            name="agree"
                                            className="form-check-input" />{' '}
                                        <strong>May we contact you?</strong>
                                    </Label>
                                </div>
                            </Col>
                            <Col md={{ size: 3, offset: 1 }}>
                                <Control.select model=".contactType"
                                    name="contactType"
                                    className="form-control">
                                    <option disabled selected value="none">Select one</option>
                                    <option value="contact">Tel.</option>
                                    <option value="email">Email</option>
                                </Control.select>
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="message" md={2}>Your Feedback</Label>
                            <Col md={10}>
                                <Control.textarea model=".message"
                                    id="message"
                                    name="message"
                                    rows="10"
                                    className="form-control"
                                    validators={{
                                        required
                                    }} />
                                <Errors model=".message"
                                    className="text-danger"
                                    show="touched"
                                    messages={{
                                        required: "Required"
                                    }} />
                            </Col>
                        </Row><Row className="form-group">
                            <Col md={{ size: 10, offset: 2 }}>
                                <button type="submit" value="submit" className="btn btn-lg btn-outline-primary">Submit</button>
                            </Col>
                        </Row>
                    </Form>
                </div>
            </div>
        </div>
    )
}
