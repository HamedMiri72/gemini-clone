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


    const delayPara = (index, nextWord) =>{



    }

    const onsent = async (prompt) =>{

        setResultData("")
        setLoading(true)
        setShowResult(true)
        setResetPrompt(input)
        const response = await run(input)
        let resposeArray = response.split("**");
        let newResponse;
        for(let i=0; i < resposeArray.length; i++)
        {
            if(i === 0 || i%2 !== 1){
                newResponse += resposeArray[i];
            }
            else {
                newResponse += "<b>" + resposeArray[i] + "</b>"
            }
        }
        let newResponse2 = newResponse.split("*").join("</br>")
        setResultData(newResponse2)
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