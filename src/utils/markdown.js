import VueMarkdownEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';


import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';
import '@kangc/v-md-editor/lib/theme/style/vuepress.css';


// 提示信息
import createTipPlugin from '@kangc/v-md-editor/lib/plugins/tip/index';
import '@kangc/v-md-editor/lib/plugins/tip/tip.css';

VueMarkdownEditor.use(createTipPlugin());

import Prism from 'prismjs';

VueMarkdownEditor.use(vuepressTheme, {
  Prism
});


// 预览
import VMdPreviewHtml from '@kangc/v-md-editor/lib/preview-html';
import '@kangc/v-md-editor/lib/style/preview-html.css';

// 引入使用主题的样式
// import '@kangc/v-md-editor/lib/theme/style/vuepress';


const MarkDown = (app) => {
  app.use(VueMarkdownEditor)
  app.use(VMdPreviewHtml)
}

export default MarkDown;