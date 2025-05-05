import React, { Component } from 'react';
import './App.css';

// React app with button that will show/hide component of timer regarding to the 
// toggler which will appear once, than updated, and when toggle button will
// has 'off-mode' 

// class Button extends React.Component {
//   constructor(props){
//     super(props);
//     // this.state({
//     //   name: "John"
//     // })
//   }

//   render(): React.ReactNode {
//     return <button>{this.props.children}</button>
//   }
// }

class ErrorBoundary extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      hasError: false
    }
  }

  static getDerivedStateFromError(err) {
    console.log("There is an Error!: ", err)

    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.log("⚠️ attntion there is an error", error, errorInfo)
  }

  render(): React.ReactNode {
    if(this.state.hasError) {
      return (
        <h2 style={{ color: "red" }}> Something went wrong, try again later!</h2>
      )
    }

    return this.props.children;
    
  }
}

class BuggyComponent extends Component {
  constructor(props) {
    super(props); 
    this.state = { throwError: false }; 
  }

  onThrowErrorHandler = () => {
    this.setState({
      throwError: true
    })
  }

  render(): React.ReactNode {
    if(!this.state.throwError) {
      return (
        <button onClick={this.onThrowErrorHandler}>Click here if u wanna invoke an Error!</button>
      )
    }

    throw new Error("Special made error");
  }
}

class LifecycleDemo extends React.Component {
  constructor(props) {
    super(props);

    console.log("There is a constructor: 🏗️ ");
    

    this.state = {
      counter: 0,
      color: "black"
    }
  }

  static getDerivedStateFromProps(props, state) {
      console.log("🧩 ,getDrivedStateFromProps");
      console.log("There is method that will be done !before render! and then after, usually unsing to sync states/props");

      return null
  }

  componentDidMount(): void {
    console.log("Component did mount!🚀");
    this.interval = setInterval(() => {
      this.setState((prevState) => ({ counter: prevState.counter + 1 }))
    }, 1000);

    console.log("[this.state]",this.state);
  }

  componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<{}>, snapshot?: any): void {
    console.log("Component has been updated! 🔁")
  }


  componentWillUnmount(): void {
    console.log("Component has been unmount! 🏁")
    clearInterval(this.interval);
  }

  shouldComponentUpdate(nextProps: Readonly<{}>, nextState: Readonly<{}>, nextContext: any): boolean {
    console.log("Should component update?! ")
    // if(this.state.counter > 10) return false;
    return true;
  }

  getSnapshotBeforeUpdate(prevProps: Readonly<{}>, prevState: Readonly<{}>) {
    console.log("STATE BEFORE UPDATE: ", prevState);
    console.log("Snapshot finished");
    // if(this.state.counter > 2) this.setState(prevState => ({ counter: 1 }))

  }

  render(): React.ReactNode {
    return ( 
      <h2>{this.state.counter}</h2>
     )
  }
}

class App extends React.Component {
  state: Readonly<{}> = {
    showDemo: true
  };

  constructor(props){
    super(props);
    // this.state({
    //   name: "John"
    // })
  }

  onDemoHandler = (): void => {
    this.setState((prevState) => ({ showDemo: !prevState.showDemo }))
  }
  
  render() {
    console.log("There was render ✅");
    
    return (
        <ErrorBoundary>
          <BuggyComponent />

          <section>
            <h1> 🌟 OUR CLASS COMPONENT APP </h1>
            {this.state.showDemo && <LifecycleDemo />}
            <button onClick={this.onDemoHandler}>{this.state.showDemo ? "Hide" : "Show"}</button>
          </section>
        </ErrorBoundary>
    )
  }
}

export default App
