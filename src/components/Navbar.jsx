import "./Navbar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useTheme } from "../context/ThemeContext";

function Navbar() {
  const count = useSelector(state =>
    state.cart.items.reduce(
      (sum, item) => sum + item.quantity,
      0
    )
  );

  const { theme, toggleTheme } = useTheme();

  return (
  <nav>
    <Link to="/">
      🛍 QuickCart
    </Link>

    <Link to="/cart">
      🛒 Cart ({count})
    </Link>

    <button onClick={toggleTheme}>
      {theme === "light" ? "🌙 Dark" : "☀ Light"}
    </button>
  </nav>
);
}

export default Navbar;