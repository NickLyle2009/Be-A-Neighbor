import React, { useState, useEffect } from 'react';
import { 
  Col,
  Container, 
  Card, 
  Button, 
  Form} from 'react-bootstrap';



const Charities = () => {
  //returned Charities Api
  const [searchedCharities, setSearchedCharities ] = useState([]);
  const [searchInput, setSearchInput] = useState('');

  



  // useEffect (() => {
  //   return () => saveCharityIds(savedCharityIds);
  // });

  const handleFormSubmit = async (event) => {
    event.preventdefault();

    if (!searchInput) {
      return false; 
    }

    try {
      const response = await fetch(
        `https://api.data.charitynavigator.org/v2${searchInput}`
      );
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const { items } =await response.json();

      const charityData = items.map((charity) => ({
        charityId: charity.id, 
        state: charity.state, 
        city: charity.city, 
      }));

      setSearchedCharities(charityData);
      setSearchInput('');
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <>
        <Container>
          <h1>Search for a Charity</h1>
          <Form onSubmit = {handleFormSubmit}>
            <Form.Row>
              <Col xs={12} md={8}>
                <Form.Control
                  name="searchInput"
                  vlaue={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  type="text"
                  size="md"
                  placeholder="Search for a Charity"/>
              </Col>
              <Col xs={12} md={4}>
                <Button type = 'submit' variant='success' size="lg">
                  Submit
                </Button>
              </Col>
            </Form.Row>
          </Form>
        </Container>

      <Container>
        <h2>
          {searchedCharities.length
            ? `Viewing ${searchedCharities.length} results:`
            : 'Search for a charity to begin'}
        </h2>
          {searchedCharities.map((charity) => {
          return (
            <Card key={charity.charityId} border="dark">
                <Card.Title>{charity.title}</Card.Title>
                <p className="small">State: {charity.state}</p>
                <Card.Text>{charity.city}</Card.Text>
              
            </Card>
        );
          })}
      </Container>
    </>

  );
}

export default Charities; 