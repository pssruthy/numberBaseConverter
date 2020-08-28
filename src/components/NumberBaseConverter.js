import React from 'react';
import Base from './Base';

class NumberBaseConverter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { decimal: 0 };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(number, base) {
    this.setState({ decimal: parseInt(number ? number : 0, base) });
  }

  render() {
    const bases = [2, 3, 4, 5, 6, 7, 8, 9, 10].map((base) => (
      <Base
        decimal={this.state.decimal}
        onChange={this.handleChange}
        base={base}
        key={base}
      />
    ));
    return <div>{bases}</div>;
  }
}

export default NumberBaseConverter;
