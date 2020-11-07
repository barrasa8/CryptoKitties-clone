

export const  genesToDNA=(gene)=> {
    let dna = {
        dnaarmleg: parseInt(gene.slice(0,2)),
        dnaeyepatch: parseInt(gene.slice(2,4)),
        dnainnerearfoot: parseInt(gene.slice(4,6)),
        dnaheadbody: parseInt(gene.slice(6,8)),
        //Pandatributes
        dnaeyeshape: parseInt(gene.slice(8,9)),
        dnamouthshape: parseInt(gene.slice(9,10)),
        decorationMidcolor: parseInt(gene.slice(10,12)),
        decorationSidescolor: parseInt(gene.slice(12,14)),
        animation: parseInt(gene.slice(14,15)),
        lastNum: parseInt(gene.slice(15,16)),
    }
    return dna;
}

export const  epochToUTCDate=(epochTime)=> {
    
    let date = new Date(epochTime*1000);
    return date.toUTCString();
}
