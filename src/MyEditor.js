import 'draft-js/dist/Draft.css';
import './MyEditor.css';
import './draftStyling.css';

import React from 'react';
import { EditorState } from 'draft-js';
//import Editor from 'draft-js-plugins-editor';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

import basicTextStylePlugin from './plugins/basicTextStylePlugin';
import addLinkPlugin from './plugins/addLinkPlugin';

class MyEditor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editorState: EditorState.createEmpty(),
    };

    this.plugins = [
      addLinkPlugin,
      basicTextStylePlugin,
    ];
  }

  componentDidMount() {
    this.focus();
  }

  onChange = (editorState) => {
    if (editorState.getDecorator() !== null) {
      this.setState({
        editorState,
      });
    }
  }

  focus = () => {
    this.editor.focus();
  }

  

  render() {
    const { editorState } = this.state;


    return (

     
      <Editor
        editorState={editorState}
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        editorClassName="editorClassName"
        onEditorStateChange={this.onEditorStateChange}
      />

    );
  }
}

export default MyEditor;
