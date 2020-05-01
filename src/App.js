import React from 'react';
import PropTypes from 'prop-types';

const App =  () => {
  const profiles = [
    { name:"Taro", age: 10 },
    { name: "Noname" , age: 3},
    { name:"Hanako", age: 5 }
  ]
  return (
    <div>
      {profiles.map((profiles, index) => {
        return <User name = {profiles.name} age = {profiles.age} key={index}/>
      }
      )}
    </div>
  )
}

const User =  (props) => {
  return (
    <div>
      Hi , I am {props.name}, and {props.age} years old!
    </div>
  )
}

User.propTypes = {
  name : PropTypes.string.isRequired,
  age : PropTypes.number.isRequired
}

export default App;
