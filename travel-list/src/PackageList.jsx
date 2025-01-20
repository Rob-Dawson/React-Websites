const initialItems = [
  { id: 1, description: "Passport", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Shirt", quantity: 12, packed: false },
  { id: 4, description: "Phone", quantity: 1, packed: false },
  { id: 5, description: "Wallet", quantity: 1, packed: true },
];

export default function PackageList({ items }) {
  return (
    <div className="list">
      <ul>
        {items.map((items) => (
          <Items items={items} key={items.id} />
        ))}
      </ul>
    </div>
  );
}

function Items({ items }) {
  return (
    <li>
      {/* style={{marginRight: spacing + 'em'}} */}
      <span style={items.packed ? { textDecoration: "line-through" } : {}}>
        {items.quantity} {items.description}
      </span>
      <button>❌</button>
    </li>
  );
}
