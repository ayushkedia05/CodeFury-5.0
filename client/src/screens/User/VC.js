import { Card } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Form from '../../components/Form'

const VC = () => {

    const user = localStorage.getItem('currentUser')
    console.log(user)
    const [flag, setFlag] = useState(false);
    const [ideas, setIdeas] = useState([])

    useEffect(() => {

        if (user.username === "vc") {
            setFlag(true)
        } else {
            setFlag(false)
        }


        fetch('http://localhost:4000/idea/')
            .then((response) => response.json())
            .then((data) => setIdeas(data.idea));

    }, [])


    return (
        <>
            {
                flag ? (
                    <></>
                ) : (<Form />)
            }

{
    ideas && (
        ideas.map((i)=>{
        <Card />
        })
    )
}
        </>
    )
}

export default VC