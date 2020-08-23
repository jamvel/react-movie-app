export default (fontFamily, src, weight, style) => `
  @font-face {
    font-family: ${fontFamily};
    src: local(${fontFamily}), url(${src});
    font-weight: ${weight};
    font-style: ${style};
  }
`;