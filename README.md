stats.js
========

Cumulative statistics. Start from zero and add samples or start with
existing values and add more samples. Calculates mean, standard
deviation, and other values.

The Python version is mentioned in the [PeepCode Play by Play with Zed
Shaw](https://peepcode.com/products/play-by-play-zed-shaw).

USAGE
=====

Start from scratch:

    stats = new Stats()
    stats.sample(42)
    stats.sample(21)

    console.log(stats.mean) // Average

Start from existing:

    stats = new Stats(4, 16, 1, 4, 4)
    stats.sample(18)

    console.log(stats.sd) // Standard deviation

Combine statistics with an existing record:

    stats = new Stats(4, 16, 1, 4, 4)
    stats.combine(otherStatsRecord)

    console.log(stats.n) // Number of samples

FIELDS
======

* `sum` - Total of all samples recorded
* `sumsq` - Cumulative sum of squares of all samples
* `n` - Number of samples
* `min` - Smallest sample
* `max` - Largest sample
* `sd` - Standard deviation
* `mean` - Average

IN USE
======

We're using it at [PeepCode Screencasts](http://peepcode.com) to build
an internal reporting system with CouchDB. We use this code in CouchDB
reduce views to emit statistics for reports.


AUTHOR
======

* Original Python version by Zed Shaw @zedshaw http://zedshaw.com
* Port to JavaScript and enhancements by Geoffrey Grosenbach @topfunky http://peepcode.com

