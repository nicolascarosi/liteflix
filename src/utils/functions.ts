export const toBase64 = (file: File) => {
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
      let encoded = ''
      if (reader.result) {
        encoded = reader.result.toString().replace(/^data:(.*,)?/, '')
      }
      if (encoded.length % 4 > 0) {
        encoded += '='.repeat(4 - (encoded.length % 4))
      }
      resolve(encoded)
    }
    reader.onerror = (error) => reject(error)
  })
}

export const isMobile = window.innerWidth <= 1100
