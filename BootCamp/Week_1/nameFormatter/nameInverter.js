const nameInverter = function(name) {
  let str = name;
  str = str.trim();

  if (/\s/.test(str)) {
    let array = str.split(' ');
    str = array[1] + `, ` + array[0];
  }

  return str;
}

module.exports = nameInverter;