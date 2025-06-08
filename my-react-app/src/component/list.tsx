import { List, ListItem, ListItemText } from "@mui/material";
import { v4 as uuidv4 } from "uuid";

export type ListItemType = {
  primary: string;
  secondary: string;
};

type ListProps = {
  items: Array<ListItemType>;
};

function ListBasic({ items }: ListProps) {
  return (
    <List>
      {items.map((item: ListItemType) => (
        <ListItem key={uuidv4()}>
          <ListItemText primary={item.primary} secondary={item.secondary} />
        </ListItem>
      ))}
    </List>
  );
}

export default ListBasic;
