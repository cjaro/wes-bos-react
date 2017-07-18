import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
  // constructor() {
  //   super();
  //   this.goToStore = this.goToStore.bind(this);
  // }

  // using Imperitive API instead of <Redirect /> for routing
  goToStore(event) {
    event.preventDefault();
    console.log('You Changed the URL');
    // first grab the text from the box
    // 1: props (to pass data from a parent to a child component)
    // 2: state (to hold data)
    // and
    // 3: context (declare at top level and it's made available to anybody at a lower level)
    // context can seem tempting since you can declare lots of things globally
    // but React doesn't want global - should do modular, small components
    // rather than relying on this, React makes you use state and individual components
    // React makes it tough - you need to know you want to use context
    // not going to make it easy since it will form bad habits
    const storeId = this.storeInput.value;
    console.log(`Going to ${storeId}`)
    // second we're going to transition from / to /store/:storeId
    // look in React DevTools and see transitionTo as part of router, within context, within this
    this.context.router.transitionTo(`/store/${storeId}`);
    // page doens't reload - URL gets changed user HTML push state
  }

  render() {
    return (
      <form className="store-selector" onSubmit={(e) => this.goToStore(e)}>
        <h2>Please Enter A Store</h2>
        <input type="text" required placeholder="Store Name" defaultValue={getFunName()} ref={(input) => { this.storeInput = input}} />
        <button type="submit">Visit Store →</button>
      </form>
    )
  }
}

StorePicker.contextTypes = {
  // this tells React that StorePicker expects a thing called router
  // so React says 'Okay I'm going to make a thing called router available to you'
  router: React.PropTypes.object
}

export default StorePicker;
