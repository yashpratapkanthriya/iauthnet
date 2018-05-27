import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Form from 'react-jsonschema-form'
import coreService from "../../services/core_service";

const log = (type) => console.log.bind(console, type);
const assign = Object.assign || require('object.assign');
class Login extends Component {

    constructor(props) {
        super(props)

        this.state = {
            formValues: {formData: null}
        }

        this.MAX_UPLOAD_BYTES = (2e6 - 1e5)
        this.onDetailsEntered = this.onDetailsEntered.bind(this)
    }
    onDetailsEntered(formListing) {
        // Helper function to approximate size of object in bytes
        function roughSizeOfObject(object) {
            var objectList = []
            var stack = [object]
            var bytes = 0
            while (stack.length) {
                var value = stack.pop()
                if (typeof value === 'boolean') {
                    bytes += 4
                } else if (typeof value === 'string') {
                    bytes += value.length * 2
                } else if (typeof value === 'number') {
                    bytes += 8
                }
                else if (typeof value === 'object'
                    && objectList.indexOf(value) === -1) {
                    objectList.push(value)
                    for (var i in value) {
                        if (value.hasOwnProperty(i)) {
                            stack.push(value[i])
                        }
                    }
                }
            }
            return bytes
        }

        if (roughSizeOfObject(formListing.formData) > this.MAX_UPLOAD_BYTES) {
            console.log("Your listing is too large. Consider using fewer or smaller photos.")
        } else {
            this.setState({
                formValues: formListing
            })
            // window.scrollTo(0, 0)
        }
    }

    onSubmitLogin(formData) {
        //   this.setState({ step: this.STEP.METAMASK })  // TODO : Add MetaMask
          console.log(formData.name);

        coreService.LogIn(formData)
            .then((userDetail) => {
                console.log(userDetail)
                console.log("Successful")

            })
            .catch((error) => {
                console.error(error)
                //  alertify.log(error.message)
                // TODO: Reset form? Do something.
            })
    }

    render() {
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
                            onSubmit={this.onDetailsEntered}
                            formData={this.state.formValues.formData}
                            onError={(errors) => console.log(`react-jsonschema-form in  errors: ${errors.length}`)}>
                            <div className="btn-container">
                                <button type="button" className="btn btn-other">
                                    Back
                                </button>
                                <button type="submit" className="float-right btn btn-primary"
                                        onClick={() => this.onSubmitLogin(this.state.formValues.formData)}>Continue
                                </button>
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
