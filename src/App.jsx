
import { Route ,Routes} from 'react-router-dom'
import './App.css'
import Landing from './pages/Landing'
import Resumegen  from './pages/Resumegen'
import Userform from './pages/Userform'
import History from './pages/History'
import Pnf from './pages/Pnf'
import Header from './component/Header'
import Footer from './component/Footer'
import Viewresume from './pages/Viewresume'
function App() {


  return(
    <>
    <Header/>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/resume" element={<Resumegen />} />
        <Route path="/userform" element={<Userform />} />
        <Route path="/history" element={<History />} />
        <Route path='/resume/:id/view' element={<Viewresume />} />
        <Route path="/*" element={<Pnf />} />
      </Routes>
    <Footer/>
    </>
  )
}


export default App
