namespace EthereumClient
{
  /// <summary>
  /// Provider for not implemented platforms
  /// </summary>
  public class NotImplementedEthereumProvider : IEthereumProvider
  {
    public void ConnectWallet()
    {
      throw new System.NotImplementedException();
    }

    public string GetWalletAddress()
    {
      throw new System.NotImplementedException();
    }
  }
}