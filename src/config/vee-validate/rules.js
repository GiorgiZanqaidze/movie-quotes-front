import { defineRule } from 'vee-validate'
import { required, email, min, alpha, max, confirmed, integer } from '@vee-validate/rules'

defineRule('required', required)
defineRule('email', email)
defineRule('min', min)
defineRule('max', max)
defineRule('alpha', alpha)
defineRule('confirmed', confirmed)
defineRule('integer', integer)

defineRule('alpha', (value) => {
  if (!/^[a-z0-9]+$/.test(value)) {
    return false
  }
  return true
})

defineRule('lowerCase', (value) => {
  const lowercaseCount = (value.match(/[a-zა-ჰ0-9]/gi) || []).length

  if (lowercaseCount >= 15) {
    return true
  }
  return false
})

defineRule('year', (value) => {
  if (!/^(18|19|20)\d{2}$/.test(value)) {
    return false
  }
  return true
})

defineRule('georgianWords', (value) => {
  if (!/^[\u10D0-\u10FF\s]+$/u.test(value)) {
    return false
  }
  return true
})

defineRule('englishWords', (value) => {
  if (!/^[a-zA-Z\s]+$/.test(value)) {
    return false
  }
  return true
})
