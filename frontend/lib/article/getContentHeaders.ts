import { PortableTextBlock } from '@portabletext/types';

export function getContentHeader(content: PortableTextBlock[]) {
  return content.filter(
    (block) => typeof block.style === 'string' && /^h\d/.test(block.style)
  );
}
