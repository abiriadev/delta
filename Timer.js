//import {PerformanceObserver, performance} from 'perf_hooks';
/*const {
  PerformanceObserver,
  performance,
} = require('perf_hooks')

console.log(performance.now());
*/

module.exports= class Timer {
  constructor(start) {
    this.startTime = start || null
    this.record = null
  }

  start() {
    return this.startTime = Date.now()
  }
  end() {
    return this.record = Date.now() - this.startTime
  }
}