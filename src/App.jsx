import {Header,Footer, AddTodo, EditTodo} from './components/index'

import './index.css'
import ListTodo from './components/ListTodo'


function App() {
  

  return (
    <div>
      <Header />
      <AddTodo />
      <ListTodo />
      <Footer />
    </div>
  )
}

export default App
