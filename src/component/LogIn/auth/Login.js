import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../../actions/authActions";
import classnames from "classnames";
import "../Login.css";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {},
    };
  }
  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard"); // push user to dashboard when they login
    }
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
    const userData = {
      email: this.state.email,
      password: this.state.password,
    };
    this.props.loginUser(userData);
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
          <h3 style={{ textAlign: "center" }}>Sign In</h3>
          <div className="form-group">
            <label>Email address:</label>
            <input
              placeholder="Enter email"
              onChange={this.onChange}
              value={this.state.email}
              error={errors.email}
              id="email"
              type="email"
              className={classnames("form-control", {
                invalid: errors.email || errors.emailnotfound,
              })}
            />

            <span>
              {errors.email}
              {errors.emailnotfound}
            </span>
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
                invalid: errors.password || errors.passwordincorrect,
              })}
            />

            <span className="red-text">
              {errors.password}
              {errors.passwordincorrect}
            </span>
          </div>
          <button
            style={{ marginBottom: 20, marginTop: 10 }}
            type="submit"
            className="btn btn-primary btn-block"
          >
            Login
          </button>
          <p className="forgot-password text-right">
            Forgot <a href="#d">password?</a>
          </p>
          <p className="forgot-password text-right">
            Don't have an account? <Link to="/register">Register</Link>
          </p>
        </form>
      </div>
    );
  }
}
Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});
export default connect(mapStateToProps, { loginUser })(Login);
