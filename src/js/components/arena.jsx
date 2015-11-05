var React = require('react');

module.exports = React.createClass({
   render: function() {
       return <div className='panel panel-info row panel-row'>
           <span className='col-sm-4'>{this.props.arena.name}</span>
           <span className='col-sm-4'>{this.props.arena.area}</span>
           <span className='col-sm-4'>{this.props.arena.rating}</span>
       </div>
   }
});