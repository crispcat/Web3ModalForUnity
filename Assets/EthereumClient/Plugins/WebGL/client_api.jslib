const client_api = 
{
  ConnectWallet : function()
  {
    multiwallet.ConnectWallet();
  },

  GetWalletAddress : function() 
  {    
    return utils.StringToBuffer(web3_wrapper.GetConnectedAccount());
  }
};


mergeInto(LibraryManager.library, client_api);