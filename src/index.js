import React from 'react'
import ReactDOM from 'react-dom'

function Car() {
  return <h2>Hi, I am Claudette!</h2>
}

ReactDOM.render(<Car />, document.getElementById('root'))

// React renders HTML to the web page by using a function called ReactDOM.render().
// this is rendered to the div in index.html where root is found
