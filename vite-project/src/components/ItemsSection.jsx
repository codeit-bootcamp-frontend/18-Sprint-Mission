import Item from "./Item";
import "./ItemsSection.css";

function ItemsSectionHeader({ title, children }) {
  return (
    <div className="ItemsSectionHeader">
      <h2 className="ItemsSectionHeader-title">{title}</h2>
      {children && (
        <div className="ItemsSectionHeader-controls">{children}</div>
      )}
    </div>
  );
}

function ItemsSectionContent({ items, numberOfColumns }) {
  return (
    <div
      className="ItemsSectionContent"
      style={{
        gridTemplateColumns: `repeat(${numberOfColumns}, 1fr)`,
      }}
    >
      {items.map((product) => (
        <Item
          key={product.id}
          imageUrl={product.images[0]}
          title={product.name}
          price={product.price}
          likeCount={product.favoriteCount}
        />
      ))}
    </div>
  );
}

function ItemsSection({ spacing = 16, children }) {
  return (
    <section className="ItemsSection" style={{ gap: spacing }}>
      {children}
    </section>
  );
}

export { ItemsSection, ItemsSectionContent, ItemsSectionHeader };
