/*global capture */
import {
  expect
} from 'chai'
import {
  describeComponent,
  it
} from 'ember-mocha'
import hbs from 'htmlbars-inline-precompile'

describeComponent(
  'frost-button',
  'Integration: FrostButtonComponent', {
    integration: true
  },
  function () {
    it('renders', function (done) {
      this.render(hbs `<div id='test'>Test</div>`)
      expect(this.$()).to.have.length(1)
      capture('Simple').then(function (data) {
        console.log(arguments)
        done()
      }).catch(function (err) {
        done(err)
      })
    })
    it('renders something else', function (done) {
      this.render(hbs `<div id='test'>Test Else</div>`)
      expect(this.$()).to.have.length(1)
      capture('Error').then(function (data) {
        console.log(arguments)
        done()
      }).catch(function (err) {
        done(err)
      })
    })
  }
)
