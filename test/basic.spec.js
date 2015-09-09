/*global describe,it,beforeEach,expect*/

'use strict'

var adverbs = require('../index')
var adverbInSentence = 'Allegedly, this sentence is terrible.'
var multipleAdverbsInSentence = 'This is incredibly, stupidly, badly written.'
var wordsEndingInLy = 'An assembly will apply for Bradly the bully'
var goodSentence = 'The good dog jumps over the bad cat.'

describe('adverb-where', function () {

  describe('a sentence filled with adverbs', function () {
    var results = null

    beforeEach(function () {
      results = adverbs(adverbInSentence)
    })

    it('will not escape notice', function () {
      expect(results).toEqual([{index: 0, offset: 9}])
    })
  })

  describe('multiple adverbs in the same text', function () {
    it('will be noticed', function () {
      var results = adverbs(multipleAdverbsInSentence)
      console.log(results)
      expect(results.length).toEqual(3)
    })
  })

  it('should not identify words ending in -ly unless they are, in fact, adverbs', function () {
    expect(adverbs(wordsEndingInLy)).toEqual([])
  })

  it('should not have a problem with a short sentence', function () {
    expect(adverbs(goodSentence)).toEqual([])
  })
})
