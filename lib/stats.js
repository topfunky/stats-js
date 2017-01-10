var Stats;
Stats = (function() {
  function Stats(sum, sumsq, n, min, max) {
    this.sum = sum != null ? sum : 0;
    this.sumsq = sumsq != null ? sumsq : 0;
    this.n = n != null ? n : 0;
    this.min = min != null ? min : 0;
    this.max = max != null ? max : 0;
  }

  Stats.prototype.samples = function(array) {
    var a, i, len;
    for (i = 0, len = array.length; i < len; i++) {
      a = array[i];
      this.sample(a);
    }
    return this;
  };

  Stats.prototype.sample = function(s) {
    this.sum += s;
    this.sumsq += s * s;
    if (this.n === 0) {
      this.min = s;
      this.max = s;
    } else {
      if (this.min > s) {
        this.min = s;
      }
      if (this.max < s) {
        this.max = s;
      }
    }
    this.n += 1;
    this.sd = this.getSD();
    this.mean = this.getMean();
    return this;
  };
  Stats.prototype.getMean = function() {
    var result;
    result = this.sum / this.n;
    if (isNaN(result)) {
      return 0;
    } else {
      return result;
    }
  };
  Stats.prototype.getSD = function() {
    var result;
    result = Math.sqrt((this.sumsq - (this.sum * this.sum / this.n)) / (this.n - 1));
    if (isNaN(result)) {
      return 0;
    } else {
      return result;
    }
  };
  Stats.prototype.combine = function(stats) {
    this.sum += stats.sum;
    this.sumsq += stats.sumsq;
    this.n += stats.n;
    if (this.min > stats.min) {
      this.min = stats.min;
    }
    if (this.max < stats.max) {
      this.max = stats.max;
    }
    this.sd = this.getSD();
    this.mean = this.getMean();
    return this;
  };
  Stats.prototype.toJSON = function() {
    return {
      sum: this.sum,
      sumsq: this.sumsq,
      n: this.n,
      min: this.min,
      max: this.max,
      sd: this.sd,
      mean: this.mean
    };
  };

  return Stats;

})();

module.exports = Stats;
