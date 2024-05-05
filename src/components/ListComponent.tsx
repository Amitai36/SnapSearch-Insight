import { List, ListItem, ListItemText } from "@mui/material";
import React from "react";

interface ListComponentProps {
  listItems: { key: string[]; value: string[] } | undefined;
}

function ListComponent(props: ListComponentProps) {
  const { listItems } = props;
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <List sx={{ height: "100%", width: "100%", display: "block" }}>
        {listItems?.value?.map((item, index) => (
          <ListItem sx={{ width: "100%" /*  flexWrap: "nowrap" */ }} key={item}>
            <ListItemText
              sx={{ textAlign: "start", marginInline: "2%", width: "100%" }}
              primary={listItems.key[index]}
            />
            <ListItemText primary={item} sx={{ textAlign: "end" }} />
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default ListComponent;
