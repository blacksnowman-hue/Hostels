

import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import { Layout } from './layouts/Layouts'

const App = () => {

  return (

 <Router  >
  <Routes>
    <Route path="/" element={<Layout>
      <p>Home Page</p>
    </Layout>} />
    <Route path="/search" element={<Layout>
      <p>Search Page</p>
    </Layout>} /> 
    <Route path="*" element={< Navigate to="/"/>} />

    
  </Routes>
  </Router>
  
  )
}

export default App
