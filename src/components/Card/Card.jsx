/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import "./card.css";
const Card = ({ data }) => {
  const [array, setArray] = useState([]);
  const convertIntoArray = () => {
    for (let i = 0; i < data.content.length; i++) {
      setArray((o) => {
        const u = [...o, data.content[i]];
        return u;
      });
      for (let j = 0; j < data.content[i].length; j++) {}
      console.log(array);
    }
  };

  useEffect(() => {
    if (convertIntoArray !== null) {
      convertIntoArray();
    }
  }, []);

  return (
    <div className="card">
      {data.content.map((ligne, i) => (
        <div key={i} className="content">
          {ligne}
        </div>
      ))}
    </div>
  );
};

export default Card;
