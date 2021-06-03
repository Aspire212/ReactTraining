import React, {Component} from 'react';
import ReactDOM from 'react-dom';



class Clock extends Component {
  constructor (props) {
    super(props);
    this.timer = null;
    this.mathData = {
        radius: 40,
        hourDots: 12,
        deg: 360,
        hourPos: 90,
        translate: 50,
    };
    
    this.state = {
        sec: new Date().getSeconds(),
        min: new Date().getMinutes(),
        hour: new Date().getHours(),
        hourItem: Array(12).fill('id'),
    };
    
    this.setPosition = this.setPosition.bind(this);
    this.getCurrentTime = this.getCurrentTime.bind(this);
  }
  
  corectViewTime(time) {
    return time < 10 ? '0' + time : time;   
  }
  
  getCurrentTime() {
    this.setState({
        sec: new Date().getSeconds(),
        min: new Date().getMinutes(),
        hour: new Date().getHours(),
      });
  }
  
  getRadian(deg) {
    return Math.PI / 180 * deg;
  }
  
  setPosition(pos, mathOp) {
     const {
          radius,
          hourDots,
          deg,
          hourPos,
          translate,
      } = this.mathData; 
      const posDot = (pos) * deg / hourDots;
      const angle = this.getRadian(posDot) - this.getRadian(hourPos);
      return radius * Math[mathOp](angle) + translate + '%';
  }
  
  componentDidMount() {
      this.timer = setInterval(() => this.getCurrentTime(),
                    1000);
  }
  
  componentWillUnmount() {
      clearInterval(this.timer);
  }
  
  render() {
      const {
          sec,
          min,
          hour,
          hourItem,
      } = this.state;
      
    return  (
      <div className="field">
        { 
        hourItem.map((el, i) => 
            <Unit 
                key={ el + (i + 1) }
                className='unitHour'
                style = {{
                    left: this.setPosition(i+1, 'cos'),
                    top: this.setPosition(i+1, 'sin'),
                }}
                >
                    { i + 1 }
                </Unit> 
                )
        }
        <Arrow 
           className='seconds'
           style={{ transform: `rotateZ(${360/60*sec}deg)` }} 
        />
        <Arrow
            className="minutes"
            style={{ transform: `rotateZ(${360/60*min+6/60*sec}deg)` }}
        />
        <Arrow
            className="hours"
            style={{ transform: `rotateZ(${360/12*hour+30/60*min+0.5/60*sec}deg)` }}
        /> 
        <div className='numberTime'>
            { this.corectViewTime(hour) }:
            { this.corectViewTime(min) }:
            { this.corectViewTime(sec) }
        </div>        
      </div>
    )
  }
}

const Unit = ({ children, className, style }) => <div className={className} style={style}> { children } </div>


const Arrow = ({ className, style }) => <div className={ className } style={ style }/>




ReactDOM.render(
  <Clock />,
  document.getElementById('react-app')
);

