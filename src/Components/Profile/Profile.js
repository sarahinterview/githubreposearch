import React, { Component } from 'react';
import './Profile.css';



class Profile extends Component {

  render(){
    let userdata = this.props.userData;
    console.log(userdata);

    if(userdata.message === "Not Found"){
      return(
        <div className="notfound">
          <h2>Hi</h2>
          <p>Search Term not found. Please Try again</p>
        </div>
      );
    }
    else {
      return(
        <section className="github-profile">
          <div className="github-profile-info">
            <h3>{`Username: ${userdata.owner.login}`}</h3>
            <h3>{`Repo Name: ${userdata.name}`}</h3>
            <h3>{`Stars: ${userdata.stargazers_count}`}</h3>
            <h3>{`Score: ${userdata.score}`}</h3>
            <h3>{`Language: ${userdata.language}`}</h3>
            <h3>{`Description: ${userdata.description}`}</h3>
          </div>
        </section>
      );
    }
  }
}

export default Profile;
