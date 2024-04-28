import Search from "../../components/Search";
import { Box } from "@mui/material";

function SearchToDisplay() {
  return (
    <div
      style={{
        height: "100%",
        backgroundImage: "url(../../../public/home_page.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "calc(100vh - 12%)",
        }}
      >
        <Search />
      </Box>
    </div>
  );
}

export default SearchToDisplay;
