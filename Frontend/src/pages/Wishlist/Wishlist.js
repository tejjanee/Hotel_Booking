import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar, HotelCard, ProfileDropDown, AuthModal } from "../../components";
import { useWishlist, useAuth } from "../../Context";
import "./Wishlist.css";
// import { fetchWishlist } from "../../services";


export const Wishlist = () => {
  const { wishlist } = useWishlist();
  const { accessToken, authDispatch } = useAuth();
  const { isAuthModalOpen, isDropDownModalOpen } = useAuth();

    const navigate = useNavigate();


  const handleClickHereClick = () => {
    navigate("/")
  }

  return (
    <Fragment>
      <Navbar route="wishlist" />
      <h2 className="heading-2 d-flex justify-center">Your Wishlist</h2>
      {
        wishlist.length > 0 ? <section className="wishlist-page d-flex align-center wrap gap-larger">
          {wishlist &&
            wishlist.map((hotel) => <HotelCard key={hotel._id} hotel={hotel} />)}
        </section> : <p className="d-flex justify-center">Wishlist Empty. &nbsp;<span className="click-here" onClick={handleClickHereClick}>Click here </span> &nbsp; to add to wishslit</p>
      }
      {isDropDownModalOpen && <ProfileDropDown />}
      {isAuthModalOpen && <AuthModal />}

    </Fragment>
  );
};