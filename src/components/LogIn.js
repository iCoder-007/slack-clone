import { Button } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import { auth, provider } from "../firebase";

function LogIn() {
  const signIn = (e) => {
    e.preventDefault();
    auth.signInWithPopup(provider).catch((error) => {
      alert(error.message);
    });
  };
  return (
    <LogInContainer>
      <LogInInnerContainer>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7xufYmPj4AK4uDlNiVX8budeluCaUa_OwPEbHpXbHDytZUQfRZkbCzCGaFFYdm60qxi0&usqp=CAU"
          alt=""
        />
        <h1>Sign in to the Slack </h1>
        <p>saurabh.slack.com</p>
        <Button onClick={signIn}>Sign in with Google</Button>
      </LogInInnerContainer>
    </LogInContainer>
  );
}

export default LogIn;

const LogInContainer = styled.div`
  background-color: #f8f8f8;
  height: 100vh;
  display: grid;
  place-items: center;
`;
const LogInInnerContainer = styled.div`
  padding: 100px;
  text-align: center;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24) > img {
    object-fit: contain;
    height: 100px;
    margin-bottom: 40px;
  }
  button {
    margin-top: 50px;
    text-transform: inherit !important;
    background-color: #0a8648 !important;
    color: white;
  }
`;
