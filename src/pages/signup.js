import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Icon, SmallCloseIcon } from '@chakra-ui/icons';
import '../assets/CSS/signup.css';
import {
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  IconButton,
  Button,
  Checkbox,
} from '@chakra-ui/react';
import { FcGoogle } from 'react-icons/fc';

export const Signup = () => {
  /*  const [name,setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [name]


  const GetName = (e)=>{
    e.preventDefault();
    let userInput = e.target.value;
    setName(userInput)
    console.log(userInput);
  }

  const GetEmail = (e)=>{
    e.preventDefault();
    let userEmail = e.target.value;
    setEmail(userEmail);
    console.log(userEmail);
  }
  const GetPassword = (e)=>{
    e.preventDefault();
    let userPassword = e.target.value;
    setPassword(userPassword);
    console.log(userPassword);
  }
  const User = {
    Name: name,
    Email: email,
    password: password
  }
  const HandleSubmit = (e)=>{
  e.preventDefault();
  localStorage.setItem('UserData', JSON.stringify(User))

  } */
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    console.log(name, email, password);
    localStorage.setItem('user-data', {
      name,
      email,
      password,
    });
  };

  return (
    <div className="container">
      <div className="main-box">
        <section className="header">
          <div className="min-header1">
            <h1>Sign up</h1>

            <SmallCloseIcon className="x-icon" />
          </div>
          <Button variant="outline" className="button" leftIcon={<FcGoogle />}>
            Sign up with Google
          </Button>
          <div className="horizon">
            <hr />
          </div>
        </section>

        <div className="form-body">
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input type="text" onChange={(e) => setName(e.target.value)} />
            <FormLabel>Email</FormLabel>
            <Input type="email" onChange={(e) => setEmail(e.target.value)} />
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              onChange={(e) =>
                setPassword(e.target.value)
              } /* onChange={GetPassword} */
            />
            {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
            <div className="horizon">
              <hr />
            </div>
            <div className="check">
              <Checkbox defaultChecked>
                I agree with <Link to="/terms">Terms</Link> and{' '}
                <Link to="/privacy">Privacy</Link>
              </Checkbox>
            </div>

            <br />
            <Button
              onClick={handleSubmit}
              colorScheme="blue" /* onSubmit={HandleSubmit} */
            >
              Sign Up
            </Button>
            <div className="horizon">
              {' '}
              <hr />
            </div>

            <div className="footer">
              <h6>Already have an account? </h6>
              <Link to="/login">Log in</Link>
            </div>
          </FormControl>
        </div>
      </div>
    </div>
  );
};

// export default Signup(); -> This is what u had before
