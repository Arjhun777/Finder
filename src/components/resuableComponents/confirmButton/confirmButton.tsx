import React, { Ref, useState } from "react";
interface ConfirmButtonType {
    onClick: React.MouseEventHandler,
    onClose: React.MouseEventHandler,
    title: string,
    confirmText: string
}

function ConfirmButton({ onClick, onClose, title, confirmText }: ConfirmButtonType, ref: Ref<any>) {
    return (
        <React.Fragment>
            <div className="confirm-wrapper">
                <div className="confirm-title">{title}</div>
                <input ref={ref}></input>
                <div className="button-wrapper">
                    <button className="confirm-button" onClick={onClick}>{confirmText}</button>
                    <button className="cancel-button" onClick={onClose}>Cancel</button>
                </div>
            </div>
        </React.Fragment>
    )
}

export default React.forwardRef(ConfirmButton);