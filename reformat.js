const fs = require('fs');
let content = fs.readFileSync('src/app/page.js', 'utf8');

// For Card 1 (Memorial Pieces)
content = content.replace(
  /<div className="card-header-row">\s*<h3 className="headline-md">Memorial Pieces<\/h3>\s*<div className="label-sm card-link">\s*<span className="card-link-text">View<\/span>\s*<span className="material-symbols-outlined">\s*chevron_right\s*<\/span>\s*<\/div>\s*<\/div>\s*<p className="body-md">([\s\S]*?)<\/p>\s*<\/div>\s*<\/a>/g,
  `<h3 className="headline-md">Memorial Pieces</h3>\n                <p className="body-md">$1</p>\n              </div>\n              <div className="label-sm card-link">\n                <span className="card-link-text">VIEW</span>\n                <span className="material-symbols-outlined">\n                  chevron_right\n                </span>\n              </div>\n            </a>`
);

// For the rest of the cards
content = content.replace(
  /<div className="card-header-row">\s*<h3 className="headline-md">(.*?)<\/h3>\s*<div className="label-sm card-link">\s*<span className="card-link-text">View<\/span>\s*<span className="material-symbols-outlined">\s*chevron_right\s*<\/span>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/a>/g,
  `<h3 className="headline-md">$1</h3>\n              </div>\n              <div className="label-sm card-link">\n                <span className="card-link-text">VIEW</span>\n                <span className="material-symbols-outlined">\n                  chevron_right\n                </span>\n              </div>\n            </a>`
);

fs.writeFileSync('src/app/page.js', content);
console.log('DOM manipulation successful');
