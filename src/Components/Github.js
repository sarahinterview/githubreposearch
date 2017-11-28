import React, { Component } from 'react';
import Profile from './Profile';
import Search from './Search';

const API = 'https://api.github.com/search/repositories?q='
class Github extends Component {

  constructor(props){
    super(props);

    this.state = {
      username: 'Github',
      reponame: '',
      description: '',
      stars: '',
      score: '',
      language: ''
    };
  }

  getProfile(searchterm){
    let finalURL = `${API}/${searchterm}`;
    fetch(finalURL)
    .then((res) => res.json() )
    .then((data) => {
      console.log(data);
      this.setState({
        username: data.index.owner.login,
        reponame: data.index.name,
        description:data.index.description,
        stars: data.index.stargazers_count,
        score: data.index.score,
        language: data.index.language
      })
    })
    .catch((error) => console.log('Unable to fetch data'))
  }

  componentDidMount(){
    this.getProfile(this.state.searchterm);
  }

  render(){
    return(
      <div>
        <section id="card">
          <Search searchProfile={this.getProfile.bind(this)} />
          <Profile userData={this.state}/>
        </section>
      </div>
    );
  }
}

export default Github;
