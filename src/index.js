import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import sha from 'js-sha256';

class ShaTransform extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value : "" };
  }

  transformSHA = (event) => {
    var hashed = [];
    const values = (event.target.value).split("\n");
    values.forEach(elem => {
      if(elem === "") {
        hashed.push("")
      } else {
        hashed.push(sha(elem))
      }
    }
      );
    console.log(hashed.join('\n'))

    this.setState(state => ({
      value: hashed
    }))
    document.getElementById("result").value = hashed.join('\n');
  }

  render() {
    return (
      <div class="flex-container">
        <div class="flex-child" >
          <p>input</p>
          <textarea id="input" onChange={this.transformSHA}></textarea>
        </div>
        <div class="flex-child">
          <p>output (SHA256)</p>
          <textarea id="result">{this.state.value}</textarea>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <ShaTransform />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
