import React from 'react'

export const Loading = () => {
    return (
        <div className="loading">
            <div className="container">
                <div className="row loading__content py-auto">
                    <div className="col-12 text-center my-auto">
                        <span className="fa fa-spinner fa-pulse fa-5x fa-fw" />
                        <h2>Loading...</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}
