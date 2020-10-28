var gene1= 8749414632491931;

export const  genesToDNA=(gene)=> {
    let dna = {
        dnaarmleg: gene.slice(0,2),
        dnaeyepatch: gene.slice(2,4),
        dnainnerearfoot: gene.slice(4,6),
        dnaheadbody: gene.slice(6,8),
        //Pandatributes
        dnaeyeshape: gene.slice(8,9),
        dnamouthshape: gene.slice(9,10),
        decorationMidcolor: gene.slice(10,12),
        decorationSidescolor: gene.slice(12,13),
        animation: gene.slice(14,15),
        lastNum: gene.slice(15,16),
    }
    return dna;
}
