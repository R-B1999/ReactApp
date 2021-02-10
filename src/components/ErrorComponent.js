import React from 'react'

export const Error = (props) => {
    return (
        <div className="error">
            <div className="container">
                <div className="row error__content py-auto">
                    <div className="col-12 text-center my-auto">
                        <span className="fa fa-exclamation-triangle fa-5x" />
                        <h2>{props.msg}</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}