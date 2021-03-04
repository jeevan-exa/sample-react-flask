import Button from '@material-ui/core/Button';
import React from 'react';

class LikeButton extends React.Component {
  render() {
    return (
      <Button variant="contained" color="primary">
        Hello World
      </Button>
    );
  }
}

// const domContainer = document.querySelector('#like_button_container');
// ReactDOM.render(e(LikeButton), domContainer);
export default LikeButton;