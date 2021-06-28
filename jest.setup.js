import "@testing-library/jest-dom";

import * as NextImage from 'next/image'
const OriginalNextImage = NextImage.default
Object.defineProperty(NextImage, 'default', {
  configurable: true,
  // eslint-disable-next-line react/display-name
  value: props => <OriginalNextImage {...props} unoptimized />
});
