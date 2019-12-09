import React from 'react';
import GetData from "./components/GetData";
import GetFollowerData from "./components/GetFollowerData";
// import GetFollowingData from "./components/GetFollowingData";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      logins: "",
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.logins !== this.state.logins) {
    this.setState({
      logins: "",
    }, [])
  }
  }
  handleChange = (event) => {
    this.setState({
      logins: event.target.value
    })
  }

  render() {
    return (
      <> 
        <h1>GitHub User Card</h1>
        <GetData />
        {/* <select value={this.state.logins} onChange={this.handleChange}>
          <option value={<GetFollowerData logins={this.state.logins}/>}>Followers</option>
          <option value={<GetFollowingData />}>Following</option>
        </select> */}
        <GetFollowerData />
      </>
    )
  }
}

export default App;
