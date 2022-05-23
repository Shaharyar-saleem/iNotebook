import React from 'react';
import EditIcon from '../../icons/editing.png';

export default function Edit(props) {
  return (
    <div>
      <img src={EditIcon} alt="Edit Icon" height={props.height} width={props.width} />
    </div>
  );
}
