import { useState } from 'react'
import { HashRouter } from 'react-router-dom';
import RouterView from "./router";

function App() {
  const [count, setCount] = useState(0)

  return (
    <HashRouter>
      <RouterView />
    </HashRouter>
  )
}

export default App
