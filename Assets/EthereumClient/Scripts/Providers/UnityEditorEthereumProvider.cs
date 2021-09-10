namespace EthereumClient
{
  #if UNITY_EDITOR

  using UnityEngine;
  
  /// <summary>
  /// Mock for unity editor api calls
  /// </summary>
  public class UnityEditorEthereumProvider : IEthereumProvider
  {
    public void ConnectWallet()
    {
      Debug.Log("Ethereum mock: Mock wallet connected");
    }

    public string GetWalletAddress()
    {
      return "0x0000000000000000000000000000000000000000";
    }

    public void TransferEth(string to, string amount)
    {
      Debug.Log($"Ethereum mock: transferring {amount} ETH to {to}");
    }
  }
  
  #endif
}