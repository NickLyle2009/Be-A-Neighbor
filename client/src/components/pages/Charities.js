import React, { useState, useEffect } from 'react';


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
      Test
      {items}
    </div>
  );
}
export default Charities;