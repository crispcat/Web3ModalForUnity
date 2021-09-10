namespace EthereumClient
{
  #if UNITY_WEBGL

  using System.Runtime.InteropServices;
  
  public class BrowserEthereumProvider : IEthereumProvider
  {
    /// <summary>
    /// .NET bridge to our js client on WebGL platform
    /// </summary>
    private static class BrowserEthereumClientApi
    {
      [DllImport("__Internal")]
      public static extern void ConnectWallet();
    
      [DllImport("__Internal")] 
      public static extern string GetWalletAddress();
      
      [DllImport("__Internal")] 
      public static extern void TransferEth(string to, string amount);
    }

    public void ConnectWallet() => BrowserEthereumClientApi.ConnectWallet();

    public string GetWalletAddress() => BrowserEthereumClientApi.GetWalletAddress();

    public void TransferEth(string to, string amount) => BrowserEthereumClientApi.TransferEth(to, amount);
  }
  
  #endif
}