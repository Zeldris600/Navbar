import React from 'react';
import { Link } from 'react-router-dom';
import "../assets/CSS/signup.css";
import { Icon, SmallCloseIcon } from "@chakra-ui/icons";
import {
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  IconButton,
  Button,
  Checkbox,
} from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
import Signup from './signup';

const Login = () => {
  return (
    <div className="container">
    <div className="main-box">
      <section className="header">
        <div className="min-header1">
          <h1>Log in</h1>

          <SmallCloseIcon className="x-icon" />
        </div>
        <Button variant='outline' className="button" leftIcon={<FcGoogle/>}>
          Sign up with Google
        </Button>
        <div className="horizon">
        <hr />
        </div>
       
      </section>

      <div className="form-body">
        <FormControl>
          
          <FormLabel>Email</FormLabel>
          <Input type="email" />
          <FormLabel>Password</FormLabel>
          <Input type="password" />
          {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
          <div className="horizon"><hr /></div>
          <div className="check">
            <Checkbox defaultChecked>Remember Me</Checkbox>
          </div>

          <br />
          <Button colorScheme="blue">Log in</Button>
           <div className="horizon"> <hr /></div>
         
          <div className="footer">
            <h6>Don't have an account? </h6>
          <Link to="/signup">Sign up</Link>
          </div>
        </FormControl>
      </div>
    </div>
  </div>
  )
}

export default Login();