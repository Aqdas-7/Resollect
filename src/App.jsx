import React from "react";
import Sidebar from "./components/Sidebar";
import Table from "./components/Table";
import Header from "./components/Header";

const App = () => {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar />
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <Header />
        <Table />
      </div>
    </div>
  );
};

export default App;
