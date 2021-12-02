import './App.css';
import foods from "./foods.json";
import {useState} from "react";
import FoodBox  from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';


const randomIdNumber = ()=> Math.floor(Math.random()*10000)

foods.forEach(food =>(food._id = randomIdNumber()))

function App() {
  const [foodList, setFoodList] = useState(foods)
  const [searchList, setSearchList] = useState(foods)
  const [toggle, setToggle] = useState(false)

  function addNewFood(body){
    const newList = foodList.slice()
    setFoodList(newList.concat([body]))
  }
  function searchFood(searchSpace){
      setSearchList(
        foodList.filter(food=>food.name.toLowerCase().includes(searchSpace.toLowerCase()))
      )
    
  }

  const deleteFood = (id)=>{
    const deleteArr = foodList.filter(food=>food._id !== id)

    setFoodList(deleteArr)
    setSearchList(deleteArr)
  }
  function toggleAddForm(){
    setToggle(!toggle)
  }

  return (
    <div className="App">
      {toggle && <AddFoodForm addNewFood={addNewFood} />}

      <button onClick={toggleAddForm}>
          {toggle ? "Hide Form" : "Show Form"}
        </button>

      <Search search={searchFood} />

      <h3>Food List</h3>

      <div className="foodList">
      {searchList.map((oneFood, idx) => {
        return(
         <FoodBox food={oneFood} key={randomIdNumber()} index={idx} delete={deleteFood}/>
        )
      })}
      </div>
      

    </div>
  );
}

export default App;
