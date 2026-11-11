import {test} from 'node:test';
import assert from 'node:assert/strict';
import {inspect, parseDocument} from '../src/source.mjs';
import {readFixture} from '../src/files.mjs';
const sample=await readFixture('devices.jsonld');
test('原件结构与错误边界',async()=>{

assert.equal(inspect(sample).documents,1);assert.equal(parseDocument(sample)['@graph'].length,2);
assert.throws(()=>parseDocument(Buffer.from('null')),/文档/);
assert.throws(()=>parseDocument(Buffer.from('"scalar"')),/文档/);
assert.equal(inspect(Buffer.from('[]')).documents,0);

});
test('样本读取范围',async()=>{await assert.rejects(readFixture('../package.json'),/越界/);await assert.rejects(readFixture('absent.bin'),/ENOENT/);});
