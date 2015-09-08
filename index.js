var matcher = require('./matcher')
var adverbWhere = require('adverb-where')

module.exports = function (text) {
  var endsInLyRegex = new RegExp('\\b([a-z]{2,}ly)\\b', 'gi')
  var notAdverbRegex = new RegExp('\\b(actuall|additionall|allegedl|all|alternativel|anomal|appl|approximatel|ashel|ashl|assembl|awfull|bail|bell|bel|bill|bradl|bristl|bubbl|bull|burl|butterfl|carl|charl|chill|comel|completel|compl|consequentl|costl|courtl|crinkl|crumbl|cuddl|curl|currentl|dail|dastardl|deadl|deathl|definitel|dill|disorderl|doil|doll|doll|dragonfl|earl|elderl|ell|emil|especiall|exactl|exclusivel|famil|finall|firefl|foll|friendl|frill|gadfl|gangl|generall|ghastl|giggl|globall|goodl|gravell|grisl|gull|hail|hall|harl|hardl|heavenl|hillbill|hill|holl|hol|homel|homil|horsefl|hourl|immediatel|instinctivel|impl|ital|jell|jiggl|jill|joll|jul|karl|karl|kell|kindl|latel|likel|lill|lil|lil|livel|loll|lonel|lovel|lowl|luckil|meal|measl|melanchol|mentall|moll|moll|monopol|monthl|multipl|nightl|oil|onl|orderl|panopl|particularl|partl|paull|pearl|pebbl|poll|potbell|presumabl|previousl|pual|quarterl|rall|rarel|recentl|rel|repl|reportedl|roughl|sall|scal|shapel|shell|shirl|shortl|sickl|sill|smell|sparkl|spindl|spritel|squiggl|statel|steel|suppl|surl|tall|tall|timel|troll|ugl|underbell|unfortunatel|unlikel|usuall|waverl|weekl|wholl|will|wil|wobbl|wool|worldl|wrinkl|yearl)y\\b', 'gi')
  var fromAdverbWhere = adverbWhere(text)
  var fromLy = matcher(endsInLyRegex, text)
  var fromNotAdverb = matcher(notAdverbRegex, text)

  // Return if no results
  if (fromAdverbWhere.length === 0 && fromLy.length === 0) return []

  fromLy = fromLy.filter(function (item) {
    // Prune non-adverbs from ends-in-ly matcher
    for (var i in fromNotAdverb) {
      if (fromNotAdverb[i].index === item.index) {
        return false
      }
    }

    // Prune duplicates also found by adverb-where
    for (var l in fromAdverbWhere) {
      if (fromAdverbWhere[l].index === item.index) {
        return false
      }
    }

    return true
  })

  // Merge results
  return fromAdverbWhere.concat(fromLy)
}
