import React from 'react';

const ListEntry = (props) => {
  return (
    <tr>
      <td> <a href={props.repo.html_url}>{props.repo.name}</a> </td>
      <td> {props.repo.owner.login} </td>
      <td> {props.repo.created_at} </td>
    </tr>
  )
}

export default ListEntry;