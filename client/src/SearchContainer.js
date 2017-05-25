import React, { Component } from 'react';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import SearchFilters from './SearchFilters';
import { Redirect } from 'react-router-dom';

class SearchContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      location: "",
      localhosts: [],
      likesList: {},
      likesAll: false,
      hasSearched: false,
      advancedSearchOptions: false,
      userLikes: {},
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setCheckedValueLikesAll = this.setCheckedValueLikesAll.bind(this);
    this.setInterestState = this.setInterestState.bind(this);
    this.checkHandled = this.checkHandled.bind(this);
    this.goSearch = this.goSearch.bind(this);
    this.createSearchRequest = this.createSearchRequest.bind(this);
    this.toggleAdvancedSearch = this.toggleAdvancedSearch.bind(this);
  }

  setInterestState(updatedInterests) {
    this.setState({
      interests: updatedInterests
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    // TODO: Change history so that back button works. How do I persist the results from the last search too?
    //this.props.history.push(`/search/${this.state.location}`, this.state);
    this.setState({
      hasSearched: true,
      advancedSearchOptions: false,
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
    data.append("searching[location]", this.state.location)
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
            localhosts: dataJson["matches"],
            userLikes: dataJson["likes"],
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
    this.setState({ likesList: value});
  }

  toggleAdvancedSearch() {
    this.setState({ advancedSearchOptions: true });
  }


  componentDidUpdate() {
  }

  render() {
    if (!this.props.loggedIn) {
      return (<Redirect to="/" />);
    }
    if (!this.state.hasSearched) {
      return (
        <div className="search-container register-max-width">
          <SearchBar submitHandler={this.handleSubmit} changeHandler={this.handleChange} value={this.state.location} />
          <h5>Enter a city to search for Localhosts that share your interests!</h5>
          <div className="ui section divider"></div>
        </div>
      )
    }
    else if (this.state.advancedSearchOptions) {
      return (
        <div className="search-container register-max-width">
          <SearchBar submitHandler={this.handleSubmit} changeHandler={this.handleChange} value={this.state.location} />
          <div className="ui section divider"></div>
          <div className="max-width">
            <h4 className="inline">Localhosts must match all interests:</h4>
            <div className="ui fitted toggle checkbox inline left-pad-10"><input onClick={this.setCheckedValueLikesAll} type="checkbox" checked={this.state.likesAll} /><label></label></div>
          </div>
          <SearchFilters likes={this.state.likesList} handleCheck={this.checkHandled} userLikes={this.state.userLikes}/>
          <SearchResults results={this.state.localhosts} />
        </div>
      );
    }
    else {
      return (
        <div className="search-container register-max-width">
          <SearchBar submitHandler={this.handleSubmit} changeHandler={this.handleChange} value={this.state.location} />
          <div className="ui section divider"></div>
          <button className="ui blue button" onClick={this.toggleAdvancedSearch}>
            <span>Advanced Search Options</span>
            <i aria-hidden="true" className="search icon left-pad-10"></i>
          </button>
          <div className="ui section divider" id="bottom-margin-15"></div>
          <h5 className="top-margin-0 bottom-padding-10">Localhosts that match your interests...</h5>
          <SearchResults results={this.state.localhosts} />
        </div>
      )
    }
  }
}

export default SearchContainer;
