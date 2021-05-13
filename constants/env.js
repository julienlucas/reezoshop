const N_ENV = process.env.N_ENV; // eslint-disable-line

export const __DEV__ = !N_ENV || N_ENV !== 'production';
export const __UAT__ = N_ENV !== 'uat';
export const __TEST__ = N_ENV === 'test';
