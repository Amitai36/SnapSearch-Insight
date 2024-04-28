import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { MenuItem, Menu, Button } from "@mui/material";
import moment from "moment";
import "moment/dist/locale/he";
import "moment/dist/locale/fr";
import "moment/dist/locale/ja";
import "moment/dist/locale/da";
import "moment/dist/locale/es";
import "moment/dist/locale/it";
import "moment/dist/locale/ko";
import "moment/dist/locale/pt";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { Results } from "../api/images/types";
import LongTextComponent from "./LongTextComponent";
import Sharing from "./Sharing";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  //   const { expand, ...other } = props;
  const { expand, ...other } = props;
  return <IconButton aria-expanded={expand} {...other} />;
})(({ theme, expand }) => {
  return {
    transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  };
});

export default function CardsToDisplayImages({ res }: { res: Results }) {
  const trans = useTranslation();
  const photoStatistics = trans.t("photoStatistics");
  const userStatistics = trans.t("userStatistics");
  const portfolio = trans.t("portfolio");
  const location = trans.t("location");
  const language = trans.i18n.language;
  moment.locale(language);
  const alt =
    res.alternative_slugs[
      trans.i18n.language as keyof Results["alternative_slugs"]
    ]?.replace(/-/g, " ") ?? res.alt_description;

  const createdAt = res.created_at;
  const user = res.user;
  const userPortfolio = res.user.social?.portfolio_url;
  const [expanded, setExpanded] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [share, setShare] = React.useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div style={{ height: "100%" }}>
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={<Avatar src={user.profile_image.small} />}
          action={
            <>
              <IconButton aria-label="settings" onClick={handleClick}>
                {!user.location && pathname !== "/search" ? (
                  ""
                ) : (
                  <MoreVertIcon />
                )}
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              >
                {pathname === "/search" && (
                  <div>
                    <MenuItem
                      onClick={() => {
                        handleClose();
                        navigate(`photoStatistics/${res.id}`, {
                          state: { url: res.urls.regular },
                        });
                      }}
                    >
                      {photoStatistics}
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        handleClose();
                        navigate(`/userStatistics/${user.username}`);
                      }}
                    >
                      {userStatistics}
                    </MenuItem>
                    {userPortfolio && (
                      <MenuItem
                        onClick={() => {
                          handleClose();
                          window.open(userPortfolio, "_blank");
                        }}
                      >
                        {portfolio}
                      </MenuItem>
                    )}
                  </div>
                )}
                {user.location && (
                  <MenuItem
                    onClick={() => {
                      handleClose();
                      navigate("/map", {
                        state: {
                          location: user.location ?? "",
                          description: alt,
                          title: res?.tags ? res.tags[0].title : "",
                          url: res.urls.thumb ?? "",
                        },
                      });
                    }}
                  >
                    {location}
                  </MenuItem>
                )}
              </Menu>
            </>
          }
          title={
            <Button
              sx={{ textAlign: "center", textWrap: "nowrap" }}
              disabled={pathname !== "/search"}
              onClick={() => navigate(`/userPhotos/${user.username}`)}
            >
              {user.name}
            </Button>
          }
          subheader={moment(createdAt).format("LL")}
        />
        <CardMedia
          component="img"
          height="300"
          image={res.urls.small}
          alt={alt}
        />
        <CardContent sx={{ maxHeight: "90px", height: "90px" }}>
          <Typography component="span" variant="body2" color="text.secondary">
            {<LongTextComponent text={alt ?? ""} />}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton onClick={() => setShare(!share)} aria-label="share">
            <ShareIcon />
          </IconButton>
          {res?.tags && res?.tags?.length > 0 && (
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          )}
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            {res?.tags?.map((tag, index) => (
              <Typography
                onFocus={() => console.log("f")}
                component="span"
                key={index}
              >
                {
                  tag?.source?.cover_photo?.alternative_slugs[
                    language as keyof Results["alternative_slugs"]
                  ]
                }
              </Typography>
            ))}
          </CardContent>
        </Collapse>
      </Card>
      {share && <Sharing open={share} setOpen={setShare} url={res.urls.full} />}
    </div>
  );
}
