import React from "react";
import styles from "./Dropdown.module.css";

class Dropdown extends React.Component {
  state = {
    visible: false,
  };
  show = () => {
    this.setState({ visible: true });
  };
  hide = () => {
    this.setState({ visible: false });
  };
  toggle = () => {
    this.setState((prevState) => ({ visible: !prevState.visible }));
  };

  render() {
    const { visible } = this.state;
    return (
      <div className={styles.Dropdown}>
        <button type="button" className={styles.btn} onClick={this.toggle}>
          {visible ? "Hide menu" : "Show menu"}
        </button>
        {/* <button type="button" className={styles.btn} onClick={this.hide}>
          Hide menu
        </button> */}
        {visible && <div className={styles.menu}>Dropdown menu</div>}
      </div>
    );
  }
}

export default Dropdown;
