var React = require('React');

var Header = require('./header.js');
var Content = require('./header.js');
var Footer = require('./footer.js');

var names = [
	'sedge',
	'dude',
	'dayum'
];

App = React.createClass({
	render: function() {
		return (
			<Header />
			<Content />
			<Footer />
		);
	}
});

React.render(
	<App names={names} />,
	document.getElementById("main")
);
