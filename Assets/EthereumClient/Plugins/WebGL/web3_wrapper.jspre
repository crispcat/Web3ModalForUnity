let web3;

const web3_wrapper =
{
  InitWeb3 : function(provider)
  {
    web3 = new Web3(provider);
  },

  GetAccounts : async function() 
  {
    return web3.eth.getAccounts();
  },

  TestTransferEth : function()
  {
    multiwallet.ConnectIfNot();
    if (!multiwallet.IsConnected())
      return;

    web3.eth.sendTransaction({
      from  : multiwallet.GetConnectedAccount(),
      to    : '0x737240922cF7282e02266E96E6ca44904FDd8EBc',
      value : Web3.utils.toWei('0.00001', 'ether'),
    });
  }
}