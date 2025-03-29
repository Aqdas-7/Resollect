import React from "react";
import { 
  SignedIn, 
  SignedOut, 
  RedirectToSignIn 
} from "@clerk/clerk-react";
import Sidebar from "./components/Sidebar";
import Table from "./components/Table";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <SignedIn>
        <div style={{ display: "flex", height: "100vh" }}>
          <Sidebar />
          <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
            <Header />
            <Table />
          </div>
        </div>
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
};

export default App;