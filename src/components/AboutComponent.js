import React from 'react';
import { Chef } from './ChefComponent';

export const About = (props) => {
    return (
        <div>
            <div className="about">
                <div className="container">
                    <div className="__header"></div>
                    <div className="row justify-content-center about__content shadow">
                        <div className="col-10">
                            <p>
                                Our restaurant brands are built on key customer insights.
                                The Indian dining experience where food is synonymous with entertainment is our chief inspiration.
                            </p>
                            <p>
                                The culinary and experiential diversity of these restaurant brands reflect the rich diversity of those who visit our restaurants.
                                At each of our restaurant brands, the experience differs.
                            </p>
                            <p>
                                All the details are linked to the brand experience- the menu, ambience, team culture and even the marketing.
                                We believe that focusing on enhancing our guest experience will help create brands that have the greatest impact on our customers.
                            </p>
                        </div>
                    </div>
                    <hr />
                </div>
                <Chef
                    chefs={props.chefs}
                    isLoading={props.chefsLoading}
                    errMsg={props.chefsErrMsg}
                />
            </div>
        </div>
    )
}