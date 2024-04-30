import { Translate } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import DialogComponent from "./DialogComponent";
import ReactCountryFlag from "react-country-flag";

const languages = [
  { code: "en", lang: "English", countryCode: "US" },
  {
    code: "he",
    lang: "Hebrow",
    countryCode: "IL",
  },
  {
    code: "fr",
    lang: "French",
    countryCode: "FR",
  },
  {
    code: "ja",
    lang: "Japanese",
    countryCode: "JP",
  },
  {
    code: "da",
    lang: "German",
    countryCode: "DE",
  },
  {
    code: "es",
    lang: "spain",
    countryCode: "es",
  },
  {
    code: "it",
    lang: "Italian",
    countryCode: "It",
  },
  {
    code: "ko",
    lang: "Korean",
    countryCode: "Kr",
  },
  {
    code: "pt",
    lang: "Portuguese",
    countryCode: "pt",
  },
];
function ChangeLang() {
  const [openDialog, setOpenDialog] = React.useState(false);
  const { i18n, t } = useTranslation();
  const dialogTitle = t("titleChangeDialog");

  const handleClick = (langCode: string) => {
    i18n.changeLanguage(langCode);
  };
  React.useEffect(() => {
    document.body.dir = i18n.dir();
  }, [i18n, i18n.language]);

  return (
    <div>
      <Button variant="contained" onClick={() => setOpenDialog(!openDialog)}>
        <Translate />
      </Button>
      <DialogComponent
        open={openDialog}
        setOpen={setOpenDialog}
        title={{ text: dialogTitle, color: "info" }}
        content={languages.map((language, index) => (
          <Button
            variant={i18n.language === language.code ? "contained" : "text"}
            key={index}
            onClick={() => {
              handleClick(language.code);
              setOpenDialog(!openDialog);
            }}
          >
            <ReactCountryFlag
              style={{ fontSize: 25 }}
              svg
              countryCode={language.countryCode}
              className="emojiFlag"
            />
            {language.lang}
          </Button>
        ))}
      />
    </div>
  );
}

export default ChangeLang;
