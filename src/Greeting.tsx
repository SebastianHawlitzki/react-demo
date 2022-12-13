import React from "react";

export default function Greeting(props: {
    name: string,
   // onClick,
    children : React.ReactNode


    //   onClick () funktion// um Daten zurück zu geben
    //  children // um zwischen den Tags etwas weiter zu geben
    // age = 30 -> defaultwert, muss nicht in App.tsx abgegeben werden
    //onClick - es können auch funktionen benutzt werden z.b onClick()
    //children
}) {
    return (

        <div><p>Hello {props.name}</p></div>);

}