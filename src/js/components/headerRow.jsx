var React = require('react');

module.exports = React.createClass({
   render : function() {
       var keyClassName, Key_row;

       //tried dynamic class but not working  - keyClassName = 'col-sm-4';// + (12/keys.length);

       key_row = this.props.keys.map(function(key) {
           return <div className='col-sm-4' key={key}>{key.toUpperCase()}</div>;
       });
       return <div className='panel panel-column-heading'>
           <div className='row'>{key_row}</div>
       </div>;
   }
});