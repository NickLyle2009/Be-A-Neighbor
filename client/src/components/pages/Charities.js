import React, { useState, useEffect } from 'react';
import { 
  Jumbotron, 
  Container, 
  CardColumns, 
  Card, 
  Button } from 'react-bootstrap';

import { useMutation } from '@apollo/client';
import { SAVE_Charities } from '../utils/mutations';
import { saveCharityIds, getSavedCharityIds } from '../utils/localStorage';
import Auth from '../utils/auth';



const Charities = () => {
  //returned Charities Api
  const [searchedCharities, setSearchedCharities ] = useState([]);
  const [searchInput, setSearchInput] = useState('');

  const [getSavedCharityIds, setSavedCharities ] =useState(getSavedCharityIds());

  const [saveCharities, {error }] = useMutation(SAVE_Charities);



  useEffect (() => {
    return () => saveCharityIds(savedCharityIds);
  });

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
    }
  }
}
