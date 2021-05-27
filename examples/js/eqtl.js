// eslint-disable-next-line no-unused-vars
function eqtl_bed_parser(line, index) {
    // Here is where we convert the content of a specific BED file format to the desired JSON structure

    // In Parul's file, there are two entities- a cis regulatory element (the position column
    //  used for tabix queries) and a promoter that affects a gene (a string column with an ID)
    var fields = line.split('\t');
    var chrom = fields[0].replace('chr', '');
    // assume format chr1:123-456_GENE or chr1:123-456 (chr prefix optional)
    var second_item = fields[3].match(/^(?:chr)?(\d+):(\d+)-(\d+)(?:_)?(\S+)?$/);
    var position = fields[1];
    var score = fields[4];
    var variant = fields[5];
    var effect_size = fields[6];
    score = (score === '.') ? 1 : +score;
    return {
        // Note: The query is based on position of element 1, not element 2. It's possible for a loop to be in the
        //   region, but the tabix query to not find it.
        chrom: chrom,
        position: position,
        gene_name: second_item[4] || null,
        pvalue: score,
	variant: variant,
	effect_size: effect_size,
        id: index,  // Dummy ID: position in the list of lines TODO: create a better unique ID
    };
}
