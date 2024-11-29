export const getHotelsByRoomsAndBeds = (
    hotels,
    noOfBathrooms,
    noOfBedrooms,
    noOfBeds
  ) => {
    if (noOfBathrooms === "Any" || noOfBedrooms === "Any" || noOfBeds === "Any")
      return hotels;
    console.log(noOfBathrooms)
    const filteredHotels = hotels.filter(
      ({ numberOfBathrooms, numberOfBedrooms, numberOfBeds }) =>
        numberOfBathrooms === noOfBathrooms ||
        numberOfBedrooms === noOfBedrooms ||
        numberOfBeds === noOfBeds
    );
    return filteredHotels;
  };