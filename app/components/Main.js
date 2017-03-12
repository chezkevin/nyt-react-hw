// Dependencies and smaller components
var React = require('react');
var Search = require('./Search');
var Saved = require('./Saved');
var axios = require('axios');

var Main = React.createClass({
    render: function() {
        <div classNameName = "container">
            <Search />
            <Saved />
        </div>
    }
})

Module.exports = Main;