import { Link, Outlet } from "react-router-dom";

export const Page1 = () => {
  return (
    <div>
      <h1>Page1です</h1>
      <Link to="/Page1/detailA">DetailA</Link>
      <br />
      <Link to="/Page1/detailB">DetailB</Link>
      <Outlet />
    </div>
  );
};
