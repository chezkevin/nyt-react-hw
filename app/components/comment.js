var React = require('react');

var Comment = React.createClass({
    render: function(){
        return (
            <div classNameName="row">
                <div classNameName="col-md-9">
                    <p classNameName="comment-text">
                        { this.props.comment.body }
                    </p>
                </div>
            </div>
        )
    }
});

module.exports = Comment;