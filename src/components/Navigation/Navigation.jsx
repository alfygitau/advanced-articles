import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import useAuth from "../../hooks/useAuth";
import { Toggle } from "../Toggle/Toggle";

const Navigation = ({ handleChange, checked }) => {
  const navigate = useNavigate();

  const { auth, setAuth } = useAuth() || {};

  // const user = auth?.user;
  const user2 = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    setAuth({});
  };

  const linkStyles = {
    textDecoration: "none",
    textTransform: "uppercase",
    marginRight: "20px",
  };

  return (
    <Wrapper>
      <Nav>
        <Logo>
          <Image>
            <img
              src="https://assets.website-files.com/60d9feb9c76d589e5bee9402/60da12b71d91fe9ed643dbb4_logo-course-x-template.svg"
              alt="logo"
            />
          </Image>
        </Logo>
        <Buttons>
          <Toggle handleChange={handleChange} checked={checked} />
          {user2 ? (
            <Button onClick={handleLogout}>Logout</Button>
          ) : (
            <Button onClick={(e) => navigate("/login")}>Login</Button>
          )}
          <Button onClick={(e) => navigate("/register")} data-testid="logout">
            Register
          </Button>
        </Buttons>
      </Nav>
      <Tabs>
        <NavLink data-testid="home" style={linkStyles} to="/">
          Home
        </NavLink>
        <NavLink style={linkStyles} to="/courses">
          Courses
        </NavLink>
        <NavLink style={linkStyles} to="/create-course">
          Create Course
        </NavLink>
        <NavLink style={linkStyles} to="/articles">
          Articles
        </NavLink>
        <NavLink style={linkStyles} to="/posts">
          Posts
        </NavLink>
        <NavLink style={linkStyles} to="/comments">
          Comments
        </NavLink>
        <NavLink style={linkStyles} to="/create">
          Create Article
        </NavLink>
        {user2 ? (
          <>
            <NavLink style={linkStyles} to="/profile">
              {user2.firstName}
            </NavLink>{" "}
          </>
        ) : (
          ""
        )}
      </Tabs>
    </Wrapper>
  );
};

export default Navigation;

const Nav = styled.div`
  width: 80%;
  height: 80px;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  align-items: center;
`;
export const Image = styled.span`
  color: rgb(47, 141, 70);
  font-size: 32px;
`;
const Tabs = styled.div`
  width: 80%;
  height: 80px;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  border-top: 1px solid rgb(47, 141, 70);
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 160px;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;
export const Button = styled.button`
  color: rgb(47, 141, 70);
  padding: 7px;
  background-color: white;
  border: 0.5px solid rgb(47, 141, 70);
  width: 160px;
  border-radius: 2px;
  margin-right: 20px;
  &:hover {
    background-color: rgb(47, 141, 70);
    color: white;
  }
`;
const Buttons = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
`;
const Logo = styled.div`
  display: flex;
  flex: 1;
`;
