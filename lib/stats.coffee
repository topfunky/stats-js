# Rolling statistics calculations.
#
# From Zed Shaw's Python version as mentioned in https://peepcode.com/products/play-by-play-zed-shaw
#
# Implemented by Geoffrey Grosenbach
#                @topfunky
#                http://peepcode.com
class Stats

  constructor: (@sum=0, @sumsq=0, @n=0, @min=0, @max=0) ->

  # Add a single data sample to the calculations.
  sample: (s) ->
    @sum += s
    @sumsq += s*s
    if @n == 0
      @min = s
      @max = s
    else
      @min = s if @min > s
      @max = s if @max < s
    @n += 1
    # Update variables
    @sd = @getSD()
    @mean = @getMean()
    @

  # Calculate mean (average).
  getMean: ->
    result = @sum / @n
    if isNaN result then 0 else result

  # Calculate standard deviation.
  getSD: ->
    result = Math.sqrt( (@sumsq - (@sum * @sum / @n)) / (@n - 1) )
    if isNaN result then 0 else result

  # Build totals together with another Stats object.
  combine: (stats) ->
    @sum   += stats.sum
    @sumsq += stats.sumsq
    @n     += stats.n
    @min    = stats.min if @min > stats.min
    @max    = stats.max if @max < stats.max
    @sd     = @getSD()
    @mean   = @getMean()
    @

  # Return attributes for JSON serialization.
  toJSON: -> { @sum, @sumsq, @n, @min, @max, @sd, @mean }


