const multiwallet = 
{
  accounts : [],

  CacheAccounts : async function()
  {
    this.accounts = await web3_wrapper.GetAccounts();
  },

  ClearCache : function()
  {
    this.accounts = [];
  },

  IsConnected : function() 
  {
    return Boolean(this.accounts.length);
  },

  GetConnectedAccount : function()
  {
    if (!this.accounts.length)
    {
      alert("Not authenticated!");
      return '';
    }

    return this.accounts[0];
  },

  ConnectIfNot : async function()
  {
    if (!multiwallet.IsConnected())
      await multiwallet.ConnectWallet();
  },

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
      console.log("accounts changed: " + accounts);
      this.CacheAccounts();
    });
    
    web3provider.on("disconnect", (error) => {
      console.log("wallet disconnected");
      this.ClearCache();
    });

    web3_wrapper.InitWeb3(web3provider);
    this.CacheAccounts();
  },
}