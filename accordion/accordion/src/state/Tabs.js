import React from "react";

class Tabs extends React.Component {
    static defaultProps = {
        tabs: [],
      };
      state = {
        currentTabIndex: 0
      };
      /* not showing all the methods */
      handleButtonClick(index) {
        this.setState({ currentTabIndex: index })
        console.log('button clicked!', { index })
      }
      renderButtons() {
        return this.props.tabs.map((tab, index) => (
            <button key={index} onClick={() => this.handleButtonClick(index)}>
            {tab.name}
          </button>
        ))
      }
      renderContent() {
        const currentTab = this.props.tabs[this.state.currentTabIndex]
        return (
          <div className='content'>
            {currentTab.content}
          </div>
        )
      }
      render() {
        return (
          <div>
            {this.renderButtons()}
            {!!this.props.tabs.length && this.renderContent()}
          </div>
        )
      }
//   render() {
//     const buttons = this.props.tabs.map((tab, index) =>  (
//       <button key={index}>
//         {tab.name}
//       </button>
//     ))
//     const currentTab = this.props.tabs[0]
//     return (
//       <div>
//         {buttons}
//         {this.props.tabs.length && (
//         <div className='content'>
//              {currentTab.content}
//         </div>)}
//       </div>
//     )}
}

export default Tabs;