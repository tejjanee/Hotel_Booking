// import axios from "axios";


// export const createWishlistHandler = async (hotelId, accessToken) => {
//   try {
//     const response = await axios.post(
//       "https://deploy-five-chi.vercel.app/api/wishlist",
//       {
//         hotelId: hotelId,
//       },
//       {
//         headers: {
//           Authorization: `Bearer ${accessToken}`,
//         },
//       }
//     );
//     console.log("Wishlist created successfully:", response.data);
//   } catch (err) {
//     console.log("Error creating wishlist:", err.response ? err.response.data : err.message);
//   }
// };




// // Function to fetch the wishlist data and update the provided wishlist array
// export const fetchWishlist = async (accessToken, wishlist) => {
//   try {
//     const response = await axios.get(
//       "https://deploy-five-chi.vercel.app/api/wishlist",
//       {
//         headers: {
//           Authorization: `Bearer ${accessToken}`,
//         },
//       }
//     );
//     const fetchedWishlist = response.data;

//     // Assuming wishlist is an array, you can directly push or append items to it
//     fetchedWishlist.forEach((item) => {
//       wishlist.push(item);
//     });

//     console.log("Fetched Wishlist:", fetchedWishlist);
//     console.log("Updated Wishlist:", wishlist); // Updated wishlist array

//     // No need to return wishlist, as it is updated directly
//   } catch (err) {
//     console.log("Error fetching wishlist:", err.response ? err.response.data : err.message);
//     // Handle error if needed
//   }
// };

// export const deleteWishlistHandler = async (id,accessToken) => {
//   try {
//     const response = await axios.delete(
//       `https://deploy-five-chi.vercel.app/api/wishlist/${id}`,
//       {
//         headers: {
//           Authorization: `Bearer ${accessToken}`,
//         },
//       }
//     );
//     if (response.status === 200) {
//       // Remove item from wishlist in frontend state
//       wishlistDispatch({ type: "REMOVE_FROM_WISHLIST", payload: id });
//       console.log("Item deleted successfully");
//     }
//   } catch (error) {
//     console.error("Error deleting wishlist item:", error);
//     // Handle error
//   }
// };
