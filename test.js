const decodeMessage = (str) => {
  const reverseEncode = reverseCipher (str);
  const symbolEncode = symbolCipher (reverseEncode);
  const caesarEncode = caesarCipher (symbolEncode, -3);
  return caesarEncode;
}

