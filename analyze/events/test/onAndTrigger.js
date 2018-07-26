/**
 * Created by chenqiao on 2018/7/26.
 */
var backBone = require('../index.js')
var _ = require('underscore')
var obj = {counter: 0}
_.extend(obj, backBone.Events)
obj.on('test', function () {
  console.log('test')
})
obj.trigger('test')


