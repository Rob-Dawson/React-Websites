const initialItems = [
  { id: 1, description: "Passport", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];

export default function PackageList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((items) => (
          <Item items={items} />
        ))}
      </ul>
    </div>
  );
}

function Item({ items }) {
  return <li>{items.description}</li>;
}
