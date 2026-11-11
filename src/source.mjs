export function parseDocument(bytes) {
  const value=JSON.parse(new TextDecoder('utf-8',{fatal:true}).decode(bytes));
  if(value===null || typeof value!=='object') throw new TypeError('文档必须是对象或数组');
  return value;
}
export function inspect(bytes) {
  const value=parseDocument(bytes),nodes=Array.isArray(value)?value:[value];
  return {documents:nodes.length,contexts:nodes.map(n=>n?.['@context']??null),ids:nodes.map(n=>n?.['@id']??null)};
}
