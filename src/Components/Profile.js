import React, { Component } from 'react';



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
            <h3>{userdata.username}</h3>
            <h3>{userdata.reponame}</h3>
            <h3>{userdata.stars}</h3>
            <h3>{userdata.score}</h3>
            <h3>{userdata.language}</h3>
            <h3>{userdata.description}</h3>
          </div>
        </section>
      );
    }
  }
}

export default Profile;
