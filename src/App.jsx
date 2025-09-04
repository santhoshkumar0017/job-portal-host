import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import ListofJobs from './Components/ListofJobs'
import HeaderComponent from './Components/HeaderComponent'
import JobApplicationComponent from './Components/JobApplicationComponent'
import JobComponent from './Components/JobComponent'

function App() {


  return (
    <>
    
     <BrowserRouter >
     <HeaderComponent/>

    <Routes>
  <Route index element={<ListofJobs />} />
  <Route path="api/jobApplication/:id" element={<JobApplicationComponent />} />
  <Route path="add-job" element={<JobComponent />} />
</Routes>

     
     </BrowserRouter>
     
    </>
  )
}

export default App
