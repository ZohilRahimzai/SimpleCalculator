const screen=document.getElementById("screen")
const buttons=document.querySelectorAll("button")

let expression=""

buttons.forEach(btn=>{
  btn.onclick=()=>{
    const value=btn.innerText

    if(btn.classList.contains("number")){
      if(value==="."&&expression.split(/[\+\−×÷]/).pop().includes("."))return
      expression+=value
      screen.innerText=expression
    }

    if(btn.classList.contains("operator")){
      if(expression===""||/[\+\−×÷]$/.test(expression))return
      expression+=value
      screen.innerText=expression
    }

    if(btn.classList.contains("equal")){
      if(expression==="")return
      const result=eval(
        expression
          .replace(/×/g,"*")
          .replace(/÷/g,"/")
          .replace(/−/g,"-")
      )
      screen.innerText=result
      expression=result.toString()
    }

    if(btn.classList.contains("clear")){
      expression=""
      screen.innerText="0"
    }
  }
})
