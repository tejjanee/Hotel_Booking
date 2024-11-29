import { Fragment, useEffect, useState } from "react"
import InfiniteScroll from "react-infinite-scroll-component";
import { HotelCard, Navbar,Categories, SearchStayWithDate,Filter, AuthModal, ProfileDropDown, Alert } from "../../components"
import "./Home.css"
import axios from "axios"
import { useAuth, useCategory, useDate, useFilter } from "../../Context";
import { getHotelsByCancelation, getHotelsByPrice,  getHotelsByPropertyType,  getHotelsByRatings,  getHotelsByRoomsAndBeds } from "../../utils";
import { useAlert } from "../../Context/alert-context";



export const Home=()=>{
    const [hotels,setHotels]=useState([])
    const [hasMore,setHasMore]=useState(true)
    const [currentIndex,setCurrentIndex]=useState(16);
    const { hotelCategory } = useCategory();
    const [testData,setTestData]=useState([]);
    const {isSearchModalOpen}=useDate();
    const {
      isFilterModalOpen,
      priceRange,
      noOfBathrooms,
      noOfBedrooms,
      noOfBeds,
      propertyType,
      traveloRating,
      isCancelable,
    } = useFilter();
    const { isAuthModalOpen, isDropDownModalOpen } = useAuth();
    // const { alert } = useAlert();



       useEffect(() => {
      (async () => {
        try {
          const { data } = await axios.get(
            `https://deploy-five-chi.vercel.app/api/hotels?category=${hotelCategory}`
          );
  
          setTestData(data);
          setHotels(data ? data.slice(0, 16) : []);
        } catch (err) {
          console.log(err);
        }
      })();
    }, [hotelCategory]);

    const fetchMoreData = () => {
        if (hotels.length >= testData.length) {
          setHasMore(false);
          return;
        }
        setTimeout(() => {
          if (hotels && hotels.length > 0) {
            setHotels(
              hotels.concat(testData.slice(currentIndex, currentIndex + 16))
            );
            setCurrentIndex((prev) => prev + 16);
          } else {
            setHotels([]);
          }
        }, 1000);
      };
      // filtering
       const filteredHotelsByPrice = getHotelsByPrice(hotels, priceRange);
       const filteredHotelsByBedsAndRooms = getHotelsByRoomsAndBeds(
        filteredHotelsByPrice,
        noOfBathrooms,
        noOfBedrooms,
        noOfBeds
      );
      const filteredHotelsByPropertyType = getHotelsByPropertyType(
        filteredHotelsByBedsAndRooms,
        propertyType
      );
    
      const filteredHotelsByRatings = getHotelsByRatings(
        filteredHotelsByPropertyType,
        traveloRating
      );
    
      const filteredHotelsByCancelation = getHotelsByCancelation(
        filteredHotelsByRatings,
        isCancelable
      );

    return (
        <Fragment>
        
         <Navbar route="home"/> 

         <Categories/>
        
      
         {/* hotelCard */}

        {hotels && hotels.length > 0 ?(<InfiniteScroll 
        dataLength={hotels.length}
        hasMore={hasMore}
        loader={ hotels.length > 0 && <h3 className="alert-text">Loading...</h3>}
        next={fetchMoreData}
        endMessage={<p className="alert-text">You have seen it all</p>}>

<main className="main d-flex align-center wrap gap-larger">
            {filteredHotelsByCancelation&&
             filteredHotelsByCancelation.map((hotel) => (
                <HotelCard key={hotel._id} hotel={hotel} />
              ))}
              </main>
        </InfiniteScroll> ):(<></>)}

           {isSearchModalOpen && <SearchStayWithDate />}
           { isFilterModalOpen && <Filter/>}
           {isAuthModalOpen && <AuthModal />}
           {isDropDownModalOpen && <ProfileDropDown />}
             {/* <Alert /> */}

        </Fragment>
       
    )
}
