import React from "react"; 
import { Route, Redirect } from "react-router-dom"; 
import { Login } from "./auth/Login"; 
import { Register } from "./auth/Register"; 
import { Item } from "./items/Item";
import { Shelf } from "./shelves/shelf";
import { ApplicationViews } from "./ApplicationsViews";
import "./TheWeddingCloset.css";

export const TheWeddingCloset = () => (
    
    <>
    <Route
      render={() => {
        if (localStorage.getItem("wedding_closet_user")) {
          console.log("2. wedding closet component loaded")
          return (
            <>
              <ApplicationViews />
            </>
          );
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />

    <Route path="/login">
      <Login />
    </Route>
    <Route path="/register">
      <Register />
    </Route>
  </>
)
