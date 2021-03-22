import React, { useContext } from "react"
import { HomeContext, SidenavContext } from "../../../context/context";
import CanvasArea from "../../resuableComponents/canvasArea/canvasArea";
import Sidenav from "../../resuableComponents/sidenav/sidenav";

function HomeComponent() {
    const [favourites, setFavourites]:any = useContext(HomeContext);
    const [sidenavState, setSidenavState]:any = useContext(SidenavContext);

    return (
        <React.Fragment>
            <div className="home-wrapper">
                <Sidenav favourites={favourites} setFavourites={setFavourites} sidenavState={sidenavState} setSidenavState={setSidenavState}/>
                <CanvasArea favourites={favourites} setFavourites={setFavourites} sidenavState={sidenavState} setSidenavState={setSidenavState}/>
            </div>
        </React.Fragment>
    )
}

export default HomeComponent;