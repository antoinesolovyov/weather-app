import React, { useEffect, useState } from 'react'
import { formatTime, formatAMPM, formatDate } from './formatter'

function Clock () {
  const [date, setDate] = useState(new Date())

  const tick = () => {
    setDate(new Date())
  }

  useEffect(() => {
    const timerID = setInterval(tick, 1000 * 60)

    return () => clearInterval(timerID)
  }, [])

  return (
    <div className='clock'>
      <span className='time'>{formatTime(date)}</span> <span>{formatAMPM(date)}</span>
      <p>{formatDate(date)}</p>
    </div>
  )
}

export default Clock
