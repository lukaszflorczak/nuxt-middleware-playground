function createPluralFunction(fn) {
  return (value, choicesLength) => {
    const stringValue = String(value)
    const decimalPart = !stringValue.includes('.') ? '' : stringValue.split('.')[1]
    const decimalLength = decimalPart.length
    const numericValue = +value
    const integerPart = +(stringValue.split('.')[0])
    const truncatedDecimal = decimalPart.length === 0 ? 0 : +decimalPart.replace(/0+$/, '')

    const choice = fn(numericValue, integerPart, decimalLength, +decimalPart, truncatedDecimal)
    return choice < choicesLength ? choice : choicesLength - 1
  }
}

function B(x, y, val) { return x <= val && val <= y && val % 1 === 0 }

function IN(set, val) { return set.includes(val) }

export default {
  /* eslint-disable quote-props, one-var, no-mixed-operators */
  'en': createPluralFunction((n, i, v) => {
    return i === 1 && v === 0 ? 0 : 1
  }),
  'pl': createPluralFunction((n, i, v) => {
    const i10 = i % 10, i100 = i % 100
    return i === 1 && v === 0 ? 0 : v === 0 && B(2, 4, i10) && !B(12, 14, i100) ? 1 : v === 0 && i !== 1 && B(0, 1, i10) || v === 0 && B(5, 9, i10) || v === 0 && B(12, 14, i100) ? 2 : 3
  }),
  'pt': createPluralFunction((n, i) => {
    return B(0, 1, i) ? 0 : 1
  }),
  'es': createPluralFunction((n) => {
    return n === 1 ? 0 : 1
  }),
  'fr': createPluralFunction((n, i) => {
    return IN([0, 1], i) ? 0 : 1
  }),
  'de': createPluralFunction((n, i, v) => {
    return i === 1 && v === 0 ? 0 : 1
  }),
  'ar': createPluralFunction((n) => {
    const n100 = n % 100
    return n === 0 ? 0 : n === 1 ? 1 : n === 2 ? 2 : B(3, 10, n100) ? 3 : B(11, 99, n100) ? 4 : 5
  }),
  /* eslint-enable quote-props, one-var, no-mixed-operators */
}
