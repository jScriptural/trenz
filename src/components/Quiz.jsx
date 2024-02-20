import {useState,useContext,useEffect} from "react";
import quizdb from "../db/quiz.js";
import QuizCard from "./cards/QuizCard.jsx";
import {Ans} from "../context/AnsContext.jsx";
import Result from "./Result.jsx";
import {shuffle} from "./Home.jsx";

shuffle(quizdb);

export default function Quiz(props){
  const [count,setCount] = useState(0);
  const [submitted,setSubmitted] = useState(false);
  const [score,setScore] = useState(0);
  const selection = useContext(Ans);
  const ans = selection.ans;
  const len = quizdb.length;

  useEffect(()=>{
    window.scrollTo({
      behavior: "smooth",
      top: 0,
      left:0});
  });

  function handleSubmit(evt){
    setSubmitted(true);
    setCount(0);
    let correct = 0;
    quizdb.forEach((q,i)=>{
      console.log(q.ans);
      console.log(ans["q"+i]);
      if(q.ans === ans["q"+i])
	++correct;
    })

    setScore(correct);
  }

  function nexthandler(event){
    if(count+1 < len)
      setCount((count)=>count+1);
  }

  return (
    <section id="quiz">
    <header className="q-header">
     <h1>Flash quiz</h1>
     <span className={submitted?"score":"counter"}>{submitted?"Score  "+score:count+1}/{len}</span>
    </header>
    <main className="main">
    {!submitted?quizdb.map((q,i)=>(
       <QuizCard current={count == i?true:false}data={q} key={i} uid={"q"+i} />
    )) : <Result quizdb={quizdb} />}
    </main>
    <div className="btn-con">
      <button className="btn prev" hidden={count+1 > 1?false:true} onClick={()=>setCount(count-1)}>Prev</button>
      <button hidden={submitted}  className="btn next" onClick={count +1 < len?nexthandler:handleSubmit}>{count+1 < len?"Next":"Submit"} </button>
    </div>
    </section>
  );
}
