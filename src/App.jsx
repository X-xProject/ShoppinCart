import { Routes, Route } from "react-router-dom";
import { useTheme } from "./context/ThemeContext";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./components/ErrorFallback";

import './index.css';
function App() {
    const { theme } = useTheme();

  return (
    
      <div className={theme}>
  <Navbar />

  <main>
    <Routes>
      <Route path="/" element={<Home />} />

      <Route
        path="/product/:id"
        element={
          <ErrorBoundary
            FallbackComponent={ErrorFallback}
          >
            <ProductDetail />
          </ErrorBoundary>
        }
      />

      <Route path="/cart" element={<Cart />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </main>
</div>
   
  );
}

export default App;