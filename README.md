# CROCPOT - ChROmatin-based Collection of Predicted Target genes

CROCPOT is a repository and genome browser of data linking pairs of genomic loci for example from 3D chromatin interaction, single cell chromatin accessibility and CRISPRi screen assays. It builds on Locuszoom.js and enables the user to view a) ‘arc’ tracks linking pairs of genomic sites, b) genome-wide association data and c) gene definitions.

The key goal of CROCPOT is to help in prioritizing potential target genes of genetic variants associated with complex traits and disease.

This project is funded by the NIDDK, FNIH, and the AMP-T2D consortium.

**CROCPOT Wiki [https://www.crocpot.org/crocpot-doc/](https://www.crocpot.org/crocpot-doc/)** for documentation Quick Start User Guide and uploading user's chromatin track

**Locuszoom Wiki [github.com/statgen/locuszoom/wiki](https://github.com/statgen/locuszoom/wiki)** for full documentation and API reference.


### Build System and Automated Testing

LocusZoom.js is choice of genome browser and base software for  CROCPOT - a long range interaction browser.
To install all necessary dependencies for a development environment, run:

```
$ npm install
```

We recommend using node.js v12 or greater to build the library and run tests.

Once complete run `npm run build` from the top of the application directory to run all tests and build the LocusZoom library bundle.

This build process will also write sourcemaps, to help with debugging code even in production environments.

#### Other supported gulp commands:
* `npm run test` - Run unit tests (optional: `npm run test:coverage` to output a code coverage report)
* `npm run dev` - Automatically rebuild the library whenever code changes (development mode)
* `npm run build` - Run tests, and if they pass, build the library for release
* `npm run css` - Rebuild the CSS using SASS
* `npm run docs` - Build the library documentation


#### Automated Testing

LocusZoom uses [Mocha](https://mochajs.org/) for unit testing. Tests are located in the `test` subdirectory.

### Linting
LocusZoom is also linted using 
[ESLint](http://eslint.org/), the rules for which can be found in `.eslintrc`. This will run automatically as part of all new code commits, and during every build. 

## Help and Support
If you have questions or feedback please file an issue on the [CROCPOT GitHub repository](https://github.com/T2DREAM/crocpot/issues) or post at the discussion forum referenced above.
