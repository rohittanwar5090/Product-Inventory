import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import UserApi from '../data/UserApi'
import UserActions from '../actions/UserActions';
import { withRouter } from 'react-router-dom'

class SignInForm extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <Formik             
                initialValues={{
                    userId: '',
                    password: ''
                }}
                validationSchema={Yup.object().shape({
                    userId: Yup.string()
                        .email('User Id is invalid')
                        .required('User Id is required'),
                    password: Yup.string()
                        .min(6, 'Password must be at least 6 characters')
                        .required('Password is required')
                })}
                onSubmit={fields => {                   
                    UserApi.getUser(fields.userId, fields.password, user=>{   
                        console.log(user);                     
                        if(user != undefined) {
                            UserActions.signinUser(fields.userId)
                            this.props.history.push('/viewProducts')
                        } else {                            
                            alert("wrong user id!")                            
                        }
                    })
                }}
                render={({ errors, dirty, touched }) => {
                    return (
                        <Form className='animate__animated animate__fadeInUpBig'>
                        <div className="form-group">
                            <label htmlFor="userId">User ID</label>
                            <Field name="userId" type="text" className={'form-control' + (errors.userId && touched.userId ? ' is-invalid' : '')} />
                            <ErrorMessage name="userId" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <Field name="password" type="password" className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')} />
                            <ErrorMessage name="password" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                            <button  type="submit" className="btn btn-danger mr-2">Sign In</button>
                            <button type="reset" className="btn btn-secondary">Reset</button>
                        </div>
                    </Form>
                    )
                }}
                // render={({ errors, dirty, touched }) => {
                //     window.onbeforeunload = dirty ? e => e : null
                //     return (
                //         <Form className='animate__animated animate__fadeInUpBig'>
                //         <div className="form-group">
                //             <label htmlFor="userId">User ID</label>
                //             <Field name="userId" type="text" className={'form-control' + (errors.userId && touched.userId ? ' is-invalid' : '')} />
                //             <ErrorMessage name="userId" component="div" className="invalid-feedback" />
                //         </div>
                //         <div className="form-group">
                //             <label htmlFor="password">Password</label>
                //             <Field name="password" type="password" className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')} />
                //             <ErrorMessage name="password" component="div" className="invalid-feedback" />
                //         </div>
                //         <div className="form-group">
                //             <button  type="submit" className="btn btn-danger mr-2">Sign In</button>
                //             <button type="reset" className="btn btn-secondary">Reset</button>
                //         </div>
                //     </Form>
                //     )
                // }}  
            />
        )
    }
}

export default withRouter(SignInForm) 