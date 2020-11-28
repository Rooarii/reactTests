import React, { useState, useEffect, Fragment } from 'react';

// npm modules import
import axios from 'axios';

// components import
import SelectMonth from './SelectMonth';
import SelectYear from './SelectYear';
import List from './List';

// css import
import '../global.css'

// primary component
const ContainerList = () => {
  const [jikan , setJikan]=useState([]);
  const [year, setYear]=useState(undefined);
  const [month, setMonth]=useState(undefined);

  // axios request
  const getAnime =()=>{
    axios.get('https://api.jikan.moe/v3/anime/1/episodes')
      .then((res) => {
        console.log(res.status)
        return(res.data.episodes)
      })
      .then((anime) => {
        setJikan(anime);
      })
      .catch(error =>{
        console.log(error);
      })
  }
  
  // componentDidMount
  useEffect(()=>{
    getAnime();
  },[]);
  
  // months
  const months =["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  
  // years
  const years = [1998,1999]

  // month select tag onChange method
  const selectMonth =(event)=>{
    setMonth(event.currentTarget.value);
  }

  // year select tag onChange method
  const selectYear = (event) =>{
    setYear(event.currentTarget.value);
  }
  
  return (
    <Fragment>
      <SelectMonth months={months} selectMonth={selectMonth} />
      <SelectYear years={years} selectYear={selectYear} />
      <List jikan={jikan} month={month} />      
    </Fragment>
  );
}

export default ContainerList;