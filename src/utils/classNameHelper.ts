export const computeKeyOnly = (value: boolean, className: string) => {
  return value ? className : ''
}

export const computeKeyValue = (value: string | undefined, className: string) => {
  if (typeof value === 'string') return `${value} ${className}`

  return ''
}

export const computeKeyOrKeyValue = (value: boolean | string | undefined, className: string) => {
  if (value === true) return className
  if (value === 'below') return `${className} ${value}`
  if (typeof value === 'string') return `${value} ${className}`

  return ''
}

export const computeTextAlignProp = (value: string | undefined) => {
  if (value === 'justified') return 'justified'

  return computeKeyValue(value, 'aligned')
}

export const computeWidthProp = (value: number | undefined, className: string) => {
  if ((typeof value === 'number') && className) {
    return `${numberToEnglish(value)} ${className}`
  }

  if ((typeof value === 'number') && !className) {
    return numberToEnglish(value)
  }
  
  return ''
}
  
const numberToEnglish = (value :number) => {
  const englishWords = [
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen'
  ]

  return englishWords[value - 1]
}