import React from 'react';

const List = ({jikan, month }) => {
  return (
    <>
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
  </>
  );
}

export default List;