export const LayoutIndex = import('./LayoutIndex')
export const LayoutSearch = import('./LayoutSearch')
export const LayoutArchive = import('./LayoutArchive')
export const LayoutSlug = import('./LayoutSlug')
export const Layout404 = import('./Layout404')
export const LayoutCategory = import('./LayoutCategory')
export const LayoutCategoryIndex = import('./LayoutCategoryIndex')
export const LayoutPage = import('./LayoutPage')
export const LayoutTag = import('./LayoutTag')
export const LayoutTagIndex = import('./LayoutTagIndex')

export const CONFIG_NEXT = {
  // 首页相关配置
  HOME_BANNER: false, // 首页是否显示大图及标语 [true,false]
  POSTS_LIST_TYPE: 'page', // ['page','scroll] 文章列表样式:页码分页、单页滚动加载
  // 右侧组件
  RIGHT_LATEST_POSTS: false,

  home: { // 首页
    showHomeBanner: false,
    homeBannerStrings: ['Hi，我是一个程序员', 'Hi，我是一个打工人', 'Hi，我是一个干饭人', '欢迎来到我的博客🎉'], // 首页大图标语文字
    homeBannerImage: './bg_image.jpg', // 背景图地址
    showPostCover: false, // 文章列表显示封面图
    showPreview: true, // 列表展示文章预览
    previewLines: 12, // 预览文章的篇幅
    showSummary: false // 显示用户自定义摘要
  },
  appearance: 'auto', // ['light', 'dark', 'auto'],
  font: 'font-serif tracking-wider subpixel-antialiased', // 文章字体 ['font-sans', 'font-serif', 'font-mono'] @see https://www.tailwindcss.cn/docs/font-family
  lightBackground: '#eeeeee', // use hex value, don't forget '#' e.g #fffefc
  darkBackground: '#111827', // use hex value, don't forget '#'
  path: '', // leave this empty unless you want to deploy in a folder
  since: 2020, // if leave this empty, current year will be used.
  postListStyle: 'page', // ['page','scroll] 文章列表样式:页码分页、单页滚动加载
  postsPerPage: 6, // post counts per page
  sortByDate: false,
  topNavType: 'normal', // ['fixed','autoCollapse','normal'] 分别是固定顶部、固定底部滑动时自动折叠，不固定
  menu: { // 菜单栏设置
    showAbout: false, // 显示关于
    showCategory: true, // 显示分类
    showTag: true, // 显示标签
    showArchive: true, // 显示归档
    showSearch: true // 显示搜索
  },
  widget: { // 挂件及组件设置
    showPet: false, // 是否显示宠物挂件
    petLink: 'https://cdn.jsdelivr.net/npm/live2d-widget-model-wanko@1.0.5/assets/wanko.model.json', // 挂件模型地址 @see https://github.com/xiazeyu/live2d-widget-models
    showToTop: true, // 是否显示回顶
    showToBottom: false, // 显示回底
    showDarkMode: false, // 显示日间/夜间模式切换
    showToc: true, // 移动端显示悬浮目录
    showShareBar: false, // 文章分享功能
    showRelatePosts: true, // 相关文章推荐
    showCopyRight: true, // 文章版权声明
    showLatestPost: false, // 右侧边栏显示最近更新
    showCategoryList: false, // 右侧边栏显示文章分类列表
    showTagList: false // 右侧边栏显示标签分类列表
  },
  socialLink: { // 社交链接，如不需要展示可以留空白，例如 weibo:''
    weibo: 'https://weibo.com/tangly1024',
    twitter: 'https://twitter.com/troy1024_1',
    github: 'https://github.com/tangly1024',
    telegram: 'https://t.me/tangly_1024'
  },
  comment: { // 评论插件，支持 gitalk, utterances, cusdis
    provider: 'gitalk', // 不需要则留空白
    gitalkConfig: {
      repo: 'NotionNext', // The repository of store comments
      owner: 'tangly1024',
      admin: ['tangly1024'],
      clientID: process.env.GITALK_ID || 'be7864a16b693e256f8f',
      clientSecret: process.env.GITALK_SECRET || 'REMOVED_OAUTH_SECRET',
      distractionFreeMode: false
    },
    cusdisConfig: {
      appId: '445ba48e-f751-487f-b22f-cdbe3310d28f', // data-app-id
      host: 'https://cusdis.com', // data-host, change this if you're using self-hosted version
      scriptSrc: 'https://cusdis.com/js/cusdis.es.js' // change this if you're using self-hosted version
    },
    utterancesConfig: {
      repo: 'tangly1024/NotionNext'
    },
    gitter: '', // gitter聊天室
    DaoVoiceId: '', // DaoVoice http://dashboard.daovoice.io/get-started
    TidioId: '' // https://www.tidio.com/
  }
}
