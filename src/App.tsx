
// import './App.css'
import Button from './components/Button'

function App() {
  const onclick = () => {
    console.log('Learning Typescript')
    return 5

  }


  return (
    <>
  <Button style={ {backgroundColor:'steelblue',
  fontSize: 24,
  padding:'1rem 2rem',
  borderRadius:8,
  borderColor: "transparent",
  color:'white'}}
  onClick={onclick}
   />
    </>
  )
}

export default App
