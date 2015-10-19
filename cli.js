#!/usr/bin/env node
'use strict';
const logSymbols = require('log-symbols');
const meow = require('meow');
const bowerName = require('bower-name');

const cli = meow(`
	Usage
	  $ bower-name <name>

	Examples
	  $ bower-name multiline
	  ${logSymbols.error} Unavailable
	  $ bower-name unicorn-cake
	  ${logSymbols.success} Available

	Exits with code 0 when the name is available or 2 when taken
`);

if (cli.input.length === 0) {
	console.error('Package name required');
	process.exit(1);
}

bowerName(cli.input[0]).then(available => {
	console.log(available ? `${logSymbols.success} Available` : `${logSymbols.error} Unavailable`);
	process.exit(available ? 0 : 2);
});
