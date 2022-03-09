import React, { useState, useEffect } from 'react'

const Charities = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()

  useEffect(() => {
    fetch("https://api.globalgiving.org/api/public/projectservice/countries/US/projects/summary?api_key=e710712e-ebc5-467f-a97e-a3563c800ee2")
      .then(res => res.json())
      .then(data => setItems(data));
  }, [])
  console.log(items)
  return (
    <div>
      <a href = "https://www.akspickup.org/clothes_donate.html">American Kiney Services</a>
      <br />
      <a href = "http://donationtown.org/georgia-donation-pickup/#:~:text=Donate%20clothes%20and%20other%20household,you%20a%20tax%20deduction%20receipt">Donation Town</a>
      <br />
      <a href = "https://atlantamission.org/ways-to-give/urgent-needs/">Atlanta Mission</a>
      <br />
      <a href = "https://chris180.org/get-involved/ways-to-give/">Chris180</a>
      {items}
    </div>
  );
}

  
    

export default Charities; 





