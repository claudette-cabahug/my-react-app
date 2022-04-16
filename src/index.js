import React from 'react'
import ReactDOM from 'react-dom'

function Car(props) {
  return <h1>I am a {props.color} car!</h1>
}

ReactDOM.render(<Car color="red"/>, document.getElementById('root'))

// React renders HTML to the web page by using a function called ReactDOM.render().
// this is rendered to the div in index.html where root is found
