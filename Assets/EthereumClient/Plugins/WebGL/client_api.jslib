const client_api = 
{
  ConnectWallet : function()
  {
    multiwallet.ConnectWallet();
  },

  GetWalletAddress : function() 
  {    
    return utils.StringToBuffer(multiwallet.GetConnectedAccount());
  },

  TransferEth : function(to, amount)
  {
    web3_wrapper.TestTransferEth();
  }
};


mergeInto(LibraryManager.library, client_api);