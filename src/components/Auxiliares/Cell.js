import * as React from 'react';

export default function Cell({
  content,
  header,
}) {

  const cellMarkup = (typeof content !== "boolean") ? (header ? (
    <th className="Cell Cell-header">
      {content}
    </th>
  ) : (
    <td className="Cell">
      {content}
    </td>
  )):(
  //Boolean received
  ((content) ? (
  
  <td bgcolor="#008000" className="Cell"></td>
  ) : (
  <td bgcolor="#FF0000" className="Cell"></td>
  )
  ));

  return (cellMarkup);
}