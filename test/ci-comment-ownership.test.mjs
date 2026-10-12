import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { test } from 'node:test';
const source = readFileSync('.github/workflows/ci-review-comment.yml', 'utf8');
const expression = source.match(/const existing = comments.filter\((.*?)\);/s)[1];
const select = new Function('comments', `return comments.filter(${expression})`);
test('only bot-owned comments can be updated or removed', () => {
  const marker = '<!-- piano-ci-review -->';
  const human = {id:1,user:{type:'User',login:'owner'},body:marker};
  const otherBot = {id:2,user:{type:'Bot',login:'dependabot[bot]'},body:marker};
  const own = {id:3,user:{type:'Bot',login:'github-actions[bot]'},body:marker};
  assert.deepEqual(select([human,otherBot,own,{id:4,body:marker}]),[own]);
});
