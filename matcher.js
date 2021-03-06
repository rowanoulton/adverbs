var matcher = function (regex, text) {
  var results = []

  while (result = regex.exec(text)) {
    results.push({index: result.index, offset: result[0].length})
  }

  return results
}

module.exports = matcher
