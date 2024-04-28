import { Translate } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import DialogComponent from "./DialogComponent";
import ReactCountryFlag from "react-country-flag";

function ChangeLang() {
  const languages = [
    {
      code: "en",
      lang: "english",
      icon: (
        <ReactCountryFlag
          style={{ fontSize: 25 }}
          svg
          countryCode="US"
          className="emojiFlag"
        />
      ),
    },
    {
      code: "he",
      lang: "hebrow",
      icon: (
        <ReactCountryFlag
          style={{ fontSize: 25 }}
          svg
          countryCode="IL"
          className="emojiFlag"
        />
      ),
    },
    {
      code: "fr",
      lang: "French",
      icon: (
        <ReactCountryFlag
          style={{ fontSize: 25 }}
          svg
          countryCode="Fr"
          className="emojiFlag"
        />
      ),
    },
  ];
  const [openDialog, setOpenDialog] = useState(false);
  const { i18n, t } = useTranslation();
  const dialogTitle = t("titleChangeDialog");

  const handleClick = (langCode: string) => {
    i18n.changeLanguage(langCode);
  };
  useEffect(() => {
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
            {language.icon}
            {language.lang}
          </Button>
        ))}
      />
    </div>
  );
}

export default ChangeLang;
