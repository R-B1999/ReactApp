import React, { Component } from 'react';
import NavToggle from './NavbarComponent';
import { Homepage } from './HomepageComponent';
import { Menu } from './MenuCommponent';
import { Contact } from './ContactComponent';
import { Dish } from "./DishComponent";
import { Footer } from './FooterComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        dishes: state.dishes,
        comments: state.comments
    }
}


class Main extends Component {

    dishwithId = ({ match }) => {
        return (
            <Dish
                dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId))[0]}
                comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId))}
            />
        );
    }


    render() {
        return (
            <div>
                <NavToggle />
                <Switch>
                    <Route path="/ReactApp/home" component={Homepage} />
                    <Route exact path="/ReactApp/menu" component={() => <Menu dishes={this.props.dishes} />} />
                    <Route path="/ReactApp/contact" component={Contact} />
                    <Route path="/ReactApp/menu/:dishId" component={this.dishwithId} />
                    <Redirect to="/ReactApp/home" />
                </Switch>
                {/* <Homepage /> */}
                <Footer />
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps)(Main));
