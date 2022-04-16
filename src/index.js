import React from 'react'
import ReactDOM from 'react-dom'

const x = 5

const myelement = <h1>{x < 10 ? "Hello" : "Goodbye"}</h1>

ReactDOM.render(myelement, document.getElementById('root'))

// React renders HTML to the web page by using a function called ReactDOM.render().
// this is rendered to the div in index.html where root is found
