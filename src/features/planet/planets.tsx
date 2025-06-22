import { useSelector } from "react-redux";
import ListBasic from "../../components/ui/list";

// @TODO typescript
export function Planets() {
  const { planets } = useSelector((state: any) => state.planets);
  console.log("planets", planets);

  const listItem = planets.map((planet: any) => ({
    primary: planet.name,
    secondary: planet.diameter,
  }));

  listItem.sort((a: { primary: string }, b: { primary: any }) =>
    a.primary.localeCompare(b.primary)
  );

  return <ListBasic items={listItem} />;
}
