import { Card, Col, Divider, Button } from "antd";

export default function FoodBox(props){
    const {_id, name, image, calories, servings} = props.food
    const handleClick= ()=> props.delete(_id)
    
    return (
        <div >
            
            <Col>
                <Card
                    title={name}
                    style={{ width: 230, height: 300, margin: 10 }}
                >
                    <img src={image} height={60} />
                    <p>Calories: {calories}</p>
                    <p>Servings: {servings}</p>
                    <p>
                    <b>Total Calories: {calories} * {servings} </b> kcal
                    </p>
                    <Button onClick={handleClick} type="primary"> {" "} Delete{" "} </Button>
                </Card>
                <Divider />
                </Col>
        </div>
    )
}