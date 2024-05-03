import { List, ListItem, ListItemText } from "@mui/material";

interface ListComponentProps {
  listItems: { key: string[]; value: string[] } | undefined;
}

function ListComponent(props: ListComponentProps) {
  const { listItems } = props;
  return (
    <div style={{ height: "100%" }}>
      <List sx={{ height: "100%" }}>
        {listItems?.value?.map((item, index) => (
          <ListItem sx={{ flexWrap: "nowrap" }} key={item}>
            <ListItemText
              sx={{ textAlign: "start", marginInline: "2%" }}
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
