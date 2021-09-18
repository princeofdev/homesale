// const web3 = new Web3(Web3.givenProvider);

// const contractAddr = '0x980593306c4AcaDEdCb1CC23Af0DD5AFb9d04E85';
// // console.log('debug->abi', 1);
// console.log('debug->abi', UKPCabi);
// const TestContract = new web3.eth.Contract(UKPCabi, contractAddr);

function connectMetamask(path) {
    console.log("path", path);
    if (typeof window.ethereum !== 'undefined') {
        // console.log('Metamask is installed');
        ethereum.request({
            method: 'eth_requestAccounts'
        }).then((resp) => {
            // const result = TestContract.methods.balanceOf(resp[0]).call().then((response) => {
            //     console.log('debug->response', response)
            //     if (response == 0) {
            //         alert("There are no UKPC token  in your wallet. Therefore you can't access to this website")
            //         return redirect('/register');
            // } else {
            window.location.href = path + '/auth/metamask?address=' + resp;
            console.log(resp);
            // }
            // })
        }).catch((err) => {
            console.log(err);
        });
    } else {
        // console.log('Metamask is not installed');
        window.location.reload();
    }
}