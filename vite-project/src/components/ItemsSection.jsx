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

function ItemsSectionContent({ numberOfColumns, children }) {
  return (
    <div
      className="ItemsSectionContent"
      style={{
        gridTemplateColumns: `repeat(${numberOfColumns}, 1fr)`,
      }}
    >
      {children.map((child) => (
        <div className="ItemsSectionContent-item">{child}</div>
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
