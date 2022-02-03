const isDateTimeFormatSupported = typeof Intl !== 'undefined' && Intl.DateTimeFormat

export const formatDate = (timestamp:string, { language = 'es-ES' } = {}) => {
  const date = new Date(timestamp)

  if (!isDateTimeFormatSupported) {
    const options:any = {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    }

    return date.toLocaleDateString(language, options)
  }

  const options:any = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  }

  return new Intl.DateTimeFormat(language, options).format(date)
}

export default function useDateTimeFormat(timestamp:string) {
  return formatDate(timestamp, { language: 'es-ES' })
}
