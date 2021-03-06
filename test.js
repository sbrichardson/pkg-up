import path from 'path';
import test from 'ava';
import pkgUp from '.';

const cwd = path.join(__dirname, 'fixture');
const pkgPath = path.join(__dirname, 'package.json');

test('async', async t => {
	t.is(await pkgUp({cwd}), pkgPath);
	t.is(path.dirname(await pkgUp()), __dirname);
});

test('sync', t => {
	t.is(pkgUp.sync({cwd}), pkgPath);
	t.is(path.dirname(pkgUp.sync()), __dirname);
});
