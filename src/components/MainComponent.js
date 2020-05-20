import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Home from './HomeComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Menu from './MenuComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import DishDetail from './DishdetailComponent';

const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}

class Main extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const HomePage = () => {
            return(
                <Home dish={this.props.dishes.filter((dish) => dish.featured)[0]} 
                promotion={this.props.promotions.filter((promo) => promo.featured)[0]}  
                leader={this.props.leaders.filter((leader) => leader.featured)[0]} ></Home>
            )
        }

        const DishWithId = ({match}) => {
            var dishId = parseInt(match.params.dishId, 10);
            return(
                <DishDetail dish={this.props.dishes.filter((dish) => dish.id === dishId)[0]} 
                comments={this.props.comments.filter((comment) => comment.dishId === dishId)}>
                </DishDetail>
            )
        }

        const AboutPage = () => {
            return(
                <About leaders={this.props.leaders}></About>
            )
        }
        
        return (
          <div>
            <Header />
            <Switch>
                <Route path="/home" component={HomePage} />
                <Route exact path="/contactus" component={Contact} />
                <Route exact path="/aboutus" component={AboutPage} />
                <Route path="/menu/:dishId" component={DishWithId} />
                <Route exact path="/menu" component={() => <Menu dishes={this.props.dishes} />} />
                <Redirect to="/home" />
            </Switch>
            <Footer />
          </div>
        );
    }
}

export default withRouter(connect(mapStateToProps)(Main));
