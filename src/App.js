import React , {Component} from 'react';

// class App extends Component{
//   render(){
//     return(
//       <>
//         <label htmlFor = "bar">bar</label>
//         <input type = "text" onChange={() => {console.log("aa")}}/>
//       </>
//     ) 
//   }
// }

const App =  () => {
  return (
    <div>
      <Cat />
    </div>
  )
}

const Cat =  () => {
  return (
    <div>
      Meow!
    </div>
  )
}

export default App;
