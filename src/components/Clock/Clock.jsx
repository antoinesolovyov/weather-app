import React, { useEffect, useState } from 'react'
import { formatTime, formatAMPM, formatDate } from './formatter'
import './Clock.css'

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
    <header>
      <div className='clock'>
        <span className='time'>{formatTime(date)}</span> <span>{formatAMPM(date)}</span>
        <p className='date'>{formatDate(date)}</p>
      </div>
      <div className='location'><span>Europe</span><span>Minsk</span></div>
    </header>
  )
}

export default Clock
