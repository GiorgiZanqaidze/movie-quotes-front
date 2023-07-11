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
        min: 'must have at least 0:{min} symbols',
        max: 'must have maximum 0:{max} symbols',
        alpha: 'This field must contain low register',
        confirmed: 'must be the same as password',
        integer: 'field must be number',
        georgianWords: 'Must contain only Georgian letters',
        englishWords: 'Must contain only English words',
        year: 'It is not valid year',
        lowerCase: 'must contain minimun 15 lower case symbols'
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
        min: 'სავალდებულოა მინიმუმ 0:{min} სიმბოლო',
        max: 'შესაძლოა მაქსიმუმ 0:{max} სიმბოლო',
        alpha: 'მხოლოდ დაბალი რანგის სიმბოლოები',
        confirmed: 'უნდა ემთხვეოდეს პაროლის ველს',
        integer: 'არ აკმაყოფილებს ფორმატს',
        georgianWords: 'მხოლოდ ქართული ასოები',
        englishWords: 'მხოლოდ ინგლისური ასოები',
        year: 'არ არის ვალიდური',
        lowerCase: 'უნდა შეიცავდეს 15 დაბალი რანგის სიმბოლოს'
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
