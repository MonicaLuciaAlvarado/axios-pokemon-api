import axios from "axios";
import React, {useState, useEffect} from "react";
const Pokemones = () =>{
    const [lista, setLista] = useState([]); //URL de lista
    const [click, setClick]=useState(0);

    useEffect(()=>{
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0")
        .then(response=>response.data)//response tiene todo los datos, response.data le envía los datos a responseJson
        .then(responseJson =>{
            if(click>0){
                setLista(responseJson.results.map(p => p.name));
            }
            else{}
        })
    },[click])

    const hizoClick=()=>{
        setClick(click+1);
    }
    return(
        <div>
            <button onClick={hizoClick} className="btn btn-primary">Buscar Pokemones</button>
            <ul>{
                lista.map((item,i)=>
                <li key={i}>{item}</li>
                )
            }</ul>
        </div>
    )
}
export default Pokemones;