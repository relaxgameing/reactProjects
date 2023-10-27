export default function CurrentQuestion({state,dispatch}){

    const questionToDisplay = state.questions.find((_,i)=> i ===( state.currentQuestion ));

    return(
    <div className="question-container">
        <div className="question">
            <h2>
            {questionToDisplay?.question}
            </h2>
        </div>
        <br />
        <div className="question-option-container">
            {
            questionToDisplay?.options
            .map((el,i)=> 
             <button key={i} className={`question-option  ${state.hasAnswered && (state.questions[state.currentQuestion].correctOption === i ? "correct" : "wrong")}`} disabled={state.hasAnswered} onClick={()=> dispatch({action:"QUESTION_SELECTED" , payload:i }) }>{el}</button>)
            }    
        </div>

    </div>
    )
}