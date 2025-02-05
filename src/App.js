import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import WhiteSpaceSection from './Components/WhiteSpaceSection';
import WorkTogether from './Components/WorkTogether';
import ProjectManagement from './Components/ProjectManagement';
import GetMore from './Components/GetMore';
import ProjectManagementParent from './Components/ProjectManagementParent';

function App() {
  return (
    <div className="App">
      
    <Navbar />
    <GetMore />
    <ProjectManagementParent />
    <WhiteSpaceSection />
    
    <WorkTogether />

    
   
  
    </div>
  );
}

export default App;
