import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Detail.css";
import { Await, useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const [details, setDetail] = useState([]);

  useEffect(() => {
    axios
      .get(`https://digimon-api.com/api/v1/digimon/${id}`)
      .then((res) => {
        setDetail(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // async function digimon() {
  //   const response = await fetch(`https://digimon-api.com/api/v1/digimon/${id}`);
  //   return await response.json();
  // }

  console.log("details ==> ", details);

  return (
    <div>
      <div key={details.id} className="detail">
        <h1>{details.name}</h1>
        {details?.images?.map((i) => (
          <img key={details.id} src={i.href} />
        ))}

        {details?.skills?.filter(s => s.skills == 1).map((s) => (
          <p>{s.id}</p>
        ))}
      </div>
    </div>
  );
}

export default Detail;
