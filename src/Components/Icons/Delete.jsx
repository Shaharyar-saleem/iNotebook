import React from 'react';
import DelIcon from '../../icons/delete.png';

export default function Delete(props) {
  return (
    <div>
        <img src={DelIcon} alt="Delete Icon" width={props.width} height={props.height} />
    </div>
  )
}
