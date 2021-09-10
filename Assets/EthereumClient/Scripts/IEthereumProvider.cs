namespace EthereumClient
{
  public interface IEthereumProvider
  {
    public void ConnectWallet();
    
    public string GetWalletAddress();
  }
}