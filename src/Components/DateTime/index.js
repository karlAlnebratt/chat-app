import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types';
import { formatDistanceToNow, parseISO } from 'date-fns'

const config = {
  addSuffix: true
}

function DateTime ({ dateString }) {
  const [formattedDate, setFormatDate] = useState(
    formatDistanceToNow(parseISO(dateString), config)
  )

  useEffect(() => {
    const timer = setInterval(() => {
      setFormatDate(formatDistanceToNow(parseISO(dateString), config))
    }, 30 * 1000)
    return () => clearInterval(timer)
  }, [dateString])

  return <time  dateTime={dateString}>{formattedDate}</time>
}

DateTime.propTypes = {
  dateString: PropTypes.string
}

export default DateTime
