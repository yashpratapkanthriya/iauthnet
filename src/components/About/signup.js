import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Form from 'react-jsonschema-form'

const log = (type) => console.log.bind(console, type);

class Signup extends Component {

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
                    <div style={{width: 350}}>
                        <Form
                            schema={require('./schemas/signup.json')}
                            uiSchema={require('./schemas/ui_signup.json')}
                            liveValidate={false}
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
                    <div className="d-flex">
                        <p> Do you already have an account?</p>
                        <Link to="/login">
                        <button type="button" className="btn btn-primary">Sign in</button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Signup
