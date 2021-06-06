import React,{ Component } from 'react';
import ReactDOM from 'react-dom';

const list = ['привет', 'пока', 'здравствуй', 'досвидания', 'день', 'ночь', 'полдень', 'завтрак', 'обед', 'ужин', 'полдник',];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: this.props.list,
      input: '',
      chbx: false,
    }
  }
  
  handleCheck = (e) => {
    let tempList = [...this.props.list]
    e.target.checked ? this.setState({ list: tempList.sort(), chbx: true }) : this.setState({ list: this.props.list, chbx: false })
  }

  handleChange = (e) => {
    this.setState({ list: this.props.list.filter(word => word.includes(e.target.value.toLowerCase())), input: e.target.value })
  }


  clear = () => {
    if (this.state.input || this.state.chbx) {
      this.setState({ input: '', chbx: false, list: this.props.list })
    }

  }

  render() {
    return (
      <div>
        <div className='settings'>
          <input type="checkbox" name="chbx" onChange={this.handleCheck} checked={this.state.chbx}/>
          <input type="text" name="input" onChange={this.handleChange} value={this.state.input}/>
         <input type="button" value="сброс"  onClick={this.clear}/>
        </div>
        <ul>
          {this.state.list.map((word, i) => <li key={i}>{word}</li>)}
        </ul>
      </div>
    )
  }

}


ReactDOM.render(
  <App list={list} />,
  document.getElementById('react-app')
);