namespace EthereumClient
{
  public static class Ethereum
  {
    public static IEthereumProvider api { get; private set; }

    static Ethereum()
    {
      #if UNITY_EDITOR
      
      api = new UnityEditorEthereumProvider();
      
      #elif UNITY_WEBGL
      
      api = new BrowserEthereumProvider();
      
      #else
      
      api = new NotImplementedEthereumProvider();
      
      #endif
    }
  }
}