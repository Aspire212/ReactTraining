export default class Shop extends React.Component {
  render() {
    return React.createElement('table', null, React.createElement('caption', {className: 'caption'}, this.props.name),
      React.createElement('tbody', null,
        React.createElement('tr', {className: 'desk'}, 
          React.createElement('th', null, 'name'),
          React.createElement('th', null, 'price' ),
          React.createElement('th', null, 'image'),
          React.createElement('th', null, 'pcs'),
        ),
        this.props.products.map(el => 
          React.createElement('tr', {key: el.code}, 
            React.createElement('td', {className: 'box'}, el.name),
            React.createElement('td', {className: 'box'}, el.price),
            React.createElement('td', {className: 'img'}, 
              React.createElement('img', {src: el.image, alt: 'img ' + el.name})
              ),
            React.createElement('td', {className: 'box'}, el.in_stok)
          )
        )
      )
    )
  }
}