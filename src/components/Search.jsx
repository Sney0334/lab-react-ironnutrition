import {useState} from 'react';
import {Input} from "antd"

export default function(props){
    const [search, setSearch] = useState("")
    function handleInput(event){

        setSearch(event.target.value)
        props.search(event.target.value)
    }
    
    return(
        <div className = "Search">
            <label>Search here</label>
            <Input  placeholder="Search" type="text" value={search||""} onChange={handleInput} />

            <br/>
             <button type="submit">Search</button>
        </div>
    )
}