var React = require('react');

var Header = React.createClass({
	render: function(){
		return (
			<div>
                <header>
                    <h1>{this.props.title}</h1>
                    <span className={this.props.class}> {this.props.status} </span>
                </header>
			</div>
		)
	}
});

module.exports = Header;