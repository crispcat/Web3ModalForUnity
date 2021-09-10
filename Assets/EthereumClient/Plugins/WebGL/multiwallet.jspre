const multiwallet = 
{
  ConnectWallet : async function()
  {
    let Web3Modal = window.Web3Modal.default;
    let WalletConnectProvider = window.WalletConnectProvider.default;

    const providerOptions = {
      walletconnect: {
        package: WalletConnectProvider,
        options: {
          infuraId: client_config.current.infuraId,
        },
      },
    };
  
    let web3Modal = new Web3Modal({
      cacheProvider: false,
      providerOptions,
      disableInjectedProvider: false,
    });
  
    let web3provider = await web3Modal.connect();

    console.log(web3provider);

    web3provider.on("accountsChanged", (accounts) => {
      web3_wrapper.InitWeb3(web3provider);
    });
  
    web3provider.on("chainChanged", (chainId) => {

    });

    web3_wrapper.InitWeb3(web3provider);
  }
}