import { React, Component } from 'react';
import './item-add-form.css';

export default class ItemAddForm extends Component {

    state = {
        label: ''
    };

    onLabelChange = ({ target }) => {
        this.setLabel(target.value);
    };

    setLabel(label = '') {
        this.setState({ label });
    };

    onSubmit = (e) => {
        e.preventDefault();
        const { label } = this.state;
        if (label.trim()) {
            this.props.onAddItem(this.state.label)
            this.setLabel();
        }
    };

    render() {
        return (
            <form onSubmit={this.onSubmit}
                className="item-add-form d-flex justify-content-between mt-4">
                <input
                    type="text"
                    className="form-control"
                    onChange={this.onLabelChange}
                    placeholder="What needs to be done"
                    value={this.state.label} />
                <button
                    type="submit"
                    className="btn btn-outline-secondary btn-large"
                >
                    Add Item
                </button>
            </form>
        );
    }
};

