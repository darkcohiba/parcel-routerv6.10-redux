import React from 'react'

export default function TableRows({user}) {
  return (
    <>
    <tr>
      <td>{user.username}</td>
      <td>{user.password}</td>
    </tr>
    </>
  )
}
