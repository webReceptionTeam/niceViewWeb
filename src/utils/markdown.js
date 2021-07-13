import VueMarkdownEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';


import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';
import '@kangc/v-md-editor/lib/theme/style/vuepress.css';

import Prism from 'prismjs';




// 引入所有语言包
import hljs from 'highlight.js';

VueMarkdownEditor.use(vuepressTheme, {
  Prism
});

const MarkDown = (app) => {
  app.use(VueMarkdownEditor)
}

export default MarkDown;