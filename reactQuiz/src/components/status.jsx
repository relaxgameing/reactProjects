export default function Status({currentQuestion , totalQuestions , pointsEarned , totalPoints}) {
    return (
        <div className="current-stat">
        <span className="current-question">
          <h3> Question: {currentQuestion +1}/{totalQuestions} </h3>  
        </span>
        <span className="total-points"> 
           <h3> {pointsEarned}/{totalPoints} points</h3> 
        </span>
    </div>
    )
}