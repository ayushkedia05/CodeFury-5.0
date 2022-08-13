import axios from 'axios'
import React, { useState } from 'react'

const VC = () => {
    const user = localStorage.getItem('user')
    console.log(user)
    const [ideas,setIdeas] = useState([])

  return (
    <h1>Hii</h1>
  )
}

export default VC