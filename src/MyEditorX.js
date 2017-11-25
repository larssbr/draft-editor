import 'draft-js/dist/Draft.css';
import './MyEditor.css';
import './draftStyling.css';

import React from 'react';
import { EditorState } from 'draft-js';
import Editor from 'draft-js-plugins-editor';

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

    const valueTest = {
          text: "hello world",
          obj: {
            text2: "shit"
          }
        }



    return (

      <div className="editor" onClick={this.focus}>
        <div class="editorDash">
          <div class="editor-paper">
            <div class="myEditor" id="editorContainer">
              <div class="" id="clipboardTarget">
                <div class="DraftEditor-root">
                  <div class="DraftEditor-editorContainer">

                    <div data-contents="true">
                      <div class="headline-bold" data-block="true" data-editor="eaim9" data-offset-key="fh8ea-0-0">
                        <div class="public-DraftStyleDefault-block public-DraftStyleDefault-ltr" data-offset-key="fh8ea-0-0">
                        
                        <span data-offset-key="fh8ea-0-0" style="background-color: rgb(246, 212, 175);">
                          
                        "someting"
                        
                        </span>
                          



      <Editor
        editorState={editorState}
        onChange={this.onChange}
        plugins={this.plugins}
        ref={(element) => { this.editor = element; }}
        placeholder="Edit the legal document here"
        spellCheck
      />  

                          
                        </div>
                      </div>
                     </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

    </div>



    );
  }
}

export default MyEditor;
