import React, { Component } from 'react';
import { Media } from 'reactstrap';
import { CommentModal } from "./CommentModalComponent";

class Comments extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isCommentOpen: false
        }
    }

    toggleCommentModal = () => {
        this.setState({
            isCommentOpen: !this.state.isCommentOpen
        });
    }

    render() {
        const comments = this.props.comments.map((comment) => {
            return (
                <div key={comment.id} className="row p-2 justify-content-center">
                    <div className="col-md-8 row shadow">
                        <div className="col-sm-auto">
                            <Media tag="li">
                                <h4>—{comment.author}</h4>
                            </Media>
                        </div>
                        <div className="col-sm-auto ml-auto">
                            <h6>
                                {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}
                            </h6>
                        </div>
                        <div className="col-11 offset-1">
                            <Media tag="li">
                                <p>{comment.comment}</p>
                            </Media>
                        </div>
                    </div>
                </div>
            );
        });

        return (
            <div>
                <div className="container comment">
                {/* <h1 onClick={()=>this.props.fetchComments(this.props.dishId)}>Comments</h1> */}
                    <h1>comment</h1>
                    <hr />
                    <Media list>
                        {comments}
                    </Media>
                    <div className="row">
                        <div className="col-auto mx-auto">
                            <a onClick={this.toggleCommentModal} className="btn btn-lg __link mb-3">Add Comment</a>
                            <CommentModal
                                isCommentOpen={this.state.isCommentOpen}
                                toggleCommentModal={() => { this.toggleCommentModal() }}
                                addComment={this.props.addComment}
                                dishId={this.props.dishId}
                            />
                        </div>
                    </div>

                </div>
            </div>
        )
    }

}

export default Comments;