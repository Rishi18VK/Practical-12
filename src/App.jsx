import { BrowserRouter, Routes, Route, NavLink, Outlet, Navigate } from "react-router-dom";
const data = {
  current: [{ id: 101, item: "Laptop", amt: 55000 }, { id: 102, item: "Headphones", amt: 2500 }],
  history: [{ id: 90, item: "Keyboard", amt: 1500 }, { id: 91, item: "Mouse", amt: 700 }],
  cancelled: [{ id: 80, item: "Monitor", amt: 12000 }],
};
const OrderList = ({ type }) => (
  <ul>
    {data[type].map((o) => (
      <li key={o.id}><span>#{o.id} {o.item}</span><b>Rs. {o.amt}</b></li>
    ))}
  </ul>
);
function Orders() {
  return (
    <div className="card">
      <h2>Orders</h2>
      <nav>
        <NavLink to="current">Current Orders</NavLink>
        <NavLink to="history">Order History</NavLink>
        <NavLink to="cancelled">Cancelled Orders</NavLink>
      </nav>
      <Outlet />
    </div>
  );
}
export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <h1>Order Management</h1>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/orders">Orders</NavLink>
        </nav>
        <Routes>
          <Route path="/" element={<div className="card"><h2>Home</h2><p>Open Orders to see nested routes.</p></div>} />
          <Route path="/orders" element={<Orders />}>
            <Route index element={<Navigate to="current" replace />} />
            <Route path="current" element={<OrderList type="current" />} />
            <Route path="history" element={<OrderList type="history" />} />
            <Route path="cancelled" element={<OrderList type="cancelled" />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
