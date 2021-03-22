import * as React from "react";
import { BrowserRouter } from "react-router-dom";
import ErrorBoundary from "./resuableComponents/errorBoundary/ErrorBoundary";
import { ContextProvider, SidenavProvider } from "../context/context";
import Sidenav from "./resuableComponents/sidenav/sidenav";
import HomeComponent from "./pageComponents/home/home";

const App = () => {
    
    return (
        <BrowserRouter>
            <ErrorBoundary history={history}>
                <ContextProvider>
                    <SidenavProvider>
                        <HomeComponent />
                    </SidenavProvider>
                </ContextProvider>
            </ErrorBoundary>
        </BrowserRouter>
    )
}

export default App;