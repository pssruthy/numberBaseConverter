import React from 'react';
import Base from './Base';

const generateBases = (from, to) =>
  Array.from(new Array(to - from + 1), (_, index) => index + from);

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
    const basesNo = generateBases(2, 16);
    const bases = basesNo.map((base) => (
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
