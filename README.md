<!--

@license Apache-2.0

Copyright (c) 2019 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# US Birth Data (1994-2003)

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] [![dependencies][dependencies-image]][dependencies-url]

> US birth data from 1994 to 2003, as provided by the Center for Disease Control and Prevention's National Center for Health Statistics.

<section class="installation">

## Installation

```bash
npm install @stdlib/datasets-cdc-nchs-us-births-1994-2003
```

</section>

<section class="usage">

## Usage

```javascript
var dataset = require( '@stdlib/datasets-cdc-nchs-us-births-1994-2003' );
```

#### dataset()

Returns US birth data from 1994 to 2003, as provided by the Center for Disease Control and Prevention's National Center for Health Statistics.

```javascript
var data = dataset();
// returns [ {...}, ... ]
```

Each element in the returned database has the following fields:

-   **year**: year.
-   **month**: month, where January is denoted by `1`.
-   **date_of_month**: day number of the month.
-   **day_of_week**: day of week, where Monday is `1` and Sunday is `7`.
-   **births**: number of births.

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var incrmean = require( '@stdlib/stats-incr-mean' );
var dataset = require( '@stdlib/datasets-cdc-nchs-us-births-1994-2003' );

function mean( a, b ) {
    return ( a + b ) / 2.0;
}

function reldiff( a, b ) {
    return 100.0 * ( (a-b)/a );
}

/*
* GOAL: determine whether people avoid giving birth on the 13th of each month.
*
* NOTE: for a more thorough analysis, we'd account for holidays.
*/

// Retrieve the data:
var data = dataset();

// Initialize arrays for storing births for particular day numbers:
var d6or20 = [ [], [], [], [], [], [], [] ];
var d13 = [ [], [], [], [], [], [], [] ];

// Extract the day number data...
var d;
var w;
var i;
for ( i = 0; i < data.length; i++ ) {
    d = data[ i ].date_of_month;
    w = data[ i ].day_of_week;
    if ( d === 6 ) {
        // Average of days 6 and 20 for the same month:
        d6or20[ w-1 ].push( mean( data[ i ].births, data[ i+14 ].births ) );
    } else if ( d === 13 ) {
        d13[ w-1 ].push( data[ i ].births );
    }
}

// Initialize accumulators for computing the average relative difference...
var means = [];
for ( i = 0; i < 7; i++ ) {
    means.push( incrmean() );
}

// Compute the average relative difference between days 6/20 with day 13...
var l1;
var l2;
var mu;
var j;
for ( i = 0; i < 7; i++ ) {
    l1 = d13[ i ];
    l2 = d6or20[ i ];
    mu = means[ i ];
    for ( j = 0; j < l1.length; j++ ) {
        mu( reldiff( l1[ j ], l2[ j ] ) );
    }
}

// Print the results...
for ( i = 0; i < 7; i++ ) {
    console.log( '%d: %d%', i+1, means[ i ]().toFixed( 3 ) );
}
```

</section>

<!-- /.examples -->

* * *

<section class="cli">

## CLI

<section class="installation">

## Installation

To use the module as a general utility, install the module globally

```bash
npm install -g @stdlib/datasets-cdc-nchs-us-births-1994-2003
```

</section>

<section class="usage">

### Usage

```text
Usage: cdc-nchs-us-births-1994-2003 [options]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
```

</section>

<!-- /.usage -->

<section class="notes">

### Notes

-   Data is written to `stdout` as comma-separated values ([CSV][csv]), where the first line is a header line.

<section class="examples">

### Examples

```bash
$ cdc-nchs-us-births-1994-2003
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

* * *

<section class="references">

## References

-   Bialik, Carl. 2016. "Some People Are Too Superstitious To Have A Baby On Friday The 13th." <https://fivethirtyeight.com/features/some-people-are-too-superstitious-to-have-a-baby-on-friday-the-13th/>.

</section>

<!-- /.references -->

<!-- <license> -->

## License

The data files (databases) are licensed under an [Open Data Commons Public Domain Dedication & License 1.0][pddl-1.0] and their contents are licensed under [Creative Commons Zero v1.0 Universal][cc0]. The software is licensed under [Apache License, Version 2.0][apache-license].

<!-- </license> -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/datasets-cdc-nchs-us-births-1994-2003.svg
[npm-url]: https://npmjs.org/package/@stdlib/datasets-cdc-nchs-us-births-1994-2003

[test-image]: https://github.com/stdlib-js/datasets-cdc-nchs-us-births-1994-2003/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/datasets-cdc-nchs-us-births-1994-2003/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/datasets-cdc-nchs-us-births-1994-2003/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/datasets-cdc-nchs-us-births-1994-2003?branch=main

[dependencies-image]: https://img.shields.io/david/stdlib-js/datasets-cdc-nchs-us-births-1994-2003.svg
[dependencies-url]: https://david-dm.org/stdlib-js/datasets-cdc-nchs-us-births-1994-2003/main

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[pddl-1.0]: http://opendatacommons.org/licenses/pddl/1.0/

[cc0]: https://creativecommons.org/publicdomain/zero/1.0

[apache-license]: https://www.apache.org/licenses/LICENSE-2.0

[csv]: https://tools.ietf.org/html/rfc4180

</section>

<!-- /.links -->
