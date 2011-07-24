describe "stats", ->

  describe "single sample", ->

    beforeEach ->
      @stats = new Stats()
      @stats.sample 42

    it "calculates sum", ->
      (expect @stats.sum).toEqual 42

    it "calculates sumsq", ->
      (expect @stats.sumsq).toEqual 42*42

    it "calculates n", ->
      (expect @stats.n).toEqual 1

    it "calculates min", ->
      (expect @stats.min).toEqual 42

    it "calculates max", ->
      (expect @stats.max).toEqual 42

    it "calculates sd", ->
      (expect @stats.sd).toEqual 0

    it "calculates mean", ->
      (expect @stats.mean).toEqual 42


  describe "multiple samples", ->

    beforeEach ->
      @stats = new Stats()
      @stats.sample 42
      @stats.sample 25
      @stats.sample 33

    it "calculates sum", ->
      (expect @stats.sum).toEqual 100

    it "calculates sumsq", ->
      (expect @stats.sumsq).toEqual (42*42)+(25*25)+(33*33)

    it "calculates n", ->
      (expect @stats.n).toEqual 3

    it "calculates min", ->
      (expect @stats.min).toEqual 25

    it "calculates max", ->
      (expect @stats.max).toEqual 42

    it "calculates sd", ->
      (expect @stats.sd).toEqual 8.504900548115378

    it "calculates mean", ->
      (expect @stats.mean).toEqual 33.333333333333336

    describe "JSON attributes", ->

      beforeEach ->
        @attributes = @stats.toJSON()

      it "emits sum", ->
        (expect @attributes.sum).toEqual 100

      it "emits sumsq", ->
        (expect @attributes.sumsq).toEqual (42*42)+(25*25)+(33*33)

      it "emits n", ->
        (expect @attributes.n).toEqual 3

      it "emits min", ->
        (expect @attributes.min).toEqual 25

      it "emits max", ->
        (expect @attributes.max).toEqual 42

      it "emits sd", ->
        (expect @attributes.sd).toEqual 8.504900548115378

      it "emits mean", ->
        (expect @attributes.mean).toEqual 33.333333333333336

  describe "combine with another stats object", ->

    beforeEach ->
      stats1 = new Stats
      stats1.sample 5
      stats1.sample 3
      stats1.sample 18

      stats2 = new Stats
      stats2.sample 42
      stats2.sample 30
      stats2.sample 2

      @stats = stats1.combine stats2

    it "calculates sum", ->
      (expect @stats.sum).toEqual 100

    it "calculates sumsq", ->
      (expect @stats.sumsq).toEqual 3026

    it "calculates n", ->
      (expect @stats.n).toEqual 6

    it "calculates min", ->
      (expect @stats.min).toEqual 2

    it "calculates max", ->
      (expect @stats.max).toEqual 42

    it "calculates mean", ->
      (expect @stats.mean).toEqual 16.666666666666668

    it "calculates sd", ->
      (expect @stats.sd).toEqual 16.488379746556866

    # sum sumsq n min max
    # sd mean




