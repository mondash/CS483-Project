import React from 'react';
import Layout from 'Components/shared/Layout';
import './Fitnessmember.scss';

class Fitnessmember extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({ value: event.target.value });
    }
    handleSubmit(event) {
        console.log('A name was submitted: ' + event.target.name.value);
        console.log('A password was submitted: ' + event.target.password.value);
        event.preventDefault();
    }
    render() {
        return (
            <Layout>
                <h1>Membership Form</h1>
                <form>
                    <label>
                        <span>First Name:</span>
                        <input type="text" name="fname" />
                    </label>
                    <label>
                        <span>Last Name:</span>
                        <input type="text" name="lname" />
                    </label>
                    <label>
                        <span>Email:</span>
                        <input type="email" name="email" />
                    </label>
                    <label>
                        <span>Phone number:</span>
                        <input type="number" name="phoneNum" />
                    </label>
                    <h1>Billing Info</h1>
                    <label>
                        <span>Card Number:</span>
                        <input type="text" name="cardnum" maxlength="16" />
                    </label>
                    <label>
                        <span>Expiration Date:</span>
                        <input type="month" name="expMonth" min="2019-11" max="2025-12" />
                    </label>
                    <label>
                        <span>CVV:</span>
                        <input type="number" name="cvv" min="100" max="999" />
                    </label>
                    <h2>Billing Address</h2>
                    <label>
                        <span>Name on Card:</span>
                        <input type="text" name="cardname" />
                    </label>
                    <label>
                        <span>Street Address:</span>
                        <input type="text" name="streetadd" />
                    </label>
                    <label>
                        <span>City:</span>
                        <input type="text" name="city" />
                    </label>
                    <label>
                        <span>State:</span>
                        <input type="text" name="state" maxlength="2" />
                    </label>
                    <label>
                        <span>ZIP:</span>
                        <input type="text" name="zip" maxlength="5" />
                    </label>
                    <input type="submit" />
                </form>
            </Layout>
        );
    }
}
export default Fitnessmember;
