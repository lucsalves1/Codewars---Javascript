function filter_list(l) {
    var r = l.filter(a => typeof a == 'number');
    return r;
  }