import { createContext, useState } from 'react'
import './App.css'
import SideBar from './components/sidebar/SideBar'
import FeedPage from './pages/feed/FeedPage'

export interface I_RouteContext {
  setRoute?: (arg: string) => void
}
export const RouteContext = createContext<I_RouteContext>({})

function App() {

  const [showPage, setShowPage] = useState(false)

  const setRoute = (route: string) => {
    route === "feed" ? setShowPage(true) : setShowPage(false)
  }

  console.log(showPage);

  return (
    <RouteContext.Provider value={{ setRoute }}>
      <div className="App">
        <SideBar />
        {showPage && <FeedPage />}
      </div>
    </RouteContext.Provider>
  )
}

export default App
