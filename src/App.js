import React from 'react';
import marked from 'marked';
import DOMPurify from 'dompurify';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rawInput: 'Write here',
      markedContent: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      rawInput: event.target.value,
      markedContent: DOMPurify.sanitize(marked(event.target.value, {gfm: true, breaks: true})),
    });
  }

  componentDidMount() {
    this.setState({
      markedContent: marked(this.state.rawInput),
    });
  }

  render() {
    return (
      <div className="container-fluid">
        <h1 className="text-center mb-5">Markdown previewer</h1>
        <div className="row">
          <InputContainer
            header="Input window"
            handleChange={this.handleChange}
            rawInput={this.state.rawInput}
          />
          <PreviewContainer
            header="Preview window"
            markedContent={this.state.markedContent}
          />
        </div>
      </div>
    );
  }
}

function InputContainer(props) {
  return (
    <div className="col-6">
      <div className="card">
        <div className="card-header">{props.header}</div>
        <div className="card-body">
          <form>
            <div className="form-group">
              <label for="exampleFormControlTextarea1">
                Write your markdown here
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="15"
                onChange={props.handleChange}
                value={props.rawInput}
              ></textarea>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

function PreviewContainer(props) {
  return (
    <div className="col-6">
      <div className="card">
        <div className="card-header">{props.header}</div>
        <div className="card-body">
          <div dangerouslySetInnerHTML={{ __html: props.markedContent }} />
        </div>
      </div>
    </div>
  );
}

export default App;
