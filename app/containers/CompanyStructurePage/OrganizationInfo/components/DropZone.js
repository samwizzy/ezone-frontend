import React from 'react';
import { DropzoneArea } from 'material-ui-dropzone';

const ColorDropZone = props => {
  const { handleChange } = props;

  return (
    <DropzoneArea
      acceptedFiles={['image/jpeg', 'image/png', 'image/bmp']}
      onChange={evt => handleChange(evt)}
      showFileNames
    />
  );
};

export default ColorDropZone;
