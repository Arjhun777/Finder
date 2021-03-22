import React, { useState, createContext, Context } from 'react';

interface ContextProps {
    children?: any
}
type FavouriteType = {}
type SidenavType = {}

const FAVIROUTES:FavouriteType = {
    AirDrop: {
        name: 'AirDrop', 
        folders: [{folderName: 'AirDrop', x: 0, y: 0}], 
        icon: 'airdrop.png'
    },
    Recents: {
        name: 'Recents', 
        folders: [{folderName: 'Recents', x: 0, y: 0}], 
        icon: 'recent.png'
    },
    Applications: {
        name: 'Applications', 
        folders: [{folderName: 'Applications', x: 0, y: 0}], 
        icon: 'application.png'
    },
    Downloads:  {
        name: 'Downloads', 
        folders: [{folderName: 'Downloads', x: 0, y: 0}], 
        icon: 'download.png'
    },
    Pictures: {
        name: 'Pictures', 
        folders: [{folderName: 'Pictures', x: 0, y: 0}], 
        icon: 'pictures.png'
    },
    Music: {
        name: 'Music', 
        folders: [{folderName: 'default', x: 0, y: 0}], 
        icon: 'music.jpg'
    },
    Movies: {
        name: 'Movies', 
        folders: [{folderName: 'Movies', x: 0, y: 0}], 
        icon: 'movie.png'
    },
    ['Creative Cloud Files']: {
        name: 'Creative Cloud Files', 
        folders: [{folderName: 'default', x: 0, y: 0}], 
        icon: 'cloud.jpg'
    }
}
const SIDENAV:SidenavType = {
    current: 'Music'
}

export const HomeContext:Context<FavouriteType> = createContext(FAVIROUTES);
export const SidenavContext = createContext(SIDENAV);

export function ContextProvider(props: ContextProps) {
    const [favourites, setFavourites]:any = useState({...FAVIROUTES});
    return (
        <React.Fragment>
            <HomeContext.Provider value={[favourites, setFavourites]}>
                {props.children}
            </HomeContext.Provider>
        </React.Fragment>
    )
}

export function SidenavProvider(props: ContextProps) {
    const [sidenavState, setSidenavState] = useState({...SIDENAV});
    return (
        <React.Fragment>
            <SidenavContext.Provider value={[sidenavState, setSidenavState]}>
                {props.children}
            </SidenavContext.Provider>
        </React.Fragment>
    )
}

