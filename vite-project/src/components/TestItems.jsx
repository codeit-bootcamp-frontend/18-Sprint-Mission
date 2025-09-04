export function ListItem({ item }) {
  return (
    <div>
      <p>{item.createdAt}</p>
      <p>{item.price}</p>
      <p>{item.name}</p>
      <p>{item.favoriteCount}</p>
      <img src={item.images} />
    </div>
  );
}

function TestItems({ items }) {
  console.log(items);
  return (
    <ul>
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
export default TestItems;
