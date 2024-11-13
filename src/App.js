

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'; // Import your CSS styles
import Navbar from './components/Navbar';
import UserLogin from './components/UserLogin';
import UserSignup from './components/UserSignup';
import ProductList from './components/ProductList';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navbar for navigation */}
        <Navbar />
        
        <div className="content">
          <Routes>
            <Route path="/" element={<UserLogin />} />
            <Route path="/signup" element={<UserSignup />} />
            <Route path="/products" element={<ProductList />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;


// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import './App.css'; // Import your CSS styles
// import Navbar from './components/Navbar';
// import UserLogin from './components/UserLogin';
// import UserSignup from './components/UserSignup';
// import ProductList from './components/ProductList';

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         {/* Navbar for navigation */}
//         <Navbar />

//         <div className="content">
//           <Routes>
//             {/* Define routes for different pages */}
//             <Route path="/" element={<UserLogin />} />
//             <Route path="/signup" element={<UserSignup />} />
//             <Route path="/products" element={<ProductList />} />
//           </Routes>
//         </div>
//       </div>
//     </Router>
//   );
// }

// export default App;
