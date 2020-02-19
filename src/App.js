import React, { Component } from 'react';
import './App.css';
import TOC from './components/TOC';
import Subject from './components/Subject'
import Content from './components/Content'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "read",
      welcome: { title: "Welcome", desc: "Hello, React!~!" },
      subject: { title: 'WEB', sub: 'World wide Web state' },
      contents: [
        { id: 1, title: 'HTML', desc: 'HTML is hypertect' },
        { id: 2, title: 'CSS', desc: 'CSS is for design' },
        { id: 3, title: 'Javascript', desc: 'Javascript is for interactive' },
      ],
    }

  }


  render() {
    var _title, _desc;
    if (this.state.mode === "welcome") {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;

    } else if (this.state.mode === "read") {
      _title = this.state.contents[0].title;
      _desc = this.state.contents[0].desc;

    }

    return (<div className="App">
      <Subject 
        tittle={this.state.subject.title} 
        sub={this.state.subject.sub}
        onChangeXPage={function(){
          this.setState({mode:'welcome'});
          alert('hihihi');
        }.bind(this)}>

      </Subject>

      <Subject tittle="REACT" sub="for UIUX!!!">
      </Subject>

      <br></br><br></br>
      Hello React
      <TOC data={this.state.contents}></TOC>
      <Content title={_title} sub={_desc}></Content>
    </div>)
  }
}

export default App;
