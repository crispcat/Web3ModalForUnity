let web3;
let accounts = [];
const web3_wrapper =
{
  InitWeb3 : async function(provider)
  {
    web3 = new Web3(provider);
    accounts = await web3.eth.getAccounts();
  },

  GetConnectedAccount : function()
  {
    if (!accounts.length)
    {
      alert("Not authenticated!");
      return '';
    }

    return accounts[0];
  }
}