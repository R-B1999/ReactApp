import React from 'react'
import { Card, CardBody, CardHeader, CardImg, CardText, CardTitle } from 'reactstrap'

export const Chef = (props) => {
    const chef = props.chefs.map((chef) => {
        return (
            <div key={chef.id} className="col-10 col-sm-11 col-md-6 col-lg-4 p-3">
                <Card className="shadow chef__card">
                    <CardHeader>{chef.name}</CardHeader>
                    <CardImg src={chef.image} alt={chef.name} />
                    <CardBody>
                        <CardTitle>{chef.designation}</CardTitle>
                        <CardText>{chef.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    });
    return (
        <div className="chef">
            <div className="container">
                <div className="row py-3">
                    <h2>Our Honourable Chefs</h2>
                </div>
                <div className="row justify-content-around chef__content mb-3 p-2 shadow">
                    {chef}
                </div>
            </div>
            <hr />
        </div>
    )
}