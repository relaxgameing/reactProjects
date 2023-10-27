import Timer from "./timer";

export default function Footer({state , dispatch}){

    return(
    <div className="question-footer">
        <Timer state={state} dispatch={dispatch}/>

        {state.hasAnswered && <button className="start-btn " onClick={()=> dispatch({action: "NEXT_QUESTION"})}>Next</button>}

    </div>
    )
}