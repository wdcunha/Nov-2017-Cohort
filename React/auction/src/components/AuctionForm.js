import React, { Component } from "react";
import DatePicker from "react-datepicker";
import moment from "moment";

import "react-datepicker/dist/react-datepicker.css";


function AuctionForm (props) {
  const {
    startDate = {},
    auction = {},
    onSubmit = () => {},
    onChange = () => {},
    onChangeDate = () => {},
    errors = []
  } = props;

  const handleSubmit = event => {
    event.preventDefault();

    onSubmit();

  };

  const handleChange = name => event => {
    onChange(
      {[name]: event.currentTarget.value});
  };

  const handleDateChange = date => event => {
    onChangeDate(
      date
    );
  };

  const renderError = () => errors.length > 0 ? (
    <ul>{
      errors
        .filter(e => e.field === 'auction')
        .map(e => <li>{e.message}</li>)
    }</ul>
  ) : (
    null
  );

  return (
    <form
      className="AuctionForm"
      onSubmit={handleSubmit}
    >
      <div>
        <label htmlFor="title">Title</label> <br />
        <input
          onChange={handleChange("title")}
          value={auction.title}
          name="title"
          id="title"
        />
      </div>

     <div>
       <label htmlFor="details">Details</label> <br />
       <textarea
         onChange={handleChange("details")}
         value={auction.details}
         name="details"
         id="details"
       />
     </div>

     <div>
       <label htmlFor="ends_on">Ends On</label> <br />
       <DatePicker
        selected={startDate}
        onChange={handleDateChange}
        value={auction.ends_on}
        name="ends_on"
        id="ends_on"
       />
       {/* <input
         onChange={handleChange("startDate")}
         value={auction.ends_on}
         name="ends_on"
         id="ends_on"
       /> */}
     </div>

     <div>
       <label htmlFor="reserve_price">Reserve Price</label> <br />
       <input
         onChange={handleChange("reserve_price")}
         value={auction.reserve_price}
         name="reserve_price"
         id="reserve_price"
       />
     </div>

      { renderError() }

      <div>
        <input type="submit" value="Save"/>
      </div>
    </form>
  );
}

export {AuctionForm};
