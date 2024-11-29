import "./DateSelector.css"; 
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker"
import { useState } from "react";
import { useDate } from "../../Context";
export const DateSelector=({placeholder,checkInType})=>{
    const { checkInDate, checkOutDate, dateDispatch } = useDate();

    const handleDateChange = (date) => {
      dateDispatch({
        type: checkInType === "in" ? "CHECK_IN" : "CHECK_OUT",
        payload: date,
      });
    };
    const handleDateFocus = () => {
        dateDispatch({
          type: "DATE_FOCUS",
        });
      };
  
  
    return (
        <DatePicker c className="search-dest input"
        selected={checkInType === "in" ? checkInDate : checkOutDate}
        onChange={(date) => handleDateChange(date)}
        dateFormat="dd/MM/yyyy" 
        onFocus={handleDateFocus}
        placeholderText="Add Date"
        closeOnScroll={true}/>

      
    )
}