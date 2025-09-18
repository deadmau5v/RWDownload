/**
 * 安全地解码URL参数，处理双重编码和特殊字符
 */
export function safeDecodeURIComponent(encoded: string): string {
  try {
    let decoded = decodeURIComponent(encoded)
    
    // 检查是否需要再次解码（处理双重编码）
    if (decoded !== encoded && decoded.includes('%')) {
      try {
        decoded = decodeURIComponent(decoded)
      } catch (e) {
        // 如果二次解码失败，返回一次解码的结果
        // 这里不抛出错误，因为一次解码可能已经足够
      }
    }
    
    return decoded
  } catch (e) {
    // 如果解码失败，返回原始值
    console.warn('Failed to decode URI component:', encoded, e)
    return encoded
  }
}

/**
 * 安全地编码URL参数，确保中文字符正确处理
 */
export function safeEncodeURIComponent(str: string): string {
  try {
    return encodeURIComponent(str)
  } catch (e) {
    console.warn('Failed to encode URI component:', str, e)
    return str
  }
}