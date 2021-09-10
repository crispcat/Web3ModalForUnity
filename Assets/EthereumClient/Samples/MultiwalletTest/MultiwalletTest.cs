using UnityEngine;
using UnityEngine.UI;
using EthereumClient;

public class MultiwalletTest : MonoBehaviour
{
  [SerializeField] private Button connectButton;
  [SerializeField] private Button getWalletAddressButton;
  [SerializeField] private Text walletAddressLabel;
  [SerializeField] private Button transferEthButton;

  private void Awake()
  {
    connectButton.onClick.AddListener(Ethereum.api.ConnectWallet);
    getWalletAddressButton.onClick.AddListener(DisplayWalletAddress);
    transferEthButton.onClick.AddListener(TransferEth);
  }

  private void DisplayWalletAddress()
  {
    walletAddressLabel.text = Ethereum.api.GetWalletAddress();
  }

  private void TransferEth()
  {
    Ethereum.api.TransferEth(string.Empty, string.Empty);
  }
}
