import ListItem from "./ListItem";
import "./ListItem.css";
import { Items } from "../api/api";
interface Props {
  items: Items[];
}
function PageItems({ items }: Props) {
  return (
    <ul className="item">
      {items.map((item) => {
        return (
          <li key={item.id}>
            <ListItem item={item} />
          </li>
        );
      })}
    </ul>
  );
}
export default PageItems;
