# KvDb
Micro key-value database based on HTML5 localStorage :scream_cat:

### install
```npm install kv-db```

### example
```javascript
<script src='kvdb.js'></script>
<script>
    var TestDb = new KvDb('TEST_DB');
    // C - create
    TestDb.set('key1', 'value1');
    TestDb.set('key2', 'value2');
    TestDb.set('key3', 'value333');
    TestDb.set('junk_key', 'some_junk');
    // R - remove
    TestDb.remove('junk_key');
    // U - update
    TestDb.set('key3', 'value3');
    // D - display
    console.log('#', 'key1', TestDb.get('key1'));
    console.log('#', 'key2', TestDb.get('key2'));
    console.log('#', 'key3', TestDb.get('key3'));
    // or
    var all = TestDb.all();
    for(var i in all){
        var o = all[i];
        console.log('>', o.k, o.v);
    }
</script>
```
