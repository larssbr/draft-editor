import 'draft-js/dist/Draft.css';
import './MyEditor.css';

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
    return (
      
      
      
      <div className="editor" onClick={this.focus}>
        <Editor
          editorState={editorState}
          onChange={this.onChange}
          plugins={this.plugins}
          ref={(element) => { this.editor = element; }}
          placeholder="Tell your story"
          spellCheck
        />
      </div>


      <div class="editorDash">
          <div class="editor-paper">
            <!-- react-text: 244 --><!-- /react-text -->
            <div class="paper-date">
              <div class="react-datepicker__input-container">
                <input class="" type="text">
              </div>
            </div><!-- react-text: 248 --><!-- /react-text -->
            <div>
              <div class="myEditor" id="editorContainer">
                <!-- react-text: 251 --><!-- /react-text -->
                <div class="buttons">
                  <button>Save</button><button>Add Entity</button><button>check state</button>
                </div>
                <div class="" id="clipboardTarget">
                  <div class="DraftEditor-root">
                    <div class="DraftEditor-editorContainer">
                      <div class="public-DraftEditor-content" contenteditable="true" data-gramm="false" role="textbox" spellcheck="false" style="outline: none; white-space: pre-wrap; word-wrap: break-word;">
                        <div data-contents="true">
                          <div class="headline-bold" data-block="true" data-editor="eaim9" data-offset-key="fh8ea-0-0">
                            <div class="public-DraftStyleDefault-block public-DraftStyleDefault-ltr" data-offset-key="fh8ea-0-0">
                              <span data-offset-key="fh8ea-0-0" style="background-color: rgb(246, 212, 175);"><span data-text="true">   <Editor
          editorState={editorState}
          onChange={this.onChange}
          plugins={this.plugins}
          ref={(element) => { this.editor = element; }}
          placeholder="Tell your story"
          spellCheck
        /></span></span> <span data-offset-key="fh8ea-0-1"><span data-text="true">launches in</span></span> <span data-offset-key="fh8ea-0-2" style="background-color: rgb(246, 212, 175);"><span data-text="true">Trondheim</span></span> <span data-offset-key="fh8ea-0-3"><span data-text="true">to target</span></span> <span data-offset-key="fh8ea-0-4" style="background-color: rgb(246, 212, 175);"><span data-text="true">coworking</span></span> <span data-offset-key="fh8ea-0-5"><span data-text="true">market</span></span>
                            </div>
                          </div>

                          <div data-block="true" data-editor="eaim9" data-offset-key="fid6q-0-0">
                            <div class="public-DraftStyleDefault-block public-DraftStyleDefault-ltr" data-offset-key="fid6q-0-0">
                              <span data-offset-key="fid6q-0-0"><br data-text="true"></span>
                            </div>
                          </div>

                          
                          <div data-block="true" data-editor="eaim9" data-offset-key="62gbe-0-0">
                            <div class="public-DraftStyleDefault-block public-DraftStyleDefault-ltr" data-offset-key="62gbe-0-0">
                              <span data-offset-key="62gbe-0-0"><br data-text="true"></span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div><!-- react-text: 505 --><!-- /react-text -->
            </div><!-- react-text: 506 --><!-- /react-text -->
          </div><!-- react-text: 507 --><!-- /react-text -->
        </div>










    );
  }
}

export default MyEditor;
