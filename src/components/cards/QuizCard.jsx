import {useContext} from "react";
import {Ans} from "../../context/AnsContext.jsx";


let selection;
function selectionhandler(evt){
  const target = evt.currentTarget;
  const  listid = target.dataset.listid;
  const element= document.querySelectorAll(`[data-listid=${listid}]`);
  element.forEach((elem,index)=>{
    if(elem.classList.contains("selected-opt"))
      elem.classList.remove("selected-opt");
  })
  target.classList.add("selected-opt");
  target.children["opt"+listid].checked = true;

  selection.setAns((ans)=>(
    {...ans,
      [listid]:(parseInt(target.dataset.optionid.codePointAt(0))-65),
    }));
}


  
export default function QuizCard(props){
  const {data, uid,current} = props;
  selection = useContext(Ans);


  return (
    <section className="quizcard"  hidden={current?false:true} >
      <div className="question-con">
	<p>{data.q}</p>
      </div>
      <div className="options-con">
	<ul>
	  {data.opts.map((opt,i)=>(
	    <li key={i} data-optionid={String.fromCodePoint(65+i)} data-listid={uid} onClick={selectionhandler}>
	      <p>{opt}</p>
	      <input type="radio"
		      name={"opt"+uid}
		      id={"opt"+i} 
		      />
	      </li>
	  ))}
	</ul>
      </div>
    </section>
  );
}

