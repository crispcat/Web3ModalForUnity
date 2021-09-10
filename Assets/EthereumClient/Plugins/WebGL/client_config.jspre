const client_config = 
{
  prod : 
  {
    infuraId    : "",
    formaticKey : ""
  },

  dev : 
  {
    infuraId    : "9bbe2f51f86d4ae3b9d38cdceac62638",
    formaticKey : "pk_test_F0DFA243C025835D"
  },

  get current()
  {
    return this.dev;
  }
}