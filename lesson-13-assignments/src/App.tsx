import UserInfo from './components/UserInfo'
import Card from './components/Card'
import './App.css'

function App() {

  return (
    <>
      <h2>Assignment 1:</h2>
      <UserInfo {... {name: 'John', age: 16, email: 'john@example.com'} } />
      <h2>Assignment 2:</h2>
      <Card>This is a child prop.</Card>
    </>
  )
}

export default App
