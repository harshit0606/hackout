import React from 'react'

function FansList({fanData,index}) {
  return (
    <div className="songlist_main">
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          width: "50%",
        }}
      >
        <p>{index + 1}</p>
        <h5>{fanData.address}</h5>
        <p>{fanData.donations} Matic</p>
      </div>
      
    </div>
  );
}

export default FansList