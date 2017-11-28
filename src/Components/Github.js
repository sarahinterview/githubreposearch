import React, { Component } from 'react';
import Profile from './Profile';
import Search from './Search';

const API = 'https://api.github.com/search/repositories?q='
class Github extends Component {

  constructor(props){
    super(props);

    this.state = {
      repo:[]
    };
  }

  getRepos(searchterm){
    let finalURL = `${API}/${searchterm}`;
    fetch(finalURL)
    .then((res) => res.json() )
    .then((data) => {
      console.log(data);
      this.setState({
        username: data.items[1].owner.login,
        reponame: data.items[1].name,
        description:data.items[1].description,
        stars: data.items[1].stargazers_count,
        score: data.items[1].score,
        language: data.items[1].language
      })
    })
    .catch((error) => console.log('Unable to fetch data'))
  }

  componentDidMount(){
    this.getRepos(this.state.searchterm);
  }

  render(){
    return(
      <div>
        <section id="card">
          <Search searchProfile={this.getRepos.bind(this)} />
          <Profile userData={this.state}/>
        </section>
      </div>
    );
  }
}

export default Github;
