
import { useEffect } from "react";
import StatusBar from "./statusBar";
import CurrentQuestion from "./currentQuestion";
import Footer from "./footer";

export default function QuizUi({state,dispatch}) {

    return(
        <div className="quiz-container">
            <StatusBar state={state}/>
            
           <CurrentQuestion state={state} dispatch={dispatch}/>

            <br />
           <Footer state={state} dispatch={dispatch}/>
        </div>
    )
}