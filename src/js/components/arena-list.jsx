var React = require('react');
var Arena = require('./arena.jsx');

module.exports = React.createClass({
    render: function() {
        var arenas = this.getArenas();
        if (arenas && arenas.length) {
            return <div className='panel panel-group'>
                <h4>{this.props.name}</h4>
                <div>
                    {this.getArenas()}
                </div>
            </div>
        } else {
            return null;
        }
    },
    getArenas: function() {
        return this.props.arenas.map(function(arena) {
            return <Arena arena={arena} key={arena.name}/>
        });
    }
});