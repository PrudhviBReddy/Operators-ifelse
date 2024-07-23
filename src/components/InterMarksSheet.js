import React, { useEffect, useRef } from 'react'

function InterMarksSheet() {
    let firstNameInputRef = useRef();
    let lastNameInputRef = useRef();
    let englishInputRef = useRef();
    let sanskritInputRef = useRef();
    let mathsaInputRef = useRef();
    let mathsbInputRef = useRef();
    let physicsInputRef = useRef();
    let chemistryInputRef = useRef();
    let resultParaRef = useRef();

    let firstNameResultRef = useRef();
    let lastNameResultRef = useRef();
    let englishResultRef = useRef();
    let sanskritResultRef = useRef();
    let mathsaResultRef = useRef();
    let mathsbResultRef = useRef();
    let physicsResultRef = useRef();
    let chemistryResultRef = useRef();

    useEffect(()=>{
       alert("Welcome to Our Website")
    },[]);

    


  return (
    <div>
        <form className="markssheet">
            <div>
                <label>FIRST NAME</label>
                <input type="text" ref={firstNameInputRef}
                onFocus={()=>{
                    console.log("FirstName-onFocus");
                    firstNameInputRef.current.style.backgroundColor = "lightblue";
                    firstNameInputRef.current.style.color = "black";
                }} 
                onChange={()=>{
                    console.log("FirstName-onChange");
                }} 
                onBlur={()=>{
                    console.log("FirstName-onBlur");
                    firstNameInputRef.current.style.backgroundColor = "";
                    firstNameInputRef.current.style.color = "black";
                }}></input>
                <span ref={firstNameResultRef}></span>
            </div>
            <div>
                <label>LAST NAME</label>
                <input type="text" ref={lastNameInputRef}
                onFocus={()=>{
                    console.log("LastName-onFocus");
                    lastNameInputRef.current.style.backgroundColor = "lightpink";
                    lastNameInputRef.current.style.color = "black";
                }} 
                onChange={()=>{
                    console.log("LastName-onChange");
                }} 
                onBlur={()=>{
                    console.log("LastName-onBlur");
                    lastNameInputRef.current.style.backgroundColor = "";
                    lastNameInputRef.current.style.color = "black";
                }}></input>
                <span ref={lastNameResultRef}></span>
            </div>
            <div>
                <label>ENGLISH</label>
                <input type="number" ref={englishInputRef}
                onFocus={()=>{
                    console.log("English-onFocus");
                    englishInputRef.current.style.backgroundColor = "green";
                    englishInputRef.current.style.color = "white";
                }} 
                onChange={()=>{
                    
                    if(englishInputRef.current.value >=35){
                        englishResultRef.current.innerHTML = "Pass";
                        englishResultRef.current.style.backgroundColor = "green"
                    }else{
                        englishResultRef.current.innerHTML = "Fail";
                        englishResultRef.current.style.backgroundColor = "red";
                    }
                }} 
                onBlur={()=>{
                    console.log("English-onBlur");
                    englishInputRef.current.style.backgroundColor = "";
                    englishInputRef.current.style.color = "black";
                }}></input>
                <span ref={englishResultRef}></span>
            </div>
            <div>
                <label>SANSKRIT</label>
                <input type="number" ref={sanskritInputRef}
                onFocus={()=>{
                    console.log("Sanskrit-onFocus");
                    sanskritInputRef.current.style.backgroundColor = "orange";
                    sanskritInputRef.current.style.color = "white";
                }} 
                onChange={()=>{
                   if( sanskritInputRef.current.value >= 35){
                    sanskritResultRef.current.innerHTML = "Pass";
                    sanskritResultRef.current.style.backgroundColor = "green";
                   }else{
                    sanskritResultRef.current.innerHTML = "Fail";
                    sanskritResultRef.current.style.backgroundColor = "red";
                   }
                }} 
                onBlur={()=>{
                    console.log("Sanskrit-onBlur");
                    sanskritInputRef.current.style.backgroundColor = "";
                    sanskritInputRef.current.style.color = "black";
                }}></input>
                <span ref={sanskritResultRef}></span>
            </div>
            <div>
                <label>MATHS-(A)</label>
                <input type="number" ref={mathsaInputRef}
                onFocus={()=>{
                    console.log("Mathsa-onFocus");
                    mathsaInputRef.current.style.backgroundColor = "black";
                    mathsaInputRef.current.style.color = "white";
                }} 
                onChange={()=>{
                    if(mathsaInputRef.current.value >= 35){
                        mathsaResultRef.current.innerHTML = "Pass";
                        mathsaResultRef.current.style.backgroundColor = "green";
                    }else{
                        mathsaResultRef.current.innerHTML = "red";
                        mathsaResultRef.current.style.backgroundColor = "red";
                    }
                 }} 
                onBlur={()=>{
                    console.log("Mathsa-onBlur");
                    mathsaInputRef.current.style.backgroundColor = "";
                    mathsaInputRef.current.style.color = "black";
                }}></input>
                <span ref={mathsaResultRef}></span>
            </div>
            <div>
                <label>MATHS-(B)</label>
                <input type="number" ref={mathsbInputRef}
                onFocus={()=>{
                    console.log("Mathsb-onFocus");
                    mathsbInputRef.current.style.backgroundColor = "red";
                    mathsbInputRef.current.style.color = "white";
                }} 
                onChange={()=>{
                    if(mathsbInputRef.current.value >= 35){
                        mathsbResultRef.current.innerHTML = "Pass";
                        mathsbResultRef.current.style.backgroundColor = "green";
                    }else{
                        mathsbResultRef.current.innerHTML = "Fail";
                        mathsbResultRef.current.style.backgroundColor = "red";
                    }
                }} 
                onBlur={()=>{
                    console.log("Mathsb-onBlur");
                    mathsbInputRef.current.style.backgroundColor = "";
                    mathsbInputRef.current.style.color = "black";
                }}></input>
                <span ref={mathsbResultRef}></span>
            </div>
            <div>
                <label>PHYSICS</label>
                <input type="number" ref={physicsInputRef}
                onFocus={()=>{
                    console.log("Physics-onFocus");
                    physicsInputRef.current.style.backgroundColor = "Yellow";
                    physicsInputRef.current.style.color = "black";
                }} 
                onChange={()=>{
                    if(physicsInputRef.current.value >= 35){
                        physicsResultRef.current.innerHTML = "Pass";
                        physicsResultRef.current.style.backgroundColor = "green";
                    }else{
                        physicsResultRef.current.innerHTML = "Fail";
                        physicsResultRef.current.style.backgroundColor = "red";
                    }
                 }} 
                onBlur={()=>{
                    console.log("Physics-onBlur");
                    physicsInputRef.current.style.backgroundColor = "";
                    physicsInputRef.current.style.color = "black";
                }}></input>
                <span ref={physicsResultRef}></span>
            </div>
            <div>
                <label>CHEMISTRY</label>
                <input type="number" ref={chemistryInputRef}
                onFocus={()=>{
                    console.log("Chemistry-onFocus");
                    chemistryInputRef.current.style.backgroundColor = "blue";
                    chemistryInputRef.current.style.color = "white";
                }} 
                onChange={()=>{
                    if(chemistryInputRef.current.value >= 35){
                        chemistryResultRef.current.innerHTML = "Pass";
                        chemistryResultRef.current.style.backgroundColor = "green";
                    }else{
                        chemistryResultRef.current.innerHTML = "Fail";
                        chemistryResultRef.current.style.backgroundColor = "red"
                    }
                }} 
                onBlur={()=>{
                    console.log("Chemistry-onBlur");
                    chemistryInputRef.current.style.backgroundColor = "";
                    chemistryInputRef.current.style.color = "black";
                }}></input>
                <span ref={chemistryResultRef}></span>
            </div>
            <div>
                <button type="button" 
                onMouseMove={()=>{
                    let firstName = firstNameInputRef.current.value;
                    let lastName = lastNameInputRef.current.value;
                    let englishMarks = Number(englishInputRef.current.value);
                    let sanskritMarks = Number(sanskritInputRef.current.value);
                    let mathsaMarks = Number(mathsaInputRef.current.value);
                    let mathsbMarks = Number(mathsbInputRef.current.value);
                    let physicsMarks = Number(physicsInputRef.current.value);
                    let chemistryMarks = Number(chemistryInputRef.current.value);
                    let totalMarks = englishMarks+sanskritMarks+mathsaMarks+mathsbMarks+physicsMarks+chemistryMarks;
                    
                    
                    alert(`${firstName} Total Marks are ${totalMarks}`);
                    resultParaRef.current.innerHTML = `${firstName} ${lastName} got total marks are ${totalMarks}`;
                    console.log(totalMarks);



                }}>Result</button>
            </div>
            <p ref={resultParaRef}>Please Enter Values and Click Calculate</p>
        </form>
    </div>
  )
}

export default InterMarksSheet