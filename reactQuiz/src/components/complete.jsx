export default function Complete({dispatch,state}) {
   
    if (state.pointsEarned > state.highScore) {
         localStorage.setItem("highScore",state.pointsEarned)
         dispatch({action:"UPDATE_HIGHSCORE" })
    }

    

    return (
        <div className="score-container">
            <div className="points-scored">
            🎉 You scored <strong>{state.pointsEarned}</strong> out of {state.totalPoints} ({Math.floor((state.pointsEarned/state.totalPoints)*100)}%)
            </div>

            <div className="highscore">
            (Highscore: <strong>{state.highScore || "0"}</strong>  points)
            </div>

            <button className="restart-quiz " onClick={()=> dispatch({action:"RESTART_QUIZ"})}>Restart quiz</button>
            
        </div>
    )
}