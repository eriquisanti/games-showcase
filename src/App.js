import React from "react";

import Routes from './Routes'

import { SearchContextProvider } from "./hooks/useSearch";
export function App(){
    return(
        <SearchContextProvider>
            <Routes/>
        </SearchContextProvider>      
    );
} 

export default App;
