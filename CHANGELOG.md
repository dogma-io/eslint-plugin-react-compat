# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

<!--
  The bumpr comment below is there to make it easier to update this changelog using a machine during PR merge.
  Please do not remove it, as this will break continuous integration.
-->

<!-- bumpr -->

## [0.1.5] - 2018-06-05

### Changed
*   Build to be ES5.

## [0.1.4] - 2018-05-27

### Changed
*   `index.js` back to ES5 to fix consumption by ESLint.

## [0.1.3] - 2018-05-27

### Fixed
*   Generated Flow types to not break consumers using Flow.

## [0.1.2] - 2018-05-27

### Added
*   Flow types to `lib` directory.

### Changed
*   Development dependencies to latest versions.

## [0.1.1] - 2018-04-04

### Added
*   `engines` to `package.json` to set minimum Node version to 6.

## [0.1.0] - 2018-03-21

### Added
*   Code of conduct.
*   Configuration for continuous integration.

### Changed
*   Development dependencies to latest versions.
*   Minimum Node version to 6.

## [0.0.3] - 2018-01-31

### Fixed
*   Export by using CommonJS instead of ES6 modules for index.

## [0.0.2] - 2018-01-31

### Fixed
*   Reduce false positives by not flagging functions returning arrays of non-JSX elements.

## [0.0.1] - 2018-01-30

### Added
*   Initial commit.
