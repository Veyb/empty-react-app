import React from 'react';
import styles from './app.css';

export default class App extends React.Component {
  handleImageClick({ target: { value } }) {
    console.log(value);
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <h1>Hello world!</h1>
      </div>
    );
  }
}
