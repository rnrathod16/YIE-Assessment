import React from 'react'
import "./Card.css";



const Card = ({ val }) => {
    function capitalize(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    return (
        <>

            <div className="card m-3 shadow-lg rounded-lg d-flex justify-content-center align-items-center" style={{ width: "18rem", border: "1px solid #5228a7" }}>
                <img src={val.sprites.front_default} loading="lazy" className="card-img-top" alt="pokemon" style={{ width: "75%", height: "50%" }} />
                <div className="card-body p-0 d-flex justify-content-center align-item-center flex-column">
                    <h3 className="card-title font-weight-bold text-center">{capitalize(val.name)}</h3>
                    <h5 className="card-title font-weight-bold text-center">Moves - {val.moves.length}</h5>

                </div>
            </div>

        </>
    )
}

export default Card