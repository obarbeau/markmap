const d3 = require('d3');
require('../../lib/d3-flextree');
const markmap = require('../../lib/view.mindmap');
const parse = require('../../lib/parse.markdown');
const transform = require('../../lib/transform.headings');

d3.text("miam-cooking.md", function (error, text) {
  if (error) throw error;
  const data = transform(parse(text));

  markmap('svg#mindmap', data, {
    preset: 'oba', // colorful or default
    linkShape: 'diagonal' // or bracket
  });
});

d3.text("miam-cooking2.md", function (error, text) {
  if (error) throw error;
  const data = transform(parse(text));

  markmap('svg#mindmap2', data, {
    preset: 'oba', // colorful or default
    linkShape: 'diagonal' // or bracket
  });
});