import React from 'react'
import { Link } from 'react-router-dom';
import { Card, CardImg, CardBody, CardSubtitle, CardHeader } from 'reactstrap';
import { baseUrl } from '../shared/baseurl';

export const Menu = (props) => {
    return (
        <div className="menu">
            <div className="__header">

            </div>
            <div className="menu__dishes">
                <div className="container">
                    <MenuRender dishes={props.dishes}
                        isLoading={props.dishesLoading}
                        errMsg={props.dishesErrMsg} />
                    <div className="row"></div>
                </div>
            </div>
        </div>
    )
}


const MenuRender = ({ dishes, isLoading, errMsg }) => {
    const menu = dishes.map((dish) => {
        return (
            <div key={dish.id} className="col-12 col-sm-6 col-md-4 col-lg-3  p-2">
                <Card title={dish.description} >
                    <CardHeader>{dish.name}</CardHeader>
                    <Link to={`/menu/${dish.id}`}>
                        <CardImg src={baseUrl + dish.image}></CardImg>
                    </Link>
                    <CardBody>
                        <CardSubtitle className="row">
                            <div className="col-auto">{dish.category}</div>
                            <div className="col-auto ml-auto">{dish.price}</div>
                        </CardSubtitle>
                    </CardBody>
                </Card>
            </div>
        );
    });

    if (isLoading) {
        return (
            <h2>loading</h2>
        );
    } else if (errMsg) {
        return (
            <h4>{errMsg}</h4>
        );
    } else {
        return (
            <div className="row m-2 p-2 shadow">
                {menu}
            </div>
        );
    }
}