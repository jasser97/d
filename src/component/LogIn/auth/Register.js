import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../../actions/authActions";
import classnames from "classnames";
class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {},
    };
  }
  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors,
      });
    }
  }
  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };
  onSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
    };
    this.props.registerUser(newUser, this.props.history);
  };
  render() {
    const { errors } = this.state;
    return (
      <div className="myBox">
        <form
          style={{
            padding: "30px 10px 20px 10px ",
            backgroundColor: "white",
            width: "350px",
          }}
          noValidate
          onSubmit={this.onSubmit}
        >
          <Link to="/" className="btn-flat waves-effect">
            <i className="material-icons left">keyboard_backspace</i>
          </Link>
          <h3 style={{ textAlign: "center" }}>Sign Up</h3>
          <div className="form-group">
            <label>Name:</label>
            <input
              onChange={this.onChange}
              value={this.state.name}
              error={errors.name}
              id="name"
              type="text"
              placeholder="Enter name"
              className={classnames("form-control", {
                invalid: errors.name,
              })}
            />

            <span className="red-text">{errors.name}</span>
          </div>
          <div className="form-group">
            <label>Email address:</label>
            <input
              onChange={this.onChange}
              value={this.state.email}
              error={errors.email}
              id="email"
              type="email"
              placeholder="Enter email"
              className={classnames("form-control", {
                invalid: errors.email,
              })}
            />
            <span className="red-text">{errors.email}</span>
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              onChange={this.onChange}
              value={this.state.password}
              error={errors.password}
              id="password"
              type="password"
              placeholder="Enter password"
              className={classnames("form-control", {
                invalid: errors.password,
              })}
            />

            <span className="red-text">{errors.password}</span>
          </div>
          <div className="form-group">
            <label>Confirm Password:</label>
            <input
              onChange={this.onChange}
              value={this.state.password2}
              error={errors.password2}
              id="password2"
              placeholder="Confirm Password:"
              type="password"
              className={classnames("form-control", {
                invalid: errors.password2,
              })}
            />
            <span className="red-text">{errors.password2}</span>
          </div>

          <button
            style={{ marginBottom: 20, marginTop: 10 }}
            type="submit"
            className="btn btn-primary btn-block"
          >
            Sign up
          </button>
          <p className="forgot-password text-right">
            sign In <Link to="/login">sign In</Link>
          </p>
        </form>
      </div>
    );
  }
}
Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});
export default connect(mapStateToProps, { registerUser })(withRouter(Register));
