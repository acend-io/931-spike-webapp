import { I18n } from 'react-redux-i18n';
//import moment from 'moment';
// import { formatCurrency } from './number';
//import { useForm } from "react-hook-form";

export const required = (value) => {
  if (typeof value !== 'undefined' && value !== '') return undefined;
  return I18n.t('validation.required');
};

// export const requiredBoolean = (value) => {
//   if (value) return undefined;
//   return I18n.t('validation.required');
// };

// export const requiredIf = (otherName, otherValue) => (value, allValues) => {
//   if (allValues[otherName] !== otherValue) return undefined;
//   if (typeof value === 'undefined' || value === '') {
//     return I18n.t('validation.required');
//   }
// };

// export const exactLength = length => (value) => {
//   if (value.length !== length) {
//     return `${I18n.t('validation.exactly')} ${length} ${I18n.t('validation.characters')}`;
//   }
// };

// export const maxLength = max => (value) => {
//   if (!value || value.length <= max) return undefined;
//   return `${`${I18n.t('validation.maximum')} ${max} ${I18n.t('validation.characters')}`}`;
// };

// export const minLength = min => (value) => {
//   if (!value || value.length >= min) return undefined;
//   return `${`${I18n.t('validation.minimum')} ${min} ${I18n.t('validation.characters')}`}`;
// };

// export const name = (value) => {
//   if (value && !/^([A-Za-z]([A-Za-z '-])*[A-Za-z])+$/.test(value.trim())) return I18n.t('validation.name');
//   return undefined;
// };

// export const number = (value) => {
//   if (value && isNaN(value)) return I18n.t('validation.number');
//   return undefined;
// };

// export const greaterThanZero = (value) => {
//   if (Number(value) <= 0) return I18n.t('validation.greaterThanZero');
//   return undefined;
// };

// export const minValue = min => (value) => {
//   if (value && value < min) return `${`${I18n.t('validation.minimum')} ${min}`}`;
//   return undefined;
// };

// export const maxValue = max => (value) => {
//   if (value && value > max) return `${`${I18n.t('validation.maximum')} ${formatCurrency(max, 0, 0)}`}`;
//   return undefined;
// };

export const email = (value) => {
  if (value && !/^[A-Z0-9._+-]+@(?:[A-Z0-9-]+\.)+[A-Z]{2,}$/i.test(value)) return I18n.t('validation.email');
  return undefined;
};

// export const alphaNumeric = (value) => {
//   if (value && /[^a-zA-Z0-9 ]/i.test(value)) return I18n.t('validation.alphaNumeric');
//   return undefined;
// };

// export const phoneNumber = (value) => {
//   if (!value || /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/i.test(value)) return undefined;
//   return I18n.t('validation.phoneNumber');
// };

export const password = (value) => {
  if (value && !/^(?=.*[A-Z])(?=(.*[\d]))(?=(.*[\W])).+$/i.test(value)) return I18n.t('validation.password');
  return undefined;
};

// export const sameWithPass = (value, allValues) => {
//   if (!value && allValues.password) {
//     return I18n.t('validation.required');
//   } else if (value && value !== allValues.password) {
//     return I18n.t('validation.samePassword');
//   }
//   return undefined;
// };

// export const hookssameWithPass = (value) => {
//   const password = document.getElementById("password").value;
//   if (!value && password) {
//     return I18n.t('validation.required');
//   } else if (value && value !== password) {
//     return I18n.t('validation.samePassword');
//   }
//   return undefined;
// };

// export const ccExpDate = (value) => {
//   if (value) {
//     const month = value.slice(0, 2);
//     const year = value.slice(3);
//     if (value.length !== 5 || isNaN(month) || value[2] !== '/' || isNaN(year)) {
//       return I18n.t('validation.creditCard');
//     }
//   }
//   return undefined;
// };

// export const zipcode = (value) => {
//   if (value && !/(^\d{5}$)|(^\d{5}-\d{4}$)/.test(value)) {
//     return I18n.t('validation.zipCode');
//   }
//   return undefined;
// };

// export const date = (value) => {
//   // MM/DD/YYYY
//   const match = value.match(/^(\d\d)\/(\d\d)\/(\d\d\d\d)$/);
//   if (match) {
//     const [_, month, day, year] = match;
//     if (month < '01' && month > '12') return I18n.t('validation.date');
//     if (day < '01' && day > '31') return I18n.t('validation.date');
//     if (year >= moment().year) return I18n.t('validation.date');
//   } else return I18n.t('validation.date');
// };

// export const todaysDate = (value) => {
//   if (value && value.isSameOrAfter(moment(), 'd')) {
//     return undefined;
//   }
//   return I18n.t('validation.todaysDate');
// };

// export const afterStartDate = (value, allValues) => {
//   if (value && allValues.startsAt && value.isSameOrAfter(allValues.startsAt)) {
//     return undefined;
//   } else if (
//     value &&
//     allValues.startDate &&
//     value.isSameOrAfter(allValues.startDate)
//   ) {
//     return undefined;
//   }
//   return I18n.t('validation.invalidEndDate');
// };

// export const endDate = (value) => {
//   // the starting date is already counted as 1, so deduct one day from the year
//   if (value && value.isSameOrBefore(moment().add(1, 'y').subtract(1, 'd').endOf('day'))) {
//     return undefined;
//   } return I18n.t('validation.endDate');
// };

// export const yearRange = (value) => {
//   if (value >= 2000 && value <= moment().year()) return undefined;
//   return I18n.t('validation.yearRange');
// };

// export const priceInteger = (value) => {
//   const price = value.toString();
//   if (price && price.match(/\d+(\.\d{2})?/)[0] !== price) {
//     return I18n.t('validation.priceInteger');
//   }
//   return undefined;
// };

// export const isBefore = thisDate => (value) => {
//   if (moment(thisDate).isBefore(moment(value))) return I18n.t('validation.dob');
//   return undefined;
// };

// export const isValidDate = (value) => {
//   if (value) {
//     const d = moment(value, 'MM/DD/YYYY');
//     if (d == null || !d.isValid() || value.indexOf(d.format('MM/DD/YYYY')) < 0) {
//       return I18n.t('validation.dob');
//     }
//   }
//   return undefined;
// };

// export const isWithin3Years = (value) => {
//   // MM/YYYY
//   if (value !== undefined) {
//     const match = value.match(/^(\d\d)\/(\d\d\d\d)$/);
//     if (match) {
//       const [_, month, year] = match;
//       const firstDay = moment(`${month}/01/${year}`);
//       if (month < '01' || month > '12') return I18n.t('validation.date');
//       if (firstDay > moment()) return I18n.t('validation.greaterThan3Years');
//       if (firstDay <= moment().subtract(3, 'years')) return I18n.t('validation.lessThan3Years');
//     } else return I18n.t('validation.date');
//   }
// };

// export const exactLength2 = exactLength(2);
// export const maxLength15 = maxLength(15);
// export const minLength8 = minLength(8);
// export const minValue18 = minValue(18);
// export const minValue0 = minValue(0);
// export const minValue1250 = minValue(1250);
// export const maxValue50k = maxValue(50000);
// export const maxValue100k = maxValue(100000);
// export const maxValue150k = maxValue(150000);
// export const maxValue200k = maxValue(200000);
// export const beforeToday = isBefore(moment());
