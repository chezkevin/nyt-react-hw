var React = require('react');

var Comment = React.createClass({
    render: function(){
        return (
            <div className="row">
                <div className="col-md-9">
                    <p className="comment-text">
                        { this.props.comment.body }
                    </p>
                </div>
            </div>
        )
    }
});

module.exports = Comment;