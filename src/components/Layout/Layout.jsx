import { useContext, useState } from "react";
import { Outlet } from "react-router-dom";
import { ThemeContext } from "../../contexts/ThemeContext/ThemeContext";
import { Footer } from "../Footer/Footer";
import Navigation from "../Navigation/Navigation";
import styled from "styled-components";

const Layout = () => {
  const theme = useContext(ThemeContext);
  const [styles, setStyles] = useState(null);
  const [checked, setChecked] = useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
    if (checked) {
      setStyles({
        backgroundColor: theme.primary.main,
        color: theme.primary.text,
      });
    } else {
      setStyles({
        backgroundColor: theme.secondary.main,
        color: theme.secondary.text,
      });
    }
  };

  return (
    <Main className="App" style={styles}>
      <Navigation handleChange={handleChange} checked={checked} />
      <Outlet />
      <Footer />
    </Main>
  );
};

export default Layout;

const Main = styled.main`
  width: 100%;
  height: 100%;
`;
