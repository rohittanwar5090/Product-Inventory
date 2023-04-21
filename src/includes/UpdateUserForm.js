import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

class UpdateUserForm extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        
        console.log(this.props);
        if(this.props.user == undefined) {
            console.log('null');
            return null
        }
        return (
            <Formik
                initialValues={{
                    email: this.props.user.email,
                    password: this.props.user.password,
                    firstName: this.props.user.firstName,
                    lastName: this.props.user.lastName,
                    location:this.props.user.location,
                    mobileNumber:this.props.user.mobileNumber
                }}
                validationSchema={Yup.object().shape({
                    email: Yup.string()
                        .required(' Name is required'),
                        password: Yup.string()
                        .required('Password  is required'),
                        firstName: Yup.string()
                        .required('FirstName is required'),
                        lastName: Yup.string()
                        .required('LastName is required'),
                        location: Yup.string()
                        .required('Location is required'),
                        mobileNumber: Yup.string()
                        .required('MobileNumber is required'),
                })}
                onSubmit={(fields) => {
                    console.log("fields", fields);
                    //alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 5))
                    this.props.onUpdate({id: this.props.user.id, ...fields})
                }}
                render={({ errors, dirty, touched }) => {
                    return (
                        <Form>
                        <div className="form-group">
                            <label htmlFor="userName">UserName</label>
                            <Field name="email" type="text" className={'form-control' + (errors.userName && touched.userName ? ' is-invalid' : '')} />
                            <ErrorMessage name="userName" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <Field name="password" type="password" className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')} />
                            <ErrorMessage name="password" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="firstname">FirstName</label>
                            <Field name="firstName" type="text" className={'form-control' + (errors.firstname && touched.firstname ? ' is-invalid' : '')} />
                            <ErrorMessage name="firstName" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastName">LastName</label>
                            <Field name="lastName" type="text" className={'form-control' + (errors.lastname && touched.lastname ? ' is-invalid' : '')} />
                            <ErrorMessage name="lastName" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="location">Location</label>
                            <Field name="location" type="text" className={'form-control' + (errors.location && touched.location ? ' is-invalid' : '')} />
                            <ErrorMessage name="location" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="mobileNumber">Mobile</label>
                            <Field name="mobileNumber" type="number" className={'form-control' + (errors.mobileNumber && touched.mobileNumber ? ' is-invalid' : '')} />
                            <ErrorMessage name="mobileNumber" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary mr-2">Update User</button>
                            <button type="reset" className="btn btn-secondary">Reset</button>
                        </div>
                    </Form>
                    )
                }      
                }  
                // render={({ errors, dirty, touched }) => {
                    
                //     return (
                    //     <Form className='animate__animated animate__fadeInUpBig'>
                    //     <div className="form-group">
                    //         <label htmlFor="userId">User ID</label>
                    //         <Field name="userId" type="text" className={'form-control' + (errors.userId && touched.userId ? ' is-invalid' : '')} />
                    //         <ErrorMessage name="userId" component="div" className="invalid-feedback" />
                    //     </div>
                    //     <div className="form-group">
                    //         <label htmlFor="password">Password</label>
                    //         <Field name="password" type="password" className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')} />
                    //         <ErrorMessage name="password" component="div" className="invalid-feedback" />
                    //     </div>
                    //     <div className="form-group">
                    //         <button  type="submit" className="btn btn-danger mr-2">Sign In</button>
                    //         <button type="reset" className="btn btn-secondary">Reset</button>
                    //     </div>
                    // </Form>
                //     )
                // }}
                // render={({ errors,    touched }) => (
                //     window.onbeforeunload = e => e
                //     return (
                    //     <Form>
                    //     <div className="form-group">
                    //         <label htmlFor="userName">UserName</label>
                    //         <Field name="email" type="text" className={'form-control' + (errors.userName && touched.userName ? ' is-invalid' : '')} />
                    //         <ErrorMessage name="userName" component="div" className="invalid-feedback" />
                    //     </div>
                    //     <div className="form-group">
                    //         <label htmlFor="password">Password</label>
                    //         <Field name="password" type="password" className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')} />
                    //         <ErrorMessage name="password" component="div" className="invalid-feedback" />
                    //     </div>
                    //     <div className="form-group">
                    //         <label htmlFor="firstname">FirstName</label>
                    //         <Field name="firstName" type="text" className={'form-control' + (errors.firstname && touched.firstname ? ' is-invalid' : '')} />
                    //         <ErrorMessage name="firstName" component="div" className="invalid-feedback" />
                    //     </div>
                    //     <div className="form-group">
                    //         <label htmlFor="lastName">LastName</label>
                    //         <Field name="lastName" type="text" className={'form-control' + (errors.lastname && touched.lastname ? ' is-invalid' : '')} />
                    //         <ErrorMessage name="lastName" component="div" className="invalid-feedback" />
                    //     </div>
                    //     <div className="form-group">
                    //         <label htmlFor="location">Location</label>
                    //         <Field name="location" type="text" className={'form-control' + (errors.location && touched.location ? ' is-invalid' : '')} />
                    //         <ErrorMessage name="location" component="div" className="invalid-feedback" />
                    //     </div>
                    //     <div className="form-group">
                    //         <label htmlFor="mobileNumber">Mobile</label>
                    //         <Field name="mobileNumber" type="number" className={'form-control' + (errors.mobileNumber && touched.mobileNumber ? ' is-invalid' : '')} />
                    //         <ErrorMessage name="mobileNumber" component="div" className="invalid-feedback" />
                    //     </div>
                    //     <div className="form-group">
                    //         <button type="submit" className="btn btn-primary mr-2">Update User</button>
                    //         <button type="reset" className="btn btn-secondary">Reset</button>
                    //     </div>
                    // </Form>
                //     )
                // )}
            />
        )
    }
}

export default UpdateUserForm
