import { Route, Routes } from "react-router-dom";
import './App.css';
import { OrderSummary, Payment, SearchResults, SingleHotel, Wishlist } from './pages';
import {Home}from "./pages"
import { Filter } from "./components/Filters/Filter";
import { AuthModal } from "./components";
function App() {
  return (
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/hotels/:name/:address/:id/reserve" element={<SingleHotel />}/>
    <Route path="/hotels/:address" element={<SearchResults />} />
    <Route path="/filters" element ={<AuthModal/>}/>
    <Route path="/wishlists" element={<Wishlist/>} />
    <Route path="/confirm-booking/stay/:id" element={<Payment />} />
    <Route path="/order-summary" element={<OrderSummary />} />
   </Routes>
  );
}

export default App;
