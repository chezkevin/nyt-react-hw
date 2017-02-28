var React = require("react");
var ReactDOM = require("react-dom");

// This code renders a simple HTML Div.
// The key takeaway here is that we render an ENTIRE DIV.
// Note that ReactDOM.render cannot render a block of HTML elements
// without them all fitting within a single parent div or container.




var Employee = React.createClass({
  render: function() {
    return (
      <div>
        <EmployeeName />
        <hr />
        <div>
          Likes to play videogames when he is not spending time living like a boss!
        </div>

      </div>
    );
  }
});


ReactDOM.render(<Employee />,document.getElementById("app"));
