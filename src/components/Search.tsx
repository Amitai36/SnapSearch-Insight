import { SearchOff } from "@mui/icons-material";
import { Button, InputAdornment, TextField } from "@mui/material";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";

function Search() {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const dir = i18n.dir();
  const searchLable = t("searchImage");
  const [value, setValue] = useState("");

  const handleSearch = () => {
    navigate(`search?element=${value}&page=${1}`);
  };
  const { pathname } = useLocation();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyItems: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          boxShadow: pathname === "/" ? "0px 0px 20px 20px grey" : undefined,
        }}
      >
        <TextField
          label={searchLable}
          InputLabelProps={{ shrink: true }}
          onKeyDown={(e) => {
            if (e.key === "Enter" && value) {
              handleSearch();
            }
          }}
          size="small"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position={dir === "ltr" ? "start" : "end"}>
                <Button disabled={!value} size="small" onClick={handleSearch}>
                  <SearchOff />
                </Button>
              </InputAdornment>
            ),
          }}
        />
      </div>
    </div>
  );
}

export default Search;
