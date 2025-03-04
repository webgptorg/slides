// Define custom 'book' language for highlight.js
(function() {
  function bookLanguage() {
    return {
      name: 'book',
      aliases: ['promptbook', 'ptbk'],
      case_insensitive: true,
      keywords: {
        keyword: 'PERSONA KNOWLEDGE',
        built_in: 'Write Generate Create Describe',
      },
      contains: [
        // Section headers
        {
          className: 'section',
          begin: '^#+\\s',
          end: '$',
          relevance: 10
        },
        // Comments
        {
          className: 'comment',
          begin: '//|#',
          end: '$',
          contains: [{
            begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
          }]
        },
        // Prompt blocks with >
        {
          className: 'string',
          begin: '^>',
          end: '$',
          relevance: 0
        },
        // Variables with {}
        {
          className: 'variable',
          begin: '\\{',
          end: '\\}',
          relevance: 0
        },
        // Arrows ->
        {
          className: 'meta',
          begin: '->',
          end: '$',
          relevance: 10
        }
      ]
    };
  }

  // Register the language with highlight.js when loaded in the browser
  if (typeof window !== 'undefined' && window.hljs) {
    window.hljs.registerLanguage('book', bookLanguage);
  }
  
  // Export for CommonJS environments (Node.js)
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = bookLanguage;
  }
})();
