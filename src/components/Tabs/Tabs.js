import React, { Component } from "react";

class Tabs extends Component {
  state = { activeTabIdx: 0 };

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.activeTabIdx !== this.state.activeTabIdx;
  }

  setActiveTabIndex = (idx) => {
    this.setState({ activeTabIdx: idx });
  };

  render() {
    console.log(`rerender @ ${Date.now()}`);
    const { activeTabIdx } = this.state;
    const { items } = this.props;
    const activeTab = items[activeTabIdx];
    return (
      <>
        <div>
          {items.map((item, index) => (
            <button
              type="button"
              key={item.label}
              onClick={() => {
                this.setActiveTabIndex(index);
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
        <div>
          <h2>{activeTab.label}</h2>
          <p>{activeTab.content}</p>
        </div>
      </>
    );
  }
}

export default Tabs;
