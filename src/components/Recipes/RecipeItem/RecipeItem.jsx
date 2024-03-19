import classes from "./RecipeItem.module.css"
import RecipeItemForm from "./RecipeItemForm"

const RecipeItem = (props) => {
    return (
        <li className={classes.recipe}>
            <div>
                <h3>{props.name}</h3>
                <div className={classes.ingredients}>{props.ingredients}</div>
                <div className={classes.instructions}>{props.instructions}</div>
            </div>
            <div>
                <RecipeItemForm />
            </div>
        </li>
    )
}

export default RecipeItem;