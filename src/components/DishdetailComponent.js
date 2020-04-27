import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';

class DishDetail extends Component {
    constructor(props) {
        super(props);
    }

    renderDish(dish) {
        return (
            <Card>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        );
    }

    renderComments(comments) {
        if (comments != null) {      
            const commentsJSX = comments.map((comment) => {
                return (
                    <li>
                        <p>{comment.comment}</p>
                        <p>-- {comment.author}, {new Intl.DateTimeFormat('en-US', {year: "numeric", month: "short", day: "2-digit"}).format(new Date(comment.date))}</p>
                    </li>
                );
            });

            return (
                <div>
                    <h4>Comments</h4>
                    <ul class="list-unstyled">
                        {commentsJSX}
                    </ul>         
                </div>
            );
        } else {
            return (
                <div></div>
            );
        }
    }

    render() {
        if (this.props.selectedDish != null) {
            var dish = this.props.selectedDish;
            return (
                <div class='row'>
                    <div class='col-12 col-md-5 m-1'>
                        {this.renderDish(dish)}
                    </div>
                    <div class='col-12 col-md-5 m-1'>
                        {this.renderComments(dish.comments)}
                    </div>
                </div>
            );
        } else {
            return(
                <div></div>
            );
        }
    }
}

export default DishDetail;
