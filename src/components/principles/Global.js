import { injectGlobal } from 'emotion';
import colors from './Colors';

export default injectGlobal`
    @import url('https://fonts.googleapis.com/css?family=Nunito:200');

    body {
        background-color: ${colors.grays.grayOne};
        color: ${colors.grays.graySix};
        font-family: 'Nunito', sans-serif;
        margin: 0;
    }
`

/* 
  @font-face {
    font-family: 'Patrick Hand SC';
    font-style: normal;
    font-weight: 400;
    src: local('Patrick Hand SC'),
      local('PatrickHandSC-Regular'),
      url(https://fonts.gstatic.com/s/patrickhandsc/v4/OYFWCgfCR-7uHIovjUZXsZ71Uis0Qeb9Gqo8IZV7ckE.woff2)
        format('woff2');
    unicode-range: U+0100-024f, U+1-1eff,
      U+20a0-20ab, U+20ad-20cf, U+2c60-2c7f,
      U+A720-A7FF;
  }
  */