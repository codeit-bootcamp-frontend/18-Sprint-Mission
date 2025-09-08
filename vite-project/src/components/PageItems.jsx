import ListItem from "./ListItem";
import "./ListItem.css";

function PageItems({ items }) {
  console.log(items);
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
