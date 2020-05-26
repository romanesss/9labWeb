import React, { Component } from 'react'
import Button from '../Button/Button';

export default class Searchbar extends Component {
  state = {
    query:'',
  }

  handleChange = event =>{
    this.setState({
      query: event.target.value,
    })
  }

  handleSubmit = e =>{
    const { onSubmit } = this.props;
    const { query } = this.state
    e.preventDefault();
    onSubmit(query);
    this.setState({
      query:'',
    })
  }

  // onBtnDeleteClick = e => {

  //   let newData = this.props.photos.slice() //copy array from prevState
  //   newData.splice(0, ) // remove element
  //   this.setState({
  //     photos: newData,
  //   })
  //   console.log(newData);
  // }

  // onBtnDeleteClick =e=> {
  //   const arr = this.props.photos;
  //   console.log('arr: ', arr);
  //   this.setState({
  //     photos: arr.filter((_, i) => i !== 1)
  //   })
  // }



  render() {
    const { query } = this.state;
    const { handleChange, handleSubmit } = this;
    const { onBtnDeleteClick } = this.props

    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={handleSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>
          <input
            value={query}
            onChange={handleChange}
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
        <Button type="button" text="Delete" onBtnClick={onBtnDeleteClick}/>
      </header>
    );
  }
}
