import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {withRouter} from 'react-router'
import Form from 'react-jsonschema-form'
import userContract from '../../services/userContract_service'
import coreService from '../../services/core_service'

const log = (type) => console.log.bind(console, type);

class Signup extends Component {

    constructor(props) {
        super(props)

        this.MAX_UPLOAD_BYTES = (2e6 - 1e5)

        this.state = {
            formValues: {formData: null}
        }

        this.onDetailsEntered = this.onDetailsEntered.bind(this)
    }

    /*  validate(formData, errors) {
         if (formData.pass1 !== formData.pass2) {
             errors.pass2.addError("Passwords don't match");
         }
         return errors;
     }*/

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

    onSubmitSignUp(formData) {
     //   this.setState({ step: this.STEP.METAMASK })  // TODO : Add MetaMask
      //  console.log(formData.name);
        coreService.signUp(formData)
            .then((tx) => {
                console.log(`Submitted to ETH blockchain with transactionReceipt.tx: ${tx}`)
                console.error("form submit transaction")
               // this.setState({ step: this.STEP.PROCESSING })
                // Submitted to blockchain, now wait for confirmation
                return userContract.waitTransactionFinished(tx)
            })
            .then((blockNumber) => {
                this.props.history.push({
                    pathname :`/login/`,
                    state :{isTrue : true}
                })
                //  console.log("block number")
            //  this.setState({ step: this.STEP.SUCCESS })
                // TODO: Where do we take them after successful creation?
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
                    <div style={{width: 350}}>
                        <Form
                            schema={require('./schemas/signup.json')}
                            uiSchema={require('./schemas/ui_signup.json')}
                            liveValidate={false}
                            onSubmit={this.onDetailsEntered}
                            formData={this.state.formValues.formData}
                            onError={(errors) => console.log(`react-jsonschema-form in  errors: ${errors.length}`)}>
                            <div className="btn-container">
                                <button type="button" className="btn btn-other">
                                    Back
                                </button>
                                <button type="submit" className="float-right btn btn-primary"
                                        onClick={() => this.onSubmitSignUp(this.state.formValues.formData)}>Continue
                                </button>
                            </div>
                        </Form>
                    </div>
                    <div className="d-flex">
                        <p> Do you already have an account?</p>
                        <Link to="/login">
                            <button type="button" className="btn btn-primary">Sign Up</button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Signup)
