import { string } from "prop-types";
import React, { useContext } from "react"
import { HomeContext, SidenavContext } from "../../../context/context";

interface SidenavProps {
    favourites: {key: {name: string, folder: [], icon: string}},
    setFavourites: Function,
    sidenavState: any,
    setSidenavState: Function
}

function Sidenav({ favourites, setFavourites, sidenavState, setSidenavState }: SidenavProps) {
    const clickHandle = (favourite:any) => {
        if (sidenavState !== favourite.name) setSidenavState({current: favourite.name});
    }

    return (
        <React.Fragment>
            <div id="sidenav-wrapper">
                <p className="head-sidenav">Favourites</p>
                <ul className="ul-sidenav">
                {
                    Object.entries(favourites).map(([key, favourite]) => (
                        <div className={`li-wrapper  ${key === sidenavState.current ? 'li-selected' : ''}`}>
                            <img className="sidenav-li-image" src={`/src/assets/images/${favourite.icon}`}></img>
                            <li className={`li-sidenav`} onClick={() => clickHandle(favourite)}>{favourite.name}</li>
                        </div>
                    ))
                }
                </ul>
            </div>
        </React.Fragment>
    )
}

export default Sidenav;