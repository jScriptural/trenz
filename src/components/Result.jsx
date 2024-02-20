import {useContext} from "react";
import {Ans} from "../context/AnsContext.jsx";

export default function Result({quizdb}){
  const selection = useContext(Ans);
  const ans = selection.ans;

  return (
    <>
      {quizdb.map((quiz,index)=>{
	const qid = "q"+index;
	return <div className="result" key={index}>
	<div className="q-con">
	  <p>{"Q"+(index+1)+"."}  {quiz.q}</p>
	</div>
	<ul className="opts-list">
	 {quiz.opts.map((opt,i)=>(
	   <li key={i} className={quiz.ans == i?"correct":(ans[qid] == i || ans[qid] == undefined)?"wrong":""}><p>{opt}</p></li>
	 ))}
	</ul>
	</div>
      })}
 </> );
}
