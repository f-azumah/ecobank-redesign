import { Routes, Route} from 'react-router-dom'
import BankingApp from './BankingApp'
import CaseStudy from './CaseStudy'

function App(){
  return (
    <Routes>
      <Route path='/' element={<BankingApp />} />
      <Route path='/case-study' element={<CaseStudy />} />
    </Routes>
  )
}

export default App