import React, { useState } from "react";

const Func_state = () => {
  const [data, setData] = useState({
    name: "Dharmik Modi",
    count: 0,
  });

  const changeName = () => {
    setData({
      ...data, // spread operator to copy the existing data
      name: "Diyang Thakker",
      //   count: data.count + 1, // incrementing the count value
    });
  };

  const changePosnum = () => {
    setData({
      ...data,
      count: data.count + 1, // incrementing the count value
    });
  };

  const changeNegnum = () => {
    setData({
      ...data,
      count: data.count - 1, // decrementing the count value
    });
  };
  return (
    <>
      <div>Func_state</div>
      <h1>Hii I am {data.name}</h1>
      <button onClick={changeName}>Change name</button>
      <h1>Count: {data.count}</h1>
      <button onClick={changePosnum}>Increment</button>
      <button onClick={changeNegnum}>Decrement</button>
    </>
  );
};

export default Func_state;
