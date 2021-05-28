const isInBrowser = !!(
    typeof window !== 'undefined' &&
    window.document &&
    window.document.createElement
  )

  export default isInBrowser