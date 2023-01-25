import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Detail.css'
import { Await, useParams } from 'react-router-dom'

function Detail() {

  const {id} = useParams();
  const [details, setDetail] = useState([])

  useEffect(() => {
    axios
      .get(`https://digimon-api.com/api/v1/digimon/${id}`)
      .then(res => {
        setDetail(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])



  // async function digimon() {
  //   const response = await fetch(`https://digimon-api.com/api/v1/digimon/${id}`);
  //   return await response.json();
  // }

  console.log('details ==> ', details)

  



  return (
    <div>
    {details.length > 0 ? details.map(detail => (
      <div key={detail.id} className='detail'>
        <h1>
          {detail.name}
        </h1>

        <img src={detail.images}/>
      </div>
    )): null}
    </div>
  )
}

export default Detail