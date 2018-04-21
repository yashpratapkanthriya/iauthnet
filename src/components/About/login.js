import React, {Component} from 'react'
import Form from 'react-jsonschema-form'
//import { schemas } from "./schemas";

const log = (type) => console.log.bind(console, type);

class Login extends Component {

    render() {
        function validate(formData, errors) {
            if (formData.pass1 !== formData.pass2) {
                errors.pass2.addError("Passwords don't match");
            }
            return errors;
        }
        return (
            <div style={{width:300}}>
            <Form
                schema={require('./schemas/login.json')}
                uiSchema={require('./schemas/ui_login.json')}
                liveValidate={true}
                showErrorList={false}
                formData={{"email": "abc@mail.com"}}
                validate={validate}
                onError={(errors) => console.log(`react-jsonschema-form in  errors: ${errors.length}`)}>
                <div className="btn-container">
                    <button type="button" className="btn btn-other" >
                        Back
                    </button>
                    <button type="submit" className="float-right btn btn-primary">Continue</button>
                </div>
            </Form>
            </div>
        )
     }
}
export default Login
