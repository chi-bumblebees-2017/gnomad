import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import SearchFilters from './SearchFilters';

class SearchContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      location: "",
      localhosts: [],
      likesList: {},
      likesAll: false,
      hasSearched: false,
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setCheckedValueLikesAll = this.setCheckedValueLikesAll.bind(this);
    this.setInterestState = this.setInterestState.bind(this);
    this.checkHandled = this.checkHandled.bind(this);
    this.goSearch = this.goSearch.bind(this);
    this.createSearchRequest = this.createSearchRequest.bind(this);
  }

  setInterestState(updatedInterests) {
    this.setState({
      interests: updatedInterests
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    // TODO: Change history so that back button works. How do I persist the results from the last search too?
    this.props.history.push(`/search/${this.state.location}`, this.state);
    this.setState({
      hasSearched: true,
    }, this.goSearch)
  }

  createSearchRequest() {
    var data = new FormData();
    data.append("searching[likes_list][restaurants]", this.state.likesList.restaurants)
    data.append("searching[likes_list][sports]", this.state.likesList.sports)
    data.append("searching[likes_list][museums]", this.state.likesList.museums)
    data.append("searching[likes_list][bars]", this.state.likesList.bars)
    data.append("searching[likes_list][music]", this.state.likesList.music)
    data.append("searching[likes_list][outdoors]", this.state.likesList.outdoors)
    data.append("searching[likes_list][art]", this.state.likesList.art)
    data.append("searching[likes_list][fitness]", this.state.likesList.fitness)
    data.append("searching[likes_list][history]", this.state.likesList.history)
    data.append("searching[likes_list][architecture]", this.state.likesList.architecture)
    data.append("searching[likes_list][family_fun]", this.state.likesList.family_fun)
    data.append("searching[likes_list][zoo]", this.state.likesList.zoo)
    data.append("searching[likes_list][culture]", this.state.likesList.culture)
    data.append("searching[likes_list][volunteer]", this.state.likesList.volunteer)
    data.append("searching[likes_list][shopping]", this.state.likesList.shopping)
    data.append("searching[likes_all]", this.state.likesAll)
    return data
  }

  goSearch() {
    let that = this;
    if (that.state.hasSearched) {
      fetch(`/searches?location=${that.state.location}`, {
        accept: 'application/json',
        method: 'POST',
        headers: {
          'Authorization': localStorage.getItem('gnomad-auth-token')
        },
        body: that.createSearchRequest()
      }).then(data => data.json())
        .then(dataJson => {
          that.setState({
            localhosts: dataJson,
        })});
      }
  }

  setCheckedValueLikesAll(){
    this.setState({ likesAll: !this.state.likesAll });
  }

  handleChange(event) {
    this.setState({
      location: event.target.value,
    });
  }

  checkHandled(value) {
    console.log(value)
    console.log(this)
    this.setState({ likesList: value});
  }



  componentDidUpdate() {
    // console.log("+++++++")
    // console.log(this.state)
    // console.log("+++++++")
  }

  render() {
    return (
      <div className="search-container register-max-width">
        <SearchBar submitHandler={this.handleSubmit} changeHandler={this.handleChange} value={this.state.location} />
        <div className="ui section divider"></div>
        <div>
          <h4 className="inline">Localhosts must match all interests:</h4>
          <div className="ui fitted toggle checkbox left-pad-10 inline"><input onClick={this.setCheckedValueLikesAll} type="checkbox" /><label></label></div>
        </div>
        <SearchFilters handleCheck={this.checkHandled} />
        <SearchResults results={this.state.localhosts} />
      </div>
    );
  }
}

export default SearchContainer;
