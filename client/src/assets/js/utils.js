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

export  const getPanda = async (contract, accounts) => {
    let _pandaList = [];
    let _pandaItem;

    const PandaTokenIdArray = await contract.methods
      ._pandasOfOwner(accounts[0])
      .call({ from: accounts[0] });

    for (let i = 1; i < PandaTokenIdArray.length; i++) {
      let _panda = await contract.methods
        .getPanda(i)
        .call({ from: accounts[0] });

      _pandaItem = {
        pandaTokenId: parseInt(i),
        mumId: parseInt(_panda.mumId),
        dadId: parseInt(_panda.dadId),
        birthTime: parseInt(_panda.birthTime),
        generation: parseInt(_panda.generation),
        genes: parseInt(_panda.genes),
        dna: genesToDNA(_panda.genes),
      };

      _pandaList.push(_pandaItem);
    }

    return _pandaList;
};

export const createPandaGen0 = (contract,accounts,dna) =>{
  contract.methods
  .createPandaGen0(dna)
  .send({ from: accounts[0] }, (error, txHash) => {
    if (error) {
      console.log(error);
    } else {
      console.log(txHash);
    }
  })
};  

export const breed = (contract,accounts,mumTokenId, dadTokenId) =>{
  contract.methods.breed(mumTokenId,dadTokenId)
      .send({ from: accounts[0] }, (error, txHash) => {
        if (error) {
          console.log(error);
        } else {
          console.log(txHash);
        }
      });
};

export  const getMarketOffers = async (contract, accounts) => {
  let _marketOfferList = [];
  let _marketOfferItem;

  console.log("before calling contract method");
  const marketOffersArray = await contract.methods
    .getAllTokenOnSale()
    .call({ from: accounts[0] });

  console.log("after calling contract method");  

  for (let i = 1; i < marketOffersArray.length; i++) {
    let _offer = await contract.methods
      .getOffer(marketOffersArray[i].tokenId)
      .call({ from: accounts[0] });

    let _panda = await contract.methods
      .getPanda(_offer.tokenId)
      .call({ from: accounts[0] });

      _marketOfferItem = {
        seller:_offer.seller,
        price:parseInt(_offer.price),
        index:_offer.index,
        tokenId:parseInt(_offer.tokenId),
        active:_offer.active,    
        mumId: parseInt(_panda.mumId),
        dadId: parseInt(_panda.dadId),
        birthTime: parseInt(_panda.birthTime),
        generation: parseInt(_panda.generation),
        genes: parseInt(_panda.genes),
        dna: genesToDNA(_panda.genes),
      };

    _marketOfferList.push(_marketOfferItem);
  }

  return _marketOfferList;
};