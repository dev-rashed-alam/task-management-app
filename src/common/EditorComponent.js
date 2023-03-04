import React from 'react';
import { Form } from 'react-bootstrap';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const EditorComponent = ({ label, value, onChange }) => {
  return (
    <Form.Group>
      <Form.Label>{label}</Form.Label>
      <CKEditor
        editor={ClassicEditor}
        data={value || ''}
        onChange={(event, editor) => {
          onChange(editor.getData());
        }}
        onReady={(editor) => {
          editor.setData(value || '');
        }}
      />
    </Form.Group>
  );
};

export default EditorComponent;