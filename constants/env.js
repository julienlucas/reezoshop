const N_ENV = process.env.N_ENV; // eslint-disable-line

export const __DEV__ = N_ENV !== 'production';
export const __TEST__ = N_ENV === 'test';
