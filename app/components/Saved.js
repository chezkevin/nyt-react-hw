// Dependencies and smaller components
var React = require('react');

var Saved = React.createClass({
    render: function() {
        return (
            <div classNameName = "col-lg-12">
                <div className="panel panel-primary top-articles">
                    <div className="panel-heading">
                        <h3 className="panel-title">Top Articles</h3>
                    </div>
                    <div className="col-lg-12 result-articles">

                    </div>
                </div>
            </div>
        )
    }
});

module.exports = Saved;