import { SearchOff } from "@mui/icons-material";
import { Button, InputAdornment, TextField } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { useHotkeys } from "react-hotkeys-hook";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";

interface SearchProps {
  inputRef?: React.MutableRefObject<null>;
}

function Search(props: SearchProps) {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = React.useRef<HTMLInputElement>();

  useEffect(() => {
    inputRef.current?.focus();
  }, [inputRef.current]);

  const setTextInputRef = (element: HTMLInputElement) => {
    inputRef.current = element;
  };
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const dir = i18n.dir();
  const searchLable = t("searchImage");
  const [value, setValue] = useState("");

  useHotkeys("ctrl+i", () => {
    if (inputRef.current) {
      setIsFocused(true);
      inputRef?.current.focus();
    }
  });
  useEffect(() => {
    if (isFocused) console.log(inputRef?.current);
  }, [isFocused]);
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
          ref={(setTextInputRef) => {
            if (setTextInputRef) {
              setTextInputRef.focus();
            }
          }}
          onFocus={() => {
            setIsFocused(true);
          }}
          onBlur={() => setIsFocused(false)}
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
