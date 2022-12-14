import React from 'react';


export default function CharacterCard(props: {
    name: string
    origin: string
    image: string
// onLike
    //onDelete

}) {

    return (
        <>
            <div className={"character-gallery"}>
                <div className={"card"}>

                    <div className={"card-header"}>
                        <h3>{props.name}</h3>
                    </div>
                    <div className={"card-body"}>
                        <img src={props.image} alt={"Character"}/>
                    </div>
                    <div className={"card-footer"}>
                        <p>{props.origin}</p>
                    </div>

                </div>
            </div>


        </>
    )
}