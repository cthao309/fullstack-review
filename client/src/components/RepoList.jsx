import React from 'react';
import RepoListEntry from './ListEntry.jsx';

const RepoList = (props) => {
  let repoTableData = props.repos.map((repo) => {
    return <RepoListEntry repo={repo} key={repo.id}/>
  });

  return (
    <div>
      <h4> Repo List Component </h4>
      <h5>There are {props.repos.length} repos.</h5>
      {
        props.repos.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>Project Name</th>
                <th>Created By</th>
                <th>Created Date</th>
              </tr>
            </thead>
            <tbody>
              {repoTableData}
            </tbody>
          </table>
        ):
        <div></div>
      }
    </div>
  )

}

export default RepoList;