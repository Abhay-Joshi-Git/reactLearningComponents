var React = require('react');
var _ = require('lodash');

module.exports = React.createClass({
    render: function() {
        return <div className='panel panel-group'>
            <input type='text' ref='searchInput' placeholder='area name to filter'/>
            <button ref='searchBtn' onClick={this.filterByArea}>Filter</button>
        </div>
    },
    filterByArea: function() {
        var changedState, searchValue;
        searchValue = this.refs.searchInput.value;
        if (!searchValue) {
            this.props.onFilterchange(this.props.sportsArenas);
            return;
        }
        changedState = this.props.sportsArenas.map(function(sportsArena) {
            return {
                sportsName: sportsArena.sportsName,
                arenas: _.where(sportsArena.arenas, {area: searchValue})
            }
        }.bind(this));
        this.props.onFilterchange(changedState);
    }
});