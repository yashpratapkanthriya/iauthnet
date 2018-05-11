import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Form from 'react-jsonschema-form'

const log = (type) => console.log.bind(console, type);

class Login extends Component {

    constructor(props){
        super(props)
    }

    render() {
        function validate(formData, errors) {
            if (formData.pass1 !== formData.pass2) {
                errors.pass2.addError("Passwords don't match");
            }
            return errors;
        }

        return (
            <div className="container-fluid">
                <div className="d-flex loginContainer">
                    {this.props.isTrue &&
                    <div className="alert alert-success" role="alert">
                       SignUp Successful : Use your Username and Password to Login!
                    </div>
                    }
                    <div style={{width: 350}}>
                        <Form
                            schema={require('./schemas/login.json')}
                            uiSchema={require('./schemas/ui_login.json')}
                            liveValidate={false}
                            showErrorList={true}
                            validate={validate}
                            onError={(errors) => console.log(`react-jsonschema-form in  errors: ${errors.length}`)}>
                            <div className="btn-container">
                                <button type="button" className="btn btn-other">
                                    Back
                                </button>
                                <button type="submit" className="float-right btn btn-primary">Continue</button>
                            </div>
                        </Form>
                    </div>
                    <div className="d-flex flex-column">
                        <p> Join our community</p>
                        <Link to="/signup">
                        <button type="button" className="btn btn-primary">Sign Up</button>
                    </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login
