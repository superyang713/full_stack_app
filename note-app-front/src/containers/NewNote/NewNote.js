import React, { Component } from "react";
import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";

import LoaderButton from "../../components/LoaderButton/LoaderButton";
import "./NewNote.css";
import config from "../../config";


class NewNote extends Component {
  constructor() {
    super();
    this.file = null;
  }
  
  state = {
    isLoading: null,
    content: "",
  }

  validateForm() {
    return this.state.content.length > 0;
  }

  handleChange = event => {
    this.setState({[event.target.id]: event.target.value });
  }

  handleFileChange = event => {
    this.file = event.target.files[0];
  }

  handleSubmit = async event => {
    event.preventDefault();
    const alertMessage = `Please pick a file smaller than
      ${config.MAX_ATTACHMENT_SIZE / 1000000} MB.`;

    if (this.file && this.file.size > config.MAX_ATTACHMENT_SIZE) {
      alert(alertMessage);
      return;
    }
    this.setState({ isLoading: true });
  }

  render() {
    return (
      <div className="NewNote">
        <form onSubmit={this.handleSubmit}>
          
          <FormGroup controlId="content">
            <FormControl
              onChange="this.handleChange"
              value={this.state.content}
              componentClass="textarea"
            />
          </FormGroup>

          <FormGroup controlId="file">
            <ControlLabel>Attachment</ControlLabel>
            <FormControl onChange={this.handleFileChange} type="file" />
          </FormGroup>

          <LoaderButton
            block
            bsStyle="primary"
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
            isLoading={this.state.isLoading}
            text="Create"
            LoadingText="Creating..."
          />
          
        </form>
      </div>
    );
  }
}

export default NewNote;
