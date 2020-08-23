import { createGlobalStyle } from 'styled-components';

import createFontFace from 'helpers/createFontFace';

import PoppinsThin from './Poppins-Thin.ttf';
import PoppinsLight from './Poppins-Light.ttf';
import PoppinsRegular from './Poppins-Regular.ttf';
import PoppinsBold from './Poppins-Bold.ttf';
import PoppinsBlack from './Poppins-Black.ttf';

export default createGlobalStyle`
    ${createFontFace('Poppins', PoppinsThin, 100, 'normal')}
    ${createFontFace('Poppins', PoppinsLight, 300, 'normal')}
    ${createFontFace('Poppins', PoppinsRegular, 400, 'normal')}
    ${createFontFace('Poppins', PoppinsBold, 700, 'normal')}
    ${createFontFace('Poppins', PoppinsBlack, 900, 'normal')}
`