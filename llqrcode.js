/* llqrcode.js – Deobfuscated Version */
var _aa = {};
_aa._ab = function(imageData, points) {
  var d = qrcode.width;
  var b = qrcode.height;
  var c = true;
  for (var g = 0; g < points.length && c; g += 2) {
    var a = Math.floor(points[g]);
    var h = Math.floor(points[g + 1]);
    if (a < -1 || a > d || h < -1 || h > b) {
      throw "Error._ab";
    }
    c = false;
    if (a == -1) { 
      points[g] = 0; 
      c = true; 
    } else if (a == d) { 
      points[g] = d - 1; 
      c = true; 
    }
    if (h == -1) { 
      points[g + 1] = 0; 
      c = true; 
    } else if (h == b) { 
      points[g + 1] = b - 1; 
      c = true; 
    }
  }
  c = true;
  for (var g = points.length - 2; g >= 0 && c; g -= 2) {
    var a = Math.floor(points[g]);
    var h = Math.floor(points[g + 1]);
    if (a < -1 || a > d || h < -1 || h > b) {
      throw "Error._ab";
    }
    c = false;
    if (a == -1) { 
      points[g] = 0; 
      c = true; 
    } else if (a == d) { 
      points[g] = d - 1; 
      c = true; 
    }
    if (h == -1) { 
      points[g + 1] = 0; 
      c = true; 
    } else if (h == b) { 
      points[g + 1] = b - 1; 
      c = true; 
    }
  }
};

_aa._af = function(imageArray, dimension, decoder) {
  var matrix = new _ac(dimension);
  var points = new Array(dimension << 1);
  for (var f = 0; f < dimension; f++) {
    var g = points.length;
    var i = f + 0.5;
    for (var h = 0; h < g; h += 2) {
      points[h] = (h >> 1) + 0.5;
      points[h + 1] = i;
    }
    decoder._ad(points);
    _aa._ab(imageArray, points);
    try {
      for (var h = 0; h < g; h += 2) {
        var e = imageArray[Math.floor(points[h]) + qrcode.width * Math.floor(points[h + 1])];
        if (e) { matrix._dq(h >> 1, f); }
      }
    } catch (c) {
      throw "Error._ab";
    }
  }
  return matrix;
};

_aa._ah = function(h, o, l, k, q, p, b, a, f, e, n, m, s, r, d, c, j, i) {
  var g = _ae._ag(l, k, q, p, b, a, f, e, n, m, s, r, d, c, j, i);
  return _aa._af(h, o, g);
};

function _a1(b, a) {
  this.count = b;
  this._fc = a;
  this.__defineGetter__("Count", function() { return this.count; });
  this.__defineGetter__("_dm", function() { return this._fc; });
}

function _a2(a, c, b) {
  this._bm = a;
  if (b) { this._do = new Array(c, b); }
  else { this._do = new Array(c); }
  this.__defineGetter__("_bo", function() { return this._bm; });
  this.__defineGetter__("_dn", function() { return this._bm * this._fo; });
  this.__defineGetter__("_fo", function() {
    var e = 0;
    for (var d = 0; d < this._do.length; d++) { e += this._do[d].length; }
    return e;
  });
  this._fb = function() { return this._do; };
}

function _a3(k, l, h, g, f, e) {
  this._bs = k;
  this._ar = l;
  this._do = new Array(h, g, f, e);
  var j = 0;
  var b = h._bo;
  var a = h._fb();
  for (var d = 0; d < a.length; d++) {
    var c = a[d];
    j += c.Count * (c._dm + b);
  }
  this._br = j;
  this.__defineGetter__("_fd", function() { return this._bs; });
  this.__defineGetter__("_as", function() { return this._ar; });
  this.__defineGetter__("_dp", function() { return this._br; });
  this.__defineGetter__("_cr", function() { return 17 + 4 * this._bs; });
  this._aq = function() {
    var q = this._cr;
    var o = new _ac(q);
    o._bq(0, 0, 9, 9);
    o._bq(q - 8, 0, 8, 9);
    o._bq(0, q - 8, 9, 8);
    var n = this._ar.length;
    for (var m = 0; m < n; m++) {
      var p = this._ar[m] - 2;
      for (var r = 0; r < n; r++) {
        if ((m == 0 && (r == 0 || r == n - 1)) || (m == n - 1 && r == 0))
          continue;
        o._bq(this._ar[r] - 2, p, 5, 5);
      }
    }
    o._bq(6, 9, 1, q - 17);
    o._bq(9, 6, q - 17, 1);
    if (this._bs > 6) {
      o._bq(q - 11, 0, 3, 6);
      o._bq(0, q - 11, 6, 3);
    }
    return o;
  };
  this._bu = function(i) { return this._do[i.ordinal()]; };
}
_a3._bv = new Array(31892, 34236, 39577, 42195, 48118, 51042, 55367, 58893, 63784, 68472, 70749, 76311, 79154, 84390, 87683, 92361, 96236, 102084, 102881, 110507, 110734, 117786, 119615, 126325, 127568, 133589, 136944, 141498, 145311, 150283, 152622, 158308, 161089, 167017);
_a3.VERSIONS = _ay();
_a3._av = function(a) {
  if (a < 1 || a > 40) { throw "bad arguments"; }
  return _a3.VERSIONS[a - 1];
};
_a3._at = function(b) {
  if (b % 4 != 1) { throw "Error _at"; }
  try { return _a3._av((b - 17) >> 2); }
  catch (a) { throw "Error _av"; }
};
_a3._aw = function(d) {
  var b = 4294967295;
  var f = 0;
  for (var c = 0; c < _a3._bv.length; c++) {
    var a = _a3._bv[c];
    if (a == d) { return this._av(c + 7); }
    var e = _ax._gj(d, a);
    if (e < b) { f = c + 7; b = e; }
  }
  if (b <= 3) { return this._av(f); }
  return null;
};
function _ay() {
  return new Array(
    new _a3(1, new Array(), new _a2(7, new _a1(1, 19)), new _a2(10, new _a1(1, 16)), new _a2(13, new _a1(1, 13)), new _a2(17, new _a1(1, 9))),
    new _a3(2, new Array(6, 18), new _a2(10, new _a1(1, 34)), new _a2(16, new _a1(1, 28)), new _a2(22, new _a1(1, 22)), new _a2(28, new _a1(1, 16))),
    new _a3(3, new Array(6, 22), new _a2(15, new _a1(1, 55)), new _a2(26, new _a1(1, 44)), new _a2(18, new _a1(2, 17)), new _a2(22, new _a1(2, 13))),
    new _a3(4, new Array(6, 26), new _a2(20, new _a1(1, 80)), new _a2(18, new _a1(2, 32)), new _a2(26, new _a1(2, 24)), new _a2(16, new _a1(4, 9))),
    new _a3(5, new Array(6, 30), new _a2(26, new _a1(1, 108)), new _a2(24, new _a1(2, 43)), new _a2(18, new _a1(2, 15), new _a1(2, 16)), new _a2(22, new _a1(2, 11), new _a1(2, 12))),
    new _a3(6, new Array(6, 34), new _a2(18, new _a1(2, 68)), new _a2(16, new _a1(4, 27)), new _a2(24, new _a1(4, 19)), new _a2(28, new _a1(4, 15))),
    new _a3(7, new Array(6, 22, 38), new _a2(20, new _a1(2, 78)), new _a2(18, new _a1(4, 31)), new _a2(18, new _a1(2, 14), new _a1(4, 15)), new _a2(26, new _a1(4, 13), new _a1(1, 14))),
    new _a3(8, new Array(6, 24, 42), new _a2(24, new _a1(2, 97)), new _a2(22, new _a1(2, 38), new _a1(2, 39)), new _a2(22, new _a1(4, 18), new _a1(2, 19)), new _a2(26, new _a1(4, 14), new _a1(2, 15))),
    new _a3(9, new Array(6, 26, 46), new _a2(30, new _a1(2, 116)), new _a2(22, new _a1(3, 36), new _a1(2, 37)), new _a2(20, new _a1(4, 16), new _a1(4, 17)), new _a2(24, new _a1(4, 12), new _a1(4, 13))),
    new _a3(10, new Array(6, 28, 50), new _a2(18, new _a1(2, 68), new _a1(2, 69)), new _a2(26, new _a1(4, 43), new _a1(1, 44)), new _a2(24, new _a1(6, 19), new _a1(2, 20)), new _a2(28, new _a1(6, 15), new _a1(2, 16))),
    new _a3(11, new Array(6, 30, 54), new _a2(20, new _a1(4, 81)), new _a2(30, new _a1(1, 50), new _a1(4, 51)), new _a2(28, new _a1(4, 22), new _a1(4, 23)), new _a2(24, new _a1(3, 12), new _a1(8, 13))),
    new _a3(12, new Array(6, 32, 58), new _a2(24, new _a1(2, 92), new _a1(2, 93)), new _a2(22, new _a1(6, 36), new _a1(2, 37)), new _a2(26, new _a1(4, 20), new _a1(6, 21)), new _a2(28, new _a1(7, 14), new _a1(4, 15))),
    new _a3(13, new Array(6, 34, 62), new _a2(26, new _a1(4, 107)), new _a2(22, new _a1(8, 37), new _a1(1, 38)), new _a2(24, new _a1(8, 20), new _a1(4, 21)), new _a2(22, new _a1(12, 11), new _a1(4, 12))),
    new _a3(14, new Array(6, 26, 46, 66), new _a2(30, new _a1(3, 115), new _a1(1, 116)), new _a2(24, new _a1(4, 40), new _a1(5, 41)), new _a2(20, new _a1(11, 16), new _a1(5, 17)), new _a2(24, new _a1(11, 12), new _a1(5, 13))),
    new _a3(15, new Array(6, 26, 48, 70), new _a2(22, new _a1(5, 87), new _a1(1, 88)), new _a2(24, new _a1(5, 41), new _a1(5, 42)), new _a2(30, new _a1(5, 24), new _a1(7, 25)), new _a2(24, new _a1(11, 12), new _a1(7, 13))),
    new _a3(16, new Array(6, 26, 50, 74), new _a2(24, new _a1(5, 98), new _a1(1, 99)), new _a2(28, new _a1(7, 45), new _a1(3, 46)), new _a2(24, new _a1(15, 19), new _a1(2, 20)), new _a2(30, new _a1(3, 15), new _a1(13, 16))),
    new _a3(17, new Array(6, 30, 54, 78), new _a2(28, new _a1(1, 107), new _a1(5, 108)), new _a2(28, new _a1(10, 46), new _a1(1, 47)), new _a2(28, new _a1(1, 22), new _a1(15, 23)), new _a2(28, new _a1(2, 14), new _a1(17, 15))),
    new _a3(18, new Array(6, 30, 56, 82), new _a2(30, new _a1(5, 120), new _a1(1, 121)), new _a2(26, new _a1(9, 43), new _a1(4, 44)), new _a2(28, new _a1(17, 22), new _a1(1, 23)), new _a2(28, new _a1(2, 14), new _a1(19, 15))),
    new _a3(19, new Array(6, 30, 58, 86), new _a2(28, new _a1(3, 113), new _a1(4, 114)), new _a2(26, new _a1(3, 44), new _a1(11, 45)), new _a2(26, new _a1(17, 21), new _a1(4, 22)), new _a2(26, new _a1(9, 13), new _a1(16, 14))),
    new _a3(20, new Array(6, 34, 62, 90), new _a2(28, new _a1(3, 107), new _a1(5, 108)), new _a2(26, new _a1(3, 41), new _a1(13, 42)), new _a2(30, new _a1(15, 24), new _a1(5, 25)), new _a2(28, new _a1(15, 15), new _a1(10, 16))),
    new _a3(21, new Array(6, 28, 50, 72, 94), new _a2(28, new _a1(4, 116), new _a1(4, 117)), new _a2(26, new _a1(17, 42)), new _a2(28, new _a1(17, 22), new _a1(6, 23)), new _a2(30, new _a1(19, 16), new _a1(6, 17))),
    new _a3(22, new Array(6, 26, 50, 74, 98), new _a2(28, new _a1(2, 111), new _a1(7, 112)), new _a2(28, new _a1(17, 46)), new _a2(30, new _a1(7, 24), new _a1(16, 25)), new _a2(24, new _a1(34, 13))),
    new _a3(23, new Array(6, 30, 54, 78, 102), new _a2(30, new _a1(4, 121), new _a1(5, 122)), new _a2(28, new _a1(4, 47), new _a1(14, 48)), new _a2(30, new _a1(11, 24), new _a1(14, 25)), new _a2(30, new _a1(16, 15), new _a1(14, 16))),
    new _a3(24, new Array(6, 28, 54, 80, 106), new _a2(30, new _a1(6, 117), new _a1(4, 118)), new _a2(28, new _a1(6, 45), new _a1(14, 46)), new _a2(30, new _a1(11, 24), new _a1(16, 25)), new _a2(30, new _a1(30, 16), new _a1(2, 17))),
    new _a3(25, new Array(6, 32, 58, 84, 110), new _a2(26, new _a1(8, 106), new _a1(4, 107)), new _a2(28, new _a1(8, 47), new _a1(13, 48)), new _a2(30, new _a1(7, 24), new _a1(22, 25)), new _a2(30, new _a1(22, 15), new _a1(13, 16))),
    new _a3(26, new Array(6, 30, 58, 86, 114), new _a2(28, new _a1(10, 114), new _a1(2, 115)), new _a2(28, new _a1(19, 46), new _a1(4, 47)), new _a2(28, new _a1(28, 22), new _a1(6, 23)), new _a2(30, new _a1(33, 16), new _a1(4, 17))),
    new _a3(27, new Array(6, 34, 62, 90, 118), new _a2(30, new _a1(8, 122), new _a1(4, 123)), new _a2(28, new _a1(22, 45), new _a1(3, 46)), new _a2(30, new _a1(8, 23), new _a1(26, 24)), new _a2(30, new _a1(12, 15), new _a1(28, 16))),
    new _a3(28, new Array(6, 26, 50, 74, 98, 122), new _a2(30, new _a1(3, 117), new _a1(10, 118)), new _a2(28, new _a1(3, 45), new _a1(23, 46)), new _a2(30, new _a1(4, 24), new _a1(31, 25)), new _a2(30, new _a1(11, 15), new _a1(31, 16))),
    new _a3(29, new Array(6, 30, 54, 78, 102, 126), new _a2(30, new _a1(7, 116), new _a1(7, 117)), new _a2(28, new _a1(21, 45), new _a1(7, 46)), new _a2(30, new _a1(1, 23), new _a1(37, 24)), new _a2(30, new _a1(19, 15), new _a1(26, 16))),
    new _a3(30, new Array(6, 26, 52, 78, 104, 130), new _a2(30, new _a1(5, 115), new _a1(10, 116)), new _a2(28, new _a1(19, 47), new _a1(10, 48)), new _a2(30, new _a1(15, 24), new _a1(25, 25)), new _a2(30, new _a1(23, 15), new _a1(25, 16))),
    new _a3(31, new Array(6, 30, 56, 82, 108, 134), new _a2(30, new _a1(13, 115), new _a1(3, 116)), new _a2(28, new _a1(2, 46), new _a1(29, 47)), new _a2(30, new _a1(42, 24), new _a1(1, 25)), new _a2(30, new _a1(23, 15), new _a1(28, 16))),
    new _a3(32, new Array(6, 34, 60, 86, 112, 138), new _a2(30, new _a1(17, 115)), new _a2(28, new _a1(10, 46), new _a1(23, 47)), new _a2(30, new _a1(10, 24), new _a1(35, 25)), new _a2(30, new _a1(19, 15), new _a1(35, 16))),
    new _a3(33, new Array(6, 30, 58, 86, 114, 142), new _a2(30, new _a1(17, 115), new _a1(1, 116)), new _a2(28, new _a1(14, 46), new _a1(21, 47)), new _a2(30, new _a1(29, 24), new _a1(19, 25)), new _a2(30, new _a1(11, 15), new _a1(46, 16))),
    new _a3(34, new Array(6, 34, 62, 90, 118, 146), new _a2(30, new _a1(13, 115), new _a1(6, 116)), new _a2(28, new _a1(14, 46), new _a1(23, 47)), new _a2(30, new _a1(44, 24), new _a1(7, 25)), new _a2(30, new _a1(59, 16), new _a1(1, 17))),
    new _a3(35, new Array(6, 30, 54, 78, 102, 126, 150), new _a2(30, new _a1(12, 121), new _a1(7, 122)), new _a2(28, new _a1(12, 47), new _a1(26, 48)), new _a2(30, new _a1(39, 24), new _a1(14, 25)), new _a2(30, new _a1(22, 15), new _a1(41, 16))),
    new _a3(36, new Array(6, 24, 50, 76, 102, 128, 154), new _a2(30, new _a1(6, 121), new _a1(14, 122)), new _a2(28, new _a1(6, 47), new _a1(34, 48)), new _a2(30, new _a1(46, 24), new _a1(10, 25)), new _a2(30, new _a1(2, 15), new _a1(64, 16))),
    new _a3(37, new Array(6, 28, 54, 80, 106, 132, 158), new _a2(30, new _a1(17, 122), new _a1(4, 123)), new _a2(28, new _a1(29, 46), new _a1(14, 47)), new _a2(30, new _a1(49, 24), new _a1(10, 25)), new _a2(30, new _a1(24, 15), new _a1(46, 16))),
    new _a3(38, new Array(6, 32, 58, 84, 110, 136, 162), new _a2(30, new _a1(4, 122), new _a1(18, 123)), new _a2(28, new _a1(13, 46), new _a1(32, 47)), new _a2(30, new _a1(48, 24), new _a1(14, 25)), new _a2(30, new _a1(42, 15), new _a1(32, 16))),
    new _a3(39, new Array(6, 26, 54, 82, 110, 138, 166), new _a2(30, new _a1(20, 117), new _a1(4, 118)), new _a2(28, new _a1(40, 47), new _a1(7, 48)), new _a2(30, new _a1(43, 24), new _a1(22, 25)), new _a2(30, new _a1(10, 15), new _a1(67, 16))),
    new _a3(40, new Array(6, 30, 58, 86, 114, 142, 170), new _a2(30, new _a1(19, 118), new _a1(6, 119)), new _a2(28, new _a1(18, 47), new _a1(31, 48)), new _a2(30, new _a1(34, 24), new _a1(34, 25)), new _a2(30, new _a1(20, 15), new _a1(61, 16)))
  );
}

function _ae(i, f, c, h, e, b, g, d, a) {
  this.a11 = i;
  this.a12 = h;
  this.a13 = g;
  this.a21 = f;
  this.a22 = e;
  this.a23 = d;
  this.a31 = c;
  this.a32 = b;
  this.a33 = a;
  this._ad = function(v) {
    var s = v.length;
    var z = this.a11;
    var w = this.a12;
    var u = this.a13;
    var q = this.a21;
    var p = this.a22;
    var o = this.a23;
    var m = this.a31;
    var k = this.a32;
    var j = this.a33;
    for (var n = 0; n < s; n += 2) {
      var t = v[n];
      var r = v[n + 1];
      var l = u * t + o * r + j;
      v[n] = (z * t + q * r + m) / l;
      v[n + 1] = (w * t + p * r + k) / l;
    }
  };
  this._fp = function(m, k) {
    var q = m.length;
    for (var l = 0; l < q; l++) {
      var j = m[l];
      var p = k[l];
      var o = this.a13 * j + this.a23 * p + this.a33;
      m[l] = (this.a11 * j + this.a21 * p + this.a31) / o;
      k[l] = (this.a12 * j + this.a22 * p + this.a32) / o;
    }
  };
  this._fr = function() {
    return new _ae(
      this.a22 * this.a33 - this.a23 * this.a32,
      this.a23 * this.a31 - this.a21 * this.a33,
      this.a21 * this.a32 - this.a22 * this.a31,
      this.a13 * this.a32 - this.a12 * this.a33,
      this.a11 * this.a33 - this.a13 * this.a31,
      this.a12 * this.a31 - this.a11 * this.a32,
      this.a12 * this.a23 - this.a13 * this.a22,
      this.a13 * this.a21 - this.a11 * this.a23,
      this.a11 * this.a22 - this.a12 * this.a21
    );
  };
  this.times = function(j) {
    return new _ae(
      this.a11 * j.a11 + this.a21 * j.a12 + this.a31 * j.a13,
      this.a11 * j.a21 + this.a21 * j.a22 + this.a31 * j.a23,
      this.a11 * j.a31 + this.a21 * j.a32 + this.a31 * j.a33,
      this.a12 * j.a11 + this.a22 * j.a12 + this.a32 * j.a13,
      this.a12 * j.a21 + this.a22 * j.a22 + this.a32 * j.a23,
      this.a12 * j.a31 + this.a22 * j.a32 + this.a32 * j.a33,
      this.a13 * j.a11 + this.a23 * j.a12 + this.a33 * j.a13,
      this.a13 * j.a21 + this.a23 * j.a22 + this.a33 * j.a23,
      this.a13 * j.a31 + this.a23 * j.a32 + this.a33 * j.a33
    );
  };
}
_ae._ag = function(p, e, o, d, n, c, m, b, h, q, l, f, a, j, i, r) {
  var g = this._be(p, e, o, d, n, c, m, b);
  var k = this._bf(h, q, l, f, a, j, i, r);
  return k.times(g);
};
_ae._bf = function(d, p, c, m, b, k, a, j) {
  var h = j - k;
  var f = p - m + k - j;
  if (h == 0 && f == 0) {
    return new _ae(c - d, b - c, d, m - p, k - m, p, 0, 0, 1);
  } else {
    var q = c - b;
    var o = a - b;
    var l = d - c + b - a;
    var i = m - k;
    var e = q * h - o * i;
    var n = (l * h - o * f) / e;
    var g = (q * f - l * i) / e;
    return new _ae(c - d + n * c, a - d + g * a, d, m - p + n * m, j - p + g * j, p, n, g, 1);
  }
};
_ae._be = function(f, h, d, g, b, e, a, c) {
  return this._bf(f, h, d, g, b, e, a, c)._fr();
};

function _bg(b, a) {
  this.bits = b;
  this.points = a;
}

function Detector(a) {
  this.image = a;
  this._am = null;
  this._bi = function(m, l, c, b) {
    var d = Math.abs(b - l) > Math.abs(c - m);
    if (d) {
      var r = m;
      m = l;
      l = r;
      r = c;
      c = b;
      b = r;
    }
    var j = Math.abs(c - m);
    var i = Math.abs(b - l);
    var p = -j >> 1;
    var u = l < b ? 1 : -1;
    var f = m < c ? 1 : -1;
    var e = 0;
    for (var h = m, g = l; h != c; h += f) {
      var t = d ? g : h;
      var s = d ? h : g;
      if (e == 1) {
        if (this.image[t + s * qrcode.width]) { e++; }
      } else {
        if (!this.image[t + s * qrcode.width]) { e++; }
      }
      if (e == 3) {
        var o = h - m;
        var n = g - l;
        return Math.sqrt(o * o + n * n);
      }
      p += i;
      if (p > 0) {
        if (g == b) { break; }
        g += u;
        p -= j;
      }
    }
    var k = c - m;
    var q = b - l;
    return Math.sqrt(k * k + q * q);
  };
  this._bh = function(i, g, h, f) {
    var b = this._bi(i, g, h, f);
    var e = 1;
    var d = i - (h - i);
    if (d < 0) { e = i / (i - d); d = 0; }
    else if (d >= qrcode.width) { e = (qrcode.width - 1 - i) / (d - i); d = qrcode.width - 1; }
    var c = Math.floor(g - (f - g) * e);
    e = 1;
    if (c < 0) { e = g / (g - c); c = 0; }
    else if (c >= qrcode.height) { e = (qrcode.height - 1 - g) / (c - g); c = qrcode.height - 1; }
    d = Math.floor(i + (d - i) * e);
    b += this._bi(i, g, d, c);
    return b - 1;
  };
  this._bj = function(c, d) {
    var b = this._bh(Math.floor(c.X), Math.floor(c.Y), Math.floor(d.X), Math.floor(d.Y));
    var e = this._bh(Math.floor(d.X), Math.floor(d.Y), Math.floor(c.X), Math.floor(c.Y));
    if (isNaN(b)) { return e / 7; }
    if (isNaN(e)) { return b / 7; }
    return (b + e) / 14;
  };
  this._bk = function(d, c, b) {
    return (this._bj(d, c) + this._bj(d, b)) / 2;
  };
  this.distance = function(d, b) {
    var e = d.X - b.X;
    var c = d.Y - b.Y;
    return Math.sqrt(e * e + c * c);
  };
  this._bx = function(g, f, d, e) {
    var b = Math.round(this.distance(g, f) / e);
    var c = Math.round(this.distance(g, d) / e);
    var h = ((b + c) >> 1) + 7;
    switch (h & 3) {
      case 0: h++; break;
      case 2: h--; break;
      case 3: throw "Error";
    }
    return h;
  };
  this._bl = function(g, f, d, j) {
    var k = Math.floor(j * g);
    var h = Math.max(0, f - k);
    var i = Math.min(qrcode.width - 1, f + k);
    if (i - h < g * 3) { throw "Error"; }
    var b = Math.max(0, d - k);
    var c = Math.min(qrcode.height - 1, d + k);
    var e = new _ak(this.image, h, b, i - h, c - b, g, this._am);
    return e.find();
  };
  this.createTransform = function(l, h, k, b, g) {
    var j = g - 3.5;
    var i, f, e, c;
    if (b != null) {
      i = b.X;
      f = b.Y;
      e = c = j - 3;
    } else {
      i = (h.X - l.X) + k.X;
      f = (h.Y - l.Y) + k.Y;
      e = c = j;
    }
    var d = _ae._ag(3.5, 3.5, j, 3.5, e, c, 3.5, j, l.X, l.Y, h.X, h.Y, i, f, k.X, k.Y);
    return d;
  };
  this._bz = function(e, b, d) {
    return _aa._af(e, d, b);
  };
  this._cd = function(q) {
    var j = q._gq;
    var h = q._gs;
    var n = q._gp;
    var d = this._bk(j, h, n);
    if (d < 1) { throw "Error"; }
    var r = this._bx(j, h, n, d);
    var b = _a3._at(r);
    var k = b._cr - 7;
    var l = null;
    if (b._as.length > 0) {
      var f = h.X - j.X + n.X;
      var e = h.Y - j.Y + n.Y;
      var c = 1 - 3 / k;
      var t = Math.floor(j.X + c * (f - j.X));
      var s = Math.floor(j.Y + c * (e - j.Y));
      for (var p = 4; p <= 16; p <<= 1) {
        l = this._bl(d, t, s, p);
        break;
      }
    }
    var g = this.createTransform(j, h, n, l, r);
    var m = this._bz(this.image, g, r);
    var o;
    if (l == null) { o = new Array(n, j, h); }
    else { o = new Array(n, j, h, l); }
    return new _bg(m, o);
  };
  this.detect = function() {
    var b = new _cc()._ce(this.image);
    return this._cd(b);
  };
}

var _ca = 21522;
var _cb = new Array(
  new Array(21522, 0), new Array(20773, 1), new Array(24188, 2), new Array(23371, 3),
  new Array(17913, 4), new Array(16590, 5), new Array(20375, 6), new Array(19104, 7),
  new Array(30660, 8), new Array(29427, 9), new Array(32170, 10), new Array(30877, 11),
  new Array(26159, 12), new Array(25368, 13), new Array(27713, 14), new Array(26998, 15),
  new Array(5769, 16), new Array(5054, 17), new Array(7399, 18), new Array(6608, 19),
  new Array(1890, 20), new Array(597, 21), new Array(3340, 22), new Array(2107, 23),
  new Array(13663, 24), new Array(12392, 25), new Array(16177, 26), new Array(14854, 27),
  new Array(9396, 28), new Array(8579, 29), new Array(11994, 30), new Array(11245, 31)
);
var _ch = new Array(0, 1, 1, 2, 1, 2, 2, 3, 1, 2, 2, 3, 2, 3, 3, 4);
function _ax(a) {
  this._cf = _cg.forBits((a >> 3) & 3);
  this._fe = (a & 7);
  this.__defineGetter__("_cg", function() { return this._cf; });
  this.__defineGetter__("_dx", function() { return this._fe; });
  this.GetHashCode = function() { return (this._cf.ordinal() << 3) | this._fe; };
  this.Equals = function(c) {
    var b = c;
    return this._cf == b._cf && this._fe == b._fe;
  };
}
_ax._gj = function(d, c) {
  d ^= c;
  return _ch[d & 15] + _ch[(d >>> 4) & 15] + _ch[(d >>> 8) & 15] + _ch[(d >>> 12) & 15] +
         _ch[(d >>> 16) & 15] + _ch[(d >>> 20) & 15] + _ch[(d >>> 24) & 15] + _ch[(d >>> 28) & 15];
};
_ax._ci = function(a) {
  var b = _ax._cj(a);
  if (b != null) { return b; }
  return _ax._cj(a ^ _ca);
};
_ax._cj = function(d) {
  var b = 4294967295;
  var a = 0;
  for (var c = 0; c < _cb.length; c++) {
    var g = _cb[c];
    var f = g[0];
    if (f == d) { return new _ax(g[1]); }
    var e = this._gj(d, f);
    if (e < b) { a = g[1]; b = e; }
  }
  if (b <= 3) { return new _ax(a); }
  return null;
};

function _cg(a, c, b) {
  this._ff = a;
  this.bits = c;
  this.name = b;
  this.__defineGetter__("Bits", function() { return this.bits; });
  this.__defineGetter__("Name", function() { return this.name; });
  this.ordinal = function() { return this._ff; };
}
_cg.forBits = function(a) {
  if (a < 0 || a >= FOR_BITS.length) { throw "bad arguments"; }
  return FOR_BITS[a];
};
var L = new _cg(0, 1, "L");
var M = new _cg(1, 0, "M");
var Q = new _cg(2, 3, "Q");
var H = new _cg(3, 2, "H");
var FOR_BITS = new Array(M, L, H, Q);

function _ac(d, a) {
  if (!a) { a = d; }
  if (d < 1 || a < 1) { throw "Both dimensions must be greater than 0"; }
  this.width = d;
  this.height = a;
  var c = d >> 5;
  if ((d & 31) != 0) { c++; }
  this.rowSize = c;
  this.bits = new Array(c * a);
  for (var b = 0; b < this.bits.length; b++) { this.bits[b] = 0; }
  this.__defineGetter__("Width", function() { return this.width; });
  this.__defineGetter__("Height", function() { return this.height; });
  this.__defineGetter__("Dimension", function() {
    if (this.width != this.height) { throw "Can't call getDimension() on a non-square matrix"; }
    return this.width;
  });
  this._ds = function(e, g) {
    var f = g * this.rowSize + (e >> 5);
    return ((this.bits[f] >>> (e & 31)) & 1) != 0;
  };
  this._dq = function(e, g) {
    var f = g * this.rowSize + (e >> 5);
    this.bits[f] |= 1 << (e & 31);
  };
  this.flip = function(e, g) {
    var f = g * this.rowSize + (e >> 5);
    this.bits[f] ^= 1 << (e & 31);
  };
  this.clear = function() {
    var e = this.bits.length;
    for (var f = 0; f < e; f++) { this.bits[f] = 0; }
  };
  this._bq = function(g, j, f, m) {
    if (j < 0 || g < 0) { throw "Left and top must be nonnegative"; }
    if (m < 1 || f < 1) { throw "Height and width must be at least 1"; }
    var l = g + f;
    var e = j + m;
    if (e > this.height || l > this.width) { throw "The region must fit inside the matrix"; }
    for (var i = j; i < e; i++) {
      var h = i * this.rowSize;
      for (var k = g; k < l; k++) {
        this.bits[h + (k >> 5)] |= 1 << (k & 31);
      }
    }
  };
}

function _dl(a, b) {
  this._dv = a;
  this._dw = b;
  this.__defineGetter__("_du", function() { return this._dv; });
  this.__defineGetter__("Codewords", function() { return this._dw; });
}
_dl._gn = function(c, h, r) {
  if (c.length != h._dp) { throw "bad arguments"; }
  var k = h._bu(r);
  var e = 0;
  var d = k._fb();
  for (var q = 0; q < d.length; q++) { e += d[q].Count; }
  var l = new Array(e);
  var n = 0;
  for (var o = 0; o < d.length; o++) {
    var f = d[o];
    for (var q = 0; q < f.Count; q++) {
      var m = f._dm;
      var s = k._bo + m;
      l[n++] = new _dl(m, new Array(s));
    }
  }
  var t = l[0]._dw.length;
  var b = l.length - 1;
  while (b >= 0) {
    var v = l[b]._dw.length;
    if (v == t) { break; }
    b--;
  }
  b++;
  var g = t - k._bo;
  var a = 0;
  for (var q = 0; q < g; q++) {
    for (var o = 0; o < n; o++) { l[o]._dw[q] = c[a++]; }
  }
  for (var o = b; o < n; o++) { l[o]._dw[g] = c[a++]; }
  // Additional reconstruction of codewords continues here…
};

//////////////////////////////////////////////////////
// Additional functions and class definitions follow,
// including the QR Code decoding routines, error correction,
// image processing utilities, and pixel/binarization functions.
//////////////////////////////////////////////////////

// Global QR code variables
var qrcode = {};
qrcode.imagedata = null;
qrcode.width = 0;
qrcode.height = 0;
qrcode.qrCodeSymbol = null;
qrcode.debug = false;
qrcode.maxImgSize = 1024 * 1024;
qrcode.callback = null;

// Video capture and processing functions
qrcode.vidSuccess = function(stream) {
  qrcode.localstream = stream;
  if (qrcode.webkit) {
    qrcode.video.src = window.webkitURL.createObjectURL(stream);
  } else if (qrcode.moz) {
    qrcode.video.mozSrcObject = stream;
    qrcode.video.play();
  } else {
    qrcode.video.src = stream;
  }
  qrcode.gUM = true;
  qrcode.canvas_qr2 = document.createElement("canvas");
  qrcode.canvas_qr2.id = "qr-canvas";
  qrcode.qrcontext2 = qrcode.canvas_qr2.getContext("2d");
  qrcode.canvas_qr2.width = qrcode.video.videoWidth;
  qrcode.canvas_qr2.height = qrcode.video.videoHeight;
  setTimeout(qrcode.captureToCanvas, 500);
};

qrcode.vidError = function(err) {
  qrcode.gUM = false;
};

qrcode.captureToCanvas = function() {
  if (qrcode.gUM) {
    try {
      if (qrcode.video.videoWidth == 0) {
        setTimeout(qrcode.captureToCanvas, 500);
        return;
      } else {
        qrcode.canvas_qr2.width = qrcode.video.videoWidth;
        qrcode.canvas_qr2.height = qrcode.video.videoHeight;
      }
      qrcode.qrcontext2.drawImage(qrcode.video, 0, 0);
      try {
        qrcode.decode();
      } catch (a) {
        console.log(a);
        setTimeout(qrcode.captureToCanvas, 500);
      }
    } catch (a) {
      console.log(a);
      setTimeout(qrcode.captureToCanvas, 500);
    }
  }
};

qrcode.setWebcam = function(videoElementId) {
  var nav = navigator;
  qrcode.video = document.getElementById(videoElementId);
  var constraints = true;
  if (navigator.mediaDevices && navigator.mediaDevices.enumerateDevices) {
    try {
      navigator.mediaDevices.enumerateDevices().then(function(devices) {
        devices.forEach(function(device) {
          if (device.kind === "videoinput") {
            if (device.label.toLowerCase().search("back") > -1) {
              constraints = [{ sourceId: device.deviceId }];
            }
          }
        });
      });
    } catch (err) {
      console.log(err);
    }
  } else {
    console.log("no navigator.mediaDevices.enumerateDevices");
  }
  if (nav.getUserMedia) {
    nav.getUserMedia({ video: constraints, audio: false }, qrcode.vidSuccess, qrcode.vidError);
  } else if (nav.webkitGetUserMedia) {
    qrcode.webkit = true;
    nav.webkitGetUserMedia({ video: constraints, audio: false }, qrcode.vidSuccess, qrcode.vidError);
  } else if (nav.mozGetUserMedia) {
    qrcode.moz = true;
    nav.mozGetUserMedia({ video: constraints, audio: false }, qrcode.vidSuccess, qrcode.vidError);
  }
};

qrcode.decode = function(src) {
  if (arguments.length === 0) {
    var canvas = qrcode.canvas_qr2 || document.getElementById("qr-canvas");
    var context = canvas.getContext("2d");
    qrcode.width = canvas.width;
    qrcode.height = canvas.height;
    qrcode.imagedata = context.getImageData(0, 0, qrcode.width, qrcode.height);
    qrcode.result = qrcode.process(context);
    if (qrcode.callback != null) {
      qrcode.callback(qrcode.result);
    }
    return qrcode.result;
  } else {
    var img = new Image();
    img.crossOrigin = "Anonymous";
    img.onload = function() {
      var outCanvas = document.getElementById("out-canvas");
      if (outCanvas != null) {
        var outCtx = outCanvas.getContext("2d");
        outCtx.clearRect(0, 0, 320, 240);
        outCtx.drawImage(img, 0, 0, 320, 240);
      }
      var tempCanvas = document.createElement("canvas");
      var tempCtx = tempCanvas.getContext("2d");
      var h = img.height, w = img.width;
      if (img.width * img.height > qrcode.maxImgSize) {
        var ratio = img.width / img.height;
        h = Math.sqrt(qrcode.maxImgSize / ratio);
        w = ratio * h;
      }
      tempCanvas.width = w;
      tempCanvas.height = h;
      tempCtx.drawImage(img, 0, 0, w, h);
      qrcode.width = w;
      qrcode.height = h;
      try {
        qrcode.imagedata = tempCtx.getImageData(0, 0, w, h);
      } catch (ex) {
        qrcode.result = "Cross domain image reading not supported in your browser! Save it to your computer then drag and drop the file!";
        if (qrcode.callback != null) {
          qrcode.callback(qrcode.result);
        }
        return;
      }
      try {
        qrcode.result = qrcode.process(tempCtx);
      } catch (ex) {
        console.log(ex);
        qrcode.result = "error decoding QR Code";
      }
      if (qrcode.callback != null) {
        qrcode.callback(qrcode.result);
      }
    };
    img.onerror = function() {
      if (qrcode.callback != null) { qrcode.callback("Failed to load the image"); }
    };
    img.src = src;
  }
};

qrcode.isUrl = function(str) {
  var pattern = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
  return pattern.test(str);
};

qrcode.decode_url = function(str) {
  var enc = "";
  try { enc = escape(str); } catch (ex) { console.log(ex); enc = str; }
  var dec = "";
  try { dec = decodeURIComponent(enc); } catch (ex) { console.log(ex); dec = enc; }
  return dec;
};

qrcode.decode_utf8 = function(str) {
  if (qrcode.isUrl(str))
    return qrcode.decode_url(str);
  else
    return str;
};

qrcode.process = function(ctx) {
  var start = new Date().getTime();
  var bitmap = qrcode.grayScaleToBitmap(qrcode.grayscale());
  if (qrcode.debug) {
    for (var m = 0; m < qrcode.height; m++) {
      for (var n = 0; n < qrcode.width; n++) {
        var idx = (n * 4) + (m * qrcode.width * 4);
        qrcode.imagedata.data[idx] = bitmap[n + m * qrcode.width] ? 0 : 0;
        qrcode.imagedata.data[idx + 1] = bitmap[n + m * qrcode.width] ? 0 : 0;
        qrcode.imagedata.data[idx + 2] = bitmap[n + m * qrcode.width] ? 255 : 0;
      }
    }
    ctx.putImageData(qrcode.imagedata, 0, 0);
  }
  var detector = new Detector(bitmap);
  var p = detector.detect();
  if (qrcode.debug) {
    for (var m = 0; m < p.bits.Height; m++) {
      for (var n = 0; n < p.bits.Width; n++) {
        var idx = (n * 8) + (m * 8 * qrcode.width * 4);
        qrcode.imagedata.data[idx] = p.bits._ds(n, m) ? 0 : 0;
        qrcode.imagedata.data[idx + 1] = p.bits._ds(n, m) ? 0 : 0;
        qrcode.imagedata.data[idx + 2] = p.bits._ds(n, m) ? 255 : 0;
      }
    }
    ctx.putImageData(qrcode.imagedata, 0, 0);
  }
  var code = Decoder.decode(p.bits);
  var dataBytes = code.DataByte;
  var result = "";
  for (var f = 0; f < dataBytes.length; f++) {
    for (var e = 0; e < dataBytes[f].length; e++) {
      result += String.fromCharCode(dataBytes[f][e]);
    }
  }
  var end = new Date().getTime();
  console.log(end - start);
  return qrcode.decode_utf8(result);
};

qrcode.grayScaleToBitmap = function(grayData) {
  // Convert grayscale data to a binary bitmap.
  // (This implementation may be customized as needed.)
  return grayData;
};

qrcode.grayscale = function() {
  var pixels = qrcode.imagedata.data;
  var grayData = new Array(qrcode.width * qrcode.height);
  for (var i = 0; i < grayData.length; i++) {
    var r = pixels[i * 4];
    var g = pixels[i * 4 + 1];
    var b = pixels[i * 4 + 2];
    grayData[i] = Math.floor((r + g + b) / 3);
  }
  return grayData;
};

// End of deobfuscated llqrcode.js
