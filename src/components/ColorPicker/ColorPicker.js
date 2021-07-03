import React, { Component } from "react";
import styles from "./ColorPicker.module.css";

class ColorPicker extends Component {
  state = {
    activeOptionIndex: -1,
  };
  makeoptionClasslist = (index) => {
    const optionClasslist = [styles.option];
    if (index === this.state.activeOptionIndex) {
      optionClasslist.push(styles.optionActive);
    }
    return optionClasslist.join(" ");
  };
  handleColorClick = (index) => {
    this.setState({ activeOptionIndex: index });
    document.body.style.backgroundColor = this.props.options[index].color;
  };

  render() {
    const { options } = this.props;
    return (
      <div className={styles.ColorPicker}>
        <h2 className={styles.title}>Color Picker</h2>
        <div>
          {options.map(({ label, color }, index) => (
            <button
              key={label}
              type="button"
              className={this.makeoptionClasslist(index)}
              style={{
                backgroundColor: color,
              }}
              onClick={() => this.handleColorClick(index)}
            ></button>
          ))}
        </div>
      </div>
    );
  }
}

export default ColorPicker;
