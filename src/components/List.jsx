import React, { useState, useEffect, Fragment } from 'react';

// npm modules import
import axios from 'axios';

// css import
import '../global.css'

// primary component
const List = () => {
  const [jikan , setJikan]=useState([]);
  const [day, setDay]=useState(undefined);
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
      console.log(jikan);
  }
  
  // componentDidMount
  useEffect(()=>{
    getAnime();
  },[]);

  // // componentDidUpdate
  // useEffect(()=>{
  // },[month]);
  
  // months
  const months =["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  
  // select tag onChange method
  const selectChange =(event)=>{
    setMonth(event.currentTarget.value);
  }
  
  return (
    <Fragment>
      <select onChange={selectChange}>
        <option value="Select a month">Select a month</option>
        {months
          .map((month)=>
            <option key={month} value={month}>{month}</option>
          )
        }
      </select>

      {jikan.filter((j)=> month?
          (month!=="Select a month"?
            (new Date(j.aired).toLocaleString('default', { month: 'long' })===month):j)
          :j)
        .map((j)=>
          {
            // code for date creation and checking
            const date = new Date(j.aired);
            const dateMonth = date.toLocaleString('default', { month: 'long' });

            // DOM elements returned
            return(
              <div key={j.title}>
                <h2>{j.title}</h2>
                <div className="row space-evenly">
                  <div>{date.getDate()}</div>
                  <div>{dateMonth}</div>
                  <div>{date.getFullYear()}</div>
                </div>
              </div>
            )
          }
        )
      }
    </Fragment>
  );
}

export default List;