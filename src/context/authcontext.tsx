import React, { useContext, createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";



export const UserAuthContext = createContext({
  authenticated: false,
  setAuthenticated: (_:boolean) => {}
});

