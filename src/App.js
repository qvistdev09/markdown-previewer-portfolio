import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      previewContent: "Just a starting string!"
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      previewContent: event.target.value
    });
  }

  render() {
    return (
      <div className="container-fluid">
        <h1 className="text-center mb-5">Markdown previewer</h1>
        <div className="row">
          <InputContainer header="Input window" handleChange={this.handleChange} previewContent={this.state.previewContent}/>
          <PreviewContainer header="Preview window" previewContent={this.state.previewContent}/>
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
          <p className="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <form>
            <div className="form-group">
              <label for="exampleFormControlTextarea1">Example textarea</label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="15"
                onChange={props.handleChange}
                value={props.previewContent}
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
          <p className="card-text">{props.previewContent}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
