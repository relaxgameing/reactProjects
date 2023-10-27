import ProgressBar from './progressBar';
import Status from './status';

export default function StatusBar({state}) {
    const {currentQuestion , totalPoints, totalQuestions , pointsEarned} = state;
    return (
        <div className="status-bar">
                
                <ProgressBar max={totalQuestions} value={currentQuestion+1}/>
                <br />
                <Status currentQuestion={currentQuestion} pointsEarned={pointsEarned} totalPoints={totalPoints}/>
            </div>
    )
}