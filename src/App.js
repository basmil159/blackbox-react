import { Jobs } from "./components/Jobs";
import { Logs } from "./components/Logs";
import { Header } from "./components/Header";
import { Tools } from "./components/Tools";
import { Sidebar } from "./components/Sidebar";
import { Routes, Route } from "react-router-dom";

export const App = () => {
  return (
    <>
      <div className="wrapper">
        <Header />

        <div
          className="wrapper__body"
          style={{ position: "absolute", top: "8rem", width: "100%" }}
        >
          <Sidebar />
          <Routes>
            <Route path="/" element={<Jobs />} />
            <Route path="tools" element={<Tools />} />
            <Route path="materials" element={<Materials />} />
            <Route path="setting" element={<Setting />} />
            <Route path="logs" element={<Logs />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

let Setting, Materials;

Setting = Materials = () => {
  return <h1 Style="margin:0 auto; color:red;">Page comming soon</h1>;
};
