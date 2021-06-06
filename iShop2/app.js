import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import products from './data.js';

class Shop extends Component {
  constructor(props){
    super(props)
    this.state = {
      data: this.props.data,
      title: this.props.title,
      activeTr: null,
    }
  }
  
 deleteEl = (e, name) => {
   e.stopPropagation();
   let rt = confirm('Delete?')
   rt && this.setState({data: this.state.data.filter(el => el.name !== name)})
 }
 
 setActive = id => {
   this.setState({activeTr: id})
 }
 
  render() {
    const { title, data, activeTr } = this.state
    return (
      <table>
        <caption>
          { title }
        </caption>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Price, $</th>
            <th>Image</th>
            <th>Pieces</th>
            <th>Control</th>
          </tr>
          { data.map(el => 
          <Tstring 
            foo={ () => this.setActive(el.code) }
            key={ el.code }  
            name={ el.name }
            price={ el.price }
            activeTr={ activeTr }
            id={ el.code }
            image={ el.image }
            pcs={ el.pcs }
            del={ this.deleteEl }/>
           
          ) }
        </tbody>
      </table>
    )
  }
}


const Tstring = ({foo, name, price, id, activeTr, image, pcs, del}) => 
  <tr id={ id }
      onClick={foo}
      className={ id === activeTr ? 'trActive': ''}>
    <td>{ name }</td>
    <td>{ price }</td>
    <td>
      <img src={ image }
           alt={ name + 'Img'}/>
    </td>
    <td>
      { pcs }
    </td>
    <td>
      <button onClick={
              (e) => del(e, name) }>
        Del
      </button>
    </td>
  </tr>      
    




ReactDOM.render(
  <Shop title="AutoShop" data={products}/>,
  document.getElementById('react-app')
);
