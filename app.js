
const data = {
  users: [
    {
    id: 1,
    name: "Beata",
    sex: "female",
    city: "London",
    age: 29,
    car: 'Mercedes',
    nationality: 'English'
    },
    {
    id: 2,
    name: "Carlo",
    sex: "male",
    city: "New York",
    age: 22,
    car: 'BMW',
    nationality: 'German'
    },
  {
    id: 3,
    name: "Adrian",
    sex: "male",
    city: "London",
    age: 55,
    car: 'Audi',
    nationality: 'German'
    },
    {
      id: 4,
      name: "Mammed",
      sex: "male",
      city: "Luton",
      age: 33,
      car: 'Mercedes',
      nationality: 'English'
      },
      {
      id: 5,
      name: "Ally",
      sex: "female",
      city: "London",
      age: 31,
      car: 'Mazda',
      nationality: 'English'
      },
    {
      id: 6,
      name: "Dareen",
      sex: "male",
      city: "New York",
      age: 39,
      car: 'Mercedes',
      nationality: 'German'
      },
      {
        id: 7,
        name: "Paul",
        sex: "male",
        city: "London",
        age: 26,
        car: 'BMW',
        nationality: 'German'
        },
        {
        id: 8,
        name: "Joanna",
        sex: "female",
        city: "New York",
        age: 18,
        car: 'Mercedes',
        nationality: 'English'
        },
      {
        id: 9,
        name: "Kate",
        sex: "female",
        city: "London",
        age: 44,
        car: 'BMW',
        nationality: 'English'
        }
  ]
}


const Item = (props) => (
  <div className="userInfo" >
  <h1>{props.user.name}</h1>
  <p className='details' >Users details:</p>
  <p>Nationality:{props.user.nationality}</p>
  <p>City:{props.user.city}</p>
  <p>Age <strong>{props.user.age}</strong> </p>
  <p>Sex:{props.user.sex}</p>
  <p>Car:{props.user.car}</p>
</div>
) 

class App extends React.Component {

    state = {
      select: 'all',
      active: false
    }

  usersList = () => {
    
    let users = this.props.data.users
    switch(this.state.select) {
      case 'all':
      return users.map(user => <Item user={user} key={user.id} />)
      case 'female':
        users = users.filter(user => user.sex === 'female');
      return users.map(user => <Item user={user} key={user.id} />)
      case 'male':
        users = users.filter(user => user.sex === 'male');
      return users.map(user => <Item user={user} key={user.id} />)
      case 'london':
        users = users.filter(user => user.city === 'London');
      return users.map(user => <Item user={user} key={user.id} />)
      case 'New York':
        users = users.filter(user => user.city === 'New York');
      return users.map(user => <Item user={user} key={user.id} />)
      case 'English':
        users = users.filter(user => user.nationality === 'English');
      return users.map(user => <Item user={user} key={user.id} />)
      case 'German':
        users = users.filter(user => user.nationality === 'German');
      return users.map(user => <Item user={user} key={user.id} />)
      case 'Mercedes':
        users = users.filter(user => user.car === 'Mercedes');
      return users.map(user => <Item user={user} key={user.id} />)
      case 'BMW':
        users = users.filter(user => user.car === 'BMW');
      return users.map(user => <Item user={user} key={user.id} />)
      case 'OlderThan28':
        users = users.filter(user => user.age >= 28);
      return users.map(user => <Item user={user} key={user.id} />)
    }
  
  }



  handleShowOption(option)  {
    this.setState({
      select: option
    })
    console.log('dziala')
  }

  addClassActive = () => {
    this.setState({
      active: !this.state.active
    })
    console.log(this.state.active)
  }

  render() {
  
    return(
      
      <div className="wrap" >
         {/* {this.state.active ? <div className="active">dziala123</div >: null } */}
        <button className="menu"  onClick={this.addClassActive}>Show options</button>
      <section id='sectionBox' className={this.state.active ? 'active' : " "}>
      
        <button onClick={this.handleShowOption.bind(this, "all")} >All people</button>
        <button onClick={this.handleShowOption.bind(this, "female")}>Woman</button>
        <button onClick={this.handleShowOption.bind(this, "male")}>Man</button>
        <button onClick={this.handleShowOption.bind(this, "london")}>Live in London</button>
        <button onClick={this.handleShowOption.bind(this, "New York")}>Live in New York</button>
        <button onClick={this.handleShowOption.bind(this, "English")}>From England</button>
        <button onClick={this.handleShowOption.bind(this, "German")}>From Germany</button>
        <button onClick={this.handleShowOption.bind(this, "Mercedes")}>Have a Mercedes</button>
        <button onClick={this.handleShowOption.bind(this, "BMW")}>Have a BMW</button>
        <button onClick={this.handleShowOption.bind(this, "OlderThan28")}>Older than: 29 year</button>
        

      </section>
      <div className="list">{this.usersList()}</div>
      </div>
    )
  }
}


ReactDOM.render(<App data={data} />,document.getElementById('root'))


// className=  {this.state.active ? "active" : ''}