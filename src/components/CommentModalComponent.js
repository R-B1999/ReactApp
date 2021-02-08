import React from 'react';
import { Control, LocalForm } from 'react-redux-form';
import { Label, Modal, ModalBody, ModalHeader, Row, Button } from 'reactstrap';

const handleSubmit = (values, toggleCommentModal, dishId, addComment) => {
    toggleCommentModal();
    addComment(dishId, values.rating, values.author, values.comment);
}

export const CommentModal = (props) => {
    return (
        <Modal isOpen={props.isCommentOpen} toggle={props.toggleCommentModal}>
            <ModalHeader toggle={props.toggleCommentModal}>Add Comment</ModalHeader>
            <ModalBody>
                <LocalForm onSubmit={(values => handleSubmit(values, props.toggleCommentModal, props.dishId, props.addComment))}>

                    <Row className="form-group">
                        <Label htmlFor="rating">Rating</Label>
                        <Control.select model=".rating" id="rating" name="rating" className="form-control">
                            <option>5</option>
                            <option>4</option>
                            <option>3</option>
                            <option>2</option>
                            <option>1</option>
                        </Control.select>
                    </Row>

                    <Row className="form-group">
                        <Label htmlFor="author">Your Name</Label>
                        <Control.text model=".author" id="author" name="author" className="form-control" />
                    </Row>

                    <Row className="form-group">
                        <Label htmlFor="comment">Commment</Label>
                        <Control.textarea model=".comment" id="comment" name="comment" rows="4" className="form-control" />
                    </Row>

                    <Button type="submit" name="submit" className="__link" color="blue">Submit</Button>

                </LocalForm>
            </ModalBody>
        </Modal>
    )
}
