import { Card, CardTitle, CardContent } from "./card";
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
    <Card className="flex flex-col gap-0 w-full">
      {items.map((item: ListItemType) => (
        <div key={uuidv4()} className="w-full p-2 border-b">
          <CardContent>
            <CardTitle>{item.primary}</CardTitle>
            <span className="text-muted-foreground text-sm">
              {item.secondary}
            </span>
          </CardContent>
        </div>
      ))}
    </Card>
  );
}

export default ListBasic;
