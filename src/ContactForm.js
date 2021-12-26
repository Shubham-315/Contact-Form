import * as React from 'react';

class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: '',
            email: '',
            phone: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        this.state[name] = value;
        this.setState(this.state);
        
    }

    handleSubmit(event) {
        event.preventDefault();
        var data = localStorage.getItem("userDetail") || JSON.stringify([]);
        data = JSON.parse(data);
        let checkEmail = data.find((value) => value.email == this.state.email);
        if(checkEmail){
            // let key = Object.keys(data).find(item => data[item].email === this.state.email);
            alert("this email is already exist...");
        } else {
            data.push(this.state);
            localStorage.setItem("userDetail", JSON.stringify(data));
        }
        console.log(data);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                
                <label>
                    Name:
                    <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
                </label>
                <label>
                    Email:
                    <input type="text" name="email" value={this.state.email} onChange={this.handleChange} />
                </label>
                <label>
                    Phone:
                    <input type="text" name="phone" value={this.state.phone} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}


export default ContactForm;