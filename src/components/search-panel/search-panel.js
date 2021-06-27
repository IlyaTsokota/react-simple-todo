import { React, Component } from 'react';
import './search-panel.css';

export default class SearchPanel extends Component {
    state = {
        term: ''
    };

    onSearchChange = ({ target }) => {
        const { value: term } = target;
        this.setState({ term });
        this.props.onSearchChange(term);
    };

    render() {
        return (
            <input
                onChange={this.onSearchChange}
                className="search-panel"
                placeholder="type to search"
                value={this.state.term} />
        );
    }
};

