import React, { useRef, useState } from 'react';
import { confirmAlert } from 'react-confirm-alert';
import ConfirmButton from '../confirmButton/confirmButton';
import MenuComponent from '../menu/menu';
import Draggable from 'react-draggable';
import Topnav from '../topnav/topnav';
type Item = {name: string, id: string};

interface CanvasProps {
    favourites: Array<{name: string, folders: Array<any>}>,
    setFavourites: Function,
    sidenavState: any,
    setSidenavState: Function
}

function CanvasArea({ favourites, setFavourites, sidenavState, setSidenavState }:CanvasProps) {
    const buttonRef = useRef();
    const dragRef:any = useRef([]);
    const [menuItems, setMenuItems] = useState([
        {name: 'Create Folder', id: 'create'},
        {name: 'Delete Folder', id: 'delete'}
    ]);
    const [renameIndex, setRenameIndex] = useState(-1);

    const handleAction = (item: Item) => {
        const isCreate = item.id === 'create';
        const isRename = item.id === 'rename';
        confirmAlert({
            overlayClassName: 'confirm-overlay',
            customUI: ({onClose}) => {
                return (
                    <ConfirmButton 
                        ref={buttonRef} 
                        onClick={() => {
                            isRename ? handleRename() : handleCreate(isCreate); 
                            onClose()
                        }}
                        onClose={onClose} 
                        title="Folder Name"
                        confirmText={item.id}
                    ></ConfirmButton>
                )
            }
        })
    }
    const handleCreate = (isCreate:boolean) => {
        // @ts-ignore
        const folderName = buttonRef.current.value;
        if (folderName?.length) {
            let index = -1;
            favourites[sidenavState.current].folders.map((folder, i) => {
                if (folder.folderName === folderName) index = i;
            });
            if (isCreate) favourites[sidenavState.current].folders.push({ folderName })
            else if (index >= 0) {
                favourites[sidenavState.current].folders.splice(index, 1);
            }
            setFavourites({...favourites});
        }
    }

    const handleRename = () => {
        // @ts-ignore
        const folderName = buttonRef.current.value;
        favourites[sidenavState.current].folders[renameIndex].folderName = folderName;
        setFavourites({...favourites});
    }

    const handleStop = (index: number) => {
        const { state } = dragRef.current[index];
        if (state?.x <= 0) {
            const folderDom = document.getElementById(`folder-index-${index}`);
            folderDom.style.transform = `translate(0px, ${state.y}px)`
            favourites[sidenavState.current].folders[index].x = 0;
        } else favourites[sidenavState.current].folders[index].x = state.x;
        favourites[sidenavState.current].folders[index].y = state.y;
        setFavourites({ ...favourites });
    }

    const handleContextMenu = (index:number) => {
        event.stopPropagation()
        menuItems[2] = ({ name: 'Rename Folder', id: 'rename' });
        setMenuItems(menuItems);
        setRenameIndex(index);
    }

    const handleOutsideClick = () => {
        if (menuItems[2]) {
            menuItems.splice(2, 1);
        }
    }

    return (
        <React.Fragment>
            <div className="top-canvas-wrapper" onClickCapture={handleOutsideClick} onContextMenuCapture={handleOutsideClick}>
                <Topnav sidenavState={sidenavState}/>
                <div className="canvas-wrapper">
                    {
                        favourites?.[sidenavState.current]?.folders?.length ?
                            favourites?.[sidenavState.current]?.folders.map((detail, index) => (
                                <Draggable
                                    grid={[25, 25]}
                                    scale={1}
                                    onStop={() => handleStop(index)}
                                    ref={el => dragRef.current[index] = el}
                                    key={sidenavState.current + index}
                                    defaultPosition={{x: detail.x || 0, y: detail.y || 0}}
                                >
                                    <div id={`folder-index-${index}`} className="folder-wrapper" onContextMenu={() => handleContextMenu(index)}>
                                        <img className="folder-image" src="/src/assets/images/mac-folder.png"></img>
                                        <div className="folder-title">{detail.folderName}</div>
                                    </div>
                                </Draggable>
                            ))
                    : 
                    <div className="no-result">No Folders Yet</div>}
                </div>
            </div>
            <MenuComponent handleClick={handleAction} menuItems={menuItems}/>
        </React.Fragment>
    )
}

export default CanvasArea;