import React from 'react'

function Operator() {
    let score = 0;
  return (
    <div>
        <button onClick={()=>{
            let  a = 20 + 35; 
            let  b = 20-10;
            let  c = 40 * 3;
            let  d = 40 / 4;
            let  e = 40 % 4;

            alert(`Arithmetic Operator value of addition is ${a}`);
            alert(`Arithmetic Operator value of subtraction is ${b}`);
            alert(`Arithmetic Operator value of Multiplication is ${c}`);
            alert(`Arithmetic Operator value of Division is ${d}`);
            alert(`Arithmetic Operator value of Modulus is ${e}`);
            console.log(a);
            console.log(b);
            console.log(c);
            console.log(d);
            console.log(e);
            

        }}>Arithmetic Operators</button>
        <button onClick={()=>{
            score++;
            console.log(score);
        }}>Increment</button>
        <button onClick={()=>{
            score--;
            console.log(score);
        }}>Decrement</button>

        <button onClick={()=>{
            let a=50;
            a +=10;
            a -= 30;
            a *= 5;
            alert(`Assignment Opeator values are ${a}`);
            console.log(a);

        }}>Assignment Opeators</button>

        <button onClick={()=>{

            let marks=50;
            
            console.log(marks >= 40);
            console.log(marks <= 40);
            console.log(marks == 50);
            console.log(marks >= 35);
            console.log(marks != 40);
            console.log(marks < 100);
            console.log(marks > 20);


        }}>Comparison Operatos</button>

    </div>
  )
}

export default Operator