import {React, useEffect, useState} from 'react'
import axios from 'axios'

const url = "https://react--course-api.herokuapp.com/api/v1/data/vacanze";

export default function Slider() {
    const [holidays, setHolidays] = useState([]);
    const [activeIndex, setActiveIndex] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    const getHolidays = async () => {
        setIsLoading(true);
        try {
            const response = await axios.get(url);
            console.log(response.data.data);
            setHolidays(response.data.data);
        } catch (error) {
            setIsError(true)
            console.error(error)
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        getHolidays()
    }, [])

    if (isLoading)
    return (
        <div className='col-12'>
            <h2>Loading...</h2>
        </div>
    )

    if (isError) return (
        <div className='col-12'>
            <h2>Something went wrong...</h2>            
        </div>
    )

    return (
        <div className='col-8 card px-0'>
            <img src={holidays[activeIndex].img} class="card-img-top" alt="holiday img"/>
            <div class="card-body">
                <h5 class="card-title">{holidays[activeIndex].titolo}</h5>
                <p class="card-text">{holidays[activeIndex].descrizione}</p>
                <div className='d-flex justify-content-between'>
                    <span className='text-primary'>{holidays[activeIndex].prezzo}$</span>
                    <span>{holidays[activeIndex].durata}</span>
                </div>
            </div>
        </div>
    )
}
