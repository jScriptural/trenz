import {createContext} from "react";
import {useState} from "react";


const Ans = createContext();

export default function AnsContext({children})
{
  const [ans,setAns] = useState({});
  //const [isCorrect,setIscorrect] = useState(false);

  return (
    <Ans.Provider value={{ans,setAns}}>
     {children}
    </Ans.Provider>
  );

}

export  {Ans};
