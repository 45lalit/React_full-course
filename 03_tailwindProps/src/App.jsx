import './App.css'
import Card from './card.jsx'

function App() {
  return (
    <>
    <h1 className='bg-green-800 text-red-400 p-4 rounded-xl mb-6'>Tailwind test</h1>
    <Card username="Lalit" role="full-stack developer" btntext="Know More"/>
    <Card username="John"  btntext="visit me"/>
    </>
  )
}

export default App