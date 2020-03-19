import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import SwipeableViews from 'react-swipeable-views';

const styles = {
  tabs: {
    background: '#efefef',
    boxShadow: '0 1px 0 #aaa'
  },
  slide: { position: 'absolute', top: 0, bottom: 0, left: 0, right: 0},
  contentDiv: { position: 'absolute', top: 48, bottom: 0, left: 0, right: 0}
};

class Swiper extends React.Component {
  state = {
    index: 0,
  };

  handleChange = (event, value) => {
    this.setState({
      index: value,
    });
  };

  handleChangeIndex = index => {
    this.setState({
      index,
    });
  };

  render() {
    const { index } = this.state;

    return (
        <div style={styles.slide}>
          <Tabs value={index} variant="fullWidth" onChange={this.handleChange} style={styles.tabs}>
            {this.props.children.map((el, i) => {
              return <Tab key={i} className='no-outline' label={el.props.label} />
            })}
          </Tabs>
          <SwipeableViews index={index} onChangeIndex={this.handleChangeIndex} style={styles.contentDiv} animateHeight animateTransitions>
              {this.props.children}
          </SwipeableViews>
        </div>
    );
  }
}

export default Swiper;