import "babel-polyfill";
import { CameraAlt, Mic, MicNone, SearchOff } from "@mui/icons-material";
import { Button, InputAdornment, TextField } from "@mui/material";
import React, { useEffect } from "react";
import { useHotkeys } from "react-hotkeys-hook";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import DialogComponent from "./DialogComponent";
import Camera from "./Camera";

function Search() {
  const inputRef = React.useRef<HTMLInputElement>();
  const {
    transcript,
    resetTranscript,
    finalTranscript,
    browserSupportsSpeechRecognition,
    listening,
  } = useSpeechRecognition();

  const startListening = () => {
    if (transcript) {
      resetTranscript();
    }
    SpeechRecognition.startListening({ language: i18n.language });
  };
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const dir = i18n.dir();
  const searchLable = t("searchImage");
  const [value, setValue] = React.useState("");
  const [openCam, setOpenCam] = React.useState(false);

  useHotkeys("ctrl+i", () => {
    if (inputRef.current) {
      inputRef?.current.focus();
    }
  });
  const handleSearch = () => {
    navigate(`search?element=${value}&page=${1}`);
  };

  useEffect(() => {
    setValue(transcript);
    if (finalTranscript) {
      handleSearch();
    }
  }, [i18n, transcript, finalTranscript]);

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
          justifyItems: "center",
        }}
      >
        <TextField
          placeholder="crtl + i"
          inputRef={inputRef}
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
                {browserSupportsSpeechRecognition && (
                  <Button
                    sx={{
                      position: "relative",
                      animation: "paused infinite 2s",
                    }}
                    onClick={startListening}
                  >
                    {!listening ? (
                      <Mic />
                    ) : (
                      <MicNone
                        sx={{
                          animation: "pulse 1s infinite alternate",
                          "@keyframes pulse": {
                            from: { transform: "scale(1)" },
                            to: { transform: "scale(1.2)" },
                          },
                        }}
                      />
                    )}
                  </Button>
                )}
                <Button onClick={() => setOpenCam(true)}>
                  <CameraAlt />
                </Button>
              </InputAdornment>
            ),
          }}
        />
      </div>
      {openCam && (
        <DialogComponent
          open={openCam}
          setOpen={setOpenCam}
          title={{ color: "red", text: "camera" }}
          content={<Camera setOpenCam={setOpenCam} />}
        />
      )}
    </div>
  );
}

export default Search;
