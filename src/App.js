import React,{useState} from 'react';
import './App.css';

function App() {
  let temp = '';
  const [value,setValue] = useState('')
  const enterHabit = (e)=>{
    temp = e.target.value;
  }
  const addHabit = ()=>{
    setValue(temp)
  }
  return (
    <div className="App">
     <h1>code</h1>
     <input  onChange={enterHabit}type="text" id="Habit-name" name="Habit-name" placeholder="eg: Code for 1 hr"/>
     <button onClick={addHabit} type="button" className="btn btn-warning btn-sm">+</button><br/>
     {value}
    </div>
  );
}

export default App;
/*
1. Enter text or don't 
2. Press + 
3. A tab which has - and + at the end should pop up of the entered text
4. Swipe at any direction should delete the habit 
5. I should have a option to undo deleted habits
*/




