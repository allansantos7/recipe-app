import { useRef, useState } from "react";
import classes from "./AddRecipeForm.module.css"


const isEmpty = value => value.trim() === "";

const AddRecipeForm = (props) => {
    const [formInputValidity, setFormInputValidity] = useState({
        name: true,
        ingredients: true,
        instructions: true,
    });

    const nameInputRef = useRef()
    const ingredientsInputRef = useRef()
    const instructionsInputRef = useRef()


    const confirmHandler = (event) => {
        //event.preventDefault();

        const enteredName = nameInputRef.current.value;
        const enteredIngredients = ingredientsInputRef.current.value;
        const enteredInstructions = instructionsInputRef.current.value;

        const enteredNameIsValid = !isEmpty(enteredName)
        const enteredIngredientsIsValid = !isEmpty(enteredIngredients)
        const enteredInstructionsIsValid = !isEmpty(enteredInstructions)
        
        setFormInputValidity({
            name: enteredNameIsValid,
            ingredients: enteredIngredientsIsValid,
            instructions: enteredInstructionsIsValid,
        });

        const formIsValid = enteredNameIsValid && enteredIngredientsIsValid && enteredInstructionsIsValid;

        if(!formIsValid) {
            return;
        }

        props.onConfirm({
            name: enteredName,
            ingredients: enteredIngredients,
            instructions: enteredInstructions,
        });
    };

    return (
        <form className={classes.form} onSubmit={confirmHandler}>
            Add Recipe
            <div className={`${classes.control} ${
                formInputValidity.name ? "" : classes.invalid
            }`}>
                <label htmlForm="name">Recipe Name</label>
                <input type="type" id="name" ref={nameInputRef} />
                {!formInputValidity.name && <p>Please enter a valid name!</p>}
            </div>
            <div className={`${classes.control} ${
                formInputValidity.ingredients ? "" : classes.invalid
            }`}>
                <label htmlForm="ingredients">Recipe Ingredients</label>
                <input type="type" id="ingredients" ref={ingredientsInputRef} />
                {!formInputValidity.ingredients && <p>Please enter valid ingredients!</p>}
            </div>
            <div className={`${classes.control} ${
                formInputValidity.instructions ? "" : classes.invalid
            }`}>
                <label htmlForm="instructions">Recipe instructions</label>
                <input type="type" id="instructions" ref={instructionsInputRef} />
                {!formInputValidity.instructions && <p>Please enter valid instructions!</p>}
            </div>
            <div className={classes.actions}>
            <button className={classes.submit}>Confirm</button>
            </div>
        </form>
    )
}

export default AddRecipeForm;