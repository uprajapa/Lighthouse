const wrapLog = function(callback, name) {
  const inner = function() {
    if (name === 'area') {
      console.log(`${name}(${arguments[0]}, ${arguments[1]}) => 
                                    ${callback(arguments[0], arguments[1])}`);
    }
    if (name === 'volume') {
      console.log(`${name}(${arguments[0]}, ${arguments[1]}, ${arguments[2]}) => 
                                    ${callback(arguments[0], arguments[1], arguments[2])}`);
    }
  };

  return inner;
};

const area = function(x, y) {
  return x * y;
};

const logArea = wrapLog(area, "area");

logArea(5, 3);
logArea(3, 2);

const volume = function(x, y, z) {
  return x * y * z;
};
const logVolume = wrapLog(volume, "volume");

logVolume(5, 3, 2);
logVolume(3, 2, 4);