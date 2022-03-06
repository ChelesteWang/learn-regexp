/**
 * 数字价格千分位分割
 * */

export default function main(str) {
  return str.replace(/(?!^)(?=(\d{3})+$)/g, ',');
}


