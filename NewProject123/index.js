const screen=document.getElementById("screen")
const buttons=document.querySelectorAll("button")
let current=""
let operator=""
let previous=""

buttons.forEach(btn=>{
  btn.onclick=()=>{
    const value=btn.innerText

    if(btn.classList.contains("number")){
      if(value==="."&&current.includes("."))return
      current+=value
      screen.innerText=current
    }

    if(btn.classList.contains("operator")){
      if(current==="")return
      previous=current
      current=""
      operator=value
    }

    if(btn.classList.contains("equal")){
      if(current===""||previous==="")return
      let result
      const a=parseFloat(previous)
      const b=parseFloat(current)

      if(operator==="+" )result=a+b
      if(operator==="−")result=a-b
      if(operator==="×")result=a*b
      if(operator==="÷")result=b===0?"Error":a/b

      screen.innerText=result
      current=result.toString()
      previous=""
      operator=""
    }

    if(btn.classList.contains("clear")){
      current=""
      previous=""
      operator=""
      screen.innerText="0"
    }
  }
})
