import React from 'react';
import RepoListEntry from './ListEntry.jsx';

const RepoList = (props) => {
  let repoTableData = props.repos.map((repo) => {
    return <RepoListEntry repo={repo} key={repo.id} />
  });

  console.log('props.repos.isPostRequet => ', props, props.isPostRequest)
  let dataImportedMessage = props.isPostRequest ? (<h5>There are a total of {props.repoImportedAmount.length} imported </h5>) : <div></div>

  return (
    <div>
      <h4> Repo List Component </h4>
      { dataImportedMessage }
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