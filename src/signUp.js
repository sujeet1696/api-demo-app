import React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
const validateFields = ['email', 'password', 'first_name', 'last_name'];

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        first_name: '',
        last_name: '',
        email: '',
        password: ''
      },
      showLoader: false,
    };
  }

  showFormErrors = (validateFields) => {
    const inputs = document.querySelectorAll('input');
    let isFormValid = true;
    inputs.forEach((input) => {
      const validity = this.refs[input.name].validity;
      const label = this.refs[input.name].placeholder;
      if (!validity.valid && validateFields.includes(input.name)) {
        if (validity.valueMissing) {
          isFormValid = false;
          this.showError(`${label} is a required field`, input.name);
        } else if (input.type === 'email') {
          this.showError('Email should be a valid email address', input.name);
        }
      } else {
        this.showError('', input.name);
      }
    });

    return isFormValid;
  }

  showError = (errorMessage, refName) => {
    const error = document.getElementById(`${refName}Error`);
    error.textContent = errorMessage;
  };

  handleChange = (e) => {
    const formData = this.state.formData;
    formData[e.target.name] = e.target.value;
    this.setState({ formData });
    if(e.target.name==='last_name'){
      this.showError('last_name is required field','last_name');
    }
    this.showFormErrors(validateFields);
  }

  signUp = (e) => {
    e.preventDefault();

    if (!this.showFormErrors(validateFields)) return;

    this.setState({ showLoader: true });

    const formData = { ...this.state.formData };
    console.log(formData);
    // formData.password = md5(formData.password);
    //
    // Utility.sendRequest('/users', 2, formData, (error, response, body) => {
    //   body = JSON.parse(body);
    //   if (!body.success) {
    //     this.setState({ showLoader: false });
    //     toast.error(JSON.parse(body.errorMessage).error.message);
    //   } else {
    //     toast.success('User has been created succesfuly. An activation email has sent on email ' + this.state.formData.email + '. Please verify the email.');
    //     this.setState({ showLoader: false });
    //     const data = this.state.formData;
    //     data.first_name = '';
    //     data.last_name = '';
    //     data.email = '';
    //     data.password = '';
    //     this.setState({ formData: data });
    //   }
    // });
  }

  render() {
    return (
      <Row className="justify-content-md-center mr-auto">
        <Col lg={{ span: 5 }} md={{ span: 6 }} sm={{ span: 7 }} className="mx-auto">
          <Form className="st-forn-info">
            <Form.Group controlId="firstName">
              <Form.Control type="text" placeholder="First Name" ref="first_name" name="first_name" value={this.state.formData.first_name} onChange={this.handleChange} className="st-input-info" required/>
              <div className="error errorIcon font-12" id="first_nameError"/>
            </Form.Group>

            <Form.Group controlId="lastName">
              <textarea placeholder="Last Name" rows='3' ref="last_name" name="last_name" value={this.state.formData.last_name} onChange={this.handleChange} className="st-input-info" required></textarea>
              <div className="error errorIcon font-12" id="last_nameError"/>
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Control type="email" placeholder="Email" ref="email" name="email" value={this.state.formData.email} onChange={this.handleChange} className="st-input-info" required/>
              <div className="error errorIcon font-12" id="emailError"/>
            </Form.Group>

            <Form.Group controlId="formPassword">
              <Form.Control type="password" placeholder="Password" className="st-input-info" ref="password" name="password" value={this.state.formData.password} onChange={this.handleChange} required/>
              <div className="error errorIcon font-12" id="passwordError"/>
            </Form.Group>

            <div className="st-custom-btn">
              <Button variant="primary" type="submit" className="st-btn" disabled={this.state.showLoader}
              onClick={!this.state.showLoader ? this.signUp : null}>
                {this.state.showLoader ? 'Loading…' : 'REGISTER'}
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    );
  }
}

export default SignUp;
