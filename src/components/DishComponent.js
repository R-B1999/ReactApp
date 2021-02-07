import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardFooter, CardHeader, CardImg, CardSubtitle, CardTitle } from 'reactstrap';
import { Comments } from './CommentsComponent';


export const Dish = (props) => {
    return (
        <div className="dish__content">
            <div className="__header" />
            <div className="container">

                <Card className="dish__card shadow p-2">
                    <div className="row justify-content-center ">

                        <div className="col-10 col-md-7 img">
                            <CardImg src={props.dish.image} className="my-auto shadow" />
                        </div>

                        <div className="col-10 col-md-5 my-auto dish__detail">
                            <CardHeader>{props.dish.name}</CardHeader>

                            <CardBody className="shadow">
                                <CardTitle className="row">
                                    <div className="col-auto mr-auto">{props.dish.type}</div>
                                    <div className="col-auto ml-sm-auto">{props.dish.category}</div>
                                </CardTitle>

                                <CardSubtitle>{props.dish.description}</CardSubtitle>

                                <CardFooter className="row">
                                    <div className="ml-auto">{props.dish.price}</div>
                                </CardFooter>
                            </CardBody>
                            <Link className="btn btn-lg __link my-3">Place Order</Link>
                        </div>
                    </div>
                </Card>
                <hr />

                <Comments comments={props.comments} />

            </div>
        </div>
    )
}