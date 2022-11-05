(() => {
  var __defProp = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b)) {
        if (__propIsEnum.call(b, prop))
          __defNormalProp(a, prop, b[prop]);
      }
    return a;
  };
  var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
  var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
  var __publicField = (obj, key, value) => {
    __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
    return value;
  };
  var __async = (__this, __arguments, generator) => {
    return new Promise((resolve, reject) => {
      var fulfilled = (value) => {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      };
      var rejected = (value) => {
        try {
          step(generator.throw(value));
        } catch (e) {
          reject(e);
        }
      };
      var step = (x2) => x2.done ? resolve(x2.value) : Promise.resolve(x2.value).then(fulfilled, rejected);
      step((generator = generator.apply(__this, __arguments)).next());
    });
  };

  // node_modules/kaboom/dist/kaboom.mjs
  var Gt = Object.defineProperty;
  var bs = /* @__PURE__ */ __name((i, r, a) => r in i ? Gt(i, r, { enumerable: true, configurable: true, writable: true, value: a }) : i[r] = a, "bs");
  var u = /* @__PURE__ */ __name((i, r) => Gt(i, "name", { value: r, configurable: true }), "u");
  var ys = /* @__PURE__ */ __name((i, r) => {
    for (var a in r)
      Gt(i, a, { get: r[a], enumerable: true });
  }, "ys");
  var Z = /* @__PURE__ */ __name((i, r, a) => (bs(i, typeof r != "symbol" ? r + "" : r, a), a), "Z");
  var Us = (() => {
    for (var i = new Uint8Array(128), r = 0; r < 64; r++)
      i[r < 26 ? r + 65 : r < 52 ? r + 71 : r < 62 ? r - 4 : r * 4 - 205] = r;
    return (a) => {
      for (var c = a.length, v = new Uint8Array((c - (a[c - 1] == "=") - (a[c - 2] == "=")) * 3 / 4 | 0), g = 0, T = 0; g < c; ) {
        var R = i[a.charCodeAt(g++)], C = i[a.charCodeAt(g++)], O = i[a.charCodeAt(g++)], M = i[a.charCodeAt(g++)];
        v[T++] = R << 2 | C >> 4, v[T++] = C << 4 | O >> 2, v[T++] = O << 6 | M;
      }
      return v;
    };
  })();
  function he(i) {
    return i * Math.PI / 180;
  }
  __name(he, "he");
  u(he, "deg2rad");
  function kt(i) {
    return i * 180 / Math.PI;
  }
  __name(kt, "kt");
  u(kt, "rad2deg");
  function te(i, r, a) {
    return r > a ? te(i, a, r) : Math.min(Math.max(i, r), a);
  }
  __name(te, "te");
  u(te, "clamp");
  function _e(i, r, a) {
    return i + (r - i) * a;
  }
  __name(_e, "_e");
  u(_e, "lerp");
  function mt(i, r, a, c, v) {
    return c + (i - r) / (a - r) * (v - c);
  }
  __name(mt, "mt");
  u(mt, "map");
  function Vn(i, r, a, c, v) {
    return te(mt(i, r, a, c, v), c, v);
  }
  __name(Vn, "Vn");
  u(Vn, "mapc");
  var H = /* @__PURE__ */ __name(class {
    constructor(r = 0, a = r) {
      __publicField(this, "x", 0);
      __publicField(this, "y", 0);
      this.x = r, this.y = a;
    }
    static fromAngle(r) {
      let a = he(r);
      return new H(Math.cos(a), Math.sin(a));
    }
    clone() {
      return new H(this.x, this.y);
    }
    add(...r) {
      let a = p(...r);
      return new H(this.x + a.x, this.y + a.y);
    }
    sub(...r) {
      let a = p(...r);
      return new H(this.x - a.x, this.y - a.y);
    }
    scale(...r) {
      let a = p(...r);
      return new H(this.x * a.x, this.y * a.y);
    }
    dist(...r) {
      let a = p(...r);
      return Math.sqrt((this.x - a.x) * (this.x - a.x) + (this.y - a.y) * (this.y - a.y));
    }
    len() {
      return this.dist(new H(0, 0));
    }
    unit() {
      let r = this.len();
      return r === 0 ? new H(0) : this.scale(1 / r);
    }
    normal() {
      return new H(this.y, -this.x);
    }
    dot(r) {
      return this.x * r.x + this.y * r.y;
    }
    angle(...r) {
      let a = p(...r);
      return kt(Math.atan2(this.y - a.y, this.x - a.x));
    }
    lerp(r, a) {
      return new H(_e(this.x, r.x, a), _e(this.y, r.y, a));
    }
    isZero() {
      return this.x === 0 && this.y === 0;
    }
    toFixed(r) {
      return new H(Number(this.x.toFixed(r)), Number(this.y.toFixed(r)));
    }
    eq(r) {
      return this.x === r.x && this.y === r.y;
    }
    toString() {
      return `vec2(${this.x.toFixed(2)}, ${this.y.toFixed(2)})`;
    }
  }, "H");
  var D = H;
  u(D, "Vec2"), Z(D, "LEFT", new H(-1, 0)), Z(D, "RIGHT", new H(1, 0)), Z(D, "UP", new H(0, -1)), Z(D, "DOWN", new H(0, 1));
  function p(...i) {
    if (i.length === 1) {
      if (i[0] instanceof D)
        return p(i[0].x, i[0].y);
      if (Array.isArray(i[0]) && i[0].length === 2)
        return p(...i[0]);
    }
    return new D(...i);
  }
  __name(p, "p");
  u(p, "vec2");
  var ke = /* @__PURE__ */ __name(class {
    constructor(r, a, c) {
      __publicField(this, "x", 0);
      __publicField(this, "y", 0);
      __publicField(this, "z", 0);
      this.x = r, this.y = a, this.z = c;
    }
    xy() {
      return p(this.x, this.y);
    }
  }, "ke");
  u(ke, "Vec3");
  var me = u((i, r, a) => new ke(i, r, a), "vec3");
  var ie = /* @__PURE__ */ __name(class {
    constructor(r, a, c) {
      __publicField(this, "r", 255);
      __publicField(this, "g", 255);
      __publicField(this, "b", 255);
      this.r = te(r, 0, 255), this.g = te(a, 0, 255), this.b = te(c, 0, 255);
    }
    static fromArray(r) {
      return new ie(r[0], r[1], r[2]);
    }
    static fromHex(r) {
      if (typeof r == "number")
        return new ie(r >> 16 & 255, r >> 8 & 255, r >> 0 & 255);
      {
        let a = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(r);
        return new ie(parseInt(a[1], 16), parseInt(a[2], 16), parseInt(a[3], 16));
      }
    }
    static fromHSL(r, a, c) {
      if (a == 0)
        return x(255 * c, 255 * c, 255 * c);
      let v = u((M, U, f) => (f < 0 && (f += 1), f > 1 && (f -= 1), f < 1 / 6 ? M + (U - M) * 6 * f : f < 1 / 2 ? U : f < 2 / 3 ? M + (U - M) * (2 / 3 - f) * 6 : M), "hue2rgb"), g = c < 0.5 ? c * (1 + a) : c + a - c * a, T = 2 * c - g, R = v(T, g, r + 1 / 3), C = v(T, g, r), O = v(T, g, r - 1 / 3);
      return new ie(Math.round(R * 255), Math.round(C * 255), Math.round(O * 255));
    }
    clone() {
      return new ie(this.r, this.g, this.b);
    }
    lighten(r) {
      return new ie(this.r + r, this.g + r, this.b + r);
    }
    darken(r) {
      return this.lighten(-r);
    }
    invert() {
      return new ie(255 - this.r, 255 - this.g, 255 - this.b);
    }
    mult(r) {
      return new ie(this.r * r.r / 255, this.g * r.g / 255, this.b * r.b / 255);
    }
    eq(r) {
      return this.r === r.r && this.g === r.g && this.b === r.b;
    }
    toString() {
      return `rgb(${this.r}, ${this.g}, ${this.b})`;
    }
    toHex() {
      return "#" + ((1 << 24) + (this.r << 16) + (this.g << 8) + this.b).toString(16).slice(1);
    }
  }, "ie");
  var E = ie;
  u(E, "Color"), Z(E, "RED", x(255, 0, 0)), Z(E, "GREEN", x(0, 255, 0)), Z(E, "BLUE", x(0, 0, 255)), Z(E, "YELLOW", x(255, 255, 0)), Z(E, "MAGENTA", x(255, 0, 255)), Z(E, "CYAN", x(0, 255, 255)), Z(E, "WHITE", x(255, 255, 255)), Z(E, "BLACK", x(0, 0, 0));
  function x(...i) {
    if (i.length === 0)
      return new E(255, 255, 255);
    if (i.length === 1) {
      if (i[0] instanceof E)
        return i[0].clone();
      if (Array.isArray(i[0]) && i[0].length === 3)
        return E.fromArray(i[0]);
    }
    return new E(...i);
  }
  __name(x, "x");
  u(x, "rgb");
  var kn = u((i, r, a) => E.fromHSL(i, r, a), "hsl2rgb");
  var N = /* @__PURE__ */ __name(class {
    constructor(r, a, c, v) {
      __publicField(this, "x", 0);
      __publicField(this, "y", 0);
      __publicField(this, "w", 1);
      __publicField(this, "h", 1);
      this.x = r, this.y = a, this.w = c, this.h = v;
    }
    scale(r) {
      return new N(this.x + this.w * r.x, this.y + this.h * r.y, this.w * r.w, this.h * r.h);
    }
    clone() {
      return new N(this.x, this.y, this.w, this.h);
    }
    eq(r) {
      return this.x === r.x && this.y === r.y && this.w === r.w && this.h === r.h;
    }
    toString() {
      return `quad(${this.x}, ${this.y}, ${this.w}, ${this.h})`;
    }
  }, "N");
  u(N, "Quad");
  function Nn(i, r, a, c) {
    return new N(i, r, a, c);
  }
  __name(Nn, "Nn");
  u(Nn, "quad");
  var A = /* @__PURE__ */ __name(class {
    constructor(r) {
      __publicField(this, "m", [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
      r && (this.m = r);
    }
    static translate(r) {
      return new A([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, r.x, r.y, 0, 1]);
    }
    static scale(r) {
      return new A([r.x, 0, 0, 0, 0, r.y, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
    }
    static rotateX(r) {
      return r = he(-r), new A([1, 0, 0, 0, 0, Math.cos(r), -Math.sin(r), 0, 0, Math.sin(r), Math.cos(r), 0, 0, 0, 0, 1]);
    }
    static rotateY(r) {
      return r = he(-r), new A([Math.cos(r), 0, Math.sin(r), 0, 0, 1, 0, 0, -Math.sin(r), 0, Math.cos(r), 0, 0, 0, 0, 1]);
    }
    static rotateZ(r) {
      return r = he(-r), new A([Math.cos(r), -Math.sin(r), 0, 0, Math.sin(r), Math.cos(r), 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
    }
    translate(r) {
      return this.mult(A.translate(r));
    }
    scale(r) {
      return this.mult(A.scale(r));
    }
    rotateX(r) {
      return this.mult(A.rotateX(r));
    }
    rotateY(r) {
      return this.mult(A.rotateY(r));
    }
    rotateZ(r) {
      return this.mult(A.rotateZ(r));
    }
    mult(r) {
      let a = [];
      for (let c = 0; c < 4; c++)
        for (let v = 0; v < 4; v++)
          a[c * 4 + v] = this.m[0 * 4 + v] * r.m[c * 4 + 0] + this.m[1 * 4 + v] * r.m[c * 4 + 1] + this.m[2 * 4 + v] * r.m[c * 4 + 2] + this.m[3 * 4 + v] * r.m[c * 4 + 3];
      return new A(a);
    }
    multVec4(r) {
      return { x: r.x * this.m[0] + r.y * this.m[4] + r.z * this.m[8] + r.w * this.m[12], y: r.x * this.m[1] + r.y * this.m[5] + r.z * this.m[9] + r.w * this.m[13], z: r.x * this.m[2] + r.y * this.m[6] + r.z * this.m[10] + r.w * this.m[14], w: r.x * this.m[3] + r.y * this.m[7] + r.z * this.m[11] + r.w * this.m[15] };
    }
    multVec3(r) {
      let a = this.multVec4({ x: r.x, y: r.y, z: r.z, w: 1 });
      return me(a.x, a.y, a.z);
    }
    multVec2(r) {
      return p(r.x * this.m[0] + r.y * this.m[4] + 0 * this.m[8] + 1 * this.m[12], r.x * this.m[1] + r.y * this.m[5] + 0 * this.m[9] + 1 * this.m[13]);
    }
    invert() {
      let r = [], a = this.m[10] * this.m[15] - this.m[14] * this.m[11], c = this.m[9] * this.m[15] - this.m[13] * this.m[11], v = this.m[9] * this.m[14] - this.m[13] * this.m[10], g = this.m[8] * this.m[15] - this.m[12] * this.m[11], T = this.m[8] * this.m[14] - this.m[12] * this.m[10], R = this.m[8] * this.m[13] - this.m[12] * this.m[9], C = this.m[6] * this.m[15] - this.m[14] * this.m[7], O = this.m[5] * this.m[15] - this.m[13] * this.m[7], M = this.m[5] * this.m[14] - this.m[13] * this.m[6], U = this.m[4] * this.m[15] - this.m[12] * this.m[7], f = this.m[4] * this.m[14] - this.m[12] * this.m[6], ue = this.m[5] * this.m[15] - this.m[13] * this.m[7], I = this.m[4] * this.m[13] - this.m[12] * this.m[5], Y = this.m[6] * this.m[11] - this.m[10] * this.m[7], Ee = this.m[5] * this.m[11] - this.m[9] * this.m[7], Se = this.m[5] * this.m[10] - this.m[9] * this.m[6], nt = this.m[4] * this.m[11] - this.m[8] * this.m[7], rt = this.m[4] * this.m[10] - this.m[8] * this.m[6], Ce = this.m[4] * this.m[9] - this.m[8] * this.m[5];
      r[0] = this.m[5] * a - this.m[6] * c + this.m[7] * v, r[4] = -(this.m[4] * a - this.m[6] * g + this.m[7] * T), r[8] = this.m[4] * c - this.m[5] * g + this.m[7] * R, r[12] = -(this.m[4] * v - this.m[5] * T + this.m[6] * R), r[1] = -(this.m[1] * a - this.m[2] * c + this.m[3] * v), r[5] = this.m[0] * a - this.m[2] * g + this.m[3] * T, r[9] = -(this.m[0] * c - this.m[1] * g + this.m[3] * R), r[13] = this.m[0] * v - this.m[1] * T + this.m[2] * R, r[2] = this.m[1] * C - this.m[2] * O + this.m[3] * M, r[6] = -(this.m[0] * C - this.m[2] * U + this.m[3] * f), r[10] = this.m[0] * ue - this.m[1] * U + this.m[3] * I, r[14] = -(this.m[0] * M - this.m[1] * f + this.m[2] * I), r[3] = -(this.m[1] * Y - this.m[2] * Ee + this.m[3] * Se), r[7] = this.m[0] * Y - this.m[2] * nt + this.m[3] * rt, r[11] = -(this.m[0] * Ee - this.m[1] * nt + this.m[3] * Ce), r[15] = this.m[0] * Se - this.m[1] * rt + this.m[2] * Ce;
      let yt = this.m[0] * r[0] + this.m[1] * r[4] + this.m[2] * r[8] + this.m[3] * r[12];
      for (let Te = 0; Te < 4; Te++)
        for (let Ae = 0; Ae < 4; Ae++)
          r[Te * 4 + Ae] *= 1 / yt;
      return new A(r);
    }
    clone() {
      return new A(this.m);
    }
    toString() {
      return this.m.toString();
    }
  }, "A");
  u(A, "Mat4");
  function Nt(i, r, a, c = Math.sin) {
    return i + (c(a) + 1) / 2 * (r - i);
  }
  __name(Nt, "Nt");
  u(Nt, "wave");
  var xs = 1103515245;
  var Es = 12345;
  var Bn = 2147483648;
  var Ne = /* @__PURE__ */ __name(class {
    constructor(r) {
      __publicField(this, "seed");
      this.seed = r;
    }
    gen() {
      return this.seed = (xs * this.seed + Es) % Bn, this.seed / Bn;
    }
    genNumber(r, a) {
      return r + this.gen() * (a - r);
    }
    genVec2(r, a) {
      return new D(this.genNumber(r.x, a.x), this.genNumber(r.y, a.y));
    }
    genColor(r, a) {
      return new E(this.genNumber(r.r, a.r), this.genNumber(r.g, a.g), this.genNumber(r.b, a.b));
    }
    genAny(...r) {
      if (r.length === 0)
        return this.gen();
      if (r.length === 1) {
        if (typeof r[0] == "number")
          return this.genNumber(0, r[0]);
        if (r[0] instanceof D)
          return this.genVec2(p(0, 0), r[0]);
        if (r[0] instanceof E)
          return this.genColor(x(0, 0, 0), r[0]);
      } else if (r.length === 2) {
        if (typeof r[0] == "number" && typeof r[1] == "number")
          return this.genNumber(r[0], r[1]);
        if (r[0] instanceof D && r[1] instanceof D)
          return this.genVec2(r[0], r[1]);
        if (r[0] instanceof E && r[1] instanceof E)
          return this.genColor(r[0], r[1]);
      }
    }
  }, "Ne");
  u(Ne, "RNG");
  var Vt = new Ne(Date.now());
  function jn(i) {
    return i != null && (Vt.seed = i), Vt.seed;
  }
  __name(jn, "jn");
  u(jn, "randSeed");
  function et(...i) {
    return Vt.genAny(...i);
  }
  __name(et, "et");
  u(et, "rand");
  function jt(...i) {
    return Math.floor(et(...i));
  }
  __name(jt, "jt");
  u(jt, "randi");
  function _n(i) {
    return et() <= i;
  }
  __name(_n, "_n");
  u(_n, "chance");
  function qn(i) {
    return i[jt(i.length)];
  }
  __name(qn, "qn");
  u(qn, "choose");
  function zn(i, r) {
    return i.pos.x + i.width > r.pos.x && i.pos.x < r.pos.x + r.width && i.pos.y + i.height > r.pos.y && i.pos.y < r.pos.y + r.height;
  }
  __name(zn, "zn");
  u(zn, "testRectRect");
  function Ss(i, r) {
    if (i.p1.x === i.p2.x && i.p1.y === i.p2.y || r.p1.x === r.p2.x && r.p1.y === r.p2.y)
      return null;
    let a = (r.p2.y - r.p1.y) * (i.p2.x - i.p1.x) - (r.p2.x - r.p1.x) * (i.p2.y - i.p1.y);
    if (a === 0)
      return null;
    let c = ((r.p2.x - r.p1.x) * (i.p1.y - r.p1.y) - (r.p2.y - r.p1.y) * (i.p1.x - r.p1.x)) / a, v = ((i.p2.x - i.p1.x) * (i.p1.y - r.p1.y) - (i.p2.y - i.p1.y) * (i.p1.x - r.p1.x)) / a;
    return c < 0 || c > 1 || v < 0 || v > 1 ? null : c;
  }
  __name(Ss, "Ss");
  u(Ss, "testLineLineT");
  function Ve(i, r) {
    let a = Ss(i, r);
    return a ? p(i.p1.x + a * (i.p2.x - i.p1.x), i.p1.y + a * (i.p2.y - i.p1.y)) : null;
  }
  __name(Ve, "Ve");
  u(Ve, "testLineLine");
  function Hn(i, r) {
    if (qe(i, r.p1) || qe(i, r.p2))
      return true;
    let a = i.points();
    return !!Ve(r, new re(a[0], a[1])) || !!Ve(r, new re(a[1], a[2])) || !!Ve(r, new re(a[2], a[3])) || !!Ve(r, new re(a[3], a[0]));
  }
  __name(Hn, "Hn");
  u(Hn, "testRectLine");
  function qe(i, r) {
    return r.x > i.pos.x && r.x < i.pos.x + i.width && r.y > i.pos.y && r.y < i.pos.y + i.height;
  }
  __name(qe, "qe");
  u(qe, "testRectPoint");
  function $n(i, r) {
    return i.center.dist(r) < i.radius;
  }
  __name($n, "$n");
  u($n, "testCirclePoint");
  function Yn(i, r) {
    let a = false, c = i.pts;
    for (let v = 0, g = c.length - 1; v < c.length; g = v++)
      c[v].y > r.y != c[g].y > r.y && r.x < (c[g].x - c[v].x) * (r.y - c[v].y) / (c[g].y - c[v].y) + c[v].x && (a = !a);
    return a;
  }
  __name(Yn, "Yn");
  u(Yn, "testPolygonPoint");
  var re = /* @__PURE__ */ __name(class {
    constructor(r, a) {
      __publicField(this, "p1");
      __publicField(this, "p2");
      this.p1 = r, this.p2 = a;
    }
    transform(r) {
      return new re(r.multVec2(this.p1), r.multVec2(this.p2));
    }
    bbox() {
      return V.fromPoints(this.p1, this.p2);
    }
  }, "re");
  u(re, "Line");
  var V = /* @__PURE__ */ __name(class {
    constructor(r, a, c) {
      __publicField(this, "pos");
      __publicField(this, "width");
      __publicField(this, "height");
      this.pos = r, this.width = a, this.height = c;
    }
    static fromPoints(r, a) {
      return new V(r.clone(), a.x - r.x, a.y - r.y);
    }
    center() {
      return new D(this.pos.x + this.width / 2, this.pos.y + this.height / 2);
    }
    points() {
      return [this.pos, this.pos.add(this.width, 0), this.pos.add(this.width, this.height), this.pos.add(0, this.height)];
    }
    transform(r) {
      return new se(this.points().map((a) => r.multVec2(a)));
    }
    bbox() {
      return new V(this.pos.clone(), this.width, this.height);
    }
    distToPoint(r) {
      let a = this.pos, c = this.pos.add(this.width, this.height), v = Math.max(a.x - r.x, 0, r.x - c.x), g = Math.max(a.y - r.y, 0, r.y - c.y);
      return Math.sqrt(v * v + g * g);
    }
  }, "V");
  u(V, "Rect");
  var de = /* @__PURE__ */ __name(class {
    constructor(r, a) {
      __publicField(this, "center");
      __publicField(this, "radius");
      this.center = r, this.radius = a;
    }
    transform(r) {
      return new je(this.center, this.radius, this.radius).transform(r);
    }
    bbox() {
      return V.fromPoints(this.center.sub(p(this.radius)), this.center.add(p(this.radius)));
    }
  }, "de");
  u(de, "Circle");
  var je = /* @__PURE__ */ __name(class {
    constructor(r, a, c) {
      __publicField(this, "center");
      __publicField(this, "radiusX");
      __publicField(this, "radiusY");
      this.center = r, this.radiusX = a, this.radiusY = c;
    }
    transform(r) {
      return new je(r.multVec2(this.center), r.m[0] * this.radiusX, r.m[5] * this.radiusY);
    }
    bbox() {
      return V.fromPoints(this.center.sub(p(this.radiusX, this.radiusY)), this.center.add(p(this.radiusX, this.radiusY)));
    }
  }, "je");
  u(je, "Ellipse");
  var se = /* @__PURE__ */ __name(class {
    constructor(r) {
      __publicField(this, "pts");
      if (r.length < 3)
        throw new Error("Polygons should have at least 3 vertices");
      this.pts = r;
    }
    transform(r) {
      return new se(this.pts.map((a) => r.multVec2(a)));
    }
    bbox() {
      let r = p(Number.MAX_VALUE), a = p(-Number.MAX_VALUE);
      for (let c of this.pts)
        r.x = Math.min(r.x, c.x), a.x = Math.max(a.x, c.x), r.y = Math.min(r.y, c.y), a.y = Math.max(a.y, c.y);
      return V.fromPoints(r, a);
    }
  }, "se");
  u(se, "Polygon");
  function Xn(i, r) {
    let a = Number.MAX_VALUE, c = p(0);
    for (let v of [i, r])
      for (let g = 0; g < v.pts.length; g++) {
        let T = v.pts[g], C = v.pts[(g + 1) % v.pts.length].sub(T).normal().unit(), O = Number.MAX_VALUE, M = -Number.MAX_VALUE;
        for (let I = 0; I < i.pts.length; I++) {
          let Y = i.pts[I].dot(C);
          O = Math.min(O, Y), M = Math.max(M, Y);
        }
        let U = Number.MAX_VALUE, f = -Number.MAX_VALUE;
        for (let I = 0; I < r.pts.length; I++) {
          let Y = r.pts[I].dot(C);
          U = Math.min(U, Y), f = Math.max(f, Y);
        }
        let ue = Math.min(M, f) - Math.max(O, U);
        if (ue < 0)
          return null;
        if (ue < Math.abs(a)) {
          let I = f - O, Y = U - M;
          a = Math.abs(I) < Math.abs(Y) ? I : Y, c = C.scale(a);
        }
      }
    return c;
  }
  __name(Xn, "Xn");
  u(Xn, "sat");
  var ft = 1.70158;
  var dt2 = ft * 1.525;
  var Ln = ft + 1;
  var In = 2 * Math.PI / 3;
  var Gn = 2 * Math.PI / 4.5;
  var fe = { linear: (i) => i, easeInSine: (i) => 1 - Math.cos(i * Math.PI / 2), easeOutSine: (i) => Math.sin(i * Math.PI / 2), easeInOutSine: (i) => -(Math.cos(Math.PI * i) - 1) / 2, easeInQuad: (i) => i * i, easeOutQuad: (i) => 1 - (1 - i) * (1 - i), easeInOutQuad: (i) => i < 0.5 ? 2 * i * i : 1 - Math.pow(-2 * i + 2, 2) / 2, easeInCubic: (i) => i * i * i, easeOutCubic: (i) => 1 - Math.pow(1 - i, 3), easeInOutCubic: (i) => i < 0.5 ? 4 * i * i * i : 1 - Math.pow(-2 * i + 2, 3) / 2, easeInQuart: (i) => i * i * i * i, easeOutQuart: (i) => 1 - Math.pow(1 - i, 4), easeInOutQuart: (i) => i < 0.5 ? 8 * i * i * i * i : 1 - Math.pow(-2 * i + 2, 4) / 2, easeInQuint: (i) => i * i * i * i * i, easeOutQuint: (i) => 1 - Math.pow(1 - i, 5), easeInOutQuint: (i) => i < 0.5 ? 16 * i * i * i * i * i : 1 - Math.pow(-2 * i + 2, 5) / 2, easeInExpo: (i) => i === 0 ? 0 : Math.pow(2, 10 * i - 10), easeOutExpo: (i) => i === 1 ? 1 : 1 - Math.pow(2, -10 * i), easeInOutExpo: (i) => i === 0 ? 0 : i === 1 ? 1 : i < 0.5 ? Math.pow(2, 20 * i - 10) / 2 : (2 - Math.pow(2, -20 * i + 10)) / 2, easeInCirc: (i) => 1 - Math.sqrt(1 - Math.pow(i, 2)), easeOutCirc: (i) => Math.sqrt(1 - Math.pow(i - 1, 2)), easeInOutCirc: (i) => i < 0.5 ? (1 - Math.sqrt(1 - Math.pow(2 * i, 2))) / 2 : (Math.sqrt(1 - Math.pow(-2 * i + 2, 2)) + 1) / 2, easeInBack: (i) => Ln * i * i * i - ft * i * i, easeOutBack: (i) => 1 + Ln * Math.pow(i - 1, 3) + ft * Math.pow(i - 1, 2), easeInOutBack: (i) => i < 0.5 ? Math.pow(2 * i, 2) * ((dt2 + 1) * 2 * i - dt2) / 2 : (Math.pow(2 * i - 2, 2) * ((dt2 + 1) * (i * 2 - 2) + dt2) + 2) / 2, easeInElastic: (i) => i === 0 ? 0 : i === 1 ? 1 : -Math.pow(2, 10 * i - 10) * Math.sin((i * 10 - 10.75) * In), easeOutElastic: (i) => i === 0 ? 0 : i === 1 ? 1 : Math.pow(2, -10 * i) * Math.sin((i * 10 - 0.75) * In) + 1, easeInOutElastic: (i) => i === 0 ? 0 : i === 1 ? 1 : i < 0.5 ? -(Math.pow(2, 20 * i - 10) * Math.sin((20 * i - 11.125) * Gn)) / 2 : Math.pow(2, -20 * i + 10) * Math.sin((20 * i - 11.125) * Gn) / 2 + 1, easeInBounce: (i) => 1 - fe.easeOutBounce(1 - i), easeOutBounce: (i) => i < 1 / 2.75 ? 7.5625 * i * i : i < 2 / 2.75 ? 7.5625 * (i -= 1.5 / 2.75) * i + 0.75 : i < 2.5 / 2.75 ? 7.5625 * (i -= 2.25 / 2.75) * i + 0.9375 : 7.5625 * (i -= 2.625 / 2.75) * i + 0.984375, easeInOutBounce: (i) => i < 0.5 ? (1 - fe.easeOutBounce(1 - 2 * i)) / 2 : (1 + fe.easeOutBounce(2 * i - 1)) / 2 };
  var xe = /* @__PURE__ */ __name(class extends Map {
    constructor(...r) {
      super(...r);
      __publicField(this, "lastID");
      this.lastID = 0;
    }
    push(r) {
      let a = this.lastID;
      return this.set(a, r), this.lastID++, a;
    }
    pushd(r) {
      let a = this.push(r);
      return () => this.delete(a);
    }
  }, "xe");
  u(xe, "IDList");
  var W = /* @__PURE__ */ __name(class {
    constructor() {
      __publicField(this, "handlers", new xe());
    }
    add(r) {
      let a = this.handlers.pushd((...v) => {
        c.paused || r(...v);
      }), c = { paused: false, cancel: a };
      return c;
    }
    addOnce(r) {
      let a = this.add((...c) => {
        a.cancel(), r(...c);
      });
      return a;
    }
    next() {
      return new Promise((r) => this.addOnce(r));
    }
    trigger(...r) {
      this.handlers.forEach((a) => a(...r));
    }
    numListeners() {
      return this.handlers.size;
    }
  }, "W");
  u(W, "Event");
  var oe = /* @__PURE__ */ __name(class {
    constructor() {
      __publicField(this, "handlers", /* @__PURE__ */ new Map());
    }
    on(r, a) {
      return this.handlers.get(r) || this.handlers.set(r, new W()), this.handlers.get(r).add(a);
    }
    onOnce(r, a) {
      let c = this.on(r, (...v) => {
        c.cancel(), a(...v);
      });
      return c;
    }
    next(r) {
      return new Promise((a) => {
        this.onOnce(r, a);
      });
    }
    trigger(r, ...a) {
      this.handlers.get(r) && this.handlers.get(r).trigger(...a);
    }
    remove(r) {
      this.handlers.delete(r);
    }
    clear() {
      this.handlers = /* @__PURE__ */ new Map();
    }
    numListeners(r) {
      var _a, _b;
      return (_b = (_a = this.handlers.get(r)) == null ? void 0 : _a.numListeners()) != null ? _b : 0;
    }
  }, "oe");
  u(oe, "EventHandler");
  function _t(i, r) {
    let a = typeof i, c = typeof r;
    if (a !== c)
      return false;
    if (a === "object" && c === "object") {
      let v = Object.keys(i), g = Object.keys(r);
      if (v.length !== g.length)
        return false;
      for (let T of v) {
        let R = i[T], C = r[T];
        if (!(typeof R == "function" && typeof C == "function") && !_t(R, C))
          return false;
      }
      return true;
    }
    return i === r;
  }
  __name(_t, "_t");
  u(_t, "deepEq");
  function Cs(i) {
    let r = window.atob(i), a = r.length, c = new Uint8Array(a);
    for (let v = 0; v < a; v++)
      c[v] = r.charCodeAt(v);
    return c.buffer;
  }
  __name(Cs, "Cs");
  u(Cs, "base64ToArrayBuffer");
  function Kn(i) {
    return Cs(i.split(",")[1]);
  }
  __name(Kn, "Kn");
  u(Kn, "dataURLToArrayBuffer");
  function pt(i, r) {
    let a = document.createElement("a");
    a.href = r, a.download = i, a.click();
  }
  __name(pt, "pt");
  u(pt, "download");
  function qt(i, r) {
    pt(i, "data:text/plain;charset=utf-8," + r);
  }
  __name(qt, "qt");
  u(qt, "downloadText");
  function Qn(i, r) {
    qt(i, JSON.stringify(r));
  }
  __name(Qn, "Qn");
  u(Qn, "downloadJSON");
  function zt(i, r) {
    let a = URL.createObjectURL(r);
    pt(i, a), URL.revokeObjectURL(a);
  }
  __name(zt, "zt");
  u(zt, "downloadBlob");
  function Ht(i) {
    return i.match(/^data:\w+\/\w+;base64,.+/);
  }
  __name(Ht, "Ht");
  u(Ht, "isDataURL");
  var Jn = (() => {
    let i = 0;
    return () => i++;
  })();
  var ze = /* @__PURE__ */ __name(class {
    constructor() {
      __publicField(this, "dts", []);
      __publicField(this, "timer", 0);
      __publicField(this, "fps", 0);
    }
    tick(r) {
      this.dts.push(r), this.timer += r, this.timer >= 1 && (this.timer = 0, this.fps = Math.round(1 / (this.dts.reduce((a, c) => a + c) / this.dts.length)), this.dts = []);
    }
  }, "ze");
  u(ze, "FPSCounter");
  var pe = /* @__PURE__ */ __name(class {
    constructor(r, a) {
      __publicField(this, "time");
      __publicField(this, "action");
      __publicField(this, "finished", false);
      __publicField(this, "paused", false);
      this.time = r, this.action = a;
    }
    tick(r) {
      return this.finished || this.paused ? false : (this.time -= r, this.time <= 0 ? (this.action(), this.finished = true, this.time = 0, true) : false);
    }
    reset(r) {
      this.time = r, this.finished = false;
    }
  }, "pe");
  u(pe, "Timer");
  var Zn = "data:image/png;base64,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";
  var Wn = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD0AAAA1CAYAAADyMeOEAAAAAXNSR0IArs4c6QAAAoVJREFUaIHdm7txwkAQhheGAqACiCHzOKQDQrqgILpwSAeEDBnEUAF0gCMxZ7G72qce/mec2Lpf9+3unaS78wgSNZ8uX5729+d1FNWXUuGmXlBOUUEIMckEpeQJgBu6C+BSFngztBR2vd+ovY+7g+p6LbgaWgJrAeUkDYIUXgXdBBwNi6kpABJwMTQH3AZsXRR8GHTfgEth8E3gjdAUcNewpbTgY85sCMCUuOokozE0YM0YRzM9NGAAXd8+omAF5h4lnmBRvpSnZHyLoLEbaN+aKB9KWv/KWw0tAbbANnlG+UvB2dm77NxxdwgBpjrF/d7rW9cbmpvio2A5z8iAYpVU8pGZlo6/2+MSco2lHfd3rv9jAP038e1xef9o2mjvYb2OqpqKE81028/jeietlSEVO5FRWsxWsJit1G3aFpW8iWe5RwpiCZAk25QvV6nz6fIlynRGuTd5WqpJ4guAlDfVKBK87hXljflgv1ON6fV+4+5gVlA17SfeG0heKqQd4l4jI/wrmaA9N9R4ar+wpHJDZyrrfcH0nB66PqAzPi76pn+faSyJk/vzOorYhGurQrzj/P68jtBMawHaHBIR9xoD5O34dy0qQOSYHvqExq2TpT2nf76+w7y251OYF0CRaU+J920TwLUa6inx6OxE6g80lu2ux7Y2eJLF/rCXE6zEPdnenk9o+4ih9AEdnW2q81HXl5LuU6OTl2fXUhqganbXAGq3g6jJOWV/OnoesO6YqqEB/GdNsjf7uHtwj2DzmRNpp7iOZfm6D9oAxB6Yi1gC4oIYeo4MIPdopEQRB+cAko5J1tW386HpB2Kz1eop4Epdwls/kgZ1sh8gZsEjdcWkr//D8Qu3Z3l5Nl1NtAAAAABJRU5ErkJggg==";
  var Os = {};
  ys(Os, { default: () => $t });
  var $t = Us("SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA//tQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAASAAAeMwAUFBQUFCIiIiIiIjAwMDAwPj4+Pj4+TExMTExZWVlZWVlnZ2dnZ3V1dXV1dYODg4ODkZGRkZGRn5+fn5+frKysrKy6urq6urrIyMjIyNbW1tbW1uTk5OTk8vLy8vLy//////8AAAAATGF2YzU4LjEzAAAAAAAAAAAAAAAAJAQKAAAAAAAAHjOZTf9/AAAAAAAAAAAAAAAAAAAAAP/7kGQAAANUMEoFPeACNQV40KEYABEY41g5vAAA9RjpZxRwAImU+W8eshaFpAQgALAAYALATx/nYDYCMJ0HITQYYA7AH4c7MoGsnCMU5pnW+OQnBcDrQ9Xx7w37/D+PimYavV8elKUpT5fqx5VjV6vZ38eJR48eRKa9KUp7v396UgPHkQwMAAAAAA//8MAOp39CECAAhlIEEIIECBAgTT1oj///tEQYT0wgEIYxgDC09aIiE7u7u7uIiIz+LtoIQGE/+XAGYLjpTAIOGYYy0ZACgDgSNFxC7YYiINocwERjAEDhIy0mRoGwAE7lOTBsGhj1qrXNCU9GrgwSPr80jj0dIpT9DRUNHKJbRxiWSiifVHuD2b0EbjLkOUzSXztP3uE1JpHzV6NPq+f3P5T0/f/lNH7lWTavQ5Xz1yLVe653///qf93B7f/vMdaKJAAJAMAIwIMAHMpzDkoYwD8CR717zVb8/p54P3MikXGCEWhQOEAOAdP6v8b8oNL/EzdnROC8Zo+z+71O8VVAGIKFEglKbidkoLam0mAFiwo0ZoVExf/7kmQLgAQyZFxvPWAENcVKXeK0ABAk2WFMaSNIzBMptBYfArbkZgpWjEQpcmjxQoG2qREWQcvpzuuIm29THt3ElhDNlrXV///XTGbm7Kbx0ymcRX///x7GVvquf5vk/dPs0Wi5Td1vggDxqbNII4bAPTU3Ix5h9FJTe7zv1LHG/uPsPrvth0ejchVzVT3giirs6sQAACgQAAIAdaXbRAYra/2t0//3HwqLKIlBOJhOg4BzAOkt+MOL6H8nlNvKyi3rOnqP//zf6AATwBAKIcHKixxwjl1TjDVIrvTqdmKQOFQBUBDwZ1EhHlDEGEVyGQWBAHrcJgRSXYbkvHK/8/6rbYjs4Qj0C8mRy2hwRv/82opGT55fROgRoBTjanaiQiMRHUu1/P3V9yGFffaVv78U1/6l/kpo0cz73vuSv/9GeaqDVRA5bWdHRKQKIEAAAAoIktKeEmdQFKN5sguv/ZSC0oxCAR7CzcJgEsd8cA0M/x0tzv15E7//5L5KCqoIAAmBFIKM1UxYtMMFjLKESTE8lhaelUyCBYeA2IN4rK1iDt//+5JkEgAkZzlVq29D8DJDWo0YLLARwPFZrL0PyLsUazTAlpI+hKSx01VSOfbjXg0iW9/jVPDleLJ15QQA4Okdc5ByMDFIeuCCE5CvevwBGH8YibiX9FtaIIgUikF42wrZw6ZJ6WlHrA+Ki5++NNMeYH1lEkwwJAIJB4ugVFguXFc20Vd/FLlvq1GSiSwAFABABABA47k6BFeNvxEQZO9v3L1IE4iEVElfrXmEmlyWIyGslFA55gH/sW7////o9AAFIBIIAAIUMzYTTNkgsAmYObfwQyzplrOmYvq0BKCKNN+nUTbvD7cJzvHxrEWG5QqvP8U1vFx6CwE8NoRc2ADBeEb/HoXh60N7ST8nw9QiiGoYvf/r6GtC9+vLwXHjaSkIp3iupC5+Nii81Zhu85pNYbFvrf+UFThDOYYY26off+W6b//73GTiN9xDfl0AAwBAiMBO8qsDBPOZtuT/dTbjVVbY/KSGH6ppHwKv/6X+s8gUCN/lODzv////GQAGAMQAADlXAUCBJiY0wFQZusYQOaQzaTwDBTcx0IvVp8m7uxKp//uSZBMCBHRI1eNPLHAyxNqWGeoYUIEnWYyxD8DUFSn0l6iojcd+oEOkzV6uWqyHNzjqmv+7V5xGUfY9yEmbziTzjRscm9OqFQp1PKFrqu3PX/7YuGtDU6bt0OUTpv38rdc+37dVDQLKUchaJ853E9edNDGqWwsYz1VoiSStEJtZvw6+sNqFWqaIXJjQCGAAGWAYVwmag/x3BRJw1wYF7IzVqDcNzn85d//FzK7IgwbQwccLoB4AsF8Nj/1ESRUAAVJwAFh0YOFEhmSJEHKQRDyhszgLUpHIgFrb5cySFg5jv10ImlYuvaaGBItfXqnNPmic+XNkmb5fW49vdhq97nQMQyGIlM2v8oQSrxKSxE4F1WqrduqvuJCRof1R7Gsre9KszUVF1/t3PzH2tnp+iSUG3rDwGNcDzxCGA8atuQF0paZAAkAhAQAEAC240yJV+nJgUrqq8axAYtVpYjZyFGb13/17jwiClQDaCdytZpyHHf1R/EG/+lUAgAAAChhmJvioVGGBCFgqdpsGAkUUrbTstwTCJgLQpFIsELW7t/68Iv/7kmQUgAQ9NFO9aeAAPAU6RKwUABClY2e5hoARGpDvPydCAsY8WO10fSvUOnfT98+n/l/6/+hxslhQ1DEOaevNKGocvIYba8WJpaP/15pX0NQ1DUNn/////k6lPp/N61rBi8RJFfERV3IgrqDsJA64sjCoKxDDQ9xEcWDpMBDwVFDIAEIAAzryxsjGi4q/oWpixKjhklAF4pUrDPjFhFVupDFZ/t/t0YPAygUBhADPR/KLCKJ8h2Oxhpxz/zNRAAFl0MAZLAYEAiVbEiz36LSgZ5QoQVat69KNy8FyM5Z80ACHAzgnISEkxUSJIDyBSwi5KF4mjBl4xJdbrG9ComLrL8YATiodhQKCkj6ROdyg1y5XmZlvMVmpJzYppJDwLi/Lp9vT3TfmimOGpuezi2U/9FNav0zX9Oja2r//8+hvuihuQAAMAVmqFgAgCcuboAEAAAUcqy8ca0BHBmwbFkED0CNA1YYDPkhcQrRJxcY3BzfxxltAz9vX62Xl3plAzWmRO+FkZyH///1qAAEjQBAACUpgU5o2AIBmFBGMamrGg0b/+5JkC4ADxyLWb2ngAEEkGofsoACP7U1JLaxTkOqFaKhspGgnW3SGC56ZgUJGCRnLOmIJAkuNBgvwU4Ocf8CJK9UsafH9/Frj///365XSoME+DZMw5UNjrMbVoeIj9EL91IuQ5KHyl5V2LCpdIdESgafOHxVGkAlkHuakmix/gN8+BP/sKguLAAoAtUjtvaoeEADwr3OK11E4KBlojgeQNQBJ4MvCAd/4t/xMMzeLhQGQ1//6tQu5BaBOGCT6U4aafvXZ//4iAPAAAAbLkgIlQmMSLA2H1CVNAlWwyVvKIQIxOSK1NWxs4MBUATlKrAkIMPAjCAdS6MVFzuURWa/+/qQWEGsA6EEpiBEJb9Q21lAHoBoD0B6aAPhyt+bG3muoXIN3RLadXxUfr/ohjGFF/p97eqNI5noKAqYLNPpUTDSI9/TmA6B+YAAADgA0Y4lxTW1SQfOQuDDDI0KTTuIrF5qoJrUFhUFAsg+AT2hbkaRZYGIjBKVDIa5VgNN/9P/rCDsBJbYJRKpCA1ArAkigIeYY61AjE+jubyiZFZ3+L789//uSZBCABHVj2entNmw1JXokLycYEFTFVa0wz4DYjKs08J2Q+r4n3lgbWaaMwMLEjFW88F39brqPF83cv1mCSJeY3Q2uiQxhBJxCBeR1D2LQRsYQcZUTzdNll8+OwZBsIwSgl45ymaHX603Mz7JmZuvt71GDTN66zev/+cLn/b5imV8pAHkg61FIJchBSG+zycgAZgADD6F1iQQRXRWmWS6bDIIgyBCZEcdl/KgXGmVKFv/vl8ry/5bLypf//U5jhYDhL9X/pAA0AKBIAAKgGtGXGGWJgEoF2JNsHlKfSKLRhGBAgIuWZKIJCFpF1VBhkB+EfzEyMUJdWuMrEZoPZ5BfF3/Nu62riIdjoO4AAKD2sTrDmpZZaYysf/810TitAVvn9xtFucieiaEy54YqiIO6RqkGAm5wVO0bFB0sDTdNxYGekKktR4KAAfAwUIgI8Ci6aXgtwbhPWAC+CKExAFydNtYGXNZoQjUsXv/9vKjgmdwieb+h7kHvPoc//0FaCACAATKFC4Y9ammklidbaiJNPBhGWTNhFSgdtalK12lpl//7kmQRAFN2NFI7TBvwNKNaTRsFGBWdfV2tPNcYvBHpgPKJsc8IUcTCxY3HSvUVNTWe/Z3YWlrJ0yrNRUiT19aprA7E+mPP+ZmC3/CsheOJXhc/9VJb3UZnphUBcqZUZQth1i3XqtPYu2Sy1s8DV9ZYACAAASAAHgFkQcOqgB5utFHFh3kSi4USs0yk4iOClREmjvdG+upaiLcRA6/9QGbOfxF/8sEAQAVG0G07YFMihKR4EXJCkRdX9isueLqUMRAQdhDZmv3KeR0nPqRVrZmSIXDt+BBSR7qqbKQcB98W9qiMb55preHIStxFWPE4lAyI+BKz2iSxonpvMR5DgKxTH6vGGXAbYCaAnJUW4W07EesQqbfqdbo4qNnPxSpn1H8eahszc/y9//dn1V7D/OYpn1szQKAPXTMlO/rO//u7JriJXbld7aP33v6RXYg/COIDzTWkTspg6Ay1YaDSwKxrP/LfIikHjmO871POf/kEAseAgoPEi9/0ZziNwfxVKy9qAEGEEAAq1EcOamDEGHAA0iao8k31rz2MiLNEik6VQ37/+5JkEAgEYU5WU0M3MDjDe0o9IjiOzSVM7aCzEM2GqXD8pFB0zxMcHCQNHtZD+R+pMWZxOJ/otEZTvVN/MeU12xTVcL+f2YaiNJTVoPd6SvzEnKel5GXOzEaazgdChnP2jOAwpfyRpVlQwoJBwpN1L1DL////6TVWcoepf7CVWrpEWiym5lR5U0BSMlxQC4qByOyQIAEuJfIriWixDqRgMfVZWuvRowjR9BzP5lZlT/+YG50CsSBG////////liXDQVMxEaBkbzKAAACnDIAstY7iK7gGSF7SIDexaTtPOHABk9YcmJEACmo50pgWal22etroBpYoVqtU6OPqvlf0c4QCAfLk9P/FJs4KCQMf6ECZyA6BwqqyJ0rMYj56k1/UlTIx1V3Rt5NF71D4qlptDC8VMgQVHFDlQnDFi06qQgKQAAIK4TxxJGFGYJuZNGXRdpq7IW/DYpPIQRFJLAc+qn1E0XYdOkQVJT+z8Lvff//8vbKAWTIBBUUdM6cOhlDry7x4dAkJXIBhbO3HSMMMGBQ9K9/JNfu09PjTO64wYEcR//uSZBeABP5g11NPRVwzQ4r8PMJVj7j9UU2wUwDPjeq0Z5w675D9+uDdL2QsuIry2lZtwn/pJYyRRjANEOQxNWw8mU7Tq+vueV7JrX/Pg7VIkEuZT5dwd85MVoq5lpStNICkBAcFR88//58KO8Zjt2PIGxWl1cVfXeNGH18SReNT//hYliWtQuNluxyxONbm4U+lpkAgpyE7yAIYUjIaqHmARJ0GQTtmH60xdwFp/u253XBCxD0f/lBcguCALn//Y5nqEv//1h4BAAwgAA5gcHmpIplgeW9fAOM6RFZUywrsGAiRmKkanQnCFBjYoPDS7bjwtPTkVI8D/P8VVLcTUz65n7PW2s3tNYHgEul4tBaIz0A9RgJAyAMI4/i0fpQKjhX9S+qIa0vmc4CZit/0/3UTDGeKNpkk0nu2rUE2ag8WErhE/kgAiQCJKQEYBA5Wn6CxHoIUh6dQ46nLIuwFk4S/LaDQxXu7Yf/pf//lwJB0S/Ff/4C///EiBEiAAAIAMnpngiIABAdMpKigkXaUwhLEGvpiofmXW57h2XAZO3CMRv/7kmQUAEOHQlHraRTQMkQp6GWFZBTVU1lNPTPYyIyocYeUoNgLBWAs1jPkTv/tXBaeZ/tbD/nAGP8/xT0SNEi5zof0KIVEzVe9r5lZOol7kyaXMYS4J/ZS3djp//UaeVyR0mUMlTgfz8XqMzIEgAQQ6UNQ1DSE0/C16OvyaocF4ijAGFci0FSYqCUSaWs6t9F6/699DKvMgMoK1//kSbvxtyBN27I7mdXgNMAW75sRU1UwUHYG5axI2tFIFpkgx7nnK+1JmRKjqeAd5Ph0QAL4QAnirmiPlg0yBDlrb/d3ngtA65rb999+8vdDCfnJuJAYIl285zklpVbrKpk1PEzrOY9NZUgyz6OiOsKt5qG/g2ibxSZ+/eTI/NB8n4ev//n2nIw85GAdwuJL7kYnnAbpcf1RBKH6b2U4RWP8dmWH5snsAFYwADBgAopKdzFJq4Jlmotloh/m4QpTSvJRE3nYZHephoqBhVf+P7vQ9BPlwZCP+3//+hdy5uUwS3LDEgQx4cdIgvDEBR1YqymCsSbKzRy2aQmSv+AAcAgAkvzPfuX/+5JkFQAj6VFX00Zr5DllOhhgpn4MmSs+zSRRiO8U5tWklYgSLKfs+Xheb/+6WaAQCKTztNeJ382MUltZNnjSJoFrCqB6C4mFcwJpJD4Oc8dLDXMTh9k1/rmTopfzqv9AvHWfOuZJlEvHSVMjyjpkVucKSzxJVQBgAAIo8DGqRdYCXPckFYg+dH9A/qUyljrtpxH9RJX/Z3Vv6uFkPg4M2jf3CL09QrwOrMt69n//8UFEAAMHWdhg1CcjyVBwiArOYlDL5NPY6x8ZLFBCGi6SVTKX5nqdSEFjebnv2zHdt0dj6xvORsSFzwqRNTJSZIrrlpXcURNL9WW7krBgr5jPMaGcvJ5v0N1s19CV7+7fvQfjySX2QECWUgKgeJCIif4WRBZ/6archpDkzE7oWctK3zEHP9Smeai8oeHkM6AK7pGjtOgeFv40ugqNd+Iv///uAZAMgAAAUeSWhLPpdwk3iXpBw43hOVIp1gliUOSaeZcZeZhLAH9TtD56wUpBduzLF5v5qViTH6o+I0+8Z1asaLgKVAohlpB72DgAQBQxEd3g//uSZCiAA6k0UdMPQfA+xcnBYON8E3WDVU0w1ZjPDSmo8IniHAFDNnkXF3B94gicH5d8MFw+IHZwufxOf/8gsHw+XrD4Jn8T4RAyQiABNBQg/3giEWuZ42mVFB3kkXNjhqBg1CghEUbN3/7/KBhyqNueef/MIDBClP3YRnKLiIlEFzf//0g+4zKpRIKTpqQgUtnHGFw6RSLN421iGcYapqFxny/capK9r9v+2BSy/RU1yZxa2eGaWK07ijfcxeiO3iuHJvjbXzts+Ny+XyFnsne1h0qG4mAaN6xRGaLVxKPlrri0Bg9oXGyxcw8JRBPkUzC8v451vVd9liSX85JMrmkVNwxOCwUg298////7ks//L409/hwMRIozKiIckXtjzDaAMTBcAACAwLGargPSEgEJZN/EFjfF/VKgaMYKMbwtf/T0UCGGfjfOAZ2frCigYdwh/+sGlQBxhCAAAUHkDPqOdmmUdAVYl3IhrEfR8qZFjLYEPOyzVGvm6lNUJCk2PNazwFxaijk+ZEaiTehoJGuDh6zN/EVP8BCLD/88BoY7Xv/7kmQlgBNmMtNTL0FwOGZJ/WHiKAyhJU+soE3A3JnmAa2oaCIru/+RrEHMTphxQ0X/LzoVy4gKhYl6ZUlklW7CLRVoYmgABwCRMAAMA/poCiEEYLsBVodWcVZ18+CcAfH165U4Xgh7/X1/BAQF6GN/BwQ/+D9S9P6wII//CoANYFYCBAKlGQDKhVjjylKARw2mPAtp8JjcQHggQswVsOEKsF6AIBWvmpIFdSZvRVv/LHWEy0+txMxu+VK9gEqG5pWf6GNGU4UBVkfd+bsj/6lZE0fkOpAqAOvyUO9oo+IiEtcLKOGzhhSGa4MYINHWoQsFr8zzmow0tRILkqz5/+vFxl/oZX/+qGW//xiLjR3xcGn//0QLkTQJh1UA8MAQAEXC/YxODKTDUEhrASs1512GRp+dRFFdTWIRaOXrve1eNjTNpreqQYrC9NBlQc1f8YO2po8bnH6qffuRvU7taiNF3baokE0YpmjRCHRclWBb9NCHKHpERwHRG3pqgXklq4sBpLjGvmekg8Y7SjM1FZopIM8IhB6dtMr8aKsdovh4FW//+5JkQ4CjTDdSU0gtIDiE+YBrKgwNbSVJTCBPwN8N5ZW8NKDnhRB8AXCm//KAsBUCwKU//oJQnET+UP3/zpYRocAAABJkVzzIuoLGEaDoxfsNva12EUdxhJMGFQioSg8GxKsLm8kWEmExJuNidarkk+OTXc0i2OZEq2v+tZr/MDZRS0I7LfRpHdlsiF6m/mEjk+XlK10UqtKYUwNgMx24hUtCJLfpM3ExUeKDYjClgZAzAjQ0qlNQBTsGpk9zSRkCiKkRGp572VXsPYChGvxhAuYkDYZK//jSRgto2mTf6+PJqgAAgIAAAACYZE6aZOHhYkYlcbpeYQq1RgLO4U8TIlL1sGw+iKZi5Kzc/bKT0yXrIUMES89RCWy8oWlxqIQlKANLFpT/KjUrK+UCYbZqGnjVj29aO5dzofWAskRX5eJWPi4kf/aRVjy3Wlyg2AnMYIDSTLwZUTASIzflPWUwwlUnIFMnGiyABeaXJcN91PmQJCLzmvUJkFOHCrX/+6O///IHnT4tT9YYBoNMQ09GfKIErwdwChNz1Qy5+5S/wWeY//uSZF+C03UyT2tMO0A3RRkhY20KzQjDMszhA8DjlGOBp5y4ZCS3ica52GIGiryv7FAaSDVZSXKFTiir+GvGiuK4rjgwPVTddso+W/42a4ueJJHDYtfj6YoKknnjzRgKA0fBIRZOSsprJqnoNN73ps/Z9DVgbKNbMGmRzrYBMAZCPUANkAZQ0syAC2ubK1NF90+WoesBpnhY8qwVDkNb/5Uof6//418TgElCSgAIgyAAQBHEmiaQFPIRmfAMELffpo0IflyEuAAQnSnKvwTlVlnIgOAAGS3P3IydjXPSh/CaVRqpSNCjQqDvPM+fLcuN+WgqNix6CoHomUWTT86JjziRSZ3yjnq+dIldKPU11KUuf6wAASMAAJxE+MlyktgE9UGSxjEx6RR0v1s9bWZ+EJSrGtjqUIhklG3J8eLRn/2U/nv7f///+7/6gBQgEAMUijVMwweWWMyYM/PLXuc7DptIQmBARMRCxXjEIcTNDQgSSeHpUNXO7dRSOllJPvnY7yzaO1hmUjsKvHe99fOxrabMX7mGTi5tsNkZVZLndzxse//7kmR7ABM2O0pbKTvQN4NI+WGFPA2ZESs1pYAAvA0jVrJwAHfbr/c6//vW790dzX36QNBRlDv/6QQAU3V64yUgBEAYc/lI8e5bm+Z9+j+4aaj4tFrb//iker/4a12b/V//q//9v+7vAEAAAAMqZTGd5gL4f54o6ZebKNrR/zWVYUEVYVVv8BuAV2OUT+DUQgkJ8J1Ey4ZbFCiAwgwzMSdHV4jQR+OoPWEASaPkyYq+PsQFFJCsEEJtOiUjI/+GRhtC2DnizTMXATJig9Ey/kAJMrkHGYJ8gpLjmJOYoskpav+ShRJInyGGZVJMihDi6pIxRZJJel/8iZPkYiREnyKE0akTL5QNSqT5iiySS9Ja2SV//5ME0ak//+4KgAAABgQBAADAMDgYCAEgCteQ0fZH6+ICXA357+MPfhR/+ywRf/U///LVTEFNRTMuMTAwVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+5JknQAFoWhGLm5gBClBmT3GiAAAAAGkHAAAIAAANIOAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV");
  var er = "data:image/png;base64,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";
  var tr = "data:image/png;base64,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";
  var Ms = "3000.0.0-alpha.12";
  var nr = { ArrowLeft: "left", ArrowRight: "right", ArrowUp: "up", ArrowDown: "down", " ": "space" };
  var Fs = /* @__PURE__ */ new Set([" ", "ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Tab"]);
  var rr = ["left", "middle", "right", "back", "forward"];
  var ir = " !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~";
  var sr = 0;
  var or = 3;
  var Bs = 0;
  var Ls = 3;
  var Is = -1200;
  var Gs = 1200;
  var gt = "topleft";
  var ar = 64;
  var Vs = "happy";
  var wt = "monospace";
  var ks = 36;
  var ur = 64;
  var vt = 1024;
  var cr = 0.1;
  var Ns = 1;
  var dr = [{ name: "a_pos", size: 3 }, { name: "a_uv", size: 2 }, { name: "a_color", size: 4 }];
  var bt = dr.reduce((i, r) => i + r.size, 0);
  var fr = 2048;
  var lr = fr * 4 * bt;
  var hr = fr * 6;
  var js = `
attribute vec3 a_pos;
attribute vec2 a_uv;
attribute vec4 a_color;

varying vec3 v_pos;
varying vec2 v_uv;
varying vec4 v_color;

vec4 def_vert() {
	return vec4(a_pos, 1.0);
}

{{user}}

void main() {
	vec4 pos = vert(a_pos, a_uv, a_color);
	v_pos = a_pos;
	v_uv = a_uv;
	v_color = a_color;
	gl_Position = pos;
}
`;
  var _s = `
precision mediump float;

varying vec3 v_pos;
varying vec2 v_uv;
varying vec4 v_color;

uniform sampler2D u_tex;

vec4 def_frag() {
	return v_color * texture2D(u_tex, v_uv);
}

{{user}}

void main() {
	gl_FragColor = frag(v_pos, v_uv, v_color, u_tex);
	if (gl_FragColor.a == 0.0) {
		discard;
	}
}
`;
  var Yt = `
vec4 vert(vec3 pos, vec2 uv, vec4 color) {
	return def_vert();
}
`;
  var Xt = `
vec4 frag(vec3 pos, vec2 uv, vec4 color, sampler2D tex) {
	return def_frag();
}
`;
  var qs = /* @__PURE__ */ new Set(["id", "require"]);
  var zs = /* @__PURE__ */ new Set(["add", "update", "draw", "destroy", "inspect", "drawInspect"]);
  function Hs(i) {
    i.requestFullscreen ? i.requestFullscreen() : i.webkitRequestFullscreen && i.webkitRequestFullscreen();
  }
  __name(Hs, "Hs");
  u(Hs, "enterFullscreen");
  function $s() {
    document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullScreen && document.webkitExitFullScreen();
  }
  __name($s, "$s");
  u($s, "exitFullscreen");
  function Ys() {
    return document.fullscreenElement || document.webkitFullscreenElement;
  }
  __name(Ys, "Ys");
  u(Ys, "getFullscreenElement");
  function tt(i) {
    switch (i) {
      case "topleft":
        return p(-1, -1);
      case "top":
        return p(0, -1);
      case "topright":
        return p(1, -1);
      case "left":
        return p(-1, 0);
      case "center":
        return p(0, 0);
      case "right":
        return p(1, 0);
      case "botleft":
        return p(-1, 1);
      case "bot":
        return p(0, 1);
      case "botright":
        return p(1, 1);
      default:
        return i;
    }
  }
  __name(tt, "tt");
  u(tt, "anchorPt");
  function Xs(i) {
    switch (i) {
      case "left":
        return 0;
      case "center":
        return 0.5;
      case "right":
        return 1;
      default:
        return 0;
    }
  }
  __name(Xs, "Xs");
  u(Xs, "alignPt");
  function Kt(i) {
    return i.createBuffer(1, 1, 44100);
  }
  __name(Kt, "Kt");
  u(Kt, "createEmptyAudioBuffer");
  var He = /* @__PURE__ */ __name(class {
    constructor() {
      __publicField(this, "pressed", /* @__PURE__ */ new Set([]));
      __publicField(this, "pressedRepeat", /* @__PURE__ */ new Set([]));
      __publicField(this, "released", /* @__PURE__ */ new Set([]));
      __publicField(this, "down", /* @__PURE__ */ new Set([]));
    }
    update() {
      this.pressed.clear(), this.released.clear(), this.pressedRepeat.clear();
    }
    press(r) {
      this.pressed.add(r), this.pressedRepeat.add(r), this.down.add(r);
    }
    pressRepeat(r) {
      this.pressedRepeat.add(r);
    }
    release(r) {
      this.down.delete(r), this.pressed.delete(r), this.released.add(r);
    }
  }, "He");
  u(He, "ButtonState");
  var yo = u((i = {}) => {
    let r = [], a = (() => {
      var _a, _b, _c;
      let e = (_a = i.root) != null ? _a : document.body;
      e === document.body && (document.body.style.width = "100%", document.body.style.height = "100%", document.body.style.margin = "0px", document.documentElement.style.width = "100%", document.documentElement.style.height = "100%");
      let t = (_b = i.canvas) != null ? _b : (() => {
        let b = document.createElement("canvas");
        return e.appendChild(b), b;
      })(), n = (_c = i.scale) != null ? _c : 1, s = !(i.width && i.height && !i.stretch && !i.letterbox), h = t.parentElement.offsetWidth, o = t.parentElement.offsetHeight;
      s ? (t.width = h, t.height = o) : (t.width = i.width * n, t.height = i.height * n);
      let l = t.width, d = t.height, m = i.pixelDensity || window.devicePixelRatio;
      t.width *= m, t.height *= m;
      let w = [`width: ${l}px`, `height: ${d}px`, "outline: none", "cursor: default"];
      return i.crisp && (w.push("image-rendering: pixelated"), w.push("image-rendering: crisp-edges")), t.style.cssText = w.join(";"), t.tabIndex = 0, { canvas: t, canvas2: t.cloneNode(), pixelDensity: m, stretchToParent: s, lastParentWidth: h, lastParentHeight: o, keyState: new He(), mouseState: new He(), virtualButtonState: new He(), charInputted: [], isMouseMoved: false, mouseStarted: false, mousePos: p(0, 0), mouseDeltaPos: p(0, 0), time: 0, realTime: 0, skipTime: false, dt: 0, numFrames: 0, isTouchScreen: "ontouchstart" in window || navigator.maxTouchPoints > 0, loopID: null, stopped: false, paused: false, fpsCounter: new ze() };
    })(), c = a.canvas.getContext("webgl", { antialias: true, depth: true, stencil: true, alpha: true, preserveDrawingBuffer: true });
    class v {
      constructor(t, n, s = {}) {
        __publicField(this, "src", null);
        __publicField(this, "glTex");
        __publicField(this, "width");
        __publicField(this, "height");
        this.glTex = c.createTexture(), r.push(() => this.free()), this.bind(), t && n && c.texImage2D(c.TEXTURE_2D, 0, c.RGBA, t, n, 0, c.RGBA, c.UNSIGNED_BYTE, null), this.width = t, this.height = n;
        let h = (() => {
          var _a;
          switch ((_a = s.filter) != null ? _a : i.texFilter) {
            case "linear":
              return c.LINEAR;
            case "nearest":
              return c.NEAREST;
            default:
              return c.NEAREST;
          }
        })(), o = (() => {
          switch (s.wrap) {
            case "repeat":
              return c.REPEAT;
            case "clampToEdge":
              return c.CLAMP_TO_EDGE;
            default:
              return c.CLAMP_TO_EDGE;
          }
        })();
        c.texParameteri(c.TEXTURE_2D, c.TEXTURE_MIN_FILTER, h), c.texParameteri(c.TEXTURE_2D, c.TEXTURE_MAG_FILTER, h), c.texParameteri(c.TEXTURE_2D, c.TEXTURE_WRAP_S, o), c.texParameteri(c.TEXTURE_2D, c.TEXTURE_WRAP_T, o), this.unbind();
      }
      static fromImage(t, n = {}) {
        let s = new v(0, 0, n);
        return s.bind(), c.texImage2D(c.TEXTURE_2D, 0, c.RGBA, c.RGBA, c.UNSIGNED_BYTE, t), s.width = t.width, s.height = t.height, s.unbind(), s.src = t, s;
      }
      update(t, n, s) {
        this.bind(), c.texSubImage2D(c.TEXTURE_2D, 0, t, n, c.RGBA, c.UNSIGNED_BYTE, s), this.unbind();
      }
      bind() {
        c.bindTexture(c.TEXTURE_2D, this.glTex);
      }
      unbind() {
        c.bindTexture(c.TEXTURE_2D, null);
      }
      free() {
        c.deleteTexture(this.glTex);
      }
    }
    __name(v, "v");
    u(v, "Texture");
    let g = (() => {
      var _a;
      let e = Ut(Yt, Xt), t = v.fromImage(new ImageData(new Uint8ClampedArray([255, 255, 255, 255]), 1, 1));
      if (i.background) {
        let o = E.fromArray(i.background);
        c.clearColor(o.r / 255, o.g / 255, o.b / 255, (_a = i.background[3]) != null ? _a : 1);
      }
      c.enable(c.BLEND), c.enable(c.SCISSOR_TEST), c.blendFuncSeparate(c.SRC_ALPHA, c.ONE_MINUS_SRC_ALPHA, c.ONE, c.ONE_MINUS_SRC_ALPHA);
      let n = c.createBuffer();
      c.bindBuffer(c.ARRAY_BUFFER, n), c.bufferData(c.ARRAY_BUFFER, lr * 4, c.DYNAMIC_DRAW), dr.reduce((o, l, d) => (c.vertexAttribPointer(d, l.size, c.FLOAT, false, bt * 4, o), c.enableVertexAttribArray(d), o + l.size * 4), 0), c.bindBuffer(c.ARRAY_BUFFER, null);
      let s = c.createBuffer();
      c.bindBuffer(c.ELEMENT_ARRAY_BUFFER, s), c.bufferData(c.ELEMENT_ARRAY_BUFFER, hr * 4, c.DYNAMIC_DRAW), c.bindBuffer(c.ELEMENT_ARRAY_BUFFER, null);
      let h = v.fromImage(new ImageData(new Uint8ClampedArray([128, 128, 128, 255, 190, 190, 190, 255, 190, 190, 190, 255, 128, 128, 128, 255]), 2, 2), { wrap: "repeat", filter: "nearest" });
      return { drawCalls: 0, lastDrawCalls: 0, defShader: e, curShader: e, defTex: t, curTex: t, curUniform: {}, vbuf: n, ibuf: s, vqueue: [], iqueue: [], transform: new A(), transformStack: [], bgTex: h, width: i.width, height: i.height, viewport: { x: 0, y: 0, width: c.drawingBufferWidth, height: c.drawingBufferHeight } };
    })();
    class T {
      constructor(t, n, s = {}) {
        __publicField(this, "tex");
        __publicField(this, "frames", [new N(0, 0, 1, 1)]);
        __publicField(this, "anims", {});
        this.tex = t, n && (this.frames = n), this.anims = s;
      }
      static from(t, n = {}) {
        return typeof t == "string" ? T.fromURL(t, n) : Promise.resolve(T.fromImage(t, n));
      }
      static fromImage(t, n = {}) {
        var _a;
        return new T(v.fromImage(t, n), Ae(n.sliceX || 1, n.sliceY || 1), (_a = n.anims) != null ? _a : {});
      }
      static fromURL(t, n = {}) {
        return Ce(t).then((s) => T.fromImage(s, n));
      }
    }
    __name(T, "T");
    u(T, "SpriteData");
    class R {
      constructor(t) {
        __publicField(this, "buf");
        this.buf = t;
      }
      static fromArrayBuffer(t) {
        return new Promise((n, s) => C.ctx.decodeAudioData(t, n, s)).then((n) => new R(n));
      }
      static fromURL(t) {
        return Ht(t) ? R.fromArrayBuffer(Kn(t)) : rt(t).then((n) => R.fromArrayBuffer(n));
      }
    }
    __name(R, "R");
    u(R, "SoundData");
    let C = (() => {
      let e = new (window.AudioContext || window.webkitAudioContext)(), t = e.createGain();
      t.connect(e.destination);
      let n = new R(Kt(e));
      return e.decodeAudioData($t.buffer.slice(0)).then((s) => {
        n.buf = s;
      }).catch((s) => {
        console.error("Failed to load burp: ", s);
      }), { ctx: e, masterNode: t, burpSnd: n };
    })();
    class O {
      constructor(t) {
        __publicField(this, "done", false);
        __publicField(this, "data", null);
        __publicField(this, "error", null);
        __publicField(this, "onLoadEvents", new W());
        __publicField(this, "onErrorEvents", new W());
        __publicField(this, "onFinishEvents", new W());
        t.then((n) => {
          this.data = n, this.onLoadEvents.trigger(n);
        }).catch((n) => {
          if (this.error = n, this.onErrorEvents.numListeners() > 0)
            this.onErrorEvents.trigger(n);
          else
            throw n;
        }).finally(() => {
          this.onFinishEvents.trigger(), this.done = true;
        });
      }
      static loaded(t) {
        let n = new O(Promise.resolve(t));
        return n.data = t, n.done = true, n;
      }
      onLoad(t) {
        return this.onLoadEvents.add(t), this;
      }
      onError(t) {
        return this.onErrorEvents.add(t), this;
      }
      onFinish(t) {
        return this.onFinishEvents.add(t), this;
      }
      then(t) {
        return this.onLoad(t);
      }
      catch(t) {
        return this.onError(t);
      }
      finally(t) {
        return this.onFinish(t);
      }
    }
    __name(O, "O");
    u(O, "Asset");
    class M {
      constructor() {
        __publicField(this, "assets", /* @__PURE__ */ new Map());
        __publicField(this, "lastUID", 0);
      }
      add(t, n) {
        let s = t != null ? t : this.lastUID++ + "", h = new O(n);
        return this.assets.set(s, h), h;
      }
      addLoaded(t, n) {
        let s = t != null ? t : this.lastUID++ + "", h = O.loaded(n);
        this.assets.set(s, h);
      }
      get(t) {
        return this.assets.get(t);
      }
      progress() {
        if (this.assets.size === 0)
          return 1;
        let t = 0;
        return this.assets.forEach((n) => {
          n.done && t++;
        }), t / this.assets.size;
      }
    }
    __name(M, "M");
    u(M, "AssetBucket");
    let U = { urlPrefix: "", sprites: new M(), fonts: new M(), bitmapFonts: new M(), sounds: new M(), shaders: new M(), custom: new M(), loaded: false }, f = { ev: new oe(), objEvents: new oe(), root: vn([]), gravity: 0, scenes: {}, logs: [], cam: { pos: null, scale: p(1), angle: 0, shake: 0, transform: new A() } };
    function ue(e) {
      return U.custom.add(null, e);
    }
    __name(ue, "ue");
    u(ue, "load");
    function I() {
      let e = [U.sprites, U.sounds, U.shaders, U.fonts, U.bitmapFonts, U.custom];
      return e.reduce((t, n) => t + n.progress(), 0) / e.length;
    }
    __name(I, "I");
    u(I, "loadProgress");
    function Y(e) {
      return e !== void 0 && (U.urlPrefix = e), U.urlPrefix;
    }
    __name(Y, "Y");
    u(Y, "loadRoot");
    function Ee(e) {
      let t = U.urlPrefix + e;
      return fetch(t).then((n) => {
        if (!n.ok)
          throw new Error(`Failed to fetch ${t}`);
        return n;
      });
    }
    __name(Ee, "Ee");
    u(Ee, "fetchURL");
    function Se(e) {
      return Ee(e).then((t) => t.json());
    }
    __name(Se, "Se");
    u(Se, "fetchJSON");
    function nt(e) {
      return Ee(e).then((t) => t.text());
    }
    __name(nt, "nt");
    u(nt, "fetchText");
    function rt(e) {
      return Ee(e).then((t) => t.arrayBuffer());
    }
    __name(rt, "rt");
    u(rt, "fetchArrayBuffer");
    function Ce(e) {
      let t = new Image();
      return t.crossOrigin = "anonymous", t.src = Ht(e) ? e : U.urlPrefix + e, new Promise((n, s) => {
        t.onload = () => n(t), t.onerror = () => s(new Error(`Failed to load image from "${e}"`));
      });
    }
    __name(Ce, "Ce");
    u(Ce, "loadImg");
    function yt(e, t) {
      let n = new FontFace(e, typeof t == "string" ? `url(${t})` : t);
      return document.fonts.add(n), U.fonts.add(e, n.load().catch(() => {
        throw new Error(`Failed to load font from "${t}"`);
      }));
    }
    __name(yt, "yt");
    u(yt, "loadFont");
    function Te(e, t, n, s, h = {}) {
      return U.bitmapFonts.add(e, Ce(t).then((o) => {
        var _a;
        return Er(v.fromImage(o, h), n, s, (_a = h.chars) != null ? _a : ir);
      }));
    }
    __name(Te, "Te");
    u(Te, "loadBitmapFont");
    function Ae(e = 1, t = 1, n = 0, s = 0, h = 1, o = 1) {
      let l = [], d = h / e, m = o / t;
      for (let w = 0; w < t; w++)
        for (let b = 0; b < e; b++)
          l.push(new N(n + b * d, s + w * m, d, m));
      return l;
    }
    __name(Ae, "Ae");
    u(Ae, "slice");
    function Qt(e, t) {
      return ue(typeof t == "string" ? new Promise((n, s) => {
        Se(t).then((h) => {
          Qt(e, h).then(n).catch(s);
        });
      }) : T.from(e).then((n) => {
        let s = {};
        for (let h in t) {
          let o = n.tex.width, l = n.tex.height, d = t[h], m = new T(n.tex, Ae(d.sliceX, d.sliceY, d.x / o, d.y / l, d.width / o, d.height / l), d.anims);
          U.sprites.addLoaded(h, m), s[h] = m;
        }
        return s;
      }));
    }
    __name(Qt, "Qt");
    u(Qt, "loadSpriteAtlas");
    function Oe(e, t, n = { sliceX: 1, sliceY: 1, anims: {} }) {
      return U.sprites.add(e, typeof t == "string" ? T.fromURL(t, n) : Promise.resolve(T.fromImage(t, n)));
    }
    __name(Oe, "Oe");
    u(Oe, "loadSprite");
    function mr(e, t) {
      return U.sprites.add(e, new Promise((n) => __async(this, null, function* () {
        let s = typeof t == "string" ? yield Se(t) : t, h = yield Promise.all(s.frames.map(Ce)), o = document.createElement("canvas");
        o.width = s.width, o.height = s.height * s.frames.length;
        let l = o.getContext("2d");
        h.forEach((m, w) => {
          l.drawImage(m, 0, w * s.height);
        });
        let d = yield Oe(null, o, { sliceY: s.frames.length, anims: s.anims });
        n(d);
      })));
    }
    __name(mr, "mr");
    u(mr, "loadPedit");
    function pr(e, t, n) {
      return U.sprites.add(e, new Promise((s) => __async(this, null, function* () {
        let h = yield Oe(null, t), o = typeof n == "string" ? yield Se(n) : n, l = o.meta.size;
        h.frames = o.frames.map((d) => new N(d.frame.x / l.w, d.frame.y / l.h, d.frame.w / l.w, d.frame.h / l.h));
        for (let d of o.meta.frameTags)
          d.from === d.to ? h.anims[d.name] = d.from : h.anims[d.name] = { from: d.from, to: d.to, speed: 10, loop: true, pingpong: d.direction === "pingpong" };
        s(h);
      })));
    }
    __name(pr, "pr");
    u(pr, "loadAseprite");
    function gr(e, t, n, s = false) {
      return U.shaders.add(e, new Promise((h, o) => {
        let l = u((d) => d ? nt(d) : new Promise((m) => m(null)), "resolveUrl");
        if (s)
          Promise.all([l(t), l(n)]).then(([d, m]) => {
            h(Ut(d, m));
          }).catch(o);
        else
          try {
            h(Ut(t, n));
          } catch (d) {
            o(d);
          }
      }));
    }
    __name(gr, "gr");
    u(gr, "loadShader");
    function wr(e, t) {
      return U.sounds.add(e, typeof t == "string" ? R.fromURL(t) : R.fromArrayBuffer(t));
    }
    __name(wr, "wr");
    u(wr, "loadSound");
    function vr(e = "bean") {
      return Oe(e, Wn);
    }
    __name(vr, "vr");
    u(vr, "loadBean");
    function Jt(e) {
      return U.sprites.get(e);
    }
    __name(Jt, "Jt");
    u(Jt, "getSprite");
    function Zt(e) {
      return U.sounds.get(e);
    }
    __name(Zt, "Zt");
    u(Zt, "getSound");
    function br(e) {
      return U.fonts.get(e);
    }
    __name(br, "br");
    u(br, "getFont");
    function Wt(e) {
      return U.bitmapFonts.get(e);
    }
    __name(Wt, "Wt");
    u(Wt, "getBitmapFont");
    function en(e) {
      return U.shaders.get(e);
    }
    __name(en, "en");
    u(en, "getShader");
    function tn(e) {
      if (typeof e == "string") {
        let t = Jt(e);
        if (t)
          return t;
        if (I() < 1)
          return null;
        throw new Error(`Sprite not found: ${e}`);
      } else {
        if (e instanceof T)
          return O.loaded(e);
        if (e instanceof O)
          return e;
        throw new Error(`Invalid sprite: ${e}`);
      }
    }
    __name(tn, "tn");
    u(tn, "resolveSprite");
    function yr(e) {
      if (typeof e == "string") {
        let t = Zt(e);
        if (t)
          return t.data ? t.data : t;
        if (I() < 1)
          return null;
        throw new Error(`Sound not found: ${e}`);
      } else {
        if (e instanceof R)
          return e;
        if (e instanceof O)
          return e.data ? e.data : e;
        throw new Error(`Invalid sound: ${e}`);
      }
    }
    __name(yr, "yr");
    u(yr, "resolveSound");
    function Ur(e) {
      if (!e)
        return g.defShader;
      if (typeof e == "string") {
        let t = en(e);
        if (t)
          return t.data ? t.data : t;
        if (I() < 1)
          return null;
        throw new Error(`Shader not found: ${e}`);
      } else if (e instanceof O)
        return e.data ? e.data : e;
      return e;
    }
    __name(Ur, "Ur");
    u(Ur, "resolveShader");
    function nn(e) {
      var _a;
      if (!e)
        return nn((_a = i.font) != null ? _a : Vs);
      if (typeof e == "string") {
        let t = Wt(e);
        if (t)
          return t.data ? t.data : t;
        if (document.fonts.check(`${ur}px ${e}`))
          return e;
        if (I() < 1)
          return null;
        throw new Error(`Font not found: ${e}`);
      } else if (e instanceof O)
        return e.data ? e.data : e;
      return e;
    }
    __name(nn, "nn");
    u(nn, "resolveFont");
    function xr(e) {
      return e !== void 0 && (C.masterNode.gain.value = te(e, sr, or)), C.masterNode.gain.value;
    }
    __name(xr, "xr");
    u(xr, "volume");
    function $e(e, t = { loop: false, volume: 1, speed: 1, detune: 0, seek: 0 }) {
      var _a;
      let n = yr(e);
      if (n instanceof O) {
        let y = $e(new R(Kt(C.ctx))), L = u((P) => {
          let q = $e(P, t);
          for (let z2 in q)
            y[z2] = q[z2];
        }, "doPlay");
        return n.onLoad(L), y;
      } else if (n === null) {
        let y = $e(new R(Kt(C.ctx)));
        return Ft(() => {
        }), y;
      }
      let s = C.ctx, h = false, o = s.createBufferSource();
      o.buffer = n.buf, o.loop = !!t.loop;
      let l = s.createGain();
      o.connect(l), l.connect(C.masterNode);
      let d = (_a = t.seek) != null ? _a : 0;
      o.start(0, d);
      let m = s.currentTime - d, w = null, b = { stop() {
        h || (this.pause(), m = s.currentTime);
      }, play(y) {
        if (!h)
          return;
        let L = o;
        o = s.createBufferSource(), o.buffer = L.buffer, o.loop = L.loop, o.playbackRate.value = L.playbackRate.value, o.detune && (o.detune.value = L.detune.value), o.connect(l);
        let P = y != null ? y : this.time();
        o.start(0, P), m = s.currentTime - P, h = false, w = null;
      }, pause() {
        h || (o.stop(), h = true, w = s.currentTime);
      }, isPaused() {
        return h;
      }, isStopped() {
        return h;
      }, speed(y) {
        return y !== void 0 && (o.playbackRate.value = te(y, Bs, Ls)), o.playbackRate.value;
      }, detune(y) {
        return o.detune ? (y !== void 0 && (o.detune.value = te(y, Is, Gs)), o.detune.value) : 0;
      }, volume(y) {
        return y !== void 0 && (l.gain.value = te(y, sr, or)), l.gain.value;
      }, loop() {
        o.loop = true;
      }, unloop() {
        o.loop = false;
      }, duration() {
        return n.buf.duration;
      }, time() {
        return h ? w - m : s.currentTime - m;
      } };
      return b.speed(t.speed), b.detune(t.detune), b.volume(t.volume), b;
    }
    __name($e, "$e");
    u($e, "play");
    function rn(e) {
      return $e(C.burpSnd, e);
    }
    __name(rn, "rn");
    u(rn, "burp");
    function Ut(e = Yt, t = Xt) {
      let n = js.replace("{{user}}", e != null ? e : Yt), s = _s.replace("{{user}}", t != null ? t : Xt), h = c.createShader(c.VERTEX_SHADER), o = c.createShader(c.FRAGMENT_SHADER);
      c.shaderSource(h, n), c.shaderSource(o, s), c.compileShader(h), c.compileShader(o);
      let l = c.createProgram();
      if (r.push(() => c.deleteProgram(l)), c.attachShader(l, h), c.attachShader(l, o), c.bindAttribLocation(l, 0, "a_pos"), c.bindAttribLocation(l, 1, "a_uv"), c.bindAttribLocation(l, 2, "a_color"), c.linkProgram(l), !c.getProgramParameter(l, c.LINK_STATUS)) {
        let d = u((y) => {
          let L = new RegExp("^ERROR:\\s0:(?<line>\\d+):\\s(?<msg>.+)"), P = y.match(L);
          return { line: Number(P.groups.line), msg: P.groups.msg.replace(/\n\0$/, "") };
        }, "formatShaderError"), m = c.getShaderInfoLog(h), w = c.getShaderInfoLog(o), b = "";
        if (m) {
          let y = d(m);
          b += `Vertex shader line ${y.line - 14}: ${y.msg}`;
        }
        if (w) {
          let y = d(w);
          b += `Fragment shader line ${y.line - 14}: ${y.msg}`;
        }
        throw new Error(b);
      }
      return c.deleteShader(h), c.deleteShader(o), { bind() {
        c.useProgram(l);
      }, unbind() {
        c.useProgram(null);
      }, free() {
        c.deleteProgram(l);
      }, send(d) {
        for (let m in d) {
          let w = d[m], b = c.getUniformLocation(l, m);
          typeof w == "number" ? c.uniform1f(b, w) : w instanceof A ? c.uniformMatrix4fv(b, false, new Float32Array(w.m)) : w instanceof E ? c.uniform3f(b, w.r, w.g, w.b) : w instanceof ke ? c.uniform3f(b, w.x, w.y, w.z) : w instanceof D && c.uniform2f(b, w.x, w.y);
        }
      } };
    }
    __name(Ut, "Ut");
    u(Ut, "makeShader");
    function Er(e, t, n, s) {
      let h = e.width / t, o = {}, l = s.split("").entries();
      for (let [d, m] of l)
        o[m] = new N(d % h * t, Math.floor(d / h) * n, t, n);
      return { tex: e, map: o, size: n };
    }
    __name(Er, "Er");
    u(Er, "makeFont");
    function xt(e, t, n, s = g.defTex, h = g.defShader, o = {}) {
      let l = Ur(h);
      if (!(!l || l instanceof O)) {
        (s !== g.curTex || l !== g.curShader || !_t(g.curUniform, o) || g.vqueue.length + e.length * bt > lr || g.iqueue.length + t.length > hr) && ce();
        for (let d of e) {
          let m = n ? g.transform : f.cam.transform.mult(g.transform), w = Tr(m.multVec2(d.pos.xy()));
          g.vqueue.push(w.x, w.y, d.pos.z, d.uv.x, d.uv.y, d.color.r / 255, d.color.g / 255, d.color.b / 255, d.opacity);
        }
        for (let d of t)
          g.iqueue.push(d + g.vqueue.length / bt - e.length);
        g.curTex = s, g.curShader = l, g.curUniform = o;
      }
    }
    __name(xt, "xt");
    u(xt, "drawRaw");
    function ce() {
      !g.curTex || !g.curShader || g.vqueue.length === 0 || g.iqueue.length === 0 || (c.bindBuffer(c.ARRAY_BUFFER, g.vbuf), c.bufferSubData(c.ARRAY_BUFFER, 0, new Float32Array(g.vqueue)), c.bindBuffer(c.ELEMENT_ARRAY_BUFFER, g.ibuf), c.bufferSubData(c.ELEMENT_ARRAY_BUFFER, 0, new Uint16Array(g.iqueue)), g.curShader.bind(), g.curShader.send(g.curUniform), g.curTex.bind(), c.drawElements(c.TRIANGLES, g.iqueue.length, c.UNSIGNED_SHORT, 0), g.curTex.unbind(), g.curShader.unbind(), c.bindBuffer(c.ARRAY_BUFFER, null), c.bindBuffer(c.ELEMENT_ARRAY_BUFFER, null), g.vqueue = [], g.iqueue = [], g.drawCalls++);
    }
    __name(ce, "ce");
    u(ce, "flush");
    function Sr() {
      Lr(), c.clear(c.COLOR_BUFFER_BIT), i.background || ae(() => {
        Re({ width: j(), height: B(), quad: new N(0, 0, j() / ar, B() / ar), tex: g.bgTex, fixed: true });
      }), g.drawCalls = 0, g.transformStack = [], g.transform = new A();
    }
    __name(Sr, "Sr");
    u(Sr, "frameStart");
    function Cr() {
      ce(), g.lastDrawCalls = g.drawCalls;
    }
    __name(Cr, "Cr");
    u(Cr, "frameEnd");
    function Tr(e) {
      return p(e.x / j() * 2 - 1, -e.y / B() * 2 + 1);
    }
    __name(Tr, "Tr");
    u(Tr, "screen2ndc");
    function Ar(e) {
      g.transform = e.clone();
    }
    __name(Ar, "Ar");
    u(Ar, "pushMatrix");
    function G(...e) {
      if (e[0] === void 0)
        return;
      let t = p(...e);
      t.x === 0 && t.y === 0 || (g.transform = g.transform.translate(t));
    }
    __name(G, "G");
    u(G, "pushTranslate");
    function Pe(...e) {
      if (e[0] === void 0)
        return;
      let t = p(...e);
      t.x === 1 && t.y === 1 || (g.transform = g.transform.scale(t));
    }
    __name(Pe, "Pe");
    u(Pe, "pushScale");
    function Or(e) {
      !e || (g.transform = g.transform.rotateX(e));
    }
    __name(Or, "Or");
    u(Or, "pushRotateX");
    function Pr(e) {
      !e || (g.transform = g.transform.rotateY(e));
    }
    __name(Pr, "Pr");
    u(Pr, "pushRotateY");
    function ge(e) {
      !e || (g.transform = g.transform.rotateZ(e));
    }
    __name(ge, "ge");
    u(ge, "pushRotateZ");
    let Rr = ge;
    function ee() {
      g.transformStack.push(g.transform.clone());
    }
    __name(ee, "ee");
    u(ee, "pushTransform");
    function X() {
      g.transformStack.length > 0 && (g.transform = g.transformStack.pop());
    }
    __name(X, "X");
    u(X, "popTransform");
    function Re(e) {
      var _a;
      if (e.width === void 0 || e.height === void 0)
        throw new Error('drawUVQuad() requires property "width" and "height".');
      if (e.width <= 0 || e.height <= 0)
        return;
      let t = e.width, n = e.height, h = tt(e.anchor || gt).scale(p(t, n).scale(-0.5)), o = e.quad || new N(0, 0, 1, 1), l = e.color || x(255, 255, 255), d = (_a = e.opacity) != null ? _a : 1, m = e.tex ? cr / e.tex.width : 0, w = e.tex ? cr / e.tex.height : 0, b = o.x + m, y = o.y + w, L = o.w - m * 2, P = o.h - w * 2;
      ee(), G(e.pos), ge(e.angle), Pe(e.scale), G(h), xt([{ pos: me(-t / 2, n / 2, 0), uv: p(e.flipX ? b + L : b, e.flipY ? y : y + P), color: l, opacity: d }, { pos: me(-t / 2, -n / 2, 0), uv: p(e.flipX ? b + L : b, e.flipY ? y + P : y), color: l, opacity: d }, { pos: me(t / 2, -n / 2, 0), uv: p(e.flipX ? b : b + L, e.flipY ? y + P : y), color: l, opacity: d }, { pos: me(t / 2, n / 2, 0), uv: p(e.flipX ? b : b + L, e.flipY ? y : y + P), color: l, opacity: d }], [0, 1, 3, 1, 2, 3], e.fixed, e.tex, e.shader, e.uniform), X();
    }
    __name(Re, "Re");
    u(Re, "drawUVQuad");
    function Dr(e) {
      var _a;
      if (!e.tex)
        throw new Error('drawTexture() requires property "tex".');
      let t = (_a = e.quad) != null ? _a : new N(0, 0, 1, 1), n = e.tex.width * t.w, s = e.tex.height * t.h, h = p(1);
      if (e.tiled) {
        let o = Math.ceil((e.width || n) / n), l = Math.ceil((e.height || s) / s), m = tt(e.anchor || gt).add(p(1, 1)).scale(0.5).scale(o * n, l * s);
        for (let w = 0; w < o; w++)
          for (let b = 0; b < l; b++)
            Re(__spreadProps(__spreadValues({}, e), { pos: (e.pos || p(0)).add(p(n * w, s * b)).sub(m), scale: h.scale(e.scale || p(1)), tex: e.tex, quad: t, width: n, height: s, anchor: "topleft" }));
      } else
        e.width && e.height ? (h.x = e.width / n, h.y = e.height / s) : e.width ? (h.x = e.width / n, h.y = h.x) : e.height && (h.y = e.height / s, h.x = h.y), Re(__spreadProps(__spreadValues({}, e), { scale: h.scale(e.scale || p(1)), tex: e.tex, quad: t, width: n, height: s }));
    }
    __name(Dr, "Dr");
    u(Dr, "drawTexture");
    function sn(e) {
      var _a, _b;
      if (!e.sprite)
        throw new Error('drawSprite() requires property "sprite"');
      let t = tn(e.sprite);
      if (!t || !t.data)
        return;
      let n = t.data.frames[(_a = e.frame) != null ? _a : 0];
      if (!n)
        throw new Error(`Frame not found: ${(_b = e.frame) != null ? _b : 0}`);
      Dr(__spreadProps(__spreadValues({}, e), { tex: t.data.tex, quad: n.scale(e.quad || new N(0, 0, 1, 1)) }));
    }
    __name(sn, "sn");
    u(sn, "drawSprite");
    function Ye(e, t, n, s, h, o = 1) {
      s = he(s % 360), h = he(h % 360), h <= s && (h += Math.PI * 2);
      let l = Math.ceil(Math.max(Math.sqrt(t + n) * 3 * (o || 1), 16)), d = (h - s) / l, m = [];
      for (let w = s; w < h; w += d)
        m.push(e.add(t * Math.cos(w), n * Math.sin(w)));
      return m.push(e.add(t * Math.cos(h), n * Math.sin(h))), m;
    }
    __name(Ye, "Ye");
    u(Ye, "getArcPts");
    function K(e) {
      if (e.width === void 0 || e.height === void 0)
        throw new Error('drawRect() requires property "width" and "height".');
      if (e.width <= 0 || e.height <= 0)
        return;
      let t = e.width, n = e.height, h = tt(e.anchor || gt).add(1, 1).scale(p(t, n).scale(-0.5)), o = [p(0, 0), p(t, 0), p(t, n), p(0, n)];
      if (e.radius) {
        let l = Math.min(Math.min(t, n) / 2, e.radius);
        o = [p(l, 0), p(t - l, 0), ...Ye(p(t - l, l), l, l, 270, 360), p(t, l), p(t, n - l), ...Ye(p(t - l, n - l), l, l, 0, 90), p(t - l, n), p(l, n), ...Ye(p(l, n - l), l, l, 90, 180), p(0, n - l), p(0, l), ...Ye(p(l, l), l, l, 180, 270)];
      }
      ve(__spreadValues(__spreadProps(__spreadValues({}, e), { offset: h, pts: o }), e.gradient ? { colors: e.horizontal ? [e.gradient[0], e.gradient[1], e.gradient[1], e.gradient[0]] : [e.gradient[0], e.gradient[0], e.gradient[1], e.gradient[1]] } : {}));
    }
    __name(K, "K");
    u(K, "drawRect");
    function Xe(e) {
      let { p1: t, p2: n } = e;
      if (!t || !n)
        throw new Error('drawLine() requires properties "p1" and "p2".');
      let s = e.width || 1, h = n.sub(t).unit().normal().scale(s * 0.5), o = [t.sub(h), t.add(h), n.add(h), n.sub(h)].map((l) => {
        var _a, _b;
        return { pos: me(l.x, l.y, 0), uv: p(0), color: (_a = e.color) != null ? _a : E.WHITE, opacity: (_b = e.opacity) != null ? _b : 1 };
      });
      xt(o, [0, 1, 3, 1, 2, 3], e.fixed, g.defTex, e.shader, e.uniform);
    }
    __name(Xe, "Xe");
    u(Xe, "drawLine");
    function on(e) {
      let t = e.pts;
      if (!t)
        throw new Error('drawLines() requires property "pts".');
      if (!(t.length < 2))
        if (e.radius && t.length >= 3) {
          let n = t[0].dist(t[1]);
          for (let h = 1; h < t.length - 1; h++)
            n = Math.min(t[h].dist(t[h + 1]), n);
          let s = Math.min(e.radius, n / 2);
          Xe(__spreadProps(__spreadValues({}, e), { p1: t[0], p2: t[1] }));
          for (let h = 1; h < t.length - 2; h++) {
            let o = t[h], l = t[h + 1];
            Xe(__spreadProps(__spreadValues({}, e), { p1: o, p2: l }));
          }
          Xe(__spreadProps(__spreadValues({}, e), { p1: t[t.length - 2], p2: t[t.length - 1] }));
        } else
          for (let n = 0; n < t.length - 1; n++)
            Xe(__spreadProps(__spreadValues({}, e), { p1: t[n], p2: t[n + 1] })), e.join !== "none" && we(__spreadProps(__spreadValues({}, e), { pos: t[n], radius: e.width / 2 }));
    }
    __name(on, "on");
    u(on, "drawLines");
    function an(e) {
      if (!e.p1 || !e.p2 || !e.p3)
        throw new Error('drawPolygon() requires properties "p1", "p2" and "p3".');
      return ve(__spreadProps(__spreadValues({}, e), { pts: [e.p1, e.p2, e.p3] }));
    }
    __name(an, "an");
    u(an, "drawTriangle");
    function we(e) {
      if (!e.radius)
        throw new Error('drawCircle() requires property "radius".');
      e.radius !== 0 && un(__spreadProps(__spreadValues({}, e), { radiusX: e.radius, radiusY: e.radius, angle: 0 }));
    }
    __name(we, "we");
    u(we, "drawCircle");
    function un(e) {
      var _a, _b;
      if (e.radiusX === void 0 || e.radiusY === void 0)
        throw new Error('drawEllipse() requires properties "radiusX" and "radiusY".');
      if (e.radiusX === 0 || e.radiusY === 0)
        return;
      let t = (_a = e.start) != null ? _a : 0, n = (_b = e.end) != null ? _b : 360, s = Ye(p(0), e.radiusX, e.radiusY, t, n, e.resolution);
      s.unshift(p(0));
      let h = __spreadValues(__spreadProps(__spreadValues({}, e), { pts: s, radius: 0 }), e.gradient ? { colors: [e.gradient[0], ...Array(s.length - 1).fill(e.gradient[1])] } : {});
      if (n - t >= 360 && e.outline) {
        e.fill !== false && ve(__spreadProps(__spreadValues({}, h), { outline: null })), ve(__spreadProps(__spreadValues({}, h), { pts: s.slice(1), fill: false }));
        return;
      }
      ve(h);
    }
    __name(un, "un");
    u(un, "drawEllipse");
    function ve(e) {
      var _a, _b;
      if (!e.pts)
        throw new Error('drawPolygon() requires property "pts".');
      let t = e.pts.length;
      if (!(t < 3)) {
        if (ee(), G(e.pos), Pe(e.scale), ge(e.angle), G(e.offset), e.fill !== false) {
          let n = (_a = e.color) != null ? _a : E.WHITE, s = e.pts.map((o, l) => {
            var _a2, _b2;
            return { pos: me(o.x, o.y, 0), uv: p(0, 0), color: e.colors ? (_a2 = e.colors[l]) != null ? _a2 : n : n, opacity: (_b2 = e.opacity) != null ? _b2 : 1 };
          }), h = [...Array(t - 2).keys()].map((o) => [0, o + 1, o + 2]).flat();
          xt(s, (_b = e.indices) != null ? _b : h, e.fixed, g.defTex, e.shader, e.uniform);
        }
        e.outline && on({ pts: [...e.pts, e.pts[0]], radius: e.radius, width: e.outline.width, color: e.outline.color, join: e.outline.join, uniform: e.uniform, fixed: e.fixed, opacity: e.opacity }), X();
      }
    }
    __name(ve, "ve");
    u(ve, "drawPolygon");
    function cn(e, t, n) {
      ce(), c.clear(c.STENCIL_BUFFER_BIT), c.enable(c.STENCIL_TEST), c.stencilFunc(c.NEVER, 1, 255), c.stencilOp(c.REPLACE, c.REPLACE, c.REPLACE), t(), ce(), c.stencilFunc(n, 1, 255), c.stencilOp(c.KEEP, c.KEEP, c.KEEP), e(), ce(), c.disable(c.STENCIL_TEST);
    }
    __name(cn, "cn");
    u(cn, "drawStenciled");
    function Mr(e, t) {
      cn(e, t, c.EQUAL);
    }
    __name(Mr, "Mr");
    u(Mr, "drawMasked");
    function Fr(e, t) {
      cn(e, t, c.NOTEQUAL);
    }
    __name(Fr, "Fr");
    u(Fr, "drawSubtracted");
    function ln() {
      return (g.viewport.width + g.viewport.height) / (g.width + g.height);
    }
    __name(ln, "ln");
    u(ln, "getViewportScale");
    function ae(e) {
      ce();
      let t = g.width, n = g.height;
      g.width = g.viewport.width, g.height = g.viewport.height, e(), ce(), g.width = t, g.height = n;
    }
    __name(ae, "ae");
    u(ae, "drawUnscaled");
    function hn(e, t) {
      t.pos && (e.pos = e.pos.add(t.pos)), t.scale && (e.scale = e.scale.scale(p(t.scale))), t.angle && (e.angle += t.angle), t.color && (e.color = e.color.mult(t.color)), t.opacity && (e.opacity *= t.opacity);
    }
    __name(hn, "hn");
    u(hn, "applyCharTransform");
    let dn = new RegExp("\\[(?<text>[^\\]]*)\\]\\.(?<style>[\\w\\.]+)+", "g");
    function Br(e) {
      let t = {}, n = e.replace(dn, "$1"), s = 0;
      for (let h of e.matchAll(dn)) {
        let o = h.groups.style.split("."), l = h.index - s;
        for (let d = l; d < h.index + h.groups.text.length; d++)
          t[d] = { localIdx: d - l, styles: o };
        s += 3 + h.groups.style.length;
      }
      return { charStyleMap: t, text: n };
    }
    __name(Br, "Br");
    u(Br, "compileStyledText");
    let Et = {};
    function be(e) {
      var _a, _b, _c, _d, _e2, _f, _g;
      if (e.text === void 0)
        throw new Error('formatText() requires property "text".');
      let t = nn(e.font);
      if (e.text === "" || t instanceof O || !t)
        return { width: 0, height: 0, chars: [], opt: e };
      let { charStyleMap: n, text: s } = Br(e.text + ""), h = s.split("");
      if (t instanceof FontFace || typeof t == "string") {
        let _ = t instanceof FontFace ? t.family : t, S = (_a = Et[_]) != null ? _a : { font: { tex: new v(vt, vt, { filter: "linear" }), map: {}, size: ur }, cursor: p(0) };
        Et[_] || (Et[_] = S), t = S.font;
        for (let k of h)
          if (!S.font.map[k]) {
            let ne = a.canvas2.getContext("2d");
            ne.font = `${t.size}px ${_}`, ne.clearRect(0, 0, a.canvas2.width, a.canvas2.height), ne.textBaseline = "top", ne.textAlign = "left", ne.fillStyle = "rgb(255, 255, 255)", ne.fillText(k, 0, 0);
            let We = ne.measureText(k), Ie = Math.ceil(We.width), Ge = ne.getImageData(0, 0, Ie, t.size);
            if (S.cursor.x + Ie > vt && (S.cursor.x = 0, S.cursor.y += t.size, S.cursor.y > vt))
              throw new Error("Font atlas exceeds character limit");
            t.tex.update(S.cursor.x, S.cursor.y, Ge), t.map[k] = new N(S.cursor.x, S.cursor.y, Ie, t.size), S.cursor.x += Ie;
          }
      }
      let o = e.size || t.size, l = p((_b = e.scale) != null ? _b : 1).scale(o / t.size), d = (_c = e.lineSpacing) != null ? _c : 0, m = (_d = e.letterSpacing) != null ? _d : 0, w = 0, b = 0, y = 0, L = [], P = [], q = 0, z2 = null, Ue = null;
      for (; q < h.length; ) {
        let _ = h[q];
        if (_ === `
`)
          y += o + d, L.push({ width: w - m, chars: P }), z2 = null, Ue = null, w = 0, P = [];
        else {
          let S = t.map[_];
          if (S) {
            let k = S.w * l.x;
            e.width && w + k > e.width && (y += o + d, z2 != null && (q -= P.length - z2, _ = h[q], S = t.map[_], k = S.w * l.x, P = P.slice(0, z2 - 1), w = Ue), z2 = null, Ue = null, L.push({ width: w - m, chars: P }), w = 0, P = []), P.push({ tex: t.tex, width: S.w, height: S.h, quad: new N(S.x / t.tex.width, S.y / t.tex.height, S.w / t.tex.width, S.h / t.tex.height), ch: _, pos: p(w, y), opacity: (_e2 = e.opacity) != null ? _e2 : 1, color: (_f = e.color) != null ? _f : E.WHITE, scale: p(l), angle: 0 }), _ === " " && (z2 = P.length, Ue = w), w += k, b = Math.max(b, w), w += m;
          }
        }
        q++;
      }
      L.push({ width: w - m, chars: P }), y += o, e.width && (b = e.width);
      let J = [];
      for (let _ of L) {
        let S = (b - _.width) * Xs((_g = e.align) != null ? _g : "left");
        for (let k of _.chars) {
          let ne = t.map[k.ch], We = J.length, Ie = new D(ne.w * l.x * 0.5, ne.h * l.y * 0.5);
          if (k.pos = k.pos.add(S, 0).add(Ie), e.transform) {
            let Ge = typeof e.transform == "function" ? e.transform(We, k.ch) : e.transform;
            Ge && hn(k, Ge);
          }
          if (n[We]) {
            let { styles: Ge, localIdx: ws } = n[We];
            for (let vs of Ge) {
              let It = e.styles[vs], Fn = typeof It == "function" ? It(ws, k.ch) : It;
              Fn && hn(k, Fn);
            }
          }
          J.push(k);
        }
      }
      return { width: b, height: y, chars: J, opt: e };
    }
    __name(be, "be");
    u(be, "formatText");
    function it(e) {
      ye(be(e));
    }
    __name(it, "it");
    u(it, "drawText");
    function ye(e) {
      var _a;
      ee(), G(e.opt.pos), ge(e.opt.angle), G(tt((_a = e.opt.anchor) != null ? _a : "topleft").add(1, 1).scale(e.width, e.height).scale(-0.5)), e.chars.forEach((t) => {
        Re({ tex: t.tex, width: t.width, height: t.height, pos: t.pos, scale: t.scale, angle: t.angle, color: t.color, opacity: t.opacity, quad: t.quad, anchor: "center", uniform: e.opt.uniform, shader: e.opt.shader, fixed: e.opt.fixed });
      }), X();
    }
    __name(ye, "ye");
    u(ye, "drawFormattedText");
    function Lr() {
      var _a;
      if (a.stretchToParent && !At()) {
        let h = a.canvas.parentElement.offsetWidth, o = a.canvas.parentElement.offsetHeight;
        if (h !== a.lastParentWidth || o !== a.lastParentHeight) {
          a.canvas.width = h * a.pixelDensity, a.canvas.height = o * a.pixelDensity, a.canvas.style.width = h + "px", a.canvas.style.height = o + "px";
          let l = j(), d = B();
          f.ev.onOnce("frameEnd", () => {
            f.ev.trigger("resize", l, d, j(), B());
          });
        }
        a.lastParentWidth = h, a.lastParentHeight = o;
      }
      let e = a.pixelDensity, t = c.drawingBufferWidth / e, n = c.drawingBufferHeight / e;
      if (At()) {
        let h = window.innerWidth, o = window.innerHeight, l = h / o, d = t / n;
        if (l > d) {
          let m = window.innerHeight * d;
          g.viewport = { x: (h - m) / 2, y: 0, width: m, height: o };
        } else {
          let m = window.innerWidth / d;
          g.viewport = { x: 0, y: (o - m) / 2, width: h, height: m };
        }
        return;
      }
      if (i.letterbox) {
        if (!i.width || !i.height)
          throw new Error("Letterboxing requires width and height defined.");
        let h = t / n, o = i.width / i.height;
        if (h > o) {
          i.stretch || (g.width = n * o, g.height = n);
          let l = n * o, d = n, m = (t - l) / 2;
          c.scissor(m * e, 0, l * e, d * e), c.viewport(m * e, 0, l * e, n * e), g.viewport = { x: m, y: 0, width: l, height: n };
        } else {
          i.stretch || (g.width = t, g.height = t / o);
          let l = t, d = t / o, m = (n - d) / 2;
          c.scissor(0, m * e, l * e, d * e), c.viewport(0, m * e, t * e, d * e), g.viewport = { x: 0, y: m, width: t, height: d };
        }
        return;
      }
      if (i.stretch) {
        if (!i.width || !i.height)
          throw new Error("Stretching requires width and height defined.");
        c.viewport(0, 0, t * e, n * e), g.viewport = { x: 0, y: 0, width: t, height: n };
        return;
      }
      let s = (_a = i.scale) != null ? _a : 1;
      g.width = t / s, g.height = n / s, c.viewport(0, 0, t * e, n * e), g.viewport = { x: 0, y: 0, width: t, height: n };
    }
    __name(Lr, "Lr");
    u(Lr, "updateViewport");
    function j() {
      return g.width;
    }
    __name(j, "j");
    u(j, "width");
    function B() {
      return g.height;
    }
    __name(B, "B");
    u(B, "height");
    let $ = {}, Ke = {}, De = {};
    function Qe(e) {
      return p((e.x - g.viewport.x) * j() / g.viewport.width, (e.y - g.viewport.y) * B() / g.viewport.height);
    }
    __name(Qe, "Qe");
    u(Qe, "windowToContent");
    function Ir(e) {
      return p(e.x * g.viewport.width / g.width, e.y * g.viewport.height / g.height);
    }
    __name(Ir, "Ir");
    u(Ir, "contentToView");
    function St(e, t) {
      let n = Qe(p(e, t));
      a.mouseStarted && (a.mouseDeltaPos = n.sub(a.mousePos)), a.mousePos = n, a.mouseStarted = true, a.isMouseMoved = true;
    }
    __name(St, "St");
    u(St, "setMousePos"), $.mousemove = (e) => {
      f.ev.onOnce("input", () => {
        St(e.offsetX, e.offsetY), f.ev.trigger("mouseMove");
      });
    }, $.mousedown = (e) => {
      f.ev.onOnce("input", () => {
        let t = rr[e.button];
        t && a.mouseState.press(t), f.ev.trigger("mousePress", t);
      });
    }, $.mouseup = (e) => {
      f.ev.onOnce("input", () => {
        let t = rr[e.button];
        t && a.mouseState.release(t), f.ev.trigger("mouseRelease", t);
      });
    }, $.keydown = (e) => {
      Fs.has(e.key) && e.preventDefault(), f.ev.onOnce("input", () => {
        let t = nr[e.key] || e.key.toLowerCase();
        t.length === 1 ? (f.ev.trigger("charInput", t), a.charInputted.push(t)) : t === "space" && (f.ev.trigger("charInput", " "), a.charInputted.push(" ")), e.repeat ? (a.keyState.pressRepeat(t), f.ev.trigger("keyPressRepeat", t)) : (a.keyState.press(t), f.ev.trigger("keyPressRepeat", t), f.ev.trigger("keyPress", t));
      });
    }, $.keyup = (e) => {
      f.ev.onOnce("input", () => {
        let t = nr[e.key] || e.key.toLowerCase();
        a.keyState.release(t), f.ev.trigger("keyRelease", t);
      });
    }, $.touchstart = (e) => {
      e.preventDefault(), f.ev.onOnce("input", () => {
        let t = [...e.changedTouches];
        t.forEach((n) => {
          f.ev.trigger("onTouchStart", Qe(p(n.clientX, n.clientY)), n);
        }), i.touchToMouse !== false && (St(t[0].clientX, t[0].clientY), a.mouseState.press("left"), f.ev.trigger("mousePress", "left"));
      });
    }, $.touchmove = (e) => {
      e.preventDefault(), f.ev.onOnce("input", () => {
        let t = [...e.changedTouches];
        t.forEach((n) => {
          f.ev.trigger("onTouchMove", Qe(p(n.clientX, n.clientY)), n);
        }), i.touchToMouse !== false && (f.ev.trigger("mouseMove", "left"), St(t[0].clientX, t[0].clientY));
      });
    }, $.touchend = (e) => {
      f.ev.onOnce("input", () => {
        [...e.changedTouches].forEach((n) => {
          f.ev.trigger("onTouchEnd", Qe(p(n.clientX, n.clientY)), n);
        }), i.touchToMouse !== false && (a.mouseState.release("left"), f.ev.trigger("mouseRelease", "left"));
      });
    }, $.touchcancel = (e) => {
      f.ev.onOnce("input", () => {
        [...e.changedTouches].forEach((n) => {
          f.ev.trigger("onTouchEnd", Qe(p(n.clientX, n.clientY)), n);
        }), i.touchToMouse !== false && (a.mouseState.release("left"), f.ev.trigger("mouseRelease", "left"));
      });
    }, $.wheel = (e) => {
      e.preventDefault(), f.ev.onOnce("input", () => {
        f.ev.trigger("scroll", p(e.deltaX, e.deltaY));
      });
    }, $.contextmenu = (e) => e.preventDefault(), Ke.visibilitychange = () => {
      switch (document.visibilityState) {
        case "visible":
          a.skipTime = true, F.paused || C.ctx.resume();
          break;
        case "hidden":
          C.ctx.suspend();
          break;
      }
    }, De.error = (e) => {
      e.error ? Bt(e.error) : Bt(new Error(e.message));
    }, De.unhandledrejection = (e) => Bt(e.reason);
    for (let e in $)
      a.canvas.addEventListener(e, $[e]);
    for (let e in Ke)
      document.addEventListener(e, Ke[e]);
    for (let e in De)
      window.addEventListener(e, De[e]);
    function Me() {
      return a.mousePos.clone();
    }
    __name(Me, "Me");
    u(Me, "mousePos");
    function fn() {
      return a.mouseDeltaPos.clone();
    }
    __name(fn, "fn");
    u(fn, "mouseDeltaPos");
    function st(e = "left") {
      return a.mouseState.pressed.has(e);
    }
    __name(st, "st");
    u(st, "isMousePressed");
    function Gr(e = "left") {
      return a.mouseState.down.has(e);
    }
    __name(Gr, "Gr");
    u(Gr, "isMouseDown");
    function Ct(e = "left") {
      return a.mouseState.released.has(e);
    }
    __name(Ct, "Ct");
    u(Ct, "isMouseReleased");
    function Vr() {
      return a.isMouseMoved;
    }
    __name(Vr, "Vr");
    u(Vr, "isMouseMoved");
    function kr(e) {
      return e === void 0 ? a.keyState.pressed.size > 0 : a.keyState.pressed.has(e);
    }
    __name(kr, "kr");
    u(kr, "isKeyPressed");
    function Nr(e) {
      return e === void 0 ? a.keyState.pressedRepeat.size > 0 : a.keyState.pressedRepeat.has(e);
    }
    __name(Nr, "Nr");
    u(Nr, "isKeyPressedRepeat");
    function jr(e) {
      return e === void 0 ? a.keyState.down.size > 0 : a.keyState.down.has(e);
    }
    __name(jr, "jr");
    u(jr, "isKeyDown");
    function _r(e) {
      return e === void 0 ? a.keyState.released.size > 0 : a.keyState.released.has(e);
    }
    __name(_r, "_r");
    u(_r, "isKeyReleased");
    function qr(e) {
      return a.virtualButtonState.pressed.has(e);
    }
    __name(qr, "qr");
    u(qr, "isVirtualButtonPressed");
    function zr(e) {
      return a.virtualButtonState.down.has(e);
    }
    __name(zr, "zr");
    u(zr, "isVirtualButtonDown");
    function Hr(e) {
      return a.virtualButtonState.released.has(e);
    }
    __name(Hr, "Hr");
    u(Hr, "isVirtualButtonReleased");
    function $r() {
      return [...a.charInputted];
    }
    __name($r, "$r");
    u($r, "charInputted");
    function Tt() {
      return a.time;
    }
    __name(Tt, "Tt");
    u(Tt, "time");
    function Yr() {
      return a.canvas.toDataURL();
    }
    __name(Yr, "Yr");
    u(Yr, "screenshot");
    function mn(e) {
      return e && (a.canvas.style.cursor = e), a.canvas.style.cursor;
    }
    __name(mn, "mn");
    u(mn, "setCursor");
    function Xr(e = true) {
      e ? Hs(a.canvas) : $s();
    }
    __name(Xr, "Xr");
    u(Xr, "setFullscreen");
    function At() {
      return Boolean(Ys());
    }
    __name(At, "At");
    u(At, "isFullscreen");
    function pn() {
      return a.isTouchScreen;
    }
    __name(pn, "pn");
    u(pn, "isTouchScreen");
    let F = { inspect: false, timeScale: 1, showLog: true, fps: () => a.fpsCounter.fps, numFrames: () => a.numFrames, stepFrame: Rn, drawCalls: () => g.drawCalls, clearLog: () => f.logs = [], log: (e) => {
      var _a;
      let t = (_a = i.logMax) != null ? _a : Ns;
      f.logs.unshift(`${`[${Tt().toFixed(2)}].time `}[${(e == null ? void 0 : e.toString) ? e.toString() : e}].${e instanceof Error ? "error" : "info"}`), f.logs.length > t && (f.logs = f.logs.slice(0, t));
    }, error: (e) => F.log(new Error(e.toString ? e.toString() : e)), curRecording: null, get paused() {
      return a.paused;
    }, set paused(e) {
      a.paused = e, e ? C.ctx.suspend() : C.ctx.resume();
    } };
    function Q() {
      return a.dt * F.timeScale;
    }
    __name(Q, "Q");
    u(Q, "dt");
    function Kr(...e) {
      return e.length > 0 && (f.cam.pos = p(...e)), f.cam.pos ? f.cam.pos.clone() : lt();
    }
    __name(Kr, "Kr");
    u(Kr, "camPos");
    function Qr(...e) {
      return e.length > 0 && (f.cam.scale = p(...e)), f.cam.scale.clone();
    }
    __name(Qr, "Qr");
    u(Qr, "camScale");
    function Jr(e) {
      return e !== void 0 && (f.cam.angle = e), f.cam.angle;
    }
    __name(Jr, "Jr");
    u(Jr, "camRot");
    function Zr(e = 12) {
      f.cam.shake = e;
    }
    __name(Zr, "Zr");
    u(Zr, "shake");
    function Ot(e) {
      return f.cam.transform.multVec2(e);
    }
    __name(Ot, "Ot");
    u(Ot, "toScreen");
    function gn(e) {
      return f.cam.transform.invert().multVec2(e);
    }
    __name(gn, "gn");
    u(gn, "toWorld");
    function wn(e) {
      let t = new A();
      return e.pos && (t = t.translate(e.pos)), e.scale && (t = t.scale(e.scale)), e.angle && (t = t.rotateZ(e.angle)), e.parent ? t.mult(e.parent.transform) : t;
    }
    __name(wn, "wn");
    u(wn, "calcTransform");
    function vn(e) {
      let t = /* @__PURE__ */ new Map(), n = {}, s = new oe(), h = { id: Jn(), hidden: false, paused: false, transform: new A(), children: [], parent: null, add(o) {
        let l = (() => {
          if (Array.isArray(o))
            return vn(o);
          if (o.parent)
            throw new Error("Cannot add a game obj that already has a parent.");
          return o;
        })();
        return l.parent = this, l.transform = wn(l), this.children.push(l), l.trigger("add", this), f.ev.trigger("add", this), l;
      }, readd(o) {
        let l = this.children.indexOf(o);
        return l !== -1 && (this.children.splice(l, 1), this.children.push(o)), o;
      }, remove(o) {
        let l = this.children.indexOf(o);
        l !== -1 && (o.parent = null, o.trigger("destroy"), f.ev.trigger("destroy", o), this.children.splice(l, 1));
      }, removeAll(o) {
        this.get(o).forEach((l) => this.remove(l));
      }, update() {
        this.paused || (this.get().forEach((o) => o.update()), this.trigger("update"));
      }, draw() {
        this.hidden || (ee(), G(this.pos), Pe(this.scale), ge(this.angle), this.trigger("draw"), this.get().forEach((o) => o.draw()), X());
      }, drawInspect() {
        this.hidden || (ee(), G(this.pos), Pe(this.scale), ge(this.angle), this.get().forEach((o) => o.drawInspect()), this.trigger("drawInspect"), X());
      }, use(o) {
        if (!o)
          return;
        if (typeof o == "string")
          return this.use({ id: o });
        o.id && (this.unuse(o.id), t.set(o.id, { cleanups: [] }));
        let l = o.id ? t.get(o.id) : n, d = o.id ? l.cleanups : [], m = u(() => {
          if (o.require) {
            for (let w of o.require)
              if (!this.c(w))
                throw new Error(`Component "${o.id}" requires component "${w}"`);
          }
        }, "checkDeps");
        o.destroy && d.push(o.destroy), o.require && !this.exists() && l.cleanups && d.push(this.on("add", m));
        for (let w in o)
          if (!qs.has(w)) {
            if (typeof o[w] == "function") {
              let b = o[w].bind(this);
              if (zs.has(w)) {
                d.push(this.on(w, b)), l[w] = b;
                continue;
              } else
                l[w] = b;
            } else
              l[w] = o[w];
            if (this[w] === void 0)
              Object.defineProperty(this, w, { get: () => l[w], set: (b) => l[w] = b, configurable: true, enumerable: true });
            else
              throw new Error(`Duplicate component property: "${w}"`);
          }
        this.exists() && (m(), o.add && o.add.call(this));
      }, unuse(o) {
        if (t.has(o)) {
          let l = t.get(o);
          l.cleanups.forEach((d) => d.cancel());
          for (let d in l)
            delete l[d];
        }
        t.delete(o);
      }, c(o) {
        return t.get(o);
      }, get(o) {
        return this.children.filter((l) => o ? l.is(o) : true).sort((l, d) => {
          var _a, _b;
          return ((_a = l.z) != null ? _a : 0) - ((_b = d.z) != null ? _b : 0);
        });
      }, getAll(o) {
        return this.children.sort((l, d) => {
          var _a, _b;
          return ((_a = l.z) != null ? _a : 0) - ((_b = d.z) != null ? _b : 0);
        }).flatMap((l) => [l, ...l.getAll(o)]).filter((l) => o ? l.is(o) : true);
      }, isAncestorOf(o) {
        return o.parent ? o.parent === this || this.isAncestorOf(o.parent) : false;
      }, exists() {
        return f.root.isAncestorOf(this);
      }, is(o) {
        if (o === "*")
          return true;
        if (Array.isArray(o)) {
          for (let l of o)
            if (!this.c(l))
              return false;
          return true;
        } else
          return this.c(o) != null;
      }, on(o, l) {
        return s.on(o, l.bind(this));
      }, trigger(o, ...l) {
        s.trigger(o, ...l), f.objEvents.trigger(o, this, ...l);
      }, destroy() {
        this.parent && this.parent.remove(this);
      }, inspect() {
        let o = {};
        for (let [l, d] of t)
          o[l] = d.inspect ? d.inspect() : null;
        return o;
      }, onAdd(o) {
        return this.on("add", o);
      }, onUpdate(o) {
        return this.on("update", o);
      }, onDraw(o) {
        return this.on("draw", o);
      }, onDestroy(o) {
        return this.on("destroy", o);
      }, clearEvents() {
        s.clear();
      } };
      for (let o of e)
        h.use(o);
      return h;
    }
    __name(vn, "vn");
    u(vn, "make");
    function Fe(e, t, n) {
      return f.objEvents[e] || (f.objEvents[e] = new xe()), f.objEvents.on(e, (s, ...h) => {
        s.is(t) && n(s, ...h);
      });
    }
    __name(Fe, "Fe");
    u(Fe, "on");
    let Pt = u((e, t) => {
      if (typeof e == "function" && t === void 0) {
        let n = Ze([{ update: e }]);
        return { get paused() {
          return n.paused;
        }, set paused(s) {
          n.paused = s;
        }, cancel: () => n.destroy() };
      } else if (typeof e == "string")
        return Fe("update", e, t);
    }, "onUpdate"), Wr = u((e, t) => {
      if (typeof e == "function" && t === void 0) {
        let n = Ze([{ draw: e }]);
        return { get paused() {
          return n.hidden;
        }, set paused(s) {
          n.hidden = s;
        }, cancel: () => n.destroy() };
      } else if (typeof e == "string")
        return Fe("draw", e, t);
    }, "onDraw");
    function bn(e, t) {
      if (typeof e == "function" && t === void 0)
        return f.ev.on("add", e);
      if (typeof e == "string")
        return Fe("add", e, t);
    }
    __name(bn, "bn");
    u(bn, "onAdd");
    function ei(e, t) {
      if (typeof e == "function" && t === void 0)
        return f.ev.on("destroy", e);
      if (typeof e == "string")
        return Fe("destroy", e, t);
    }
    __name(ei, "ei");
    u(ei, "onDestroy");
    function ti(e, t, n) {
      return Fe("collide", e, (s, h, o) => h.is(t) && n(s, h, o));
    }
    __name(ti, "ti");
    u(ti, "onCollide");
    function ot(e, t) {
      An(e).forEach(t), bn(e, t);
    }
    __name(ot, "ot");
    u(ot, "forAllCurrentAndFuture");
    function ni(e, t) {
      if (typeof e == "function")
        return yn(e);
      {
        let n = [];
        return ot(e, (s) => {
          if (!s.area)
            throw new Error("onClick() requires the object to have area() component");
          n.push(s.onClick(() => t(s)));
        }), at(n);
      }
    }
    __name(ni, "ni");
    u(ni, "onClick");
    function ri(e, t) {
      let n = [];
      return ot(e, (s) => {
        if (!s.area)
          throw new Error("onHover() requires the object to have area() component");
        n.push(s.onHover(() => t(s)));
      }), at(n);
    }
    __name(ri, "ri");
    u(ri, "onHover");
    function ii(e, t) {
      let n = [];
      return ot(e, (s) => {
        if (!s.area)
          throw new Error("onHoverUpdate() requires the object to have area() component");
        n.push(s.onHoverUpdate(() => t(s)));
      }), at(n);
    }
    __name(ii, "ii");
    u(ii, "onHoverUpdate");
    function si(e, t) {
      let n = [];
      return ot(e, (s) => {
        if (!s.area)
          throw new Error("onHoverEnd() requires the object to have area() component");
        n.push(s.onHoverEnd(() => t(s)));
      }), at(n);
    }
    __name(si, "si");
    u(si, "onHoverEnd");
    function Rt(e, t) {
      let n = 0, s = [];
      t && s.push(t);
      let h = Pt(() => {
        n += Q(), n >= e && (h.cancel(), s.forEach((o) => o()));
      });
      return { paused: h.paused, cancel: h.cancel, onFinish(o) {
        s.push(o);
      }, then(o) {
        return this.onFinish(o), this;
      } };
    }
    __name(Rt, "Rt");
    u(Rt, "wait");
    function oi(e, t) {
      let n = null, s = u(() => {
        t(), n = Rt(e, s);
      }, "newAction");
      return s(), { get paused() {
        return n.paused;
      }, set paused(h) {
        n.paused = h;
      }, cancel: () => n.cancel() };
    }
    __name(oi, "oi");
    u(oi, "loop");
    function at(e) {
      return { get paused() {
        return e[0].paused;
      }, set paused(t) {
        e.forEach((n) => n.paused = t);
      }, cancel: () => e.forEach((t) => t.cancel()) };
    }
    __name(at, "at");
    u(at, "joinEventControllers");
    let ai = u((e, t) => {
      if (typeof e == "function")
        return f.ev.on("keyDown", e);
      if (typeof e == "string" && typeof t == "function")
        return f.ev.on("keyDown", (n) => n === e && t(e));
    }, "onKeyDown"), le = u((e, t) => {
      if (typeof e == "function")
        return f.ev.on("keyPress", e);
      if (typeof e == "string" && typeof t == "function")
        return f.ev.on("keyPress", (n) => n === e && t(e));
    }, "onKeyPress"), ui = u((e, t) => {
      if (typeof e == "function")
        return f.ev.on("keyPressRepeat", e);
      if (typeof e == "string" && typeof t == "function")
        return f.ev.on("keyPressRepeat", (n) => n === e && t(e));
    }, "onKeyPressRepeat"), ci = u((e, t) => {
      if (typeof e == "function")
        return f.ev.on("keyRelease", e);
      if (typeof e == "string" && typeof t == "function")
        return f.ev.on("keyRelease", (n) => n === e && t(e));
    }, "onKeyRelease");
    function li(e, t) {
      return typeof e == "function" ? f.ev.on("mouseDown", (n) => e(n)) : f.ev.on("mouseDown", (n) => n === e && t(n));
    }
    __name(li, "li");
    u(li, "onMouseDown");
    function yn(e, t) {
      return typeof e == "function" ? f.ev.on("mousePress", (n) => e(n)) : f.ev.on("mousePress", (n) => n === e && t(n));
    }
    __name(yn, "yn");
    u(yn, "onMousePress");
    function hi(e, t) {
      return typeof e == "function" ? f.ev.on("mouseRelease", (n) => e(n)) : f.ev.on("mouseRelease", (n) => n === e && t(n));
    }
    __name(hi, "hi");
    u(hi, "onMouseRelease");
    function di(e) {
      return f.ev.on("mouseMove", () => e(Me(), fn()));
    }
    __name(di, "di");
    u(di, "onMouseMove");
    function fi(e) {
      return f.ev.on("charInput", e);
    }
    __name(fi, "fi");
    u(fi, "onCharInput");
    function mi(e) {
      return f.ev.on("onTouchStart", e);
    }
    __name(mi, "mi");
    u(mi, "onTouchStart");
    function pi(e) {
      return f.ev.on("onTouchMove", e);
    }
    __name(pi, "pi");
    u(pi, "onTouchMove");
    function gi(e) {
      return f.ev.on("onTouchEnd", e);
    }
    __name(gi, "gi");
    u(gi, "onTouchEnd");
    function wi(e) {
      return f.ev.on("scroll", e);
    }
    __name(wi, "wi");
    u(wi, "onScroll");
    function vi(e, t) {
      return f.ev.on("virtualButtonDown", (n) => n === e && t());
    }
    __name(vi, "vi");
    u(vi, "onVirtualButtonDown");
    function bi(e, t) {
      return f.ev.on("virtualButtonPress", (n) => n === e && t());
    }
    __name(bi, "bi");
    u(bi, "onVirtualButtonPress");
    function yi(e, t) {
      return f.ev.on("virtualButtonRelease", (n) => n === e && t());
    }
    __name(yi, "yi");
    u(yi, "onVirtualButtonRelease");
    function Un() {
      le("f1", () => {
        F.inspect = !F.inspect;
      }), le("f2", () => {
        F.clearLog();
      }), le("f8", () => {
        F.paused = !F.paused;
      }), le("f7", () => {
        F.timeScale = Be(te(F.timeScale - 0.2, 0, 2), 1);
      }), le("f9", () => {
        F.timeScale = Be(te(F.timeScale + 0.2, 0, 2), 1);
      }), le("f10", () => {
        F.stepFrame();
      });
    }
    __name(Un, "Un");
    u(Un, "enterDebugMode");
    function xn() {
      le("b", () => rn());
    }
    __name(xn, "xn");
    u(xn, "enterBurpMode");
    function Ui(e) {
      return e !== void 0 && (f.gravity = e), f.gravity;
    }
    __name(Ui, "Ui");
    u(Ui, "gravity");
    function ut(...e) {
      return { id: "pos", pos: p(...e), moveBy(...t) {
        this.pos = this.pos.add(p(...t));
      }, move(...t) {
        this.moveBy(p(...t).scale(Q()));
      }, moveTo(...t) {
        if (typeof t[0] == "number" && typeof t[1] == "number")
          return this.moveTo(p(t[0], t[1]), t[2]);
        let n = t[0], s = t[1];
        if (s === void 0) {
          this.pos = p(n);
          return;
        }
        let h = n.sub(this.pos);
        if (h.len() <= s * Q()) {
          this.pos = p(n);
          return;
        }
        this.move(h.unit().scale(s));
      }, worldPos() {
        return this.parent ? this.parent.transform.multVec2(this.pos) : this.pos;
      }, screenPos() {
        return this.fixed ? this.pos : Ot(this.pos);
      }, inspect() {
        return `(${Math.round(this.pos.x)}, ${Math.round(this.pos.y)})`;
      }, drawInspect() {
        we({ color: x(255, 0, 0), radius: 4 / ln() });
      } };
    }
    __name(ut, "ut");
    u(ut, "pos");
    function ct(...e) {
      return e.length === 0 ? ct(1) : { id: "scale", scale: p(...e), scaleTo(...t) {
        this.scale = p(...t);
      }, inspect() {
        return typeof this.scale == "number" ? `${Be(this.scale, 2)}` : `(${Be(this.scale.x, 2)}, ${Be(this.scale.y, 2)})`;
      } };
    }
    __name(ct, "ct");
    u(ct, "scale");
    function xi(e) {
      return { id: "rotate", angle: e != null ? e : 0, rotate(t) {
        this.rotateBy(t * Q());
      }, rotateBy(t) {
        this.angle += t;
      }, inspect() {
        return `${Math.round(this.angle)}`;
      } };
    }
    __name(xi, "xi");
    u(xi, "rotate");
    function Ei(...e) {
      return { id: "color", color: x(...e), inspect() {
        return this.color.toString();
      } };
    }
    __name(Ei, "Ei");
    u(Ei, "color");
    function Be(e, t) {
      return Number(e.toFixed(t));
    }
    __name(Be, "Be");
    u(Be, "toFixed");
    function Si(e) {
      return { id: "opacity", opacity: e != null ? e : 1, inspect() {
        return `${Be(this.opacity, 1)}`;
      }, fadeOut(t, n = fe.linear) {
        return Lt(this.opacity, 0, t, (s) => this.opacity = s, n);
      } };
    }
    __name(Si, "Si");
    u(Si, "opacity");
    function Dt(e) {
      if (!e)
        throw new Error("Please define an anchor");
      return { id: "anchor", anchor: e, inspect() {
        return typeof this.anchor == "string" ? this.anchor : this.anchor.toString();
      } };
    }
    __name(Dt, "Dt");
    u(Dt, "anchor");
    function Ci(e) {
      return { id: "z", z: e, inspect() {
        return `${this.z}`;
      } };
    }
    __name(Ci, "Ci");
    u(Ci, "z");
    function Ti(e, t) {
      return { id: "follow", require: ["pos"], follow: { obj: e, offset: t != null ? t : p(0) }, add() {
        e.exists() && (this.pos = this.follow.obj.pos.add(this.follow.offset));
      }, update() {
        e.exists() && (this.pos = this.follow.obj.pos.add(this.follow.offset));
      } };
    }
    __name(Ti, "Ti");
    u(Ti, "follow");
    function Ai(e, t) {
      let n = typeof e == "number" ? D.fromAngle(e) : e.unit();
      return { id: "move", require: ["pos"], update() {
        this.move(n.scale(t));
      } };
    }
    __name(Ai, "Ai");
    u(Ai, "move");
    let Oi = 200;
    function Pi(e = {}) {
      var _a;
      let t = (_a = e.distance) != null ? _a : Oi, n = false;
      return { id: "offscreen", require: ["pos"], isOffScreen() {
        let s = Ot(this.pos), h = new V(p(0), j(), B());
        return !qe(h, s) && h.distToPoint(s) > t;
      }, onExitScreen(s) {
        return this.on("exitView", s);
      }, onEnterScreen(s) {
        return this.on("enterView", s);
      }, update() {
        this.isOffScreen() ? (n || (this.trigger("exitView"), n = true), e.hide && (this.hidden = true), e.pause && (this.paused = true), e.destroy && this.destroy()) : (n && (this.trigger("enterView"), n = false), e.hide && (this.hidden = false), e.pause && (this.paused = false));
      }, inspect() {
        return `${this.isOffScreen()}`;
      } };
    }
    __name(Pi, "Pi");
    u(Pi, "offscreen");
    function Ri(e = {}) {
      var _a, _b, _c, _d, _e2;
      let t = [];
      return { id: "area", colliding: {}, collisionIgnore: (_a = e.collisionIgnore) != null ? _a : [], add() {
        this.area.cursor && t.push(this.onHover(() => mn(this.area.cursor))), t.push(this.onCollideUpdate((n, s) => {
          this.colliding[n.id] || this.trigger("collide", n, s), this.colliding[n.id] = s;
        }));
      }, update() {
        for (let n in this.colliding) {
          let s = this.colliding[n];
          this.checkCollision(s.target) || (delete this.colliding[n], this.trigger("collideEnd", s.target, s));
        }
      }, drawInspect() {
        let n = this.localArea();
        ee(), Pe(this.area.scale), G(this.area.offset);
        let s = { outline: { width: 4 / ln(), color: x(0, 0, 255) }, anchor: this.anchor, fill: false, fixed: this.fixed };
        n instanceof V ? K(__spreadProps(__spreadValues({}, s), { pos: n.pos, width: n.width, height: n.height })) : n instanceof se ? ve(__spreadProps(__spreadValues({}, s), { pts: n.pts })) : n instanceof de && we(__spreadProps(__spreadValues({}, s), { pos: n.center, radius: n.radius })), X();
      }, destroy() {
        t.forEach((n) => n.cancel());
      }, area: { shape: (_b = e.shape) != null ? _b : null, scale: (_c = e.scale) != null ? _c : p(1), offset: (_d = e.offset) != null ? _d : p(0), cursor: (_e2 = e.cursor) != null ? _e2 : null }, isClicked() {
        return st() && this.isHovering();
      }, isHovering() {
        let n = this.fixed ? Me() : gn(Me());
        return this.hasPoint(n);
      }, checkCollision(n) {
        if (this === n || !n.area || !n.exists())
          return null;
        let s = this.worldArea(), h = n.worldArea();
        return Xn(s, h);
      }, isColliding(n) {
        let s = this.checkCollision(n);
        return s && !s.isZero();
      }, isTouching(n) {
        return Boolean(this.checkCollision(n));
      }, onClick(n) {
        return this.onUpdate(() => {
          this.isClicked() && n();
        });
      }, onHover(n) {
        let s = false;
        return this.onUpdate(() => {
          s ? s = this.isHovering() : this.isHovering() && (s = true, n());
        });
      }, onHoverUpdate(n) {
        return this.onUpdate(() => {
          this.isHovering() && n();
        });
      }, onHoverEnd(n) {
        let s = false;
        return this.onUpdate(() => {
          s ? this.isHovering() || (s = false, n()) : s = this.isHovering();
        });
      }, onCollide(n, s) {
        if (typeof n == "function" && s === void 0)
          return this.on("collide", n);
        if (typeof n == "string")
          return this.onCollide((h, o) => {
            h.is(n) && s(h, o);
          });
      }, onCollideUpdate(n, s) {
        if (typeof n == "function" && s === void 0)
          return this.on("collideUpdate", n);
        if (typeof n == "string")
          return this.on("collideUpdate", (h, o) => h.is(n) && s(h, o));
      }, onCollideEnd(n, s) {
        if (typeof n == "function" && s === void 0)
          return this.on("collideEnd", n);
        if (typeof n == "string")
          return this.on("collideEnd", (h) => h.is(n) && s(h));
      }, hasPoint(n) {
        return Yn(this.worldArea(), n);
      }, pushOut(n) {
        let s = this.checkCollision(n);
        s && (this.pos = this.pos.add(s));
      }, pushOutAll() {
        f.root.getAll().forEach(this.pushOut);
      }, localArea() {
        return this.area.shape ? this.area.shape : this.renderArea();
      }, worldArea() {
        var _a2;
        let n = this.localArea();
        if (!(n instanceof se || n instanceof V))
          throw new Error("Only support polygon and rect shapes for now");
        let s = this.transform.scale(p((_a2 = this.area.scale) != null ? _a2 : 1)).translate(this.area.offset);
        if (n instanceof V) {
          let h = n.bbox(), o = tt(this.anchor || gt).add(1, 1).scale(-0.5).scale(h.width, h.height);
          s = s.translate(o);
        }
        return n.transform(s);
      }, screenArea() {
        let n = this.worldArea();
        return this.fixed ? n : n.transform(f.cam.transform);
      } };
    }
    __name(Ri, "Ri");
    u(Ri, "area");
    function Je(e) {
      return { color: e.color, opacity: e.opacity, anchor: e.anchor, outline: e.outline, fixed: e.fixed, shader: e.shader, uniform: e.uniform };
    }
    __name(Je, "Je");
    u(Je, "getRenderProps");
    function Mt(e, t = {}) {
      var _a;
      let n = null, s = null;
      if (!e)
        throw new Error("Please pass the resource name or data to sprite()");
      let h = u((o, l, d, m) => {
        let w = p(1, 1);
        return d && m ? (w.x = d / (o.width * l.w), w.y = m / (o.height * l.h)) : d ? (w.x = d / (o.width * l.w), w.y = w.x) : m && (w.y = m / (o.height * l.h), w.x = w.y), w;
      }, "calcTexScale");
      return { id: "sprite", width: 0, height: 0, frame: t.frame || 0, quad: t.quad || new N(0, 0, 1, 1), animSpeed: (_a = t.animSpeed) != null ? _a : 1, draw() {
        !n || sn(__spreadProps(__spreadValues({}, Je(this)), { sprite: n, frame: this.frame, quad: this.quad, flipX: t.flipX, flipY: t.flipY, tiled: t.tiled, width: t.width, height: t.height }));
      }, update() {
        if (!n) {
          let l = tn(e);
          if (!l || !l.data)
            return;
          let d = l.data.frames[0].clone();
          t.quad && (d = d.scale(t.quad));
          let m = h(l.data.tex, d, t.width, t.height);
          this.width = l.data.tex.width * d.w * m.x, this.height = l.data.tex.height * d.h * m.y, t.anim && this.play(t.anim), n = l.data, this.trigger("spriteLoaded", n);
        }
        if (!s)
          return;
        let o = n.anims[s.name];
        if (typeof o == "number") {
          this.frame = o;
          return;
        }
        if (o.speed === 0)
          throw new Error("Sprite anim speed cannot be 0");
        s.timer += Q() * this.animSpeed, s.timer >= 1 / s.speed && (s.timer = 0, o.from > o.to ? (this.frame--, this.frame < o.to && (s.loop ? this.frame = o.from : (this.frame++, s.onEnd(), this.stop()))) : (this.frame++, this.frame > o.to && (s.loop ? this.frame = o.from : (this.frame--, s.onEnd(), this.stop()))));
      }, play(o, l = {}) {
        var _a2, _b, _c, _d, _e2, _f, _g;
        if (!n) {
          this.on("spriteLoaded", () => {
            this.play(o, l);
          });
          return;
        }
        let d = n.anims[o];
        if (!d)
          throw new Error(`Anim not found: ${o}`);
        s && this.stop(), s = typeof d == "number" ? { name: o, timer: 0, loop: false, pingpong: false, speed: 0, onEnd: () => {
        } } : { name: o, timer: 0, loop: (_b = (_a2 = l.loop) != null ? _a2 : d.loop) != null ? _b : false, pingpong: (_d = (_c = l.pingpong) != null ? _c : d.pingpong) != null ? _d : false, speed: (_f = (_e2 = l.speed) != null ? _e2 : d.speed) != null ? _f : 10, onEnd: (_g = l.onEnd) != null ? _g : () => {
        } }, this.frame = typeof d == "number" ? d : d.from, this.trigger("animStart", o);
      }, stop() {
        if (!s)
          return;
        let o = s.name;
        s = null, this.trigger("animEnd", o);
      }, numFrames() {
        return n ? n.frames.length : 0;
      }, curAnim() {
        return s == null ? void 0 : s.name;
      }, flipX(o) {
        t.flipX = o;
      }, flipY(o) {
        t.flipY = o;
      }, onAnimEnd(o, l) {
        return this.on("animEnd", (d) => {
          d === o && l();
        });
      }, onAnimStart(o, l) {
        return this.on("animStart", (d) => {
          d === o && l();
        });
      }, renderArea() {
        return new V(p(0), this.width, this.height);
      }, inspect() {
        if (typeof e == "string")
          return `"${e}"`;
      } };
    }
    __name(Mt, "Mt");
    u(Mt, "sprite");
    function Di(e, t = {}) {
      var _a;
      function n(s) {
        var _a2, _b;
        let h = be(__spreadProps(__spreadValues({}, Je(s)), { text: s.text + "", size: s.textSize, font: s.font, width: t.width && s.width, align: s.align, letterSpacing: s.letterSpacing, lineSpacing: s.lineSpacing, transform: s.textTransform, styles: s.textStyles }));
        return t.width || (s.width = h.width / (((_a2 = s.scale) == null ? void 0 : _a2.x) || 1)), s.height = h.height / (((_b = s.scale) == null ? void 0 : _b.y) || 1), h;
      }
      __name(n, "n");
      return u(n, "update"), { id: "text", text: e, textSize: (_a = t.size) != null ? _a : ks, font: t.font, width: t.width, height: 0, align: t.align, lineSpacing: t.lineSpacing, letterSpacing: t.letterSpacing, textTransform: t.transform, textStyles: t.styles, add() {
        Ft(() => n(this));
      }, draw() {
        ye(n(this));
      }, renderArea() {
        return new V(p(0), this.width, this.height);
      } };
    }
    __name(Di, "Di");
    u(Di, "text");
    function Mi(e, t, n = {}) {
      return { id: "rect", width: e, height: t, radius: n.radius || 0, draw() {
        K(__spreadProps(__spreadValues({}, Je(this)), { width: this.width, height: this.height, radius: this.radius }));
      }, renderArea() {
        return new V(p(0), this.width, this.height);
      }, inspect() {
        return `${Math.ceil(this.width)}, ${Math.ceil(this.height)}`;
      } };
    }
    __name(Mi, "Mi");
    u(Mi, "rect");
    function Fi(e, t) {
      return { id: "rect", width: e, height: t, draw() {
        Re(__spreadProps(__spreadValues({}, Je(this)), { width: this.width, height: this.height }));
      }, renderArea() {
        return new V(p(0), this.width, this.height);
      }, inspect() {
        return `${Math.ceil(this.width)}, ${Math.ceil(this.height)}`;
      } };
    }
    __name(Fi, "Fi");
    u(Fi, "uvquad");
    function Bi(e) {
      return { id: "circle", radius: e, draw() {
        we(__spreadProps(__spreadValues({}, Je(this)), { radius: this.radius }));
      }, renderArea() {
        return new de(p(0), this.radius);
      }, inspect() {
        return `${Math.ceil(this.radius)}`;
      } };
    }
    __name(Bi, "Bi");
    u(Bi, "circle");
    function Li(e = 1, t = x(0, 0, 0)) {
      return { id: "outline", outline: { width: e, color: t } };
    }
    __name(Li, "Li");
    u(Li, "outline");
    function En(e, t) {
      let n = new xe();
      return e && t && n.pushd(new pe(e, t)), { id: "timer", wait(s, h) {
        let o = [h], l = new pe(s, () => o.forEach((m) => m())), d = n.pushd(l);
        return { get paused() {
          return l.paused;
        }, set paused(m) {
          l.paused = m;
        }, cancel: d, onFinish(m) {
          o.push(m);
        }, then(m) {
          return this.onFinish(m), this;
        } };
      }, update() {
        n.forEach((s, h) => {
          s.tick(Q()) && n.delete(h);
        });
      } };
    }
    __name(En, "En");
    u(En, "timer");
    let Ii = 640, Gi = 65536;
    function Vi(e = {}) {
      var _a, _b, _c, _d;
      let t = 0, n = null, s = null, h = false, o = [];
      return { id: "body", require: ["pos", "area"], jumpForce: (_a = e.jumpForce) != null ? _a : Ii, gravityScale: (_b = e.gravityScale) != null ? _b : 1, isStatic: (_c = e.isStatic) != null ? _c : false, mass: (_d = e.mass) != null ? _d : 0, add() {
        o.push(this.onCollideUpdate((l, d) => {
          if (!l.is("body") || d.resolved || this.isStatic && l.isStatic)
            return;
          let m = !this.isStatic && l.isStatic ? d : d.reverse();
          m.source.trigger("beforePhysicsResolve", m), m.target.trigger("beforePhysicsResolve", m.reverse()), !d.resolved && (m.source.pos = m.source.pos.add(m.displacement), m.source.transform = wn(m.source), d.resolved = true, m.source.trigger("physicsResolve", m), m.target.trigger("physicsResolve", m.reverse()));
        })), o.push(this.onPhysicsResolve((l) => {
          f.gravity && (l.isBottom() && this.isFalling() ? (t = 0, n = l.target, s = l.target.pos, h ? h = false : this.trigger("ground", n)) : l.isTop() && this.isJumping() && (t = 0, this.trigger("headbutt", l.target)));
        }));
      }, update() {
        var _a2;
        if (!f.gravity || this.isStatic)
          return;
        if (h && (n = null, s = null, this.trigger("fallOff"), h = false), n)
          if (!this.isTouching(n) || !n.exists() || !n.is("body"))
            h = true;
          else {
            !n.pos.eq(s) && e.stickToPlatform !== false && this.moveBy(n.pos.sub(s)), s = n.pos;
            return;
          }
        let l = t;
        t += f.gravity * this.gravityScale * Q(), t = Math.min(t, (_a2 = e.maxVelocity) != null ? _a2 : Gi), l < 0 && t >= 0 && this.trigger("fall"), this.move(0, t);
      }, destroy() {
        o.forEach((l) => l.cancel());
      }, onPhysicsResolve(l) {
        return this.on("physicsResolve", l);
      }, onBeforePhysicsResolve(l) {
        return this.on("beforePhysicsResolve", l);
      }, curPlatform() {
        return n;
      }, isGrounded() {
        return n !== null;
      }, isFalling() {
        return t > 0;
      }, isJumping() {
        return t < 0;
      }, jump(l) {
        n = null, s = null, t = -l || -this.jumpForce;
      }, onGround(l) {
        return this.on("ground", l);
      }, onFall(l) {
        return this.on("fall", l);
      }, onFallOff(l) {
        return this.on("fallOff", l);
      }, onHeadbutt(l) {
        return this.on("headbutt", l);
      } };
    }
    __name(Vi, "Vi");
    u(Vi, "body");
    function ki(e = 2) {
      let t = e, n = [];
      return { id: "doubleJump", require: ["body"], numJumps: e, add() {
        n.push(this.onGround(() => {
          t = this.numJumps;
        }));
      }, destroy() {
        n.forEach((s) => s.cancel());
      }, doubleJump(s) {
        t <= 0 || (t < this.numJumps && this.trigger("doubleJump"), t--, this.jump(s));
      }, onDoubleJump(s) {
        return this.on("doubleJump", s);
      }, inspect() {
        return `${t}`;
      } };
    }
    __name(ki, "ki");
    u(ki, "doubleJump");
    function Ni(e, t = {}) {
      return { id: "shader", shader: e, uniform: t };
    }
    __name(Ni, "Ni");
    u(Ni, "shader");
    function ji() {
      return { id: "fixed", fixed: true };
    }
    __name(ji, "ji");
    u(ji, "fixed");
    function Sn(e) {
      return { id: "stay", stay: true, scenesToStay: e };
    }
    __name(Sn, "Sn");
    u(Sn, "stay");
    function _i(e) {
      if (e == null)
        throw new Error("health() requires the initial amount of hp");
      return { id: "health", hurt(t = 1) {
        this.setHP(e - t), this.trigger("hurt");
      }, heal(t = 1) {
        this.setHP(e + t), this.trigger("heal");
      }, hp() {
        return e;
      }, setHP(t) {
        e = t, e <= 0 && this.trigger("death");
      }, onHurt(t) {
        return this.on("hurt", t);
      }, onHeal(t) {
        return this.on("heal", t);
      }, onDeath(t) {
        return this.on("death", t);
      }, inspect() {
        return `${e}`;
      } };
    }
    __name(_i, "_i");
    u(_i, "health");
    function qi(e, t = {}) {
      var _a;
      if (e == null)
        throw new Error("lifespan() requires time");
      let n = (_a = t.fade) != null ? _a : 0;
      return { id: "lifespan", add() {
        return __async(this, null, function* () {
          yield Rt(e), n > 0 && this.opacity && (yield Lt(this.opacity, 0, n, (s) => this.opacity = s, fe.linear)), this.destroy();
        });
      } };
    }
    __name(qi, "qi");
    u(qi, "lifespan");
    function zi(e, t, n) {
      if (!e)
        throw new Error("state() requires an initial state");
      let s = {};
      function h(m) {
        s[m] || (s[m] = { enter: new W(), end: new W(), update: new W(), draw: new W() });
      }
      __name(h, "h");
      u(h, "initStateEvents");
      function o(m, w, b) {
        return h(w), s[w][m].add(b);
      }
      __name(o, "o");
      u(o, "on");
      function l(m, w, ...b) {
        h(w), s[w][m].trigger(...b);
      }
      __name(l, "l");
      u(l, "trigger");
      let d = false;
      return { id: "state", state: e, enterState(m, ...w) {
        if (d = true, t && !t.includes(m))
          throw new Error(`State not found: ${m}`);
        let b = this.state;
        if (n) {
          if (!(n == null ? void 0 : n[b]))
            return;
          let y = typeof n[b] == "string" ? [n[b]] : n[b];
          if (!y.includes(m))
            throw new Error(`Cannot transition state from "${b}" to "${m}". Available transitions: ${y.map((L) => `"${L}"`).join(", ")}`);
        }
        l("end", b, ...w), this.state = m, l("enter", m, ...w), l("enter", `${b} -> ${m}`, ...w);
      }, onStateTransition(m, w, b) {
        return o("enter", `${m} -> ${w}`, b);
      }, onStateEnter(m, w) {
        return o("enter", m, w);
      }, onStateUpdate(m, w) {
        return o("update", m, w);
      }, onStateDraw(m, w) {
        return o("draw", m, w);
      }, onStateEnd(m, w) {
        return o("end", m, w);
      }, update() {
        d || (l("enter", e), d = true), l("update", this.state);
      }, draw() {
        l("draw", this.state);
      }, inspect() {
        return this.state;
      } };
    }
    __name(zi, "zi");
    u(zi, "state");
    function Hi(e = 1) {
      let t = 0, n = false;
      return { require: ["opacity"], add() {
        this.opacity = 0;
      }, update() {
        n || (t += Q(), this.opacity = mt(t, 0, e, 0, 1), t >= e && (this.opacity = 1, n = true));
      } };
    }
    __name(Hi, "Hi");
    u(Hi, "fadeIn");
    function Ft(e) {
      U.loaded ? e() : f.ev.on("load", e);
    }
    __name(Ft, "Ft");
    u(Ft, "onLoad");
    function $i(e, t) {
      f.scenes[e] = t;
    }
    __name($i, "$i");
    u($i, "scene");
    function Yi(e, ...t) {
      if (!f.scenes[e])
        throw new Error(`Scene not found: ${e}`);
      f.ev.onOnce("frameEnd", () => {
        f.ev = new oe(), f.objEvents = new oe(), f.root.get().forEach((n) => {
          (!n.stay || n.scenesToStay && !n.scenesToStay.includes(e)) && f.root.remove(n);
        }), f.root.clearEvents(), f.cam = { pos: null, scale: p(1), angle: 0, shake: 0, transform: new A() }, f.gravity = 0, f.scenes[e](...t), i.debug !== false && Un(), i.burp && xn();
      });
    }
    __name(Yi, "Yi");
    u(Yi, "go");
    function Xi(e, t) {
      try {
        return JSON.parse(window.localStorage[e]);
      } catch (e2) {
        return t ? (Cn(e, t), t) : null;
      }
    }
    __name(Xi, "Xi");
    u(Xi, "getData");
    function Cn(e, t) {
      window.localStorage[e] = JSON.stringify(t);
    }
    __name(Cn, "Cn");
    u(Cn, "setData");
    function Tn(e) {
      let t = e(Le);
      for (let n in t)
        Le[n] = t[n], i.global !== false && (window[n] = t[n]);
      return Le;
    }
    __name(Tn, "Tn");
    u(Tn, "plug");
    function lt() {
      return p(j() / 2, B() / 2);
    }
    __name(lt, "lt");
    u(lt, "center");
    function Ki(e, t) {
      return { id: "grid", gridPos: t.clone(), setGridPos(...n) {
        let s = p(...n);
        this.gridPos = s.clone(), this.pos = p(this.gridPos.x * e.gridWidth(), this.gridPos.y * e.gridHeight());
      }, moveLeft() {
        this.setGridPos(this.gridPos.add(p(-1, 0)));
      }, moveRight() {
        this.setGridPos(this.gridPos.add(p(1, 0)));
      }, moveUp() {
        this.setGridPos(this.gridPos.add(p(0, -1)));
      }, moveDown() {
        this.setGridPos(this.gridPos.add(p(0, 1)));
      } };
    }
    __name(Ki, "Ki");
    u(Ki, "grid");
    function Qi(e, t) {
      var _a;
      if (!t.width || !t.height)
        throw new Error("Must provide level grid width & height.");
      let n = Ze([ut((_a = t.pos) != null ? _a : p(0))]), s = 0, h = { id: "level", gridWidth() {
        return t.width;
      }, gridHeight() {
        return t.height;
      }, getPos(...o) {
        let l = p(...o);
        return p(l.x * t.width, l.y * t.height);
      }, spawn(o, ...l) {
        let d = p(...l), m = (() => {
          if (t[o]) {
            if (typeof t[o] != "function")
              throw new Error("Level symbol def must be a function returning a component list");
            return t[o](d);
          } else if (t.any)
            return t.any(o, d);
        })();
        if (!m)
          return;
        let w = p(d.x * t.width, d.y * t.height);
        for (let b of m)
          if (b.id === "pos") {
            w.x += b.pos.x, w.y += b.pos.y;
            break;
          }
        return m.push(ut(w)), m.push(Ki(this, d)), n.add(m);
      }, levelWidth() {
        return s * t.width;
      }, levelHeight() {
        return e.length * t.height;
      } };
      return n.use(h), e.forEach((o, l) => {
        let d = o.split("");
        s = Math.max(d.length, s), d.forEach((m, w) => {
          n.spawn(m, p(w, l));
        });
      }), n;
    }
    __name(Qi, "Qi");
    u(Qi, "addLevel");
    function Ji(e) {
      let t = a.canvas.captureStream(e), n = C.ctx.createMediaStreamDestination();
      C.masterNode.connect(n);
      let s = new MediaRecorder(t), h = [];
      return s.ondataavailable = (o) => {
        o.data.size > 0 && h.push(o.data);
      }, s.onerror = () => {
        C.masterNode.disconnect(n), t.getTracks().forEach((o) => o.stop());
      }, s.start(), { resume() {
        s.resume();
      }, pause() {
        s.pause();
      }, stop() {
        return s.stop(), C.masterNode.disconnect(n), t.getTracks().forEach((o) => o.stop()), new Promise((o) => {
          s.onstop = () => {
            o(new Blob(h, { type: "video/mp4" }));
          };
        });
      }, download(o = "kaboom.mp4") {
        this.stop().then((l) => zt(o, l));
      } };
    }
    __name(Ji, "Ji");
    u(Ji, "record");
    function Zi() {
      return document.activeElement === a.canvas;
    }
    __name(Zi, "Zi");
    u(Zi, "isFocused");
    function Wi(e) {
      e.destroy();
    }
    __name(Wi, "Wi");
    u(Wi, "destroy");
    let Ze = f.root.add.bind(f.root), es = f.root.readd.bind(f.root), ts = f.root.removeAll.bind(f.root), An = f.root.get.bind(f.root), On = f.root.getAll.bind(f.root);
    function Pn(e = 2, t = 1) {
      let n = 0;
      return { id: "boom", require: ["scale"], update() {
        let s = Math.sin(n * e) * t;
        s < 0 && this.destroy(), this.scale = p(s), n += Q();
      } };
    }
    __name(Pn, "Pn");
    u(Pn, "boom");
    let ns = Oe(null, er), rs = Oe(null, tr);
    function is(e, t = {}) {
      var _a, _b;
      let n = Ze([ut(e), Sn()]), s = (t.speed || 1) * 5, h = t.scale || 1;
      n.add([Mt(rs), ct(0), Dt("center"), Pn(s, h), ...(_a = t.comps) != null ? _a : []]);
      let o = n.add([Mt(ns), ct(0), Dt("center"), En(0.4 / s, () => o.use(Pn(s, h))), ...(_b = t.comps) != null ? _b : []]);
      return o.onDestroy(() => n.destroy()), n;
    }
    __name(is, "is");
    u(is, "addKaboom");
    function ss() {
      f.ev.trigger("input"), a.keyState.down.forEach((e) => f.ev.trigger("keyDown", e)), a.mouseState.down.forEach((e) => f.ev.trigger("mouseDown", e)), a.virtualButtonState.down.forEach((e) => f.ev.trigger("virtualButtonDown", e));
    }
    __name(ss, "ss");
    u(ss, "inputFrame");
    function Rn() {
      f.root.update();
    }
    __name(Rn, "Rn");
    u(Rn, "updateFrame");
    let os = 64;
    class ht {
      constructor(t, n, s, h = false) {
        __publicField(this, "source");
        __publicField(this, "target");
        __publicField(this, "displacement");
        __publicField(this, "resolved", false);
        this.source = t, this.target = n, this.displacement = s, this.resolved = h;
      }
      reverse() {
        return new ht(this.target, this.source, this.displacement.scale(-1), this.resolved);
      }
      isLeft() {
        return this.displacement.x > 0;
      }
      isRight() {
        return this.displacement.x < 0;
      }
      isTop() {
        return this.displacement.y > 0;
      }
      isBottom() {
        return this.displacement.y < 0;
      }
      preventResolve() {
        this.resolved = true;
      }
    }
    __name(ht, "ht");
    u(ht, "Collision");
    function as() {
      let e = {}, t = i.hashGridSize || os, n = new A(), s = [];
      function h(o) {
        if (s.push(n), o.pos && (n = n.translate(o.pos)), o.scale && (n = n.scale(o.scale)), o.angle && (n = n.rotateZ(o.angle)), o.transform = n.clone(), o.c("area") && !o.paused) {
          let l = o, m = l.worldArea().bbox(), w = Math.floor(m.pos.x / t), b = Math.floor(m.pos.y / t), y = Math.ceil((m.pos.x + m.width) / t), L = Math.ceil((m.pos.y + m.height) / t), P = /* @__PURE__ */ new Set();
          for (let q = w; q <= y; q++)
            for (let z2 = b; z2 <= L; z2++)
              if (!e[q])
                e[q] = {}, e[q][z2] = [l];
              else if (!e[q][z2])
                e[q][z2] = [l];
              else {
                let Ue = e[q][z2];
                for (let J of Ue) {
                  if (!J.exists() || P.has(J.id))
                    continue;
                  for (let S of l.collisionIgnore)
                    J.is(S);
                  for (let S of J.collisionIgnore)
                    l.is(S);
                  let _ = l.checkCollision(J);
                  if (_ && !_.isZero()) {
                    let S = new ht(l, J, _);
                    l.trigger("collideUpdate", J, S);
                    let k = S.reverse();
                    k.resolved = S.resolved, J.trigger("collideUpdate", l, k);
                  }
                  P.add(J.id);
                }
                Ue.push(l);
              }
        }
        o.get().forEach(h), n = s.pop();
      }
      __name(h, "h");
      u(h, "checkObj"), h(f.root);
    }
    __name(as, "as");
    u(as, "checkFrame");
    function us() {
      var _a;
      let e = f.cam, t = D.fromAngle(et(0, 360)).scale(e.shake);
      e.shake = _e(e.shake, 0, 5 * Q()), e.transform = new A().translate(lt()).scale(e.scale).rotateZ(e.angle).translate(((_a = e.pos) != null ? _a : lt()).scale(-1).add(t)), f.root.draw(), ce();
    }
    __name(us, "us");
    u(us, "drawFrame");
    function cs() {
      let e = I();
      ae(() => {
        let t = j() / 2, n = 24, s = p(j() / 2, B() / 2).sub(p(t / 2, n / 2));
        K({ pos: p(0), width: j(), height: B(), color: x(0, 0, 0) }), K({ pos: s, width: t, height: n, fill: false, outline: { width: 4 } }), K({ pos: s, width: t * e, height: n });
      }), f.ev.trigger("loading", e);
    }
    __name(cs, "cs");
    u(cs, "drawLoadScreen");
    function Dn(e, t) {
      ae(() => {
        let n = p(8);
        ee(), G(e);
        let s = be({ text: t, font: wt, size: 16, pos: n, color: x(255, 255, 255), fixed: true }), h = s.width + n.x * 2, o = s.height + n.x * 2;
        e.x + h >= j() && G(p(-h, 0)), e.y + o >= B() && G(p(0, -o)), K({ width: h, height: o, color: x(0, 0, 0), radius: 4, opacity: 0.8, fixed: true }), ye(s), X();
      });
    }
    __name(Dn, "Dn");
    u(Dn, "drawInspectText");
    function ls() {
      if (F.inspect) {
        let e = null;
        for (let t of On())
          if (t.c("area") && t.isHovering()) {
            e = t;
            break;
          }
        if (f.root.drawInspect(), e) {
          let t = [], n = e.inspect();
          for (let s in n)
            n[s] ? t.push(`${s}: ${n[s]}`) : t.push(`${s}`);
          Dn(Ir(Me()), t.join(`
`));
        }
        Dn(p(8), `FPS: ${F.fps()}`);
      }
      F.paused && ae(() => {
        ee(), G(j(), 0), G(-8, 8);
        let e = 32;
        K({ width: e, height: e, anchor: "topright", color: x(0, 0, 0), opacity: 0.8, radius: 4, fixed: true });
        for (let t = 1; t <= 2; t++)
          K({ width: 4, height: e * 0.6, anchor: "center", pos: p(-e / 3 * t, e * 0.5), color: x(255, 255, 255), radius: 2, fixed: true });
        X();
      }), F.timeScale !== 1 && ae(() => {
        ee(), G(j(), B()), G(-8, -8);
        let e = 8, t = be({ text: F.timeScale.toFixed(1), font: wt, size: 16, color: x(255, 255, 255), pos: p(-e), anchor: "botright", fixed: true });
        K({ width: t.width + e * 2 + e * 4, height: t.height + e * 2, anchor: "botright", color: x(0, 0, 0), opacity: 0.8, radius: 4, fixed: true });
        for (let n = 0; n < 2; n++) {
          let s = F.timeScale < 1;
          an({ p1: p(-t.width - e * (s ? 2 : 3.5), -e), p2: p(-t.width - e * (s ? 2 : 3.5), -e - t.height), p3: p(-t.width - e * (s ? 3.5 : 2), -e - t.height / 2), pos: p(-n * e * 1 + (s ? -e * 0.5 : 0), 0), color: x(255, 255, 255), fixed: true });
        }
        ye(t), X();
      }), F.curRecording && ae(() => {
        ee(), G(0, B()), G(24, -24), we({ radius: 12, color: x(255, 0, 0), opacity: Nt(0, 1, Tt() * 4), fixed: true }), X();
      }), F.showLog && f.logs.length > 0 && ae(() => {
        ee(), G(0, B()), G(8, -8);
        let e = 8, t = be({ text: f.logs.join(`
`), font: wt, pos: p(e, -e), anchor: "botleft", size: 16, width: j() * 0.6, lineSpacing: e / 2, fixed: true, styles: { time: { color: x(127, 127, 127) }, info: { color: x(255, 255, 255) }, error: { color: x(255, 0, 127) } } });
        K({ width: t.width + e * 2, height: t.height + e * 2, anchor: "botleft", color: x(0, 0, 0), radius: 4, opacity: 0.8, fixed: true }), ye(t), X();
      });
    }
    __name(ls, "ls");
    u(ls, "drawDebug");
    function hs() {
      let e = Me(), t = u((s, h, o) => {
        we({ radius: 80 / 2, pos: s, outline: { width: 4, color: x(0, 0, 0) }, opacity: 0.5, fixed: true }), o && it({ text: o, pos: s, color: x(0, 0, 0), size: 40, anchor: "center", opacity: 0.5, fixed: true }), st("left") && $n(new de(s, 80 / 2), e) && f.ev.onOnce("input", () => {
          a.virtualButtonState.press(h), f.ev.trigger("virtualButtonPress", h), a.keyState.press(h), f.ev.trigger("keyPress", h);
        }), Ct("left") && f.ev.onOnce("input", () => {
          a.virtualButtonState.release(h), f.ev.trigger("virtualButtonRelease", h), a.keyState.release(h), f.ev.trigger("keyRelease", h);
        });
      }, "drawCircleButton"), n = u((s, h, o) => {
        K({ width: 64, height: 64, pos: s, outline: { width: 4, color: x(0, 0, 0) }, radius: 4, anchor: "center", opacity: 0.5, fixed: true }), o && it({ text: o, pos: s, color: x(0, 0, 0), size: 40, anchor: "center", opacity: 0.5, fixed: true }), st("left") && qe(new V(s.add(-64 / 2, -64 / 2), 64, 64), e) && f.ev.onOnce("input", () => {
          a.virtualButtonState.press(h), f.ev.trigger("virtualButtonPress", h), a.keyState.press(h), f.ev.trigger("keyPress", h);
        }), Ct("left") && f.ev.onOnce("input", () => {
          a.virtualButtonState.release(h), f.ev.trigger("virtualButtonRelease", h), a.keyState.release(h), f.ev.trigger("keyRelease", h);
        });
      }, "drawSquareButton");
      ae(() => {
        t(p(j() - 80, B() - 160), "a"), t(p(j() - 160, B() - 80), "b"), n(p(60, B() - 124), "left"), n(p(188, B() - 124), "right"), n(p(124, B() - 188), "up"), n(p(124, B() - 60), "down");
      });
    }
    __name(hs, "hs");
    u(hs, "drawVirtualControls"), i.debug !== false && Un(), i.burp && xn();
    function ds(e) {
      f.ev.on("loading", e);
    }
    __name(ds, "ds");
    u(ds, "onLoadUpdate");
    function fs(e) {
      f.ev.on("resize", e);
    }
    __name(fs, "fs");
    u(fs, "onResize");
    function ms(e) {
      f.ev.on("error", e);
    }
    __name(ms, "ms");
    u(ms, "onError");
    function Bt(e) {
      Mn(() => {
        ae(() => {
          let s = j(), h = B(), o = { size: 36, width: s - 32 * 2, letterSpacing: 4, lineSpacing: 4, font: wt, fixed: true };
          K({ width: s, height: h, color: x(0, 0, 255), fixed: true });
          let l = be(__spreadProps(__spreadValues({}, o), { text: e.name, pos: p(32), color: x(255, 128, 0), fixed: true }));
          ye(l), it(__spreadProps(__spreadValues({}, o), { text: e.message, pos: p(32, 32 + l.height + 16), fixed: true })), X(), f.ev.trigger("error", e);
        });
      });
    }
    __name(Bt, "Bt");
    u(Bt, "handleErr");
    function ps() {
      a.keyState.update(), a.mouseState.update(), a.virtualButtonState.update(), a.charInputted = [], a.isMouseMoved = false;
    }
    __name(ps, "ps");
    u(ps, "resetInputState");
    function Mn(e) {
      a.loopID !== null && cancelAnimationFrame(a.loopID);
      let t = u((n) => {
        if (a.stopped)
          return;
        if (document.visibilityState !== "visible") {
          a.loopID = requestAnimationFrame(t);
          return;
        }
        let s = n / 1e3, h = s - a.realTime;
        a.realTime = s, a.skipTime || (a.dt = h, a.time += Q(), a.fpsCounter.tick(a.dt)), a.skipTime = false, a.numFrames++, Sr(), e(), Cr(), ps(), f.ev.trigger("frameEnd"), a.loopID = requestAnimationFrame(t);
      }, "frame");
      t(0);
    }
    __name(Mn, "Mn");
    u(Mn, "run");
    function gs() {
      f.ev.onOnce("frameEnd", () => {
        a.stopped = true, c.clear(c.COLOR_BUFFER_BIT | c.DEPTH_BUFFER_BIT | c.STENCIL_BUFFER_BIT);
        let e = c.getParameter(c.MAX_TEXTURE_IMAGE_UNITS);
        for (let t = 0; t < e; t++)
          c.activeTexture(c.TEXTURE0 + t), c.bindTexture(c.TEXTURE_2D, null), c.bindTexture(c.TEXTURE_CUBE_MAP, null);
        c.bindBuffer(c.ARRAY_BUFFER, null), c.bindBuffer(c.ELEMENT_ARRAY_BUFFER, null), c.bindRenderbuffer(c.RENDERBUFFER, null), c.bindFramebuffer(c.FRAMEBUFFER, null), r.forEach((t) => t()), c.deleteBuffer(g.vbuf), c.deleteBuffer(g.ibuf);
        for (let t in $)
          a.canvas.removeEventListener(t, $[t]);
        for (let t in Ke)
          document.removeEventListener(t, Ke[t]);
        for (let t in De)
          window.removeEventListener(t, De[t]);
      });
    }
    __name(gs, "gs");
    u(gs, "quit");
    function Lt(e, t, n, s, h = fe.linear) {
      let o = 0, l = [], d = Pt(() => {
        o += Q();
        let m = Math.min(o / n, 1);
        s(_e(e, t, h(m))), m === 1 && (d.cancel(), s(t), l.forEach((w) => w()));
      });
      return { get paused() {
        return d.paused;
      }, set paused(m) {
        d.paused = m;
      }, onFinish(m) {
        l.push(m);
      }, then(m) {
        return this.onFinish(m), this;
      }, cancel() {
        d.cancel();
      }, finish() {
        d.cancel(), s(t), l.forEach((m) => m());
      } };
    }
    __name(Lt, "Lt");
    u(Lt, "tween"), Te("happy", Zn, 28, 36), Mn(() => {
      U.loaded || I() === 1 && (U.loaded = true, f.ev.trigger("load")), !U.loaded && i.loadingScreen !== false ? cs() : (ss(), F.paused || Rn(), as(), us(), i.debug !== false && ls(), i.virtualControls && pn() && hs());
    });
    let Le = { VERSION: Ms, loadRoot: Y, loadProgress: I, loadSprite: Oe, loadSpriteAtlas: Qt, loadSound: wr, loadBitmapFont: Te, loadFont: yt, loadShader: gr, loadAseprite: pr, loadPedit: mr, loadBean: vr, load: ue, getSprite: Jt, getSound: Zt, getFont: br, getBitmapFont: Wt, getShader: en, Asset: O, SpriteData: T, SoundData: R, width: j, height: B, center: lt, dt: Q, time: Tt, screenshot: Yr, record: Ji, isFocused: Zi, setCursor: mn, setFullscreen: Xr, isFullscreen: At, isTouchScreen: pn, onLoad: Ft, onLoadUpdate: ds, onResize: fs, onError: ms, camPos: Kr, camScale: Qr, camRot: Jr, shake: Zr, toScreen: Ot, toWorld: gn, gravity: Ui, add: Ze, destroy: Wi, destroyAll: ts, get: An, getAll: On, readd: es, pos: ut, scale: ct, rotate: xi, color: Ei, opacity: Si, anchor: Dt, area: Ri, sprite: Mt, text: Di, rect: Mi, circle: Bi, uvquad: Fi, outline: Li, body: Vi, doubleJump: ki, shader: Ni, timer: En, fixed: ji, stay: Sn, health: _i, lifespan: qi, z: Ci, move: Ai, offscreen: Pi, follow: Ti, state: zi, fadeIn: Hi, on: Fe, onUpdate: Pt, onDraw: Wr, onAdd: bn, onDestroy: ei, onCollide: ti, onClick: ni, onHover: ri, onHoverUpdate: ii, onHoverEnd: si, onKeyDown: ai, onKeyPress: le, onKeyPressRepeat: ui, onKeyRelease: ci, onMouseDown: li, onMousePress: yn, onMouseRelease: hi, onMouseMove: di, onCharInput: fi, onTouchStart: mi, onTouchMove: pi, onTouchEnd: gi, onScroll: wi, onVirtualButtonPress: bi, onVirtualButtonDown: vi, onVirtualButtonRelease: yi, mousePos: Me, mouseDeltaPos: fn, isKeyDown: jr, isKeyPressed: kr, isKeyPressedRepeat: Nr, isKeyReleased: _r, isMouseDown: Gr, isMousePressed: st, isMouseReleased: Ct, isMouseMoved: Vr, isVirtualButtonPressed: qr, isVirtualButtonDown: zr, isVirtualButtonReleased: Hr, charInputted: $r, loop: oi, wait: Rt, play: $e, volume: xr, burp: rn, audioCtx: C.ctx, Timer: pe, Line: re, Rect: V, Circle: de, Polygon: se, Vec2: D, Color: E, Mat4: A, Quad: N, RNG: Ne, rand: et, randi: jt, randSeed: jn, vec2: p, rgb: x, hsl2rgb: kn, quad: Nn, choose: qn, chance: _n, lerp: _e, tween: Lt, easings: fe, map: mt, mapc: Vn, wave: Nt, deg2rad: he, rad2deg: kt, testLineLine: Ve, testRectRect: zn, testRectLine: Hn, testRectPoint: qe, drawSprite: sn, drawText: it, formatText: be, drawRect: K, drawLine: Xe, drawLines: on, drawTriangle: an, drawCircle: we, drawEllipse: un, drawUVQuad: Re, drawPolygon: ve, drawFormattedText: ye, drawMasked: Mr, drawSubtracted: Fr, pushTransform: ee, popTransform: X, pushTranslate: G, pushScale: Pe, pushRotate: Rr, pushRotateX: Or, pushRotateY: Pr, pushRotateZ: ge, pushMatrix: Ar, debug: F, scene: $i, go: Yi, addLevel: Qi, getData: Xi, setData: Cn, download: pt, downloadJSON: Qn, downloadText: qt, downloadBlob: zt, plug: Tn, ASCII_CHARS: ir, canvas: a.canvas, addKaboom: is, LEFT: D.LEFT, RIGHT: D.RIGHT, UP: D.UP, DOWN: D.DOWN, RED: E.RED, GREEN: E.GREEN, BLUE: E.BLUE, YELLOW: E.YELLOW, MAGENTA: E.MAGENTA, CYAN: E.CYAN, WHITE: E.WHITE, BLACK: E.BLACK, quit: gs, Event: W, EventHandler: oe };
    if (i.plugins && i.plugins.forEach(Tn), i.global !== false)
      for (let e in Le)
        window[e] = Le[e];
    return a.canvas.focus(), Le;
  }, "default");

  // code/pfuncs.js
  function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  __name(delay, "delay");
  function displayDialogue(lines, onDialogueEnd = () => {
  }, controlKey) {
    return __async(this, null, function* () {
      const dialogueBoxContainer = add([]);
      dialogueBoxContainer.add([
        rect(width() - 700, 130, {
          radius: 10
        }),
        area(),
        anchor("center"),
        pos(center().x, height() - 200)
      ]);
      dialogueBoxContainer.add([
        text("", {
          size: 20,
          lineSpacing: 4,
          font: "joy",
          width: width() - 900
        }),
        pos(width() / 2, height() - 200),
        color(0, 0, 0),
        anchor("center")
      ]);
      let currentLineIndex = 0;
      let lineIsFullyDisplayed = false;
      const lineAsCharArray = lines[currentLineIndex].split("");
      for (const [i, char] of lineAsCharArray.entries()) {
        yield delay(isKeyDown(controlKey) || isMouseDown() ? 0 : 50);
        dialogueBoxContainer.children[1].text += char;
        if (i >= lineAsCharArray.length - 1) {
          lineIsFullyDisplayed = true;
        }
      }
      function handleDialogue() {
        return __async(this, null, function* () {
          yield delay(100);
          if (lineIsFullyDisplayed) {
            dialogueBoxContainer.children[1].text = "";
            lineIsFullyDisplayed = false;
            currentLineIndex++;
            if (currentLineIndex >= lines.length) {
              dialogueBoxContainer.destroy();
              yield onDialogueEnd();
              return;
            }
            const lineAsCharArray2 = lines[currentLineIndex].split("");
            for (const [i, char] of lineAsCharArray2.entries()) {
              yield delay(isKeyDown(controlKey) || isMouseDown() ? 0 : 50);
              dialogueBoxContainer.children[1].text += char;
              if (i >= lineAsCharArray2.length - 1) {
                lineIsFullyDisplayed = true;
              }
            }
          }
        });
      }
      __name(handleDialogue, "handleDialogue");
      onKeyDown(controlKey, () => __async(this, null, function* () {
        yield handleDialogue();
      }));
    });
  }
  __name(displayDialogue, "displayDialogue");
  function inspectt() {
    onKeyPress("#", () => {
      debug.inspect = !debug.inspect;
    });
  }
  __name(inspectt, "inspectt");
  function RandNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  __name(RandNum, "RandNum");

  // code/menu.js
  function LoadMenuScene() {
    scene("menu", () => {
      inspectt();
      const music = play("menubg", {
        volume: 0.9,
        loop: true
      });
      music.play();
      for (let c = 0; c < 300; c++) {
        let sizeofstar = RandNum(2, 8);
        add([
          rect(sizeofstar, sizeofstar),
          pos(RandNum(0, width()), RandNum(0, height())),
          color(rgb(255, 255, 255))
        ]);
      }
      let clicked = 0;
      const logobtn = add([
        sprite("logo"),
        pos(width() / 2, 130),
        area(),
        anchor("center"),
        scale(4, 4)
      ]);
      logobtn.onClick(() => {
        clicked += 1;
        if (clicked > 13) {
          add([
            sprite("tlc"),
            pos(width() / 2 - 20, 280),
            anchor("center"),
            color(rgb(89, 89, 89))
          ]);
        }
      });
      const btnbg = add([
        rect(340, 50, {
          radius: 10
        }),
        outline(rgb(255, 255, 255)),
        pos(width() / 2, height() / 2),
        anchor("center"),
        area(),
        color(rgb(4, 122, 0)),
        scale(1.3, 1.3),
        z(99)
      ]);
      btnbg.onClick(() => {
        music.stop();
        go("tutorial");
      });
      const btntext = add([
        text("How to Play"),
        pos(width() / 2, height() / 2),
        anchor("center"),
        color(rgb(255, 255, 255)),
        scale(1.3, 1.3),
        z(100)
      ]);
      const what = add([
        text("?"),
        pos(btnbg.pos.x + 120, height() / 2 - 20),
        anchor("center"),
        color(255, 255, 255),
        rotate(40),
        z(100)
      ]);
      const what2 = add([
        text("?"),
        pos(btnbg.pos.x + 135, height() / 2 - 40),
        anchor("center"),
        color(255, 255, 255),
        rotate(20),
        z(100)
      ]);
      const what3 = add([
        text("?"),
        pos(btnbg.pos.x + 116, height() / 2 - 50),
        anchor("center"),
        color(255, 255, 255),
        rotate(9),
        z(100)
      ]);
      let bg2hover = false;
      let bg1hover = false;
      btnbg.onUpdate(() => {
        if (btnbg.isHovering()) {
          if (!bg1hover) {
            play("hit");
          }
          bg1hover = true;
          what.pos.x = btnbg.pos.x + 225;
          what2.pos.x = btnbg.pos.x + 205;
          what3.pos.x = btnbg.pos.x + 185;
          btnbg.color = rgb(2, 64, 0);
        } else {
          bg1hover = false;
          btnbg.color = rgb(4, 122, 0);
          what.pos.x = width() + width();
          what2.pos.x = width() + width();
          what3.pos.x = width() + width();
        }
      });
      const btnbg2 = add([
        rect(340, 50, {
          radius: 10
        }),
        outline(rgb(255, 255, 255)),
        pos(width() / 2, height() / 2 + 100),
        anchor("center"),
        area(),
        color(rgb(163, 125, 21)),
        scale(1.3, 1.3),
        z(99)
      ]);
      const btntext2 = add([
        text("Play!"),
        pos(width() / 2, height() / 2 + 100),
        anchor("center"),
        color(rgb(255, 255, 255)),
        scale(1.3, 1.3),
        z(100)
      ]);
      btnbg2.onUpdate(() => {
        if (btnbg2.isHovering()) {
          if (!bg2hover) {
            play("hit");
          }
          bg2hover = true;
          const t = time() * 5;
          btnbg2.color = rgb(
            wave(0, 255, t),
            wave(0, 255, t + 2),
            wave(0, 255, t + 4)
          );
        } else {
          bg2hover = false;
          btnbg2.color = rgb(163, 125, 21);
        }
      });
      const m1 = add([
        sprite("mars"),
        pos(width() - 200, height() / 2 - 250),
        scale(3, 3),
        anchor("center"),
        rotate(90)
      ]);
      const m = add([
        sprite("moon"),
        pos(200, height() / 2 + 250),
        scale(3, 3),
        anchor("center"),
        rotate(0)
      ]);
      onUpdate(() => {
        m1.angle += 0.5 * dt();
        m.angle += 1 * dt();
      });
    });
  }
  __name(LoadMenuScene, "LoadMenuScene");
  var menu_default = LoadMenuScene;

  // code/spritemanager.js
  var lol = [];
  function loadd(name) {
    loadSprite(name, "sprites/" + name + ".png");
    lol.push("Loading sprite " + name);
  }
  __name(loadd, "loadd");
  function LoadAssets() {
    const Pngs = ["bean", "moon", "mars", "logo", "tlc"];
    for (let i = 0; i < Pngs.length; i++) {
      loadd(Pngs[i]);
    }
    loadSound("menubg", "sounds/bgmusic.mp3", {
      loop: true,
      volume: 100
    });
    loadSprite("sbtn", "sprites/stopbtn-Sheet.png", {
      sliceX: 2,
      anims: {
        "stop": {
          from: 0,
          to: 0
        },
        "play": {
          from: 1,
          to: 1
        }
      }
    });
    loadSound("hit", "sounds/hit.mp3");
    loadSound("faf", "sounds/faf.mp3");
    loadSprite("potatoe", "sprites/potatoe-sheet.png", {
      sliceX: 5,
      anims: {
        run: {
          from: 1,
          to: 2
        },
        idle: {
          from: 0,
          to: 0
        },
        blink: {
          from: 3,
          to: 4
        }
      }
    });
    loadFont("up", "fonts/upheavtt.ttf");
    loadFont("arc", "fonts/arc.TTF");
    loadFont("joy", "fonts/joystix.ttf");
  }
  __name(LoadAssets, "LoadAssets");
  var spritemanager_default = LoadAssets;

  // code/tutorial.js
  function LoadTutorial() {
    scene("tutorial", () => __async(this, null, function* () {
      add([]);
      const herebgmusic = play("faf", {
        loop: true,
        volume: 0.2
      });
      inspectt();
      const lines = [
        "Welcome to the Tutorial! Press C to continue...",
        "Do it again :D",
        "Fun, right?",
        "Hehe...",
        "Do it one more time!",
        "Okay... that's enough.",
        "Stop!",
        "HEY! Stop scrolling!",
        "Okay... that's now enough.",
        "...",
        "Okay, lemme just tell you about the game.",
        "It's about you, the potato.",
        "Your goal is to take over mars!",
        "But... that's not easy.",
        "You have to do lots of task's",
        "The controls are W/Space, A, S, D",
        "Now, have fun playing! :D"
      ];
      yield displayDialogue(lines, () => {
        herebgmusic.stop();
        go("menu");
      }, "c");
    }));
  }
  __name(LoadTutorial, "LoadTutorial");
  var tutorial_default = LoadTutorial;

  // code/CheckWindowSize.js
  function LoadCheck() {
    scene("Check", () => {
      if (window.innerWidth < 850) {
        const text12 = add([
          text("Stop right there!\nYou need to play this game\nin a new tab!"),
          pos(width() / 2, height() / 2),
          anchor("center")
        ]);
      } else {
        go("EnableAudio");
      }
    });
  }
  __name(LoadCheck, "LoadCheck");
  var CheckWindowSize_default = LoadCheck;

  // code/EnableAudio.js
  function LoadEnableAudio() {
    scene("EnableAudio", () => {
      inspectt();
      const __menut = add([
        text("Click anywhere ", {
          size: 20
        }),
        scale(3),
        pos(width() / 2, height() / 2),
        anchor("center"),
        area()
      ]);
      let under = false;
      function doUnderScore() {
        if (under) {
          __menut.text = "Click anywhere_";
          wait(1, () => {
            doUnderScore();
          });
          under = false;
        } else {
          __menut.text = "Click anywhere ";
          wait(1, () => {
            doUnderScore();
          });
          under = true;
        }
      }
      __name(doUnderScore, "doUnderScore");
      doUnderScore();
      onClick(() => {
        go("menu");
      });
    });
  }
  __name(LoadEnableAudio, "LoadEnableAudio");
  var EnableAudio_default = LoadEnableAudio;

  // code/main.js
  yo({
    background: [0, 0, 0],
    font: "joy"
  });
  CheckWindowSize_default();
  spritemanager_default();
  tutorial_default();
  menu_default();
  EnableAudio_default();
  go("Check");
})();
//# sourceMappingURL=game.js.map
