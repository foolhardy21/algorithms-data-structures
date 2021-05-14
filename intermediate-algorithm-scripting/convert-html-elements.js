function convertHTML(str) {
  let lt = new RegExp(/</g);
  let gt = new RegExp(/>/g);
  let apos = new RegExp(/'/g);
  let quot = new RegExp(/"/g);
  let amp = new RegExp(/&/g);

  str = str.replace(amp,'&amp;')
  str = str.replace(lt,'&lt;')
  str = str.replace(gt,'&gt;')
  str = str.replace(quot,'&quot;')
  str = str.replace(apos,'&apos;')

  return str
}
//& < > " '
console.log(convertHTML('Stuff in "quotation marks"'));
