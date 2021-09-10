const utils = 
{
  StringToBuffer : function(string)
  {
    var bufferSize = lengthBytesUTF8(string) + 1;
    var buffer = _malloc(bufferSize);
    stringToUTF8(string, buffer, bufferSize);
    
    return buffer;
  }
}