import React from 'react';
import { Form, Button, Col, Row, } from 'react-bootstrap';
import { Formik } from "formik";
import * as yup from 'yup';
import Select from 'react-select'
import name from '../location.json'


const schema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    city: yup.string().required(),
    state: yup.string().required(),
    zip: yup.string().required(),
    terms: yup.bool().required().oneOf([true], 'Terms must be accepted'),
});
const cities = name.map(opt => ({ label: opt, value: opt }));

export default function Appointment() {
    return (
        <Formik
            validationSchema={schema}
            onSubmit={console.log}
            initialValues={{
                firstName: 'sam',
                lastName: 'bahadur',
                city: '',
                state: '',
                zip: '',
                phn: '+91',
                otp: '',
                terms: false,
            }}
        >
            {({
                handleSubmit,
                handleChange,
                values,
                touched,
                errors,
            }) => (
                <Form noValidate onSubmit={handleSubmit}>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="4" controlId="validationFormik01">
                            <Form.Label>First name</Form.Label>
                            <Form.Control
                                type="text"
                                name="firstName"
                                value={values.firstName}
                                onChange={handleChange}
                                isValid={touched.firstName && !errors.firstName}
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="validationFormik02">
                            <Form.Label>Last name</Form.Label>
                            <Form.Control
                                type="text"
                                name="lastName"
                                value={values.lastName}
                                onChange={handleChange}
                                isValid={touched.lastName && !errors.lastName}
                            />

                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>


                    </Row>
                    <Row className="mb-3">

                        <Form.Group as={Col} md="2" controlId="validationFormik03">
                            <Form.Label>City</Form.Label>
                            <Select
                                options={cities}
                                onChange={opt => console.log(opt.label, opt.value)}
                            />

                            <Form.Control.Feedback type="invalid">
                                {errors.city}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group as={Col} md="3" controlId="validationFormik04">
                            <Form.Label>State</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="State"
                                name="state"
                                value={values.state}
                                onChange={handleChange}
                                isInvalid={!!errors.state}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.state}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="3" controlId="validationFormik05">
                            <Form.Label>Zip</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Zip"
                                name="zip"
                                value={values.zip}
                                onChange={handleChange}
                                isInvalid={!!errors.zip}
                            />

                            <Form.Control.Feedback type="invalid">
                                {errors.zip}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group as={Col} md="3" controlId="validationFormik06">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder=""
                                name="phn"
                                value={values.phn}
                                onChange={handleChange}
                                isInvalid={!!errors.phn}
                            />

                            <Form.Control.Feedback type="invalid">
                                {errors.phn}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="3" controlId="validationFormik07">
                            <Form.Label> </Form.Label><br/>
                            <Button md='2' variant='outline-success'>Get OTP</Button>
                            <Form.Control.Feedback type="invalid">
                                {errors.otp}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="3" controlId="validationFormik08">
                            <Form.Label>Enter OTP</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="OTP here"
                                name="otp"
                                value={values.otp}
                                onChange={handleChange}
                                isInvalid={!!errors.otp}
                            />

                            <Form.Control.Feedback type="invalid">
                                {errors.otp}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Form.Group className="mb-3">
                        <Form.Check
                            required
                            name="terms"
                            label="Agree to terms and conditions"
                            onChange={handleChange}
                            isInvalid={!!errors.terms}
                            feedback={errors.terms}
                            feedbackType="invalid"
                            id="validationFormik0"
                        />
                    </Form.Group>

                    <Button variant='outline-success' type="submit">Confirm Appointment</Button>
                </Form>
            )}
        </Formik>
    );
}