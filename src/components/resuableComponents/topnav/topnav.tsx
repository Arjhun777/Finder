import React from 'react';
interface TopnavType {
    sidenavState: any
}
function Topnav({ sidenavState }: TopnavType) {
    return (
        <React.Fragment>
            <div className="topnav-wrapper">
                {sidenavState.current}
            </div>
        </React.Fragment>
    )
}

export default Topnav;