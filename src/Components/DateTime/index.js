import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types';
import { formatDistanceToNow } from 'date-fns'

const config = {
  addSuffix: true
}

function DateTime ({ dateString }) {
  const date = new Date(dateString)
  const [formattedDate, setFormatDate] = useState(
    formatDistanceToNow(date, config)
  )

  useEffect(() => {
    const timer = setInterval(() => {
      setFormatDate(formatDistanceToNow(date, config))
    }, 30 * 1000)
    return () => clearInterval(timer)
  })

  return <time  dateTime={dateString}>{formattedDate}</time>
}

DateTime.propTypes = {
  dateString: PropTypes.string
}

export default DateTime
