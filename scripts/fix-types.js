#! /usr/bin/env node

const {readFileSync, writeFileSync} = require('fs')
const {join} = require('path')

const INDEX_FLOW_PATH = join(__dirname, '..', 'lib', 'index.js.flow')

const CONTENTS = readFileSync(INDEX_FLOW_PATH, 'utf8')
  .replace('{react-compat/no-array-render:', '{"react-compat/no-array-render":')
  .replace('{no-array-render:', '{"no-array-render":')

writeFileSync(INDEX_FLOW_PATH, CONTENTS, 'utf8')
