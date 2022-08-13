import React,{useContext, useEffect,useState} from 'react'
import { cookies } from './places.tsx';
import axios from 'axios';
import './ReviewStyle.css'
// import pydata from '../../../pythonBackend';


export const value = cookies.get('location')
console.log('hi ',value)

const Reviews = () => {
  const [review,setReview] = useState([]);

  // const {value} =useContext(ABC);
  // console.log(value);
 useEffect(()=>{
  axios.get(`http://localhost:4000/reviews`).then((res)=>{
    console.log(res.data.hospital)
    setReview(res.data.hospital)
  }).catch((err)=>{
    console.group(err)

  })
 },[])


  return (
    <>
        {/* {review.map(home => <div>{home.name}</div>)} */}
<div className='parent'>
 <div className='left'>      
<section >
     <div className='container2'>


      <div className='one'>
        <h1 className='text'>Name</h1>
        <h4>Karthik Netralaya Eye Hospital</h4>
      </div>

      <div classNametext className='two'>
        <h1 className='text'>Address</h1>
        <h4>89, 7th Cross Rd, near Bull Temple Road, CK Nagar, NR Colony, Basavanagudi, Bengaluru, Karnataka 560050</h4>
      </div>

      <div className='three'>
        <h1 className='text'>City</h1>
        <h4>Benguluru</h4>
      </div>
</div>

     
</section>

<section className='next'>
    <div className='threerounds'>
     
      <div className='scores'>
        <h1 className='no'>928</h1>
        <p style={{color:"darkgreen"}}>Positive</p>
      </div>
      <div className='scores'>
        <h1 className='no'>-82</h1>
        <p style={{color:"black"}}>Neutral</p>
      </div>
      <div className='scores'>
        <h1 className='no'>139</h1>
        <p style={{color:"red"}}>Negative</p>
      </div>
      
    </div>
</section>
 </div> 
 <div className='right'>
      <div className='write'>
        <h1>SSC Rating</h1>
        <h1>9.18/10</h1>
      </div>
 </div>
</div>        
    </>
  )
}

export default Reviews

// --------------------------------------------------------------------------




