import styled from "styled-components";
import React from "react";
import { Avatar } from "@material-ui/core";
import { AccessTime } from "@material-ui/icons";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
const Header = () => {
  const [user]= useAuthState(auth);

  return (
    <HeaderContainer>
      <HeaderLeft >
        <HeaderAvatar onClick={()=>auth.signOut()} src={user?.photoURL} alt={user?.displayName}/>
        <AccessTime />
      </HeaderLeft>
      <HeaderSearch>
        <SearchIcon />
        <input type="text" placeholder="Search Community" />
      </HeaderSearch>
      <HeaderRight>
        <HelpOutlineIcon />
      </HeaderRight>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  position: fixed;
  color: white;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  background-color: var(--slack-color);
`;
const HeaderLeft = styled.div`
  flex: 0.3;
  display: flex;
  align-items: center;
  margin-left: 20px;
  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 30px;
  }
`;
const HeaderAvatar = styled(Avatar)`
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`;
const HeaderSearch = styled.div`
  flex: 0.4;
  opacity: 1;
  border-radius: 6px;
  background-color: #421f44;
  text-align: center;
  display: flex;
  padding: 0 50px;
  color: grey;
  border: 1px grey solid;
  > input {
    background-color: transparent;
    border: none;
    text-align: center;
    max-width: 30vw;
    color: white;
    outline: 0;
  }
`;
const HeaderRight = styled.div`
  flex: 0.3;
  display: flex;
  align-items: flex-end;
  .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 30px;
  }
`;
