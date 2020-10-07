/**
 Custom code used to demonstrate interactive page widget features in the aggregation test visualization example
 */
'use strict';

/* global $, raremetal, Vue, LzDynamicUrls */
/* eslint-disable no-unused-vars */
function jumpToRegion(plot, input_selector, error_selector) {
    const input = document.getElementById(input_selector);
    const error = document.getElementById(error_selector);
    error.style.display = 'none';
    const target = input.value || input.placeholder || '';
    //const match_region = target.match(/^([0-9XY]+):(\d+)-(\d+)/);
    const url = 'https://portaldev.sph.umich.edu/api/v1/annotation/omnisearch/';
    const build = 'GRCh37';
    fetch(`${url}?q=${target}&&build=${build}`).then(r => r.json()).then(data => {plot.applyState({chr: data.data[0].chrom, start: data.data[0].start, end: data.data[0].end});})
}
