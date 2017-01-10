describe("stats", function() {
  describe("single sample", function() {
    beforeEach(function() {
      this.stats = new Stats();
      return this.stats.sample(42);
    });
    it("calculates sum", function() {
      return (expect(this.stats.sum)).toEqual(42);
    });
    it("calculates sumsq", function() {
      return (expect(this.stats.sumsq)).toEqual(42 * 42);
    });
    it("calculates n", function() {
      return (expect(this.stats.n)).toEqual(1);
    });
    it("calculates min", function() {
      return (expect(this.stats.min)).toEqual(42);
    });
    it("calculates max", function() {
      return (expect(this.stats.max)).toEqual(42);
    });
    it("calculates sd", function() {
      return (expect(this.stats.sd)).toEqual(0);
    });
    return it("calculates mean", function() {
      return (expect(this.stats.mean)).toEqual(42);
    });
  });
  describe("multiple samples", function() {
    beforeEach(function() {
      this.stats = new Stats();
      this.stats.sample(42);
      this.stats.sample(25);
      return this.stats.sample(33);
    });
    it("calculates sum", function() {
      return (expect(this.stats.sum)).toEqual(100);
    });
    it("calculates sumsq", function() {
      return (expect(this.stats.sumsq)).toEqual((42 * 42) + (25 * 25) + (33 * 33));
    });
    it("calculates n", function() {
      return (expect(this.stats.n)).toEqual(3);
    });
    it("calculates min", function() {
      return (expect(this.stats.min)).toEqual(25);
    });
    it("calculates max", function() {
      return (expect(this.stats.max)).toEqual(42);
    });
    it("calculates sd", function() {
      return (expect(this.stats.sd)).toEqual(8.504900548115378);
    });
    it("calculates mean", function() {
      return (expect(this.stats.mean)).toEqual(33.333333333333336);
    });
    return describe("JSON attributes", function() {
      beforeEach(function() {
        return this.attributes = this.stats.toJSON();
      });
      it("emits sum", function() {
        return (expect(this.attributes.sum)).toEqual(100);
      });
      it("emits sumsq", function() {
        return (expect(this.attributes.sumsq)).toEqual((42 * 42) + (25 * 25) + (33 * 33));
      });
      it("emits n", function() {
        return (expect(this.attributes.n)).toEqual(3);
      });
      it("emits min", function() {
        return (expect(this.attributes.min)).toEqual(25);
      });
      it("emits max", function() {
        return (expect(this.attributes.max)).toEqual(42);
      });
      it("emits sd", function() {
        return (expect(this.attributes.sd)).toEqual(8.504900548115378);
      });
      return it("emits mean", function() {
        return (expect(this.attributes.mean)).toEqual(33.333333333333336);
      });
    });
  });
  describe("array of samples", function() {
    beforeEach(function() {
      this.stats = new Stats();
      return this.stats.samples([42, 25, 33]);
    });
    it("calculates sum", function() {
      return (expect(this.stats.sum)).toEqual(100);
    });
    it("calculates sumsq", function() {
      return (expect(this.stats.sumsq)).toEqual((42 * 42) + (25 * 25) + (33 * 33));
    });
    it("calculates n", function() {
      return (expect(this.stats.n)).toEqual(3);
    });
    it("calculates min", function() {
      return (expect(this.stats.min)).toEqual(25);
    });
    it("calculates max", function() {
      return (expect(this.stats.max)).toEqual(42);
    });
    it("calculates sd", function() {
      return (expect(this.stats.sd)).toEqual(8.504900548115378);
    });
    return it("calculates mean", function() {
      return (expect(this.stats.mean)).toEqual(33.333333333333336);
    });
  });
  return describe("combine with another stats object", function() {
    beforeEach(function() {
      var stats1, stats2;
      stats1 = new Stats;
      stats1.sample(5);
      stats1.sample(3);
      stats1.sample(18);
      stats2 = new Stats;
      stats2.sample(42);
      stats2.sample(30);
      stats2.sample(2);
      return this.stats = stats1.combine(stats2);
    });
    it("calculates sum", function() {
      return (expect(this.stats.sum)).toEqual(100);
    });
    it("calculates sumsq", function() {
      return (expect(this.stats.sumsq)).toEqual(3026);
    });
    it("calculates n", function() {
      return (expect(this.stats.n)).toEqual(6);
    });
    it("calculates min", function() {
      return (expect(this.stats.min)).toEqual(2);
    });
    it("calculates max", function() {
      return (expect(this.stats.max)).toEqual(42);
    });
    it("calculates mean", function() {
      return (expect(this.stats.mean)).toEqual(16.666666666666668);
    });
    return it("calculates sd", function() {
      return (expect(this.stats.sd)).toEqual(16.488379746556866);
    });
  });
});