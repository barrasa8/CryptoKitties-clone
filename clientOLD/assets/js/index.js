let web3= new Web3(Web3.givenProvider);

let instance;
let user;
let contractAddress="0xcFAbD665Cb87A8C492bdee0fe058ad9abB51830f";

$(document).ready(function(){
    window.ethereum.enable().then(function(accounts){
       
        instance= new web3.eth.Contract(abi,contractAddress,{from: accounts[0]});
        user= accounts[0];

        console.log(instance)

        function createPandaGen0(dna){

            instance.methods.createPandaGen0(dna).send({},(error, txHash) => {
                if(error){
                    console.log(error)
                }else{
                    console.log(txHash)
                }
            })
        }
    
        instance.events.Birth({},(error,event)=>{
            if(error){
                console.log(error)
            }else{
                console.log(event); 
                console.log(event.returnValues.genes)
                $("#panda-created-message").css("background","rgba(0, 163, 0, 0.3)");
                $("#panda-created-message").html("Your Panda is Alive: Owner:"+event.returnValues._owner+", ID:"+event.returnValues.PandaId+" , Genes:"+event.returnValues.genes 
                +", MumID:"+ event.returnValues.mumId+", DadID:"+ event.returnValues.dadId )

                console.log(instance.methods.getPandaArray(accounts[0]).call());
            } 
        })

        $("#create-panda-button").click(()=>{
            let dna =  getDna();
            createPandaGen0(dna);
        })
    })
})