module.exports = {
  // Enable HTML in Markdown
  htmlAsArray: true,
  
  // Custom highlight.js configuration
  highlightjs: {
    // Register custom languages
    registerLanguages: {
      book: {
        // Reference the book.js language definition
        // This will be loaded from your custom script already included in the presentation
        require: './book.js',
        // Or you could use an inline definition if needed
        // alias: ['promptbook', 'ptbk']
      }
    },
    // This will enable auto-loading of languages
    autoLanguage: true
  },
  
  // Other Marp configuration options
  math: true,
  markdown: {
    breaks: true
  },
  allowLocalFiles: true,
  themeSet: './themes'
};
