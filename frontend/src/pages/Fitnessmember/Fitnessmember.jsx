import React from 'react';
import Layout from 'Components/shared/Layout';

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
                    <label>
                        <span>Reservation Day:</span>
                        <input type="date" name="resdate" />
                    </label>
                    <label>
                        <span>Time of Day:</span>
                        <input type="time" name="restime" />
                    </label>
                    <input type="submit" />
                </form>
            </Layout>
        );
    }
}
export default Fitnessmember;
