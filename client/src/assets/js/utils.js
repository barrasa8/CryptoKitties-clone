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

export  const getPanda = async (contract, accounts, tokenId) => {
  let _pandaItem, _panda;

  _panda = await contract.methods
    .getPanda(tokenId)
    .call({ from: accounts[0] });

  _pandaItem = {
    pandaTokenId: parseInt(tokenId),
    mumId: parseInt(_panda.mumId),
    dadId: parseInt(_panda.dadId),
    birthTime: parseInt(_panda.birthTime),
    generation: parseInt(_panda.generation),
    genes: parseInt(_panda.genes),
    dna: genesToDNA(_panda.genes),
  };

  return _pandaItem;
}

export  const getPandas = async (contract, accounts) => {
    let _pandaList = [];
    let _pandaItem;

    const PandaTokenIdArray = await contract.methods
      ._pandasOfOwner(accounts[0])
      .call({ from: accounts[0] });

    for (let i = 1; i < PandaTokenIdArray.length; i++) {
      _pandaItem = await getPanda(contract, accounts, i);
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

export  const getMarketOffers = async (pandaContract,marketContract, accounts) => {
  let _marketOfferList = [];
  let _marketOfferItem;

  let marketOffersArray = await marketContract.methods
    .getAllTokenOnSale()
    .call({ from: accounts[0] });

  for (let i =0; i < marketOffersArray.length; i++) {
    let _offer = await marketContract.methods
      .getOffer(marketOffersArray[i])
      .call({ from: accounts[0] });

    let _panda = await pandaContract.methods
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

export const setApprovalForAll = async (contract,marketContract,accounts,approvalFlag) =>{
  await contract.methods.setApprovalForAll(marketContract.options.address,approvalFlag)
      .send({ from: accounts[0] }, (error, txHash) => {
        if (error) {
          console.log(error);
        } else {
          console.log(txHash);
        }
      });
};

export const setOffer = async (marketContract,accounts,price,tokenId) =>{
  await marketContract.methods.setOffer(price,tokenId)
      .send({ from: accounts[0] }, (error, txHash) => {

        if (error) {
          console.log(error);
        } else {
          console.log(txHash);
        }
      });
};

export const removeOffer = async (marketContract,accounts,tokenId) =>{
  await marketContract.methods.removeOffer(tokenId)
      .send({ from: accounts[0] }, (error, txHash) => {
        if (error) {
          console.log(error);
        } else {
          console.log(txHash);
        }
      });
};

export const getActiveOfferCount = async (marketContract,accounts) =>{
  let numberOfOffers = await marketContract.methods.getActiveOfferCount()
      .call({ from: accounts[0] });
  return numberOfOffers;
};

export  const getOffer = async (contract, accounts, tokenId) => {
  let _offer,_offerItem;

  _offer = await contract.methods
    .getOffer(tokenId)
    .call({ from: accounts[0] });

  _offerItem = {
      seller : _offer.seller,
      price  : parseInt(_offer.price),
      index  : parseInt(_offer.index),
      tokenId: parseInt(_offer.tokenId),
      active : _offer.active,
  };

  return _offerItem;
}