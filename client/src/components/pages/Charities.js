<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> parent of 7ac03e6 (Add styling to post cards)
// import React, { useState, useEffect } from 'react';
// import { 
//   Jumbotron, 
//   Container, 
//   CardColumns, 
//   Card, 
//   Button, 
//   Form} from 'react-bootstrap';

// import Auth from '../../utils/auth';



// const Charities = () => {
//   //returned Charities Api
//   const [searchedCharities, setSearchedCharities ] = useState([]);
//   const [searchInput, setSearchInput] = useState('');

  



//   // useEffect (() => {
//   //   return () => saveCharityIds(savedCharityIds);
//   // });

//   const handleFormSubmit = async (event) => {
//     event.preventdefault();

//     if (!searchInput) {
//       return false; 
//     }

//     try {
//       const response = await fetch(
//         `https://api.data.charitynavigator.org/v2${searchInput}`
//       );
//       if (!response.ok) {
//         throw new Error('Something went wrong!');
//       }

//       const { items } =await response.json();

//       const charityData = items.map((charity) => ({
//         charityId: charity.id, 
//         state: charity.state, 
//         city: charity.city, 
//       }));

//       setSearchedCharities(charityDatat);
//       setSearchInput('');
//     } catch (err) {
//       console.error(err);
//     }
//   };
//   return (
//     <>
//       <Jumbotron fluid className="text-dark bg-light">
//         <Container>
//           <h1>Search for a Charity</h1>
//           <Form onSubmit = {handleFormSubmit}>
//             <Form.Row>
//               <Col xs={12} md={8}>
//                 <Form.Control
//                   name="searchInput"
//                   vlaue={searchInput}
//                   onChange={(e) => setSearchInput(e.target.value)}
//                   type="text"
//                   size="md"
//                   placeholder="Search for a Charity"/>
//               </Col>
//               <Col xs={12} md={4}>
//                 <Button type = 'submit' variant='success' size="lg">
//                   Submit
//                 </Button>
//               </Col>
//             </Form.Row>
//           </Form>
//         </Container>
//       </Jumbotron>

//       <Container>
//         <h2>
//           {searchedCharities.length
//             ? `Viewing ${searchedCharites.length} results:`
//             : 'Search for a charity to begin'}
//         </h2>
//         <CardColumns>
//           {searchedCharities.map((charity) => {
//           return (
//             <Card key={charity.charityId} border="dark">
//               <Card.body>
//                 <Card.Title>{charity.title}</Card.Title>
//                 <p className="small">State: {charity.state}</p>
//                 <Card.Text>{charity.city}</Card.Text>
              
//               </Card.body>
//             </Card>
//         );
//           })}
//         </CardColumns>
//       </Container>
//     </>

//   );
// }

// export default Charities; 
=======
import React, { useState, useEffect } from 'react';

>>>>>>> parent of 7ac03e6 (Add styling to post cards)

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
      Test
      {items}
    </div>
  );
}
<<<<<<< HEAD
=======
export default Charities;





>>>>>>> 073b69a8d7109f56f29c84f78b443afaa9a9bcd7
<<<<<<< HEAD
>>>>>>> parent of 7ac03e6 (Add styling to post cards)
=======
>>>>>>> parent of 7ac03e6 (Add styling to post cards)
