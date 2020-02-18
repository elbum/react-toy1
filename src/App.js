import React, {Component} from 'react';
import './App.css';
import TOC from './components/TOC';
import Subject from './components/Subject'
import Content from './components/Content'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      subject:{title:'WEB',sub:'World wide Web state'},
      contents:[
        {id:1,title:'HTML',desc:'HTML is hypertect'},
        {id:2,title:'CSS',desc:'CSS is for design'},
        {id:3,title:'Javascript',desc:'Javascript is for interactive'},
      ],
    }

  }


  render() {
    
    return (<div className="App">
      <Subject tittle={this.state.subject.title} sub={this.state.subject.sub}>
        hello sub
      </Subject>
      <Subject tittle="REACT" sub="for UIUX!!!">
      </Subject>

      <br></br><br></br>
      Hello React
      <TOC data={this.state.contents}></TOC>
      <Content title="HTML Props." sub="Props. HTML is hypertext markup Language."></Content>
    </div>)
  }
}

export default App;
