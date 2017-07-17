import React from 'react';
class StorePicker extends React.Component{
  render(){
    return (
      <form className="store-selector">
        <h2>please enter a store</h2>
        <input type="text" required placeholder="store name"></input>
        <button type="submit">Visit Store-></button>
      </form>
    );
  }
}

export default StorePicker;
