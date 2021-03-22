import React from 'react'
import useContextMenu from '../../../customHooks/useContextMenu';
interface MenuProps {
    handleClick: any,
    menuItems: Array<{name: string, id: string}>
}

function MenuComponent({ handleClick, menuItems }: MenuProps) {
    const { xPos, yPos, showMenu } = useContextMenu();
    if (!showMenu) return null;
    else 
        return (
            <React.Fragment>
                <div className="menu-wrapper" style={{ top: yPos, left: xPos, position: 'absolute' }}>
                    <ul className="ul-menu">
                        {
                            menuItems.map((item, index) => (
                                <>
                                    <li className="li-menu" onClick={(e) => handleClick(item)}>{item.name}</li>
                                    {index !== menuItems.length-1 && <div className="hr-menu"></div>}
                                </>
                            ))
                        }
                    </ul>
                </div>
            </React.Fragment>
        )
}

export default MenuComponent;