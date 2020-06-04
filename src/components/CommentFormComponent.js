import React from 'react';
import { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Row, Col, Label } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';

const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class CommentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false
        };

        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleSubmit(values) {
        //console.log('Current State is: ' + JSON.stringify(values));
        //alert('Current State is: ' + JSON.stringify(values));
        this.toggleModal();
        this.props.addComment(this.props.dishId, values.rating, values.name, values.comment);
    }

    render() {
        return (
        <div>
            <Button outline onClick={this.toggleModal}><span className="fa fa-pencil fa-md"> Submit Comment</span></Button>
            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                <ModalBody>
                    <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                        <Row className="form-group">
                            <Col>
                                <Label htmlFor="rating">Rating</Label>
                                <Control.select model=".rating" id="rating" name="rating"
                                    placeholder="Rating" className="form-control">
                                        <option value="5">5</option>
                                        <option value="4">4</option>
                                        <option value="3">3</option>
                                        <option value="2">2</option>
                                        <option value="1">1</option>
                                </Control.select>
                            </Col>                    
                        </Row>
                        <Row className="form-group">  
                            <Col>
                                <Label htmlFor="name">Your name</Label>
                                <Control.text model=".name" id="name" name="name"
                                    placeholder="Your name" className="form-control" 
                                    validators={{
                                        minLength: minLength(3), maxLength: maxLength(15)
                                    }} />
                                <Errors
                                        className="text-danger"
                                        model=".name"
                                        show="touched"
                                        messages={{
                                            minLength: 'Must be greater than 3 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                     />    
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Col>
                                <Label htmlFor="comment">Comment</Label>
                                <Control.textarea model=".comment" id="comment" name="comment"
                                    placeholder="Comment" className="form-control" rows="6" />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Col>
                                <Button type="submit" color="primary">Submit</Button>
                            </Col>
                        </Row>
                    </LocalForm>
                </ModalBody>
            </Modal>
        </div>);
    }
}

export default CommentForm;
