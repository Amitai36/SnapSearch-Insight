import { AppBar, Button, Toolbar } from "@mui/material";
import ChangeLang from "../components/ChangeLang";
import DarkMode from "../components/DarkMode";
import { ReactNode } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Search from "../components/Search";
import { Image } from "@mui/icons-material";
interface MainBarProps {
  children?: ReactNode;
}
function MainBar(props: MainBarProps) {
  const components = props?.children;
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const buttons = [
    <Button onClick={() => navigate("/")} size="large">
      <Image fontSize="large" />
      Discovery
    </Button>,
    <ChangeLang />,
    <DarkMode />,
  ];
  return (
    <AppBar
      sx={{
        backdropFilter: "blur(1px)",
        backgroundColor: "transparent",
        height: "10%",
      }}
    >
      <Toolbar>
        {buttons.map((button) => (
          <div style={{ marginInline: "10px" }}>{button}</div>
        ))}
        {pathname !== "/" && <Search />}
        {components}
      </Toolbar>
    </AppBar>
  );
}

export default MainBar;
