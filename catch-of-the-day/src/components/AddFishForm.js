import React from 'react';

//  giving form its own component in case of use elsewhere in app

class AddFishForm extends React.Component{
  // we need to create a fish object on form submit to store data
  // make a method called createFish
  createFish(event){
    event.preventDefault();
    console.log('gonna make sum fish');
    const fish = {
      name: this.name.value,
      price: this.price.value,
      status: this.status.value,
      desc: this.desc.value,
      image: this.image.value,
      }
    console.log(fish);
    //now we can access addFish from here, passed from Inventory
    this.props.addFish(fish);
    this.fishForm.reset();
  }

// create form element
// how to take text out of these inputs and inject into object?
// want fish object with these fields
// use refs
// these arrow functions allow us to save the entered data
  render(){
    return (
      <form ref={(input) => this.fishForm = input} className="fish-edit" onSubmit={(e) => this.createFish(e)}>
        <input ref={(input) => this.name = input} type="text" placeholder="Fish Name"/>
        <input ref={(input) => this.price = input} type="text" placeholder="Fish Price"/>
        <select ref={(input) => this.status = input}>
          <option value="available">Available</option>
          <option value="unavailable">Unavailable</option>
        </select>
        <textarea ref={(input) => this.desc = input} type="text" placeholder="Fish Desc"></textarea>
        <input ref={(input) => this.image = input} type="text" placeholder="Fish Image"/>
        <button type="submit">+ Add Fishy</button>
      </form>
    )
  }
}

export default AddFishForm;
