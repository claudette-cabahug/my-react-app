/*
demonstrates default export
You can only have one default export in a file.
*/

const message = () => {
  const name = "Jesse"
  const age = 40
  return name + ' is ' + age + 'years old.'
}

export default message


/*
how to import default exports:
import message from "./message.js"
*/