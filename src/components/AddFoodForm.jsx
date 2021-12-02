import {useState} from "react";
import {Input} from "antd"

export default function AddFoodForm(props){
    const [newFood, setNewFood] = useState({})

    function handleSubmit(event){
        event.preventDefault()
        props.addNewFood(newFood)
        setNewFood({})
    }

    function handleInput(event){
        let {name, value, type, checked} = event.target
        if(type === "checkBox") value = checked
        setNewFood(Object.assign({}, newFood, {[name]:value}))
    }
    return(
        <div className="AddFoodForm">
            <h4>Create Food Here</h4>
            <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <Input name="name" placeholder="Food name" type="text" value={newFood.name||""} onChange={handleInput} />
            
            <label htmlFor="image">Image:</label>
            <Input name="image" placeholder="Image" type="text" value={newFood.image||""} onChange={handleInput} />
            
            <label htmlFor="calories">Calories:</label>
            <Input name="calories" placeholder="No.of calories" type="text" value={newFood.calories||""} onChange={handleInput} />
            
            <label htmlFor="servings">Servings:</label>
            <Input name="servings" placeholder="servings" type="text" value={newFood.servings||""} onChange={handleInput} />
           
            <br/>
             <button type="submit">Create Food</button>
            </form>
        </div>
    )
}