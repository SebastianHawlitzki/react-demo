import React from 'react';

export default function Characters() {


    type Character = {
        id: number,
        name: string,
        status: string
        species: string,
        type: string,
        gender: string
        origin: Origin,
        location: Location,
        image: string,
        episode: []
        url: string,
        created: string


    }

    type Origin = {
        name: string,
        url: string
    }

    type Location = {
        name: string
        url: string
    }


    return (
        <>


        </>
    )
}