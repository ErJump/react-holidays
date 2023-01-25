import {React} from 'react'

export default function Slider(props) {

    if (props.isLoading) return (
        <div className='col-12'>
            <h2>Loading...</h2>
        </div>
    )

    if (props.isError) return (
        <div className='col-12'>
            <h2>Something went wrong...</h2>            
        </div>
    )

    return (
        <div className='col-8 card px-0 mx-3'>
            <img src={props.holidays[props.activeIndex].img} className="card-img-top" alt="holiday img"/>
            <div className="card-body">
                <h5 className="card-title">{props.holidays[props.activeIndex].titolo}</h5>
                <p className="card-text">{props.holidays[props.activeIndex].descrizione}</p>
                <div className='d-flex justify-content-between'>
                    <span className='text-primary'>{props.holidays[props.activeIndex].prezzo}$</span>
                    <span>{props.holidays[props.activeIndex].durata}</span>
                </div>
            </div>
        </div>
    )
}
