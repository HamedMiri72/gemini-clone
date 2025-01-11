import {createContext, useState} from "react";
import run from "../config/ai";


export const Context = createContext();


const ContextProvider = (props) =>{

    const [input, setInput] = useState("");

    const[recentPrompt, setResetPrompt] = useState("");

    const [previousPromts, setPreviousPromts] = useState([]);

    const [showResult, setShowResult] = useState(false);

    const [loading, setLoading] = useState(false);

    const [resultData, setResultData] = useState("");


    

    const onsent = async (prompt) =>{

        setResultData("")
        setLoading(true)
        setShowResult(true)
        setResetPrompt(input)
        const response = await run(input)
        setResultData(response)
        setLoading(false)
        setInput("")

    }



    const contextValue = {
        previousPromts,
        setPreviousPromts,
        onsent,
        setResetPrompt,
        recentPrompt,
        showResult,
        loading,
        resultData,
        input,
        setInput,
    }

    return(
        <Context.Provider value = {contextValue}>
            {props.children}
        </Context.Provider>
    )
}


export default ContextProvider;