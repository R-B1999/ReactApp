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
import { actions } from "react-redux-form";
import { postComment, fetchDishes, fetchChefs, fetchComments, addFeedback } from "../redux/ActionCreators";

const mapStateToProps = (state) => {
    return {
        dishes: state.dishes,
        comments: state.comments,
        chefs: state.chefs
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addComment: (dishId, rating, author, comment) => dispatch(postComment(dishId, rating, author, comment)),
        fetchDishes: () => dispatch(fetchDishes()),
        fetchChefs: () => dispatch(fetchChefs()),
        fetchComments: (dishId) => dispatch(fetchComments(dishId)),
        resetFeedbackForm: () => dispatch(actions.reset('feedback')),
        addFeedback: (values) => dispatch(addFeedback(values))
    }
}

class Main extends Component {

    dishwithId = ({ match }) => {
        return (
            <Dish
                dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId))[0]}
                // comments={this.props.comments.comments}
                comments={this.props.comments.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId))}
                // fetchComments={this.props.fetchComments}
                addComment={this.props.addComment}
                dishesLoading={this.props.dishes.isLoading}
                dishesErrMsg={this.props.dishes.errMsg}
            />
        );
    }

    menuPage = () => {
        return (
            <Menu
                dishesLoading={this.props.dishes.isLoading}
                dishes={this.props.dishes.dishes}
                dishesErrMsg={this.props.dishes.errMsg}
                fetchComments={this.props.fetchComments}
            />
        );
    }

    aboutPage = () => {
        return (
            <About
                chefsLoading={this.props.chefs.isLoading}
                chefs={this.props.chefs.chefs}
                chefsErrMsg={this.props.chefs.errMsg}
            />
        );
    }

    componentDidMount() {
        this.props.fetchDishes();
        this.props.fetchChefs();
        this.props.fetchComments(0);
    }

    render() {
        return (
            <div>
                <NavToggle />

                <Switch>
                    <Route path="/home" component={Homepage} />
                    <Route exact path="/menu" component={this.menuPage} />
                    <Route exact path="/about" component={this.aboutPage} />
                    <Route exact path="/contact" component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm} addFeedback={this.props.addFeedback} />} />
                    <Route path="/menu/:dishId" component={this.dishwithId} />
                    <Redirect to="/home" />
                </Switch>

                <Footer />
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
