import React from 'react';
import PropTypes from 'prop-types';

export default class ApartmentSelect extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selected:  props.values || []
        };

        this.toggleType = this.toggleType.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            selected: nextProps.values
        });
    }

    toggleType(value) {
        const selectedArr = this.state.selected;
        const indexOfValue = selectedArr.indexOf(value);
        let values = selectedArr;

        if (indexOfValue >= 0) {
            values.splice(indexOfValue, 1);

            this.setState({
                selected: values
            });

        } else {
            values = [...selectedArr, value];
            this.setState({
                selected: values
            });
        }

        this.props.onChange({target: {name: this.props.name, value: values}});
    }

    render() {
        const {options} = this.props;

        return (
            <div>
                {options.map((item, i) =>
                    <div key={i} className={this.state.selected.indexOf(item.value) >= 0 ? "button apartment-select active" : "button apartment-select"} onClick={() => this.toggleType(item.value)} >{item.name}</div>
                )}
            </div>
        );
    }
}

ApartmentSelect.propTypes = {
    options: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired,
    values: PropTypes.array.isRequired,
    name: PropTypes.string.isRequired
};