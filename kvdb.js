function KvDb(db_name){
  this.db_name = db_name;
  this.all = function(key, value){
    return JSON.parse(localStorage.getItem(this.db_name)) || [];
  };
  this.set = function(key, value){
    var db = JSON.parse(localStorage.getItem(this.db_name)) || [];
    // update
    for(var i in db){
      var o = db[i];
      if(o.k == key){
        db[i] = { k: key, v: value };
        localStorage.setItem(this.db_name, JSON.stringify(db));
        return db;
      }
    }
    // or insert
    db.push({ k: key, v: value });
    localStorage.setItem(this.db_name, JSON.stringify(db));
    return db;
  }
  this.get = function(key){
    var db = JSON.parse(localStorage.getItem(this.db_name)) || [];
    for(var i in db){
      var o = db[i];
      if(o.k == key){
        return o.v;
      }
    }
    return null;
  }
  this.remove = function(key){
    var db = JSON.parse(localStorage.getItem(this.db_name)) || [];
    for(var i in db){
      var o = db[i];
      if(o.k == key){
        db.splice(i, 1);
        break;
      }
    }
    localStorage.setItem(this.db_name, JSON.stringify(db));
    return db;
  }
}
