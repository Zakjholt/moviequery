import React from 'react'
import { withRouter } from 'react-router-dom'

/**
 * Props
 * {
 *  match {
 *    params: {
 *     id: Movie['id']
 *    }
 *  }
 * }
 */
const DetailsPage = ({ match: { params } }) => (
  <div>details for {params.id}</div>
)

export default withRouter(DetailsPage)
