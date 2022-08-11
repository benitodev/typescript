import { useCallback, useReducer } from "react"
import { Sub } from "../types"

const INITIAL_STATE = {
    nick:"",
    subMonths: 0,
    avatar: "",
    description: ""
  }

interface FormState {
    inputValues: Sub
}

type FormReducerAction = {
 type: "change_value",
 payload: {
    inputName:string,
    inputValue: string
 } 
} | {
    type: "clear"
}


const formReducer = (state: FormState["inputValues"], action: FormReducerAction) =>{
    switch(action.type){
      case "change_value": {
       const {inputName, inputValue} = action.payload
       return {
        ...state, 
        [inputName]: inputValue
     }}
     case "clear":{
      console.log("hi")
      return INITIAL_STATE
    }
    }
}


const useNewSubForm = () => {
const [inputValues, dispatch] = useReducer(formReducer, INITIAL_STATE)

const actionType = useCallback((actionType: FormReducerAction)=> dispatch(actionType), [])

return {
  formState: inputValues,
  actionType
}
}

export default useNewSubForm