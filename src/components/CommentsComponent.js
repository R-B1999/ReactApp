import React from 'react'
import { Link } from 'react-router-dom';
import { Media } from 'reactstrap';

export const Comments = (props) => {
    const comments = props.comments.map((comment) => {
        return (
            <div key={comment.id} className="row p-2 justify-content-center">
                {/* <div className="">
                </div> */}
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
                <h1>comment</h1>
                <hr />
                <Media list>
                    {comments}
                </Media>
                <div className="row">
                    <div className="col-auto mx-auto">
                        <Link className="btn btn-lg __link mb-3">Add Comment</Link>
                    </div>
                </div>

            </div>
        </div>
    )
}
