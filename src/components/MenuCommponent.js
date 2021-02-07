import React from 'react'
import { Link } from 'react-router-dom';
import { Card, CardImg, CardBody, CardSubtitle, CardHeader } from 'reactstrap';

export const Menu = (props) => {
    const menu = props.dishes.map((dish) => {
        return (
            <div key={dish.id} className="col-12 col-sm-6 col-md-4 col-lg-3  p-2">
                <Card title={dish.description} >
                    <CardHeader>{dish.name}</CardHeader>
                    <Link to={`ReactApp/menu/${dish.id}`}>
                        <CardImg src={dish.image}></CardImg>
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

    return (
        <div className="menu">
            <div className="__header">

            </div>
            <div className="menu__dishes">
                <div className="container">
                    <div className="row m-2 p-2 shadow">
                        {menu}
                    </div>
                    <div className="row"></div>
                </div>
            </div>
        </div>
    )
}