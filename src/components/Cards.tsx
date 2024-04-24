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
import { MenuItem, Menu } from "@mui/material";
import moment from "moment";

import { Results } from "../api/images/types";
import LongTextComponent from "./LongTextComponent";
import { Link, useNavigate } from "react-router-dom";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  //   const { expand, ...other } = props;
  const { ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function CardsToDisplayImages({ res }: { res: Results }) {
  const user = res.user;
  const creatorName = user.last_name + " " + user.first_name;
  const userPortfolio = res.user.social?.portfolio_url;
  const [expanded, setExpanded] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [location, setLocation] = React.useState(false);
  const navigate = useNavigate();
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
                <MoreVertIcon />
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
                <MenuItem onClick={handleClose}>More details</MenuItem>
                {userPortfolio && (
                  <MenuItem
                    onClick={() => {
                      handleClose();
                      window.open(userPortfolio, "_blank");
                    }}
                  >
                    portfolio
                  </MenuItem>
                )}
                <MenuItem LinkComponent={Link}   onClick={handleClose()}>
                  location
                </MenuItem>
              </Menu>
            </>
          }
          title={creatorName}
          subheader={moment(res.created_at).format("YYYY MMM DD")}
        />
        <CardMedia
          component="img"
          height="300"
          image={res.urls.small}
          alt={res.alt_description}
        />
        <CardContent sx={{ maxHeight: "90px", height: "90px" }}>
          <Typography variant="body2" color="text.secondary">
            {<LongTextComponent text={res?.description ?? ""} />}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          {res.tags.length > 0 && (
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
            {res.tags.map((tag) => (
              <Typography>{tag?.source?.description}</Typography>
            ))}
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
}
