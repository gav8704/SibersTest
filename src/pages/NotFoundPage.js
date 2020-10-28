import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

const NotFoundPage = () => (
  <div className="page-not-found">
    <Helmet>
      <title>Page not found</title>
    </Helmet>

    <h1>Sorry, page not found</h1>
    <Link to="/">Go to homepage</Link>
  </div>
)

export default NotFoundPage