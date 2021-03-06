import React from 'react';
import Email from "@material-ui/icons/Email";
import Person from '@material-ui/icons/PersonOutline';
import People from "@material-ui/icons/People";
import Phone from '@material-ui/icons/PhoneEnabled';
import Paper from '@material-ui/core/Paper';
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import Grid from '@material-ui/core/Grid';
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from '@material-ui/core/TextField';
import { Today } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));
  export default function SectionTourCart() {
    const classes = useStyles();
    return (
      <GridContainer>
        <GridItem>
          
        
<Card>
              <form className={classes.form} id="tour-id">
                <CardHeader color="info" size="sm" align="center">
                  <h3> Reserve this trip </h3>
                </CardHeader>
                <CardBody>
                  <div>
                  <CustomInput
                  required
                  labelText="Your Name ..."
                  id="customer-name"
                  formControlProps={{
                    fullWith: true,
                  }}
                  inputProps={{
                    type: "text",
                    endAdornment: (
                      <InputAdornment position="end">
                        <Person />
                      </InputAdornment>
                    ),
                  }}
                  
                  />
                  </div>
                  <div>
                  <CustomInput
                  labelText="Email..."
                  id="customer-email"
                  formControlProps={{
                    fullWith: true,
                  }}
                  inputProps={{
                    type: "email",
                    endAdornment: (
                      <InputAdornment position="end">
                        <Email />
                      </InputAdornment>
                    ),
                  }}
                  
                  />
                  </div>
                  <div>
                  <CustomInput
                  labelText="Phone"
                  id="customer-tel"
                  formControlProps={{
                    fullWith: true,
                  }}
                  inputProps={{
                    type: "text",
                    endAdornment: (
                      <InputAdornment position="end">
                        <Phone />
                      </InputAdornment>
                    ),
                  }}
                  
                  />
                  </div>
                  <div>
                  <CustomInput
                  required
                  labelText="Number of Pepeole..."
                  id="numberofpax"                                 
                  formControlProps={{
                    fullWith: true,
                  }}
                  inputProps={{
                    type: "number",
                    
                    
                    endAdornment: (
                      <InputAdornment position="end">
                        <People />
                      </InputAdornment>
                    ),
                  }}
                  
                  />
                  </div>
                  <div>
                  <h5>Your Departure Date</h5>
                  <CustomInput
                  
                  id="dod"                  
                  formControlProps={{
                    fullWith: true,
                  }}
                  inputProps={{
                    type: "date",
                    
                  }}                  
                  />
                  </div>                 
                  <div>
                    <TextField
                      id="outlined-full-width"
                      label="Message"
                      style={{ margin: 0, padding: 20 }}
                      placeholder="Your special request"                      
                      fullWidth
                      margin="normal"                      
                      InputLabelProps={{
                        shrink: true,
                      }}
                      variant="outlined"
                    />
                  
                </div>
                  <div >
                  <h4> Total: 100.000</h4> 
                  </div>
                  
                    
                    
                </CardBody>

                <CardFooter className={classes.CardFooter}>
                  
                  
                
                  <Button size="xs" color="primary">
                    Send booking
                  </Button>

                </CardFooter>

              </form>
            </Card>
            </GridItem>
      </GridContainer>

    );
  };