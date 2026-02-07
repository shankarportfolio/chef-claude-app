import { useEffect, useState } from "react"
import { InputField } from "./InputField";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";

export const AddIngredientsForm = () =>{


    const [ingredientsList, setIngredientsList] = useState([]);
    const [ingredients, setIngredients] = useState('');

    const onInputChange = e =>{
        setIngredients(e.target.value)
    }
 
    useEffect(() => {
        console.log(ingredientsList);
    }, [ingredientsList]);

    const onClickAddInd = (e) =>{
        e.preventDefault();
        if (!ingredients.trim() || /\d/.test(ingredients)){
            alert('Please enter ingredients to add')
        }else{
            setIngredientsList([
                ...ingredientsList,
                ingredients
            ]);
            setIngredients('');
        }        
    }

    const deleteIndgred = (item) =>{
        setIngredientsList(ingredientsList.filter(indgred => (item !== indgred)))
    }

    return(
        <>
            <section className={`w-full`}>
                <div className={`w-full xl:w-[1200px] m-auto py-[35px] px-[15px] xl:py-[50px] xl:pb-[35px] xl:px-[53px]`}>
                    <div className={`w-full xl:w-[50%] m-auto`}>
                        <form method="POST" className={`flex items-center justify-start flex-wrap`} onSubmit={onClickAddInd}>
                            <div className={`w-full lg:w-[calc(70%-10px)] mb-[10px] lg:mb-0 lg:mr-[10px]`}>
                                <InputField placeHolder="e.g. oregano" onChange={onInputChange} fieldValue={ingredients}/>
                            </div>
                            <button type="submit" className={`interfont w-full lg:w-[30%] text-center xl:text-left rounded-[6px] bg-[#141413] text-sm leading-[20px] text-white py-[13px] px-[10px] xl:py-[9px] xl:px-[17px] outline-none border border-solid border-[#141413]`}>+ Add ingredient</button>
                        </form>
                    </div>
                </div>
            </section>
            {
                ingredientsList.length > 0 && (
                <section className={`w-full`}>
                    <div className={`w-full xl:w-[1200px] m-auto px-[15px] pb-[55px] xl:pb-[50px] xl:px-[53px]`}>
                        <h2 className={`interfont text-[30px] leading-[38px] text-center xl:text-left font-semibold text-[#141413] mb-[24px]`}>Ingredients on hand:</h2>
                        <ul className={`interfont flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2 p-4`}>
                        {
                            ingredientsList.map(ingreditem => (
                                <li key={ingreditem} className={`interfont text-lg leading-[28px] text-[#475467] font-normal mb-[15px] last:mb-0 p-0 sm:w-1/2 w-full`}>
                                    <div className="bg-gray-300 rounded flex p-4 h-full items-center">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round"  strokeLinejoin="round" strokeWidth="3" className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                            <path d="M22 4L12 14.01l-3-3"></path>
                                        </svg>
                                        <span className={`w-[calc(100%-80px)] text-black`}>{ingreditem}</span>
                                        <div className="w-6 h-6 ml-4" onClick={() => deleteIndgred(ingreditem)}><FontAwesomeIcon icon={faTrashAlt} className="text-red-500 cursor-pointer"/></div>
                                    </div> 
                                </li>
                            ))
                        }
                        </ul>
                    </div>
                </section>
                ) 
            }
            
        </>
    )
}