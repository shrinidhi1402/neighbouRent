import NavBar from './components/NavBar'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import ListingsPage from './pages/ListingsPage'
import ItemDetailPage from './pages/ItemDetailPage'
import DashboardPage from './pages/DashboardPage'
import CreateListingPage from './pages/CreateListingPage'
import PrivateRoute from './components/PrivateRoute'
import CheckoutPage from './pages/CheckoutPage'
import ProfilePage from "./pages/ProfilePage";
import AdminPage from "./pages/AdminPage";
import HomePage from "./pages/HomePage";

export default function App() {
  const location = useLocation();
  const isLandingPage = location.pathname === '/';

  return (
    <div className="min-h-screen bg-gray-50">
      {!isLandingPage && <NavBar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/listings" element={<ListingsPage />} />
        <Route path="/items/:id" element={<ItemDetailPage />} />
        <Route path="/dashboard" element={<PrivateRoute><DashboardPage /></PrivateRoute>} />
        <Route path="/list-item" element={<PrivateRoute><CreateListingPage /></PrivateRoute>} />
        <Route path="/checkout" element={<PrivateRoute><CheckoutPage /></PrivateRoute>} />
        <Route path="/profile" element={<PrivateRoute><ProfilePage /></PrivateRoute>} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </div>
  );
}