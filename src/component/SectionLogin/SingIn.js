import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import logo from "../../images/social/fb.png";
import logo1 from "../../images/social/g+.png";
import logo2 from "../../images/social/in.png";
// core components
import GridContainer from "./Card/GridContainer.js";
import GridItem from "./Card/GridItems.js";
import Card from "./Card/Card";
import CardHeader from "./Card/CardHeader.js";
import CardBody from "./Card/CardBody.js";
import CardFooter from "./Card/CardFooter.js";
import Button from "./Card/Button.js";
import CustomInput from "./Card/CustomInput.js";
import logo3 from "../../images/social/password.png";
import styles from "../../assets/jss/material-kit-react/views/componentsSections/loginStyle.js";
import "./SingUp.css";
import { Link } from "react-router-dom";
const useStyles = makeStyles(styles);

export default function SingUp() {
  const classes = useStyles();

  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={4}>
            <Card>
              <form className={classes.form}>
                <CardHeader color="primary" className={classes.cardHeader}>
                  <Link to="/" className="btn-flat waves-effect">
                    <i className="material-icons left">keyboard_backspace</i>
                  </Link>
                  <h4>Sing In</h4>

                  <div className={classes.socialLine}>
                    <Button
                      justIcon
                      href="SingUp"
                      target="_blank"
                      color="transparent"
                      onClick={(e) => e.preventDefault()}
                    >
                      <img className={classes.img} src={logo1} alt="" />
                    </Button>
                    <Button
                      justIcon
                      href="#pablo"
                      target="_blank"
                      color="transparent"
                      onClick={(e) => e.preventDefault()}
                    >
                      <img className={classes.img} src={logo2} alt="" />
                    </Button>
                    <Button
                      justIcon
                      href="#pablo"
                      target="_blank"
                      color="transparent"
                      onClick={(e) => e.preventDefault()}
                    >
                      <img className={classes.img1} src={logo} alt="" />
                    </Button>
                  </div>
                </CardHeader>

                <p className={classes.divider}></p>
                <CardBody>
                  <CustomInput
                    labelText="Email..."
                    id="myEmail"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      type: "email",
                      endAdornment: (
                        <InputAdornment position="end">
                          <MailOutlineIcon
                            className={classes.inputIconsColor}
                          />
                        </InputAdornment>
                      ),
                    }}
                  />
                  <CustomInput
                    labelText="Password"
                    id="pass"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      type: "password",
                      endAdornment: (
                        <InputAdornment position="end">
                          <img className={classes.icon} src={logo3} alt="" />
                        </InputAdornment>
                      ),
                      autoComplete: "off",
                    }}
                  />
                </CardBody>
                <CardFooter className={classes.cardFooter}>
                  <Button simple color="primary" size="lg">
                    Sing In
                  </Button>
                </CardFooter>
                <div className="SingUp">
                  <span>
                    Not a member ? <Link to="/register">Register</Link>
                  </span>
                  <span>
                    Forgot ? <a href="s">Password</a>
                  </span>
                </div>
              </form>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
