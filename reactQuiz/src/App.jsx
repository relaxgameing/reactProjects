import { useEffect, useReducer, useState } from 'react'
import reactLogo from './assets/react.svg';
import './App.css'
import Intro from './components/intro';
import QuizUi from './components/quizUI';
import Complete from './components/complete';

const initialState ={
  questions:[],
  // starting , loading , active , finished , answered , error
  status: "starting",
  hasAnswered: false,
  currentQuestion:0,
  pointsEarned:0,
  totalPoints:0,
  totalQuestions:0,
  time:300,
  highScore:0,
}

function quizReducer(state , {action , payload}) {
    
  switch (action) {
    case "INITIAL_QUESTION_FETCH":
      const totalPoints = payload.reduce(function(acc , ques){
          return acc + ques.points
      },0)
      const highScore = localStorage.getItem("highScore")?.toString()

      console.log(totalPoints);
      return {...state , questions : payload,totalPoints,currentQuestion:0 , totalQuestions : payload.length , highScore : Number(highScore)}
      

    case "START_QUIZ":
        return {...state, status : "active"}

    case "QUESTION_SELECTED":
      const pointsForAnsweringCurrentQuestion = (state.questions[state.currentQuestion].correctOption === payload) ? state.questions[state.currentQuestion].points :0

      return {...state , pointsEarned : state.pointsEarned+pointsForAnsweringCurrentQuestion , hasAnswered : true}

    case "NEXT_QUESTION":
      const nextQuestion = state.currentQuestion +1 <= state.totalQuestions -1 ? state.currentQuestion +1 : null 

      if (nextQuestion !== null) {
        
        return {...state , currentQuestion : nextQuestion , hasAnswered : false}
      }else{
        console.log("finished");
        return {...state , currentQuestion : 14 , hasAnswered : false, status:"finished"}
      }

    case "UPDATE_TIMER":
        if(state.time -1>=1 )
          return {...state, time: state.time -1}
        else 
          return {...state , status :"finished"}
    case "UPDATE_HIGHSCORE":
        return {...state , highScore: state.pointsEarned}
          
    case "RESTART_QUIZ":
        const highscoreSaved = localStorage.getItem("highScore")
        return  {...initialState , questions : state.questions , highScore: Number(highscoreSaved), totalPoints: state.totalPoints, totalQuestions: state.totalQuestions}
    default:
        console.log("wrong action");
      break;
  }
}

function App() {
  //in reducer the inital state is the only state that we declare 
  //syntax  useReducer( < reducer  function > , <initial state> )
  //dispatch is the function that we call when we want to change the state according to the situation 
  const [state , dispatch] = useReducer(quizReducer ,initialState )

  useEffect(function () {
     async function  questionsCall() {

      try {
        const res = await fetch("http://localhost:8000/questions")
        const data = await res.json()
        console.log(data);

        dispatch({action: "INITIAL_QUESTION_FETCH" , payload: data })
      } catch (error) {
        console.log(error);
      }
     
    }
    questionsCall()
  },[])

  return (
    <>
     <div className='header-reactquiz'>
        <img src={reactLogo} alt="react logo" />
        
        <h1>THE REACT QUIZ</h1>
     </div>

    {
      state.status ==="starting" && 
      <Intro noOfQuestions={state.questions.length} dispatch={dispatch}/>
    }
     
    {
      state.status ==="active" && <QuizUi state={state} dispatch={dispatch}/>
    }

    {
      state.status ==="finished" && <Complete dispatch={dispatch} state={state}/>
    }


    </>
  )
}

export default App
