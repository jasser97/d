import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import People from "@material-ui/icons/People";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import { InputAdornment } from "@material-ui/core";
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
import "./SingUp.css";
import styles from "../../assets/jss/material-kit-react/views/componentsSections/loginStyle.js";

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
                  <h4>Sing Up</h4>
                </CardHeader>
                <p className={classes.divider}></p>
                <CardBody>
                  <CustomInput
                    labelText="First Name..."
                    id="first"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      type: "text",
                      endAdornment: (
                        <AccountBoxIcon position="end">
                          <People className={classes.inputIconsColor} />
                        </AccountBoxIcon>
                      ),
                    }}
                  />
                  <CustomInput
                    labelText="Last Name..."
                    id="last"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      type: "text",
                      endAdornment: (
                        <InputAdornment position="end">
                          <People className={classes.inputIconsColor} />
                        </InputAdornment>
                      ),
                    }}
                  />
                  <CustomInput
                    labelText="Email..."
                    id="email"
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
                    id="passw"
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
                    Register
                  </Button>
                </CardFooter>
                <div className="SingUp">
                  <span>
                    Not a member ? <a href="s">Sing Up</a>
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
