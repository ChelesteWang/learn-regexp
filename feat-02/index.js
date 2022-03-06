/**
 * 手机号3-4-4分割
 * */

export default function main(str) {
  return str.replace(/(?=(\d{4})+$)/g ,'-');
}
