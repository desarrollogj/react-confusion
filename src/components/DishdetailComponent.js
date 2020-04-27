import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';

function RenderDish({dish}) {
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

function RenderComments({comments}) {
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

const DishDetail = (props) => {
    if (props.dish != null) {
        var dish = props.dish;
        return (
            <div className="container">
                <div class='row'>
                    <div class='col-12 col-md-5 m-1'>
                        <RenderDish dish={dish}></RenderDish>
                    </div>
                    <div class='col-12 col-md-5 m-1'>
                        <RenderComments comments={dish.comments}></RenderComments>
                    </div>
                </div>
            </div>
        );
    } else {
        return(
            <div></div>
        );
    }
}

export default DishDetail;
