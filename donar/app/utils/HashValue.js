import md5 from 'react-native-md5';

export function hashValue(value) {
  return md5.b64_md5(value);
}
