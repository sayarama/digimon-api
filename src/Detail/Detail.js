import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

function Detail() {

  const {id} = useParams();
  const [details, setDetail] = useState([])

  useEffect(() => {
    axios
      .get(`https://digimon-api.com/api/v1/digimon/${id}`)
      .then(res => {
        console.log(res)
        setDetail(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  })

  console.log("detail", details)

  return (
    <div className='main'>
    {details.map(detail => (
      <div className='detail'>
        <h1 key={detail.id}>
          {detail.name}
        </h1>
      </div>
    ))}
    </div>
  )
}

export default Detail