namespace EthereumClient
{
  public interface IEthereumProvider
  {
    public void ConnectWallet();
    
    public string GetWalletAddress();

    public void TransferEth(string to, string amount);
  }
}