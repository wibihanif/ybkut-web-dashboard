export const toRupiah = (amount = 0) => {
  return 'Rp ' + amount.toLocaleString('id-ID').replaceAll('.', ',');
};

export const seperateValueWithDash = (value: string): string => {
  const separatedValue = value.replace(/\B(?=(\d{4})+(?!\d))/g, ' ');
  return separatedValue;
};
