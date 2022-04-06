import { Header } from './components/Header';
import { Jobs } from './components/Jobs';
import { Tools } from './components/Tools';
import { Logs } from './components/Logs';
import { Sidebar } from './components/Sidebar';
import { Routes, Route} from "react-router-dom";


export const App = () => {
  return (
    <>
     <div className="wrapper">
      <Header />

      <div className="wrapper__body">
        <Sidebar />
      <Routes>
        <Route path="/" element={<Jobs />} />
        <Route path="tools" element={<Tools />} />
        <Route path="Materials" element={<Materials />} />
        <Route path="Setting" element={<Setting />} />
        <Route path="Logs" element={<Logs />} />

      </Routes>
      </div>
    </div>
      </> 
  );
};

let Setting,Materials;
 Setting = Materials  = () => {
  return (
    
    <h1 Style="margin:0 auto; color:red;">
      Page comming soon
    </h1>  
    
  );
};

  