using UnityEngine;
using UnityEngine.UI;
using EthereumClient;

public class MultiwalletTest : MonoBehaviour
{
  [SerializeField] private Button connectButton;
  [SerializeField] private Button getWalletAddressButton;
  [SerializeField] private Text walletAddressLabel;

  private void Awake()
  {
    connectButton.onClick.AddListener(Ethereum.api.ConnectWallet);
    getWalletAddressButton.onClick.AddListener(DisplayWalletAddress);
  }

  private void DisplayWalletAddress()
  {
    walletAddressLabel.text = Ethereum.api.GetWalletAddress();
  }
}
