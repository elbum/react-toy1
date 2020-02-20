import React, { Component } from 'react';
import './App.css';
import TOC from './components/TOC';
import Subject from './components/Subject'
import ReadContent from './components/ReadContent'
import CreateContent from './components/CreateContent'
import Control from './components/Control'
class App extends Component {
  constructor(props) {
    super(props);
    this.max_content_id = 3;

    this.state = {
      // mode: "read",
      mode: "create",
      selected_content_id: 2,
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
    var _title, _desc, _article;
    if (this.state.mode === "welcome") {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>

    } else if (this.state.mode === "read") {
      var i = 0;
      while (i < this.state.contents.length) {
        var data = this.state.contents[i];
        if (data.id === this.state.selected_content_id) {
          _title = data.title;
          _desc = data.desc;
          break;
        }
        i = i + 1;

      }
      // _title = this.state.contents[0].title;
      // _desc = this.state.contents[0].desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>

    } else if (this.state.mode === "create") {
      _article = <CreateContent onSubmit={function (_title, _desc) {
        //add content to state.contents
        console.log(_title, _desc);
        this.max_content_id = this.max_content_id + 1;

        // for performance use concat 
        var _contents = this.state.contents.concat({ id: this.max_content_id, title: _title, desc: _desc });
        this.setState(
          { contents: _contents }
        )


      }.bind(this)}></CreateContent>
    }

    return (<div className="App">
      <Subject
        tittle={this.state.subject.title}
        sub={this.state.subject.sub}
        onChangeXPage={function () {
          this.setState({ mode: 'welcome' });
          // alert('hihihi');
        }.bind(this)}>

      </Subject>

      <Subject onChangeXPage={function () {
        this.setState({ mode: 'welcome' });
        // alert('hihihi');
      }.bind(this)} tittle="REACT" sub="for UIUX!!!">
      </Subject>

      <br></br><br></br>
      Hello React
      <ul>
        <TOC onChangePage={function (id) {
          // alert('toc');
          // debugger;
          this.setState({ mode: 'read' });
          this.setState({ selected_content_id: Number(id) });
        }.bind(this)} data={this.state.contents}></TOC>
      </ul>
      <Control onChangeMode={function (_mode) {
        console.log("MODE = ", _mode);
        this.setState({ mode: _mode })
      }.bind(this)}></Control>

      {_article};
      {/* <ReadContent title={_title} sub={_desc}></ReadContent> */}

    </div >)
  }
}

export default App;
