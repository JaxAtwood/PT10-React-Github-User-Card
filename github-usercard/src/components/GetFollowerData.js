import React from "react";
import axios from "axios";
// import FollowerCard from "./FollowerCard";

function searchingFor(term) {
    return function(x){
        return x.login.toLowerCase().includes(term.toLowerCase()) || !term;
    }
}

class GetFollowerData extends React.Component {
    constructor(props) {
      super(props)
       this.state = {
         followers: [],
         term: ""
        }
        this.searchHandler = this.searchHandler.bind(this);
    }
      
    searchHandler = event => {
        this.setState({
            term: event.target.value
        })
    }
   
    componentDidMount() {
        this.fetchData()
    }

    fetchData = () => {
        axios
        .get(`https://api.github.com/users/JaxAtwood/followers`)
        .then(res => {
            console.log(res.data)
            this.setState({
                followers: res.data
            })
        })
        .catch(error => {
            console.log("error:", error)
        })
    }


render() {
    const {term, followers} = this.state;
    return (
    <div>
        <form>
            <input 
                type="text"
                placeholder="search..."
                onChange={this.searchHandler}
                value={term}
                />
        </form>
    <div>

         {followers.filter(searchingFor(term)).map((item, index) => {
            return (
                <div key={index}>
                    <div>
                        <p>{item.login}</p>
                    </div>
                </div>
                );
               })}
    </div>
    </div>

            )
        }
    }

export default GetFollowerData;