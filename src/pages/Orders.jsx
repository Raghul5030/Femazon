const orders = [
  {
    id: "FMZ12345",
    date: "19 Dec 2025",
    total: 1899,
    status: "Delivered",
    items: ["Liquid Foundation", "Matte Lipstick"]
  },
  {
    id: "FMZ12346",
    date: "22 Dec 2025",
    total: 799,
    status: "Processing",
    items: ["Blush Palette"]
  }
];

export default function Orders() {
  return (
    <div className="orders-page">
      <h1>My Orders</h1>

      {orders.map(order => (
        <div key={order.id} className="order-card">
          <div className="order-top">
            <span>Order #{order.id}</span>
            <span>{order.status}</span>
          </div>

          <p>Date: {order.date}</p>
          <p>Items: {order.items.join(", ")}</p>
          <p><strong>Total: ₹{order.total}</strong></p>
        </div>
      ))}
    </div>
  );
}
