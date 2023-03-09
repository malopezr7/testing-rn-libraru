import type {RootTabParamList} from 'core/navigator/types';

const tabs: Record<keyof RootTabParamList, string> = {
  Zero: 'Zero',
  One: 'One',
  Two: 'Two',
  Three: 'Three',
};

const yup = {
  required: {
    firstName: 'First name is required',
    lastName: 'Last name is required',
    password: 'Password is required',
    email: 'Email is required',
    field: 'This field is required',
    dob: 'Date of birth is required',
  },
  invalid: {
    email: 'Email is not valid',
    passwordLength: 'Password must be at least 8 characters with no spaces',
    phone: 'Not valid, a valid phone looks like this {{phone}}',
  },
  confirmation: {
    password: 'Passwords do not match',
  },
};

const dictionary = {
  tabs,
  yup,
};

export default dictionary;
