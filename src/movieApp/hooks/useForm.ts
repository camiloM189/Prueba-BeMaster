import { useEffect, useState } from 'react';


interface IForm{
    [value:string]: string;
}




export const useForm = ( initialForm:IForm = {} ) => {
  
    const [ formState, setFormState ] = useState( initialForm );
   



    useEffect(() =>{
        setFormState(initialForm)

    },[initialForm])


    
    const onInputChange = ({ target }:React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    const onResetForm = () => {
        setFormState( initialForm );
    }

    


    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,

      
       
    }
}