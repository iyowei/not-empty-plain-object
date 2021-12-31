export default function notEmptyPlainObject(obj) {
  return (
    Object.prototype.toString.call(obj) === '[object Object]' &&
    Object.entries(obj).length !== 0
  );
}
