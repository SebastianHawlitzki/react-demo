import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Greeting from "./Greeting";
import axios from "axios";
import CharacterGallery from "./CharacterGallery";

/*
function axiosDemo (){
  axios.get("http://xyz")
      .then(response => response.data)
      .catch(e => console.error(e));



  axios.post()


  axios.put()
      .then()
      .catch()

  axios.delete ()
      .then()
      .catch());

}

 */



export default function App() {


    /*
    const greeting1 = {
        name: "Muslim",

      };
    const nameList = [
      {id: "1", name: "John"},
      {id: "2", name: "Anna"},
      {id: "3", name: "Lukas"},
      {id: "4", name: "Alexander"}
    ];

     */



  return (

      <>
          <CharacterGallery></CharacterGallery>


      </>


      /*
      <div>
      <div>
        <Greeting {...greeting1}> </Greeting>
    <Greeting name={"Sebastian"} > </Greeting>
    <Greeting name={"Muslim"}> </Greeting>
    <Greeting name={"Claudia"}> </Greeting>
    <Greeting name={"Florian"}> </Greeting>
  </div>

  <ul>
    {nameList.map(nameList =>(
      <li key = {nameList.id}>name: {nameList.name}</li>
    ))}
  </ul>

  <div>
    {nameList.map((item, i) => (
        <Greeting key={item.id}
        name = {item.name}
        >
          Index [i]
        </Greeting>
        ))}

  </div>
      </div>
       */



);

}


