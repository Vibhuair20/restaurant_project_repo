import React, { useState } from 'react';
import "./BookTable.css";

const BookTable = () => {
  
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [location, setLocation] = useState('');
    const [partySize, setPartySize] = useState('');

    
    const handleSubmit = (event) => {
        event.preventDefault(); 
        alert(`Booking Details:\nDate: ${date}\nTime: ${time}\nLocation: ${location}\nParty Size: ${partySize}`);
    }

    const [modal, setmodal] =useState(false);

  const toggleModal =() =>{
    setmodal(!modal)

  };

    return (
        <div className="app__bg">

        <div id="bookTableContainer">
            <h1>Book a Table</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    type="date" 
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required 
                />
                <input 
                    type="time" 
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    required 
                    />
                <select 
                    value={location} 
                    onChange={(e) => setLocation(e.target.value)}
                    required
                    >
                    <option value="">Any Location</option>
                    <option value="1">Near fountain</option>
                    <option value="2">Nearfire</option>
                    <option value="3">Cabin</option>
                </select>
                <select 
                    value={partySize} 
                    onChange={(e) => setPartySize(e.target.value)}
                    required
                    >
                    <option value="">Select a Party Size</option>
                    <option value="1">1 person</option>
                    <option value="2">2 people</option>
                    <option value="3">3 people</option>
                    
                </select>
                <button type="submit">Book Now</button>
               

            </form>
        </div>
                    </div>
    );
}

export default BookTable;
