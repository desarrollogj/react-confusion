import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';   
import CommentForm from './CommentFormComponent';

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

function RenderComments({comments, addComment, dishId}) {
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
                <CommentForm dishId={dishId} addComment={addComment} ></CommentForm>       
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
        var comments = props.comments;
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <Link to='/menu'>Menu</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active>
                            {dish.name}
                        </BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{dish.name}</h3>
                        <hr />
                    </div>
                </div>
                <div class='row'>
                    <div class='col-12 col-md-5 m-1'>
                        <RenderDish dish={dish}></RenderDish>
                    </div>
                    <div class='col-12 col-md-5 m-1'>
                        <RenderComments comments={comments} addComment={props.addComment} dishId={dish.id} ></RenderComments>
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
