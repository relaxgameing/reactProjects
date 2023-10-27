export default function Intro({noOfQuestions,dispatch}) {
    

    return(
        <div className='intro-container'>  
        <h1>Welcome to The React Quiz! </h1>
        <br />
        <h2> <span className='no-of-question'>{noOfQuestions}  </span>questions to test your React mastery</h2>
        <br />
        <button className='button start-btn' onClick={()=> dispatch({action:"START_QUIZ", payload : "active"})}>Let's start!</button>
     </div>
    )
}