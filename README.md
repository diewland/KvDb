# KvDb
Micro key-value database based on HTML5 localStorage :scream_cat:

```javascript
<script src='kvdb.js'></script>
<script>

    var TestDb = new KvDb('TEST_DB');
    
    // add item
    TestDb.set('key1', 'value1');
    TestDb.set('key2', 'value2');
    TestDb.set('key3', 'value333');
    TestDb.set('junk_key', 'some_junk');
    
    // update item
    TestDb.set('key3', 'value3');
    
    // remove item
    TestDb.remove('junk_key');
    
    // display
    var all = TestDb.all();
    for(var i in all){
        var o = all[i];
        console.log(o.k, ':', o.v);
    }

</script>
```
