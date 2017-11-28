import React, { Component } from 'react';



class Search extends Component {

  submitForm(event){
    event.preventDefault();
    let value = this.refs.searchterm.value;
    this.props.searchProfile(value);
    this.refs.searchterm.value = '';
  }
  render(){
    return(
      <div className="search-box">
        <form onSubmit={this.submitForm.bind(this)}>
          <label><input type="search" ref="searchterm" placeholder="Type Search Term & Hit Enter"/></label>
        </form>
      </div>
    );
  }
}

export default Search;
