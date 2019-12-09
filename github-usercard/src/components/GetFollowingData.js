import React from "react";
import axios from "axios";
// import FollowingCard from "./FollowingCard";


class GetFollowingData extends React.Component {
    constructor() {
      super()
       this.state = {
         following: [],
        }
    }
      
   
componentDidMount() {
    this.fetchData()
}

fetchData = () => {
    axios
    .get(`https://api.github.com/users/JaxAtwood/following`)
    .then(res => {
        console.log(res.data)
        this.setState({
            following: res.data
        })
    })
    .catch(error => {
        console.log("error:", error)
    })
}


render() {
    return (
    <div>
         {this.state.followers.map((item, index) => {
            return (
                <div key={index}>
                    <div>
                        <p>{item.login}</p>
                    </div>
                </div>
                );
               })}
    </div>

            )
        }
    }
export default GetFollowingData;