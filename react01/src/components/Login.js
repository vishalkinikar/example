import React from 'react';

export default class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        username: '',
        password: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    let { username, password} = this.state;
    this.props.isLogin(username === 'test' && password === '123')
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>
            <label>Username</label>
            <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
          </p>
          <p>
            <label>Password</label>
            <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
          </p>
          <p>
            <button type="submit">Login</button>
          </p>
        </form>
      </div>
    )
  }

}
