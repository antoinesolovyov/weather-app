export const formatTime = (date) => {
  let hours = date.getHours()
  let minutes = date.getMinutes()

  hours = hours % 12 || 12
  hours = hours < 10 ? '0' + hours : hours
  minutes = minutes < 10 ? '0' + minutes : minutes

  return hours + ':' + minutes
}

export const formatAMPM = (date) => {
  const hours = date.getHours()

  return hours >= 12 ? 'pm' : 'am'
}

export const formatDate = (date) => {
  const formatter = new Intl.DateTimeFormat('en', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  return formatter.format(date)
}

export const formatDayName = (date) => {
  return date.toLocaleDateString('en', { weekday: 'long' })
}
