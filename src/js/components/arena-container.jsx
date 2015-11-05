var React = require('react');
var ArenaList = require('./arena-list.jsx');
var FilterBy = require('./filterBy.jsx');
var HeaderRow = require('./headerRow.jsx');

module.exports = React.createClass({
    componentWillReceiveProps: function(nextProps) {
        this.setState({
            sportsArenas : nextProps.sportsArenas
        });
    },
    getInitialState: function() {
        return {
            sportsArenas : this.props.sportsArenas || []
        };
    },
    render: function() {
        return <div>
            <div className='panel text-center panel-default'>
                <h2>Arenas</h2>
            </div>
            <FilterBy sportsArenas={this.props.sportsArenas} onFilterchange={this.onFilterChange} />
            <HeaderRow keys={['name', 'area', 'rating']} />
            {this.getArenaList()}
        </div>
    },
    getArenaList: function() {
        return this.state.sportsArenas.map(function(sportsArena) {
            return <ArenaList arenas={sportsArena.arenas} name={sportsArena.sportsName} key={sportsArena.sportsName}/>
        });
    },
    onFilterChange: function(sportsArenas) {
        this.setState({
            sportsArenas : sportsArenas
        });
    }
});