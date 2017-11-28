import React, { Component } from 'react';
import Profile from './Profile/Profile';
import Search from './Search';

const API = 'https://api.github.com/search/repositories?q='
class Github extends Component {

  constructor(props){
    super(props);

    this.state = {
      repos:[]
    };
  }

  getRepos(searchterm){
    let finalURL = `${API}/${searchterm}`;
    fetch(finalURL)
    .then((res) => res.json() )
    .then((data) => {
      console.log(data);
      this.setState({
      repos: data.items
      })
    })
    .catch((error) => console.log('Unable to fetch data'))
  }

  renderProfiles() {
    return this.state.repos.map(repo =>
      <section id="card">
        <Profile userData={repo}/>
      </section>
    );
  }

  componentDidMount(){
    this.getRepos(this.state.searchterm);
  }

  render(){
    return(
      <div>
      <Search searchProfile={this.getRepos.bind(this)} />
        {this.renderProfiles()}
      </div>
    );
  }
}

export default Github;
