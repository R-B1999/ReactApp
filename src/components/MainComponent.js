import React, { Component } from 'react';
import NavToggle from './NavbarComponent';
import { Homepage } from './HomepageComponent';
import { Menu } from './MenuCommponent';
import { About } from './AboutComponent';
import { Contact } from './ContactComponent';
import { Dish } from "./DishComponent";
import { Footer } from './FooterComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addComment } from "../redux/ActionCreators";

const mapStateToProps = (state) => {
    return {
        dishes: state.dishes,
        comments: state.comments,
        chefs: state.chefs
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment))
    }
}

class Main extends Component {

    dishwithId = ({ match }) => {
        return (
            <Dish
                dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId))[0]}
                comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId))}
                addComment={this.props.addComment}
            />
        );
    }


    render() {
        return (
            <div>
                <NavToggle />
                <Switch>
                    <Route path="/home" component={Homepage} />
                    <Route exact path="/menu" component={() => <Menu dishes={this.props.dishes} />} />
                    <Route exact path="/about" component={() => <About chefs={this.props.chefs} />} />
                    <Route exact path="/contact" component={Contact} />
                    <Route path="/menu/:dishId" component={this.dishwithId} />
                    <Redirect to="/home" />
                </Switch>
                {/* <Homepage /> */}
                <Footer />
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
