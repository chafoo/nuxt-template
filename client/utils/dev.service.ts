export function log (message: string, value?: any, statusCode?: string) {
  if (process.env.NODE_ENV !== 'production') {
    console.log('--')

    if (statusCode) {
      console.log(`| ${statusCode}`)
    }

    console.log(`| ${message}`)
    console.log('--')

    if (value) {
      console.log('|', value)
      console.log('--')
    }
  }
}
