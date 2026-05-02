const FoodItem = () => {
    return (
             
        <div className= "FoodItem" >
            <ul className="list-FoodItem">
                <container name="food-list" placeholder="Enter food items">
                </container>
                <h1>Healthy-Food list</h1>
                <span>
                    <h2>Delicious & Nutritious</h2>
                </span>
                <div className="kgm">
                    <li>CHICKEN</li>
                    <li> DAAL</li>
                    <li>GREEN VEGETABLES</li>
                    <li>EGG</li>
                    <li>ROTI</li>
                </div>
            </ul>
        </div>
        
    )
}
export default FoodItem;

