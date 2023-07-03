import { configure } from 'vee-validate'
// import { localize, setLocale } from "@vee-validate/i18n";
import { localize } from '@vee-validate/i18n'
import en from '@vee-validate/i18n/dist/locale/en.json'
import ka from '@vee-validate/i18n/dist/locale/ka.json'

configure({
  generateMessage: localize({
    en: {
      ...en,
      messages: {
        required: 'This field is required',
        email: 'This input is not in email format',
        min: '{field} must have at least 0:{min} symbols',
        max: '{field} must have maximum 0:{max} symbols',
        alpha: 'This field must contain low register',
        confirmed: 'must be the same as password',
        integer: 'field must be number',
        georgianWords: 'Must contain only Georgian letters',
        englishWords: 'This field must contain only English words'
      },
      names: {
        name: 'The name',
        password_confirmation: 'The password confirmation'
      }
    },
    ka: {
      ...ka,
      messages: {
        required: 'გთხოვთ შეავსოთ მოცემული ველი',
        email: 'არ აკმაყოფილებს მეილის ფორმატს',
        min: '{field} ველი უნდა შეიცავდეს მინიმუმ 0:{min} სიმბოლოს',
        max: '{field} ველი უნდა შეიცავდეს მაქსიმუმ 0:{max} სიმბოლოს',
        alpha: 'უნდა შეიცავდეს მხოლოდ დაბალი რეგისტრის ლათინურ სიმბოლოებს და რიცხვებს',
        confirmed: 'უნდა ემთხვეოდეს პაროლის ველს',
        integer: 'არ აკმაყოფილებს ფორმატს',
        georgianWords: 'ეს ველი უნდა შეიცავდეს მხოლოდ ქართულ სიტყვებს',
        englishWords: 'ეს ველი უნდა შეიცავდეს მხოლოდ ინგლისურ ასოებს'
      },
      names: {
        password: 'პაროლი',
        username: 'მომხმარებლის სახელი',
        password_confirmation: 'პაროლის გამეორება',
        name: 'სახელის',
        email: 'მეილი'
      }
    }
  })
})
