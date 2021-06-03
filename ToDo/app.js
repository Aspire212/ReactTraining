import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tempValue: '',
      todoArr: [
        {
          value: 'Выпить кофе',
          addClass: false,
          important: true,
        },
        
        {
          value: 'Сделать зарядку',
          addClass: false,
          important: false,
        },
        
        {
          value: 'Прготовить завтрак',
          addClass: false,
          important: false,
         },
        ],
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.readyTask = this.readyTask.bind(this);
    this.importantTask = this.importantTask.bind(this);
  }
  
  handleChange(e) {
    this.setState({tempValue: e.target.value});
  }
  handleClick() {
    const { 
      tempValue,
      todoArr,
    } = this.state;
    if(tempValue.length){
      let obj = {
        value: tempValue,
        addClass: false,
        important: false,
      }
      this.setState({
        todoArr: [...todoArr, obj],
        tempValue: '',
      });
    }
  }
  
  deleteTask(searchId){
   this.setState({
     todoArr: [...this.state.todoArr.filter((task, id) => id !== searchId)]
   });
  }
  
  readyTask(e) {
    let tempArr = [...this.state.todoArr];
    tempArr[e.target.value].addClass = e.target.checked;
    tempArr[e.target.value].important ?
    tempArr[e.target.value].important =
    !tempArr[e.target.value].important :
    false;
    this.setState({
      todoArr: [...tempArr]
    });
  }
  
  importantTask(searchId) {
    let tempArr = [...this.state.todoArr];
    tempArr[searchId].important =
    !tempArr[searchId].important;
    false;
    this.setState({
      todoArr: [...tempArr]
    });
  }
    
  render() {
    const { tempValue, todoArr } = this.state;
    return (
      <div className='App'>
        <div className="wrapper">
          <Title className="title">
            Список дел
          </Title>
          <Form 
            onChange={ this.handleChange }
            onClick={ this.handleClick }
            value={ tempValue }
            className='form'
          />
          <Task 
            arr={ todoArr }
            parClass='list'
            chieldClass='listItem'
            deleteTask={ this.deleteTask }
            importantTask={ this.importantTask }
            onChange={ this.readyTask }
          />
      </div>
    </div> 
    );
  }
}

const Title = ({ children, className }) => <h2 className={ className }>
        { children }
    </h2>

const Form = ({
  className, 
  value, 
  onChange,
  onClick,
}) => 
  <div className={ className }>
    <input 
      onChange={ onChange } 
      type="text" 
      value={ value }
    />
    <Button 
      onClick={ onClick }
    >
      Добавить
    </Button>
  </div>

const Task = ({
  arr,
  parClass,
  chieldClass,
  deleteTask,
  importantTask,
  onChange,
  }) =>
  <div className={ parClass }>
    {
    arr.length > 0 &&
    arr.map((taskObj, id) =>
      <div className={ chieldClass }
           key={ id + 1 }
      >
        <label className='label'>
          <input 
            type='checkbox'
            value={ id }
            onChange={onChange}/>
            <span className='newCheck'/>
          <div className="numTask" >
            { id + 1}.
          </div>
          <div className={
            arr[id].addClass ? 
            'task readyTask' :
            arr[id].important ?
            'task important' :
            'task'
            }
          >
            { taskObj.value }
          </div>
        </label>
        <div className='btnBlock'>
          <Button 
            className='btnImp'
            onClick={ () => importantTask(id) }
          >
            <img
              src='./img/important.svg'
              alt='important'
            />
          </Button>
          <Button
            className='btnSet'
          
          >
            <img 
              src='./img/set.svg'
              alt='setting'
            />
          </Button>
          <Button 
            className='btnDel'
            onClick={ () => deleteTask(id) }
          >
            <img 
              src='./img/del.svg'
              alt='delete'
            />
          </Button>
        </div>
      </div>  
    )
  }
</div>


const Button = ({
  onClick,
  children,
  type="button",
  className = "",
}) =>
  <button 
    type={ type }
    onClick={ onClick }
    className={ className }
    type="button"
  >
    { children }
  </button>



ReactDOM.render(
  <App />,
  document.getElementById('react-app')
);



