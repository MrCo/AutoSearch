(function () {
    var a = document.getElementById("nav-dapeigou");
    if (a) {
        a.innerHTML = '<a href="http://channel.jd.com/chaoshi.html">\u4eac\u4e1c\u8d85\u5e02</a>'
    }
})();
if (typeof pageConfig.FN_getDomain === "undefined") {
    pageConfig.FN_getDomain = function () {
        var a = location.hostname;
        return (/360buy.com/.test(a)) ? "360buy.com" : "jd.com"
    }
}
(function () {
    var a = $("#service-2013 a[href='http://en.360buy.com/']");
    if (a.length) {
        a.attr("href", "http://help.en.360buy.com/help/question-2.html")
    }
})();
(function () {
    var a = $("#footer-2013 a[href='http://about.58.com/fqz/index.html']");
    if (a.length) {
        a.attr("href", "http://www.bj.cyberpolice.cn/index.do")
    }
})();
if (typeof JSON !== "object") {
    JSON = {}
}
(function () {
    function f(n) {
        return n < 10 ? "0" + n : n
    }

    if (typeof Date.prototype.toJSON !== "function") {
        Date.prototype.toJSON = function (key) {
            return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
        };
        String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function (key) {
            return this.valueOf()
        }
    }
    var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, gap, indent, meta = {
        "\b": "\\b",
        "\t": "\\t",
        "\n": "\\n",
        "\f": "\\f",
        "\r": "\\r",
        '"': '\\"',
        "\\": "\\\\"
    }, rep;

    function quote(string) {
        escapable.lastIndex = 0;
        return escapable.test(string) ? '"' + string.replace(escapable, function (a) {
            var c = meta[a];
            return typeof c === "string" ? c : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
        }) + '"' : '"' + string + '"'
    }

    function str(key, holder) {
        var i, k, v, length, mind = gap, partial, value = holder[key];
        if (value && typeof value === "object" && typeof value.toJSON === "function") {
            value = value.toJSON(key)
        }
        if (typeof rep === "function") {
            value = rep.call(holder, key, value)
        }
        switch (typeof value) {
            case"string":
                return quote(value);
            case"number":
                return isFinite(value) ? String(value) : "null";
            case"boolean":
            case"null":
                return String(value);
            case"object":
                if (!value) {
                    return "null"
                }
                gap += indent;
                partial = [];
                if (Object.prototype.toString.apply(value) === "[object Array]") {
                    length = value.length;
                    for (i = 0; i < length; i += 1) {
                        partial[i] = str(i, value) || "null"
                    }
                    v = partial.length === 0 ? "[]" : gap ? "[\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "]" : "[" + partial.join(",") + "]";
                    gap = mind;
                    return v
                }
                if (rep && typeof rep === "object") {
                    length = rep.length;
                    for (i = 0; i < length; i += 1) {
                        if (typeof rep[i] === "string") {
                            k = rep[i];
                            v = str(k, value);
                            if (v) {
                                partial.push(quote(k) + (gap ? ": " : ":") + v)
                            }
                        }
                    }
                } else {
                    for (k in value) {
                        if (Object.prototype.hasOwnProperty.call(value, k)) {
                            v = str(k, value);
                            if (v) {
                                partial.push(quote(k) + (gap ? ": " : ":") + v)
                            }
                        }
                    }
                }
                v = partial.length === 0 ? "{}" : gap ? "{\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "}" : "{" + partial.join(",") + "}";
                gap = mind;
                return v
        }
    }

    if (typeof JSON.stringify !== "function") {
        JSON.stringify = function (value, replacer, space) {
            var i;
            gap = "";
            indent = "";
            if (typeof space === "number") {
                for (i = 0; i < space; i += 1) {
                    indent += " "
                }
            } else {
                if (typeof space === "string") {
                    indent = space
                }
            }
            rep = replacer;
            if (replacer && typeof replacer !== "function" && (typeof replacer !== "object" || typeof replacer.length !== "number")) {
                throw new Error("JSON.stringify")
            }
            return str("", {"": value})
        }
    }
    if (typeof JSON.parse !== "function") {
        JSON.parse = function (text, reviver) {
            var j;

            function walk(holder, key) {
                var k, v, value = holder[key];
                if (value && typeof value === "object") {
                    for (k in value) {
                        if (Object.prototype.hasOwnProperty.call(value, k)) {
                            v = walk(value, k);
                            if (v !== undefined) {
                                value[k] = v
                            } else {
                                delete value[k]
                            }
                        }
                    }
                }
                return reviver.call(holder, key, value)
            }

            text = String(text);
            cx.lastIndex = 0;
            if (cx.test(text)) {
                text = text.replace(cx, function (a) {
                    return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
                })
            }
            if (/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) {
                j = eval("(" + text + ")");
                return typeof reviver === "function" ? walk({"": j}, "") : j
            }
            throw new SyntaxError("JSON.parse")
        }
    }
}());
eval(function (h, b, j, d, g, f) {
    g = function (a) {
        return (a < b ? "" : g(parseInt(a / b))) + ((a = a % b) > 35 ? String.fromCharCode(a + 29) : a.toString(36))
    };
    if (!"".replace(/^/, String)) {
        while (j--) {
            f[g(j)] = d[j] || g(j)
        }
        d = [function (a) {
            return f[a]
        }];
        g = function () {
            return "\\w+"
        };
        j = 1
    }
    while (j--) {
        if (d[j]) {
            h = h.replace(new RegExp("\\b" + g(j) + "\\b", "g"), d[j])
        }
    }
    return h
}("(4($){$.R($.7,{3:4(c,b,d){9 e=2,q;5($.O(c))d=b,b=c,c=z;$.h($.3.j,4(i,a){5(e.8==a.8&&e.g==a.g&&c==a.m&&(!b||b.$6==a.7.$6)&&(!d||d.$6==a.o.$6))l(q=a)&&v});q=q||Y $.3(2.8,2.g,c,b,d);q.u=v;$.3.s(q.F);l 2},T:4(c,b,d){9 e=2;5($.O(c))d=b,b=c,c=z;$.h($.3.j,4(i,a){5(e.8==a.8&&e.g==a.g&&(!c||c==a.m)&&(!b||b.$6==a.7.$6)&&(!d||d.$6==a.o.$6)&&!2.u)$.3.y(a.F)});l 2}});$.3=4(e,c,a,b,d){2.8=e;2.g=c||S;2.m=a;2.7=b;2.o=d;2.t=[];2.u=v;2.F=$.3.j.K(2)-1;b.$6=b.$6||$.3.I++;5(d)d.$6=d.$6||$.3.I++;l 2};$.3.p={y:4(){9 b=2;5(2.m)2.t.16(2.m,2.7);E 5(2.o)2.t.h(4(i,a){b.o.x(a)});2.t=[];2.u=Q},s:4(){5(2.u)l;9 b=2;9 c=2.t,w=$(2.8,2.g),H=w.11(c);2.t=w;5(2.m){H.10(2.m,2.7);5(c.C>0)$.h(c,4(i,a){5($.B(a,w)<0)$.Z.P(a,b.m,b.7)})}E{H.h(4(){b.7.x(2)});5(2.o&&c.C>0)$.h(c,4(i,a){5($.B(a,w)<0)b.o.x(a)})}}};$.R($.3,{I:0,j:[],k:[],A:v,D:X,N:4(){5($.3.A&&$.3.k.C){9 a=$.3.k.C;W(a--)$.3.j[$.3.k.V()].s()}},U:4(){$.3.A=v},M:4(){$.3.A=Q;$.3.s()},L:4(){$.h(G,4(i,n){5(!$.7[n])l;9 a=$.7[n];$.7[n]=4(){9 r=a.x(2,G);$.3.s();l r}})},s:4(b){5(b!=z){5($.B(b,$.3.k)<0)$.3.k.K(b)}E $.h($.3.j,4(a){5($.B(a,$.3.k)<0)$.3.k.K(a)});5($.3.D)1j($.3.D);$.3.D=1i($.3.N,1h)},y:4(b){5(b!=z)$.3.j[b].y();E $.h($.3.j,4(a){$.3.j[a].y()})}});$.3.L('1g','1f','1e','1b','1a','19','18','17','1c','15','1d','P');$(4(){$.3.M()});9 f=$.p.J;$.p.J=4(a,c){9 r=f.x(2,G);5(a&&a.8)r.g=a.g,r.8=a.8;5(14 a=='13')r.g=c||S,r.8=a;l r};$.p.J.p=$.p})(12);", 62, 82, "||this|livequery|function|if|lqguid|fn|selector|var|||||||context|each||queries|queue|return|type||fn2|prototype|||run|elements|stopped|false|els|apply|stop|undefined|running|inArray|length|timeout|else|id|arguments|nEls|guid|init|push|registerPlugin|play|checkQueue|isFunction|remove|true|extend|document|expire|pause|shift|while|null|new|event|bind|not|jQuery|string|typeof|toggleClass|unbind|addClass|removeAttr|attr|wrap|before|removeClass|empty|after|prepend|append|20|setTimeout|clearTimeout".split("|"), 0, {}));
new function (e) {
    var d = e.separator || "&";
    var c = e.spaces === false ? false : true;
    var a = e.suffix === false ? "" : "[]";
    var g = e.prefix === false ? false : true;
    var b = g ? e.hash === true ? "#" : "?" : "";
    var f = e.numbers === false ? false : true;
    jQuery.query = new function () {
        var h = function (n, m) {
            return n != undefined && n !== null && (!!m ? n.constructor == m : true)
        };
        var j = function (s) {
            var n, r = /\[([^[]*)\]/g, o = /^(\S+?)(\[\S*\])?$/.exec(s), p = o[1], q = [];
            while (n = r.exec(o[2])) {
                q.push(n[1])
            }
            return [p, q]
        };
        var l = function (t, s, r) {
            var u, q = s.shift();
            if (typeof t != "object") {
                t = null
            }
            if (q === "") {
                if (!t) {
                    t = []
                }
                if (h(t, Array)) {
                    t.push(s.length == 0 ? r : l(null, s.slice(0), r))
                } else {
                    if (h(t, Object)) {
                        var p = 0;
                        while (t[p++] != null) {
                        }
                        t[--p] = s.length == 0 ? r : l(t[p], s.slice(0), r)
                    } else {
                        t = [];
                        t.push(s.length == 0 ? r : l(null, s.slice(0), r))
                    }
                }
            } else {
                if (q && q.match(/^\s*[0-9]+\s*$/)) {
                    var n = parseInt(q, 10);
                    if (!t) {
                        t = []
                    }
                    t[n] = s.length == 0 ? r : l(t[n], s.slice(0), r)
                } else {
                    if (q) {
                        var n = q.replace(/^\s*|\s*$/g, "");
                        if (!t) {
                            t = {}
                        }
                        if (h(t, Array)) {
                            var m = {};
                            for (var p = 0; p < t.length; ++p) {
                                m[p] = t[p]
                            }
                            t = m
                        }
                        t[n] = s.length == 0 ? r : l(t[n], s.slice(0), r)
                    } else {
                        return r
                    }
                }
            }
            return t
        };
        var k = function (m) {
            var n = this;
            n.keys = {};
            if (m.queryObject) {
                jQuery.each(m.get(), function (o, p) {
                    n.SET(o, p)
                })
            } else {
                jQuery.each(arguments, function () {
                    var o = "" + this;
                    o = o.replace(/^[?#]/, "");
                    o = o.replace(/[;&]$/, "");
                    if (c) {
                        o = o.replace(/[+]/g, " ")
                    }
                    jQuery.each(o.split(/[&;]/), function () {
                        try {
                            var p = decodeURIComponent(this.split("=")[0]);
                            var r = decodeURIComponent(encodeURIComponent(this.split("=")[1]))
                        } catch (q) {
                        }
                        if (!p) {
                            return
                        }
                        if (f) {
                            if (/^[+-]?[0-9]+\.[0-9]*$/.test(r)) {
                                r = parseFloat(r)
                            } else {
                                if (/^[+-]?[0-9]+$/.test(r)) {
                                    r = parseInt(r, 10)
                                }
                            }
                        }
                        r = (!r && r !== 0) ? true : r;
                        if (r !== false && r !== true && typeof r != "number") {
                            r = r
                        }
                        n.SET(p, r)
                    })
                })
            }
            return n
        };
        k.prototype = {
            queryObject: true, has: function (m, n) {
                var o = this.get(m);
                return h(o, n)
            }, GET: function (n) {
                if (!h(n)) {
                    return this.keys
                }
                var m = j(n), o = m[0], q = m[1];
                var p = this.keys[o];
                while (p != null && q.length != 0) {
                    p = p[q.shift()]
                }
                return typeof p == "number" ? p : p || ""
            }, get: function (m) {
                var n = this.GET(m);
                if (h(n, Object)) {
                    return jQuery.extend(true, {}, n)
                } else {
                    if (h(n, Array)) {
                        return n.slice(0)
                    }
                }
                return n
            }, SET: function (n, s) {
                var p = !h(s) ? null : s;
                var m = j(n), o = m[0], r = m[1];
                var q = this.keys[o];
                this.keys[o] = l(q, r.slice(0), p);
                return this
            }, set: function (m, n) {
                return this.copy().SET(m, n)
            }, REMOVE: function (m) {
                return this.SET(m, null).COMPACT()
            }, remove: function (m) {
                return this.copy().REMOVE(m)
            }, EMPTY: function () {
                var m = this;
                jQuery.each(m.keys, function (n, o) {
                    delete m.keys[n]
                });
                return m
            }, load: function (m) {
                var o = m.replace(/^.*?[#](.+?)(?:\?.+)?$/, "$1");
                var n = m.replace(/^.*?[?](.+?)(?:#.+)?$/, "$1");
                return new k(m.length == n.length ? "" : n, m.length == o.length ? "" : o)
            }, empty: function () {
                return this.copy().EMPTY()
            }, copy: function () {
                return new k(this)
            }, COMPACT: function () {
                function m(p) {
                    var o = typeof p == "object" ? h(p, Array) ? [] : {} : p;
                    if (typeof p == "object") {
                        function n(s, q, r) {
                            if (h(s, Array)) {
                                s.push(r)
                            } else {
                                s[q] = r
                            }
                        }

                        jQuery.each(p, function (q, r) {
                            if (!h(r)) {
                                return true
                            }
                            n(o, q, m(r))
                        })
                    }
                    return o
                }

                this.keys = m(this.keys);
                return this
            }, compact: function () {
                return this.copy().COMPACT()
            }, toString: function () {
                var o = 0, r = [], q = [], n = this;
                var m = function (s, t, u) {
                    if (!h(u) || u === false) {
                        return
                    }
                    var v = [encodeURIComponent(t)];
                    if (u !== true) {
                        v.push("=");
                        v.push(encodeURIComponent(u))
                    }
                    s.push(v.join(""))
                };
                var p = function (t, s) {
                    var u = function (v) {
                        return !s || s == "" ? [v].join("") : [s, "[", v, "]"].join("")
                    };
                    jQuery.each(t, function (v, w) {
                        if (typeof w == "object") {
                            p(w, u(v))
                        } else {
                            m(q, u(v), w)
                        }
                    })
                };
                p(this.keys);
                if (q.length > 0) {
                    r.push(b)
                }
                r.push(q.join(d));
                return r.join("")
            }
        };
        return new k(location.search, location.hash)
    }
}(jQuery.query || {});
eval(function (h, b, j, d, g, f) {
    g = function (a) {
        return (a < b ? "" : g(parseInt(a / b))) + ((a = a % b) > 35 ? String.fromCharCode(a + 29) : a.toString(36))
    };
    if (!"".replace(/^/, String)) {
        while (j--) {
            f[g(j)] = d[j] || g(j)
        }
        d = [function (a) {
            return f[a]
        }];
        g = function () {
            return "\\w+"
        };
        j = 1
    }
    while (j--) {
        if (d[j]) {
            h = h.replace(new RegExp("\\b" + g(j) + "\\b", "g"), d[j])
        }
    }
    return h
}("n.5=v(a,b,c){4(7 b!='w'){c=c||{};4(b===o){b='';c.3=-1}2 d='';4(c.3&&(7 c.3=='p'||c.3.q)){2 e;4(7 c.3=='p'){e=x y();e.z(e.A()+(c.3*B*r*r*C))}s{e=c.3}d=';3='+e.q()}2 f=c.8?';8='+(c.8):'';2 g=c.9?';9='+(c.9):'';2 h=c.t?';t':'';6.5=[a,'=',D(b),d,f,g,h].E('')}s{2 j=o;4(6.5&&6.5!=''){2 k=6.5.F(';');G(2 i=0;i<k.m;i++){2 l=n.H(k[i]);4(l.u(0,a.m+1)==(a+'=')){j=I(l.u(a.m+1));J}}}K j}};", 47, 47, "||var|expires|if|cookie|document|typeof|path|domain|||||||||||||length|jQuery|null|number|toUTCString|60|else|secure|substring|function|undefined|new|Date|setTime|getTime|24|1000|encodeURIComponent|join|split|for|trim|decodeURIComponent|break|return".split("|"), 0, {}));
Function.prototype.overwrite = function (b) {
    var a = b;
    if (!a.original) {
        a.original = this
    }
    return a
};
Date.prototype.toString = Date.prototype.toString.overwrite(function (b) {
    var a = new String();
    if (typeof(b) == "string") {
        a = b;
        a = a.replace(/yyyy|YYYY/, this.getFullYear());
        a = a.replace(/yy|YY/, this.getFullYear().toString().substr(2, 2));
        a = a.replace(/MM/, this.getMonth() >= 9 ? this.getMonth() + 1 : "0" + (this.getMonth() + 1));
        a = a.replace(/M/, this.getMonth());
        a = a.replace(/dd|DD/, this.getDate() > 9 ? this.getDate() : "0" + this.getDate());
        a = a.replace(/d|D/, this.getDate());
        a = a.replace(/hh|HH/, this.getHours() > 9 ? this.getHours() : "0" + this.getHours());
        a = a.replace(/h|H/, this.getHours());
        a = a.replace(/mm/, this.getMinutes() > 9 ? this.getMinutes() : "0" + this.getMinutes());
        a = a.replace(/m/, this.getMinutes());
        a = a.replace(/ss|SS/, this.getSeconds() > 9 ? this.getSeconds() : "0" + this.getSeconds());
        a = a.replace(/s|S/, this.getSeconds())
    }
    return a
});
String.prototype.format = function () {
    var a = this;
    if (arguments.length > 0) {
        parameters = $.makeArray(arguments);
        $.each(parameters, function (b, c) {
            a = a.replace(new RegExp("\\{" + b + "\\}", "g"), c)
        })
    }
    return a
};
function StringBuilder() {
    this.strings = new Array();
    this.length = 0
}
StringBuilder.prototype.append = function (a) {
    this.strings.push(a);
    this.length += a.length
};
StringBuilder.prototype.toString = function (b, a) {
    return this.strings.join("").substr(b, a)
};
(function ($) {
    $.jmsajax = function (options) {
        var defaults = {
            type: "POST", dataType: "msjson", data: {}, beforeSend: function (xhr) {
                xhr.setRequestHeader("Content-type", "application/json; charset=utf-8")
            }, contentType: "application/json; charset=utf-8", error: function (x, s, m) {
                alert("Status: " + ((x.statusText) ? x.statusText : "Unknown") + "\nMessage: " + msJSON.parse(((x.responseText) ? x.responseText : "Unknown")).Message)
            }
        };
        var options = $.extend(defaults, options);
        if (options.method) {
            options.url += "/" + options.method
        }
        if (options.data) {
            if (options.type == "GET") {
                var data = "";
                for (var i in options.data) {
                    if (data != "") {
                        data += "&"
                    }
                    data += i + "=" + msJSON.stringify(options.data[i])
                }
                options.url += "?" + data;
                data = null;
                options.data = "{}"
            } else {
                if (options.type == "POST") {
                    options.data = msJSON.stringify(options.data)
                }
            }
        }
        if (options.success) {
            if (options.dataType) {
                if (options.dataType == "msjson") {
                    var base = options.success;
                    options.success = function (response, status) {
                        var y = dateparse(response);
                        if (options.version) {
                            if (options.version >= 3.5) {
                                y = y.d
                            }
                        } else {
                            if (response.indexOf('{"d":') == 0) {
                                y = y.d
                            }
                        }
                        base(y, status)
                    }
                }
            }
        }
        return $.ajax(options)
    };
    dateparse = function (data) {
        try {
            return msJSON.parse(data, function (key, value) {
                var a;
                if (typeof value === "string") {
                    if (value.indexOf("Date") >= 0) {
                        a = /^\/Date\(([0-9]+)\)\/$/.exec(value);
                        if (a) {
                            return new Date(parseInt(a[1], 10))
                        }
                    }
                }
                return value
            })
        } catch (e) {
            return null
        }
    };
    msJSON = function () {
        function f(n) {
            return n < 10 ? "0" + n : n
        }

        var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, escapeable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, gap, indent, meta = {
            "\b": "\\b",
            "\t": "\\t",
            "\n": "\\n",
            "\f": "\\f",
            "\r": "\\r",
            '"': '\\"',
            "\\": "\\\\"
        }, rep;

        function quote(string) {
            escapeable.lastIndex = 0;
            return escapeable.test(string) ? '"' + string.replace(escapeable, function (a) {
                var c = meta[a];
                if (typeof c === "string") {
                    return c
                }
                return "\\u" + ("0000" + (+(a.charCodeAt(0))).toString(16)).slice(-4)
            }) + '"' : '"' + string + '"'
        }

        function str(key, holder) {
            var i, k, v, length, mind = gap, partial, value = holder[key];
            if (value && typeof value === "object" && typeof value.toJSON === "function") {
                value = value.toJSON(key)
            }
            if (typeof rep === "function") {
                value = rep.call(holder, key, value)
            }
            switch (typeof value) {
                case"string":
                    return quote(value);
                case"number":
                    return isFinite(value) ? String(value) : "null";
                case"boolean":
                case"null":
                    return String(value);
                case"object":
                    if (!value) {
                        return "null"
                    }
                    if (value.toUTCString) {
                        return '"\\/Date(' + (value.getTime()) + ')\\/"'
                    }
                    gap += indent;
                    partial = [];
                    if (typeof value.length === "number" && !(value.propertyIsEnumerable("length"))) {
                        length = value.length;
                        for (i = 0; i < length; i += 1) {
                            partial[i] = str(i, value) || "null"
                        }
                        v = partial.length === 0 ? "[]" : gap ? "[\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "]" : "[" + partial.join(",") + "]";
                        gap = mind;
                        return v
                    }
                    if (rep && typeof rep === "object") {
                        length = rep.length;
                        for (i = 0; i < length; i += 1) {
                            k = rep[i];
                            if (typeof k === "string") {
                                v = str(k, value, rep);
                                if (v) {
                                    partial.push(quote(k) + (gap ? ": " : ":") + v)
                                }
                            }
                        }
                    } else {
                        for (k in value) {
                            if (Object.hasOwnProperty.call(value, k)) {
                                v = str(k, value, rep);
                                if (v) {
                                    partial.push(quote(k) + (gap ? ": " : ":") + v)
                                }
                            }
                        }
                    }
                    v = partial.length === 0 ? "{}" : gap ? "{\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "}" : "{" + partial.join(",") + "}";
                    gap = mind;
                    return v
            }
        }

        return {
            stringify: function (value, replacer, space) {
                var i;
                gap = "";
                indent = "";
                if (typeof space === "number") {
                    for (i = 0; i < space; i += 1) {
                        indent += " "
                    }
                } else {
                    if (typeof space === "string") {
                        indent = space
                    }
                }
                rep = replacer;
                if (replacer && typeof replacer !== "function" && (typeof replacer !== "object" || typeof replacer.length !== "number")) {
                    throw new Error("JSON.stringify")
                }
                return str("", {"": value})
            }, parse: function (text, reviver) {
                var j;

                function walk(holder, key) {
                    var k, v, value = holder[key];
                    if (value && typeof value === "object") {
                        for (k in value) {
                            if (Object.hasOwnProperty.call(value, k)) {
                                v = walk(value, k);
                                if (v !== undefined) {
                                    value[k] = v
                                } else {
                                    delete value[k]
                                }
                            }
                        }
                    }
                    return reviver.call(holder, key, value)
                }

                cx.lastIndex = 0;
                if (cx.test(text)) {
                    text = text.replace(cx, function (a) {
                        return "\\u" + ("0000" + (+(a.charCodeAt(0))).toString(16)).slice(-4)
                    })
                }
                if (/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) {
                    j = eval("(" + text + ")");
                    return typeof reviver === "function" ? walk({"": j}, "") : j
                }
                throw new SyntaxError("JSON.parse")
            }
        }
    }()
})(jQuery);
var TrimPath;
(function () {
    if (TrimPath == null) {
        TrimPath = new Object()
    }
    if (TrimPath.evalEx == null) {
        TrimPath.evalEx = function (src) {
            return eval(src)
        }
    }
    var UNDEFINED;
    if (Array.prototype.pop == null) {
        Array.prototype.pop = function () {
            if (this.length === 0) {
                return UNDEFINED
            }
            return this[--this.length]
        }
    }
    if (Array.prototype.push == null) {
        Array.prototype.push = function () {
            for (var i = 0; i < arguments.length; ++i) {
                this[this.length] = arguments[i]
            }
            return this.length
        }
    }
    TrimPath.parseTemplate = function (tmplContent, optTmplName, optEtc) {
        if (optEtc == null) {
            optEtc = TrimPath.parseTemplate_etc
        }
        var funcSrc = parse(tmplContent, optTmplName, optEtc);
        var func = TrimPath.evalEx(funcSrc, optTmplName, 1);
        if (func != null) {
            return new optEtc.Template(optTmplName, tmplContent, funcSrc, func, optEtc)
        }
        return null
    };
    try {
        String.prototype.process = function (context, optFlags) {
            var template = TrimPath.parseTemplate(this, null);
            if (template != null) {
                return template.process(context, optFlags)
            }
            return this
        }
    } catch (e) {
    }
    TrimPath.parseTemplate_etc = {};
    TrimPath.parseTemplate_etc.statementTag = "forelse|for|if|elseif|else|var|macro";
    TrimPath.parseTemplate_etc.statementDef = {
        "if": {delta: 1, prefix: "if (", suffix: ") {", paramMin: 1},
        "else": {delta: 0, prefix: "} else {"},
        elseif: {delta: 0, prefix: "} else if (", suffix: ") {", paramDefault: "true"},
        "/if": {delta: -1, prefix: "}"},
        "for": {
            delta: 1, paramMin: 3, prefixFunc: function (stmtParts, state, tmplName, etc) {
                if (stmtParts[2] != "in") {
                    throw new etc.ParseError(tmplName, state.line, "bad for loop statement: " + stmtParts.join(" "))
                }
                var iterVar = stmtParts[1];
                var listVar = "__LIST__" + iterVar;
                return ["var ", listVar, " = ", stmtParts[3], ";", "var __LENGTH_STACK__;", "if (typeof(__LENGTH_STACK__) == 'undefined' || !__LENGTH_STACK__.length) __LENGTH_STACK__ = new Array();", "__LENGTH_STACK__[__LENGTH_STACK__.length] = 0;", "if ((", listVar, ") != null) { ", "var ", iterVar, "_ct = 0;", "for (var ", iterVar, "_index in ", listVar, ") { ", iterVar, "_ct++;", "if (typeof(", listVar, "[", iterVar, "_index]) == 'function') {continue;}", "__LENGTH_STACK__[__LENGTH_STACK__.length - 1]++;", "var ", iterVar, " = ", listVar, "[", iterVar, "_index];"].join("")
            }
        },
        forelse: {
            delta: 0,
            prefix: "} } if (__LENGTH_STACK__[__LENGTH_STACK__.length - 1] == 0) { if (",
            suffix: ") {",
            paramDefault: "true"
        },
        "/for": {delta: -1, prefix: "} }; delete __LENGTH_STACK__[__LENGTH_STACK__.length - 1];"},
        "var": {delta: 0, prefix: "var ", suffix: ";"},
        macro: {
            delta: 1, prefixFunc: function (stmtParts, state, tmplName, etc) {
                var macroName = stmtParts[1].split("(")[0];
                return ["var ", macroName, " = function", stmtParts.slice(1).join(" ").substring(macroName.length), "{ var _OUT_arr = []; var _OUT = { write: function(m) { if (m) _OUT_arr.push(m); } }; "].join("")
            }
        },
        "/macro": {delta: -1, prefix: " return _OUT_arr.join(''); };"}
    };
    TrimPath.parseTemplate_etc.modifierDef = {
        eat: function (v) {
            return ""
        }, escape: function (s) {
            return String(s).replace(/&/g, "&").replace(/</g, "<").replace(/>/g, ">")
        }, capitalize: function (s) {
            return String(s).toUpperCase()
        }, "default": function (s, d) {
            return s != null ? s : d
        }
    };
    TrimPath.parseTemplate_etc.modifierDef.h = TrimPath.parseTemplate_etc.modifierDef.escape;
    TrimPath.parseTemplate_etc.Template = function (tmplName, tmplContent, funcSrc, func, etc) {
        this.process = function (context, flags) {
            if (context == null) {
                context = {}
            }
            if (context._MODIFIERS == null) {
                context._MODIFIERS = {}
            }
            if (context.defined == null) {
                context.defined = function (str) {
                    return (context[str] != undefined)
                }
            }
            for (var k in etc.modifierDef) {
                if (context._MODIFIERS[k] == null) {
                    context._MODIFIERS[k] = etc.modifierDef[k]
                }
            }
            if (flags == null) {
                flags = {}
            }
            var resultArr = [];
            var resultOut = {
                write: function (m) {
                    resultArr.push(m)
                }
            };
            try {
                func(resultOut, context, flags)
            } catch (e) {
                if (flags.throwExceptions == true) {
                    throw e
                }
                var result = new String(resultArr.join("") + "[ERROR: " + e.toString() + (e.message ? "; " + e.message : "") + "]");
                result.exception = e;
                return result
            }
            return resultArr.join("")
        };
        this.name = tmplName;
        this.source = tmplContent;
        this.sourceFunc = funcSrc;
        this.toString = function () {
            return "TrimPath.Template [" + tmplName + "]"
        }
    };
    TrimPath.parseTemplate_etc.ParseError = function (name, line, message) {
        this.name = name;
        this.line = line;
        this.message = message
    };
    TrimPath.parseTemplate_etc.ParseError.prototype.toString = function () {
        return ("TrimPath template ParseError in " + this.name + ": line " + this.line + ", " + this.message)
    };
    var parse = function (body, tmplName, etc) {
        body = cleanWhiteSpace(body);
        var funcText = ["var TrimPath_Template_TEMP = function(_OUT, _CONTEXT, _FLAGS) { with (_CONTEXT) {"];
        var state = {stack: [], line: 1};
        var endStmtPrev = -1;
        while (endStmtPrev + 1 < body.length) {
            var begStmt = endStmtPrev;
            begStmt = body.indexOf("{", begStmt + 1);
            while (begStmt >= 0) {
                var endStmt = body.indexOf("}", begStmt + 1);
                var stmt = body.substring(begStmt, endStmt);
                var blockrx = stmt.match(/^\{(cdata|minify|eval)/);
                if (blockrx) {
                    var blockType = blockrx[1];
                    var blockMarkerBeg = begStmt + blockType.length + 1;
                    var blockMarkerEnd = body.indexOf("}", blockMarkerBeg);
                    if (blockMarkerEnd >= 0) {
                        var blockMarker;
                        if (blockMarkerEnd - blockMarkerBeg <= 0) {
                            blockMarker = "{/" + blockType + "}"
                        } else {
                            blockMarker = body.substring(blockMarkerBeg + 1, blockMarkerEnd)
                        }
                        var blockEnd = body.indexOf(blockMarker, blockMarkerEnd + 1);
                        if (blockEnd >= 0) {
                            emitSectionText(body.substring(endStmtPrev + 1, begStmt), funcText);
                            var blockText = body.substring(blockMarkerEnd + 1, blockEnd);
                            if (blockType == "cdata") {
                                emitText(blockText, funcText)
                            } else {
                                if (blockType == "minify") {
                                    emitText(scrubWhiteSpace(blockText), funcText)
                                } else {
                                    if (blockType == "eval") {
                                        if (blockText != null && blockText.length > 0) {
                                            funcText.push("_OUT.write( (function() { " + blockText + " })() );")
                                        }
                                    }
                                }
                            }
                            begStmt = endStmtPrev = blockEnd + blockMarker.length - 1
                        }
                    }
                } else {
                    if (body.charAt(begStmt - 1) != "$" && body.charAt(begStmt - 1) != "\\") {
                        var offset = (body.charAt(begStmt + 1) == "/" ? 2 : 1);
                        if (body.substring(begStmt + offset, begStmt + 10 + offset).search(TrimPath.parseTemplate_etc.statementTag) == 0) {
                            break
                        }
                    }
                }
                begStmt = body.indexOf("{", begStmt + 1)
            }
            if (begStmt < 0) {
                break
            }
            var endStmt = body.indexOf("}", begStmt + 1);
            if (endStmt < 0) {
                break
            }
            emitSectionText(body.substring(endStmtPrev + 1, begStmt), funcText);
            emitStatement(body.substring(begStmt, endStmt + 1), state, funcText, tmplName, etc);
            endStmtPrev = endStmt
        }
        emitSectionText(body.substring(endStmtPrev + 1), funcText);
        if (state.stack.length != 0) {
            throw new etc.ParseError(tmplName, state.line, "unclosed, unmatched statement(s): " + state.stack.join(","))
        }
        funcText.push("}}; TrimPath_Template_TEMP");
        return funcText.join("")
    };
    var emitStatement = function (stmtStr, state, funcText, tmplName, etc) {
        var parts = stmtStr.slice(1, -1).split(" ");
        var stmt = etc.statementDef[parts[0]];
        if (stmt == null) {
            emitSectionText(stmtStr, funcText);
            return
        }
        if (stmt.delta < 0) {
            if (state.stack.length <= 0) {
                throw new etc.ParseError(tmplName, state.line, "close tag does not match any previous statement: " + stmtStr)
            }
            state.stack.pop()
        }
        if (stmt.delta > 0) {
            state.stack.push(stmtStr)
        }
        if (stmt.paramMin != null && stmt.paramMin >= parts.length) {
            throw new etc.ParseError(tmplName, state.line, "statement needs more parameters: " + stmtStr)
        }
        if (stmt.prefixFunc != null) {
            funcText.push(stmt.prefixFunc(parts, state, tmplName, etc))
        } else {
            funcText.push(stmt.prefix)
        }
        if (stmt.suffix != null) {
            if (parts.length <= 1) {
                if (stmt.paramDefault != null) {
                    funcText.push(stmt.paramDefault)
                }
            } else {
                for (var i = 1; i < parts.length; i++) {
                    if (i > 1) {
                        funcText.push(" ")
                    }
                    funcText.push(parts[i])
                }
            }
            funcText.push(stmt.suffix)
        }
    };
    var emitSectionText = function (text, funcText) {
        if (text.length <= 0) {
            return
        }
        var nlPrefix = 0;
        var nlSuffix = text.length - 1;
        while (nlPrefix < text.length && (text.charAt(nlPrefix) == "\n")) {
            nlPrefix++
        }
        while (nlSuffix >= 0 && (text.charAt(nlSuffix) == " " || text.charAt(nlSuffix) == "\t")) {
            nlSuffix--
        }
        if (nlSuffix < nlPrefix) {
            nlSuffix = nlPrefix
        }
        if (nlPrefix > 0) {
            funcText.push('if (_FLAGS.keepWhitespace == true) _OUT.write("');
            var s = text.substring(0, nlPrefix).replace("\n", "\\n");
            if (s.charAt(s.length - 1) == "\n") {
                s = s.substring(0, s.length - 1)
            }
            funcText.push(s);
            funcText.push('");')
        }
        var lines = text.substring(nlPrefix, nlSuffix + 1).split("\n");
        for (var i = 0; i < lines.length; i++) {
            emitSectionTextLine(lines[i], funcText);
            if (i < lines.length - 1) {
                funcText.push('_OUT.write("\\n");\n')
            }
        }
        if (nlSuffix + 1 < text.length) {
            funcText.push('if (_FLAGS.keepWhitespace == true) _OUT.write("');
            var s = text.substring(nlSuffix + 1).replace("\n", "\\n");
            if (s.charAt(s.length - 1) == "\n") {
                s = s.substring(0, s.length - 1)
            }
            funcText.push(s);
            funcText.push('");')
        }
    };
    var emitSectionTextLine = function (line, funcText) {
        var endMarkPrev = "}";
        var endExprPrev = -1;
        while (endExprPrev + endMarkPrev.length < line.length) {
            var begMark = "${", endMark = "}";
            var begExpr = line.indexOf(begMark, endExprPrev + endMarkPrev.length);
            if (begExpr < 0) {
                break
            }
            if (line.charAt(begExpr + 2) == "%") {
                begMark = "${%";
                endMark = "%}"
            }
            var endExpr = line.indexOf(endMark, begExpr + begMark.length);
            if (endExpr < 0) {
                break
            }
            emitText(line.substring(endExprPrev + endMarkPrev.length, begExpr), funcText);
            var exprArr = line.substring(begExpr + begMark.length, endExpr).replace(/\|\|/g, "#@@#").split("|");
            for (var k in exprArr) {
                if (exprArr[k].replace) {
                    exprArr[k] = exprArr[k].replace(/#@@#/g, "||")
                }
            }
            funcText.push("_OUT.write(");
            emitExpression(exprArr, exprArr.length - 1, funcText);
            funcText.push(");");
            endExprPrev = endExpr;
            endMarkPrev = endMark
        }
        emitText(line.substring(endExprPrev + endMarkPrev.length), funcText)
    };
    var emitText = function (text, funcText) {
        if (text == null || text.length <= 0) {
            return
        }
        text = text.replace(/\\/g, "\\\\");
        text = text.replace(/\n/g, "\\n");
        text = text.replace(/"/g, '\\"');
        funcText.push('_OUT.write("');
        funcText.push(text);
        funcText.push('");')
    };
    var emitExpression = function (exprArr, index, funcText) {
        var expr = exprArr[index];
        if (index <= 0) {
            funcText.push(expr);
            return
        }
        var parts = expr.split(":");
        funcText.push('_MODIFIERS["');
        funcText.push(parts[0]);
        funcText.push('"](');
        emitExpression(exprArr, index - 1, funcText);
        if (parts.length > 1) {
            funcText.push(",");
            funcText.push(parts[1])
        }
        funcText.push(")")
    };
    var cleanWhiteSpace = function (result) {
        result = result.replace(/\t/g, "    ");
        result = result.replace(/\r\n/g, "\n");
        result = result.replace(/\r/g, "\n");
        result = result.replace(/^(\s*\S*(\s+\S+)*)\s*$/, "$1");
        return result
    };
    var scrubWhiteSpace = function (result) {
        result = result.replace(/^\s+/g, "");
        result = result.replace(/\s+$/g, "");
        result = result.replace(/\s+/g, " ");
        result = result.replace(/^(\s*\S*(\s+\S+)*)\s*$/, "$1");
        return result
    };
    TrimPath.parseDOMTemplate = function (elementId, optDocument, optEtc) {
        if (optDocument == null) {
            optDocument = document
        }
        var element = optDocument.getElementById(elementId);
        var content = element.value;
        if (content == null) {
            content = element.innerHTML
        }
        content = content.replace(/</g, "<").replace(/>/g, ">");
        return TrimPath.parseTemplate(content, elementId, optEtc)
    };
    TrimPath.processDOMTemplate = function (elementId, context, optFlags, optDocument, optEtc) {
        return TrimPath.parseDOMTemplate(elementId, optDocument, optEtc).process(context, optFlags)
    }
})();
(function ($) {
    $.extend({
        _jsonp: {
            scripts: {},
            counter: 1,
            charset: "gb2312",
            head: document.getElementsByTagName("head")[0],
            name: function (callback) {
                var name = "_jsonp_" + (new Date).getTime() + "_" + this.counter;
                this.counter++;
                var cb = function (json) {
                    eval("delete " + name);
                    callback(json);
                    $._jsonp.head.removeChild($._jsonp.scripts[name]);
                    delete $._jsonp.scripts[name]
                };
                eval(name + " = cb");
                return name
            },
            load: function (url, name) {
                var script = document.createElement("script");
                script.type = "text/javascript";
                script.charset = this.charset;
                script.src = url;
                this.head.appendChild(script);
                this.scripts[name] = script
            }
        }, getJSONP: function (url, callback) {
            var name = $._jsonp.name(callback);
            var url = url.replace(/{callback};/, name);
            $._jsonp.load(url, name);
            return this
        }
    })
})(jQuery);
(function (a) {
    a.fn.Jdropdown = function (d, e) {
        if (!this.length) {
            return
        }
        if (typeof d == "function") {
            e = d;
            d = {}
        }
        var c = a.extend({event: "mouseover", current: "hover", delay: 0}, d || {});
        var b = (c.event == "mouseover") ? "mouseout" : "mouseleave";
        a.each(this, function () {
            var h = null, g = null, f = false;
            a(this).bind(c.event, function () {
                if (f) {
                    clearTimeout(g)
                } else {
                    var j = a(this);
                    h = setTimeout(function () {
                        j.addClass(c.current);
                        f = true;
                        if (e) {
                            e(j)
                        }
                    }, c.delay)
                }
            }).bind(b, function () {
                if (f) {
                    var j = a(this);
                    g = setTimeout(function () {
                        j.removeClass(c.current);
                        f = false
                    }, c.delay)
                } else {
                    clearTimeout(h)
                }
            })
        })
    }
})(jQuery);
(function (a) {
    a.fn.dropdown = function (b, c) {
        var b = a.extend({className: "item", current: "hover", enterDelay: 10, leaveDelay: 300, onmouseleave: null}, b);
        a.each(this, function () {
            var f = a(this);
            var m = f.find("." + b.className);
            var d = [];
            var p = null;
            var g = 3;
            var j = false;
            var k, n;

            function h(v) {
                var t = f.offset(), o = {x: t.left, y: t.top}, z = {x: t.left + f.outerWidth(), y: o.y}, B = {
                    x: t.left,
                    y: t.top + f.outerHeight()
                }, u = {x: t.left + f.outerWidth(), y: B.y};
                loc = d[d.length - 1], prevLoc = d[0];
                if (!loc) {
                    return 0
                }
                if (!prevLoc) {
                    prevLoc = loc
                }
                if (prevLoc.x < t.left || prevLoc.x > u.x || prevLoc.y < t.top || prevLoc.y > u.y) {
                    return 0
                }
                if (p && loc.x == p.x && loc.y == p.y) {
                    return 0
                }
                function w(D, C) {
                    return (C.y - D.y) / (C.x - D.x)
                }

                var y = z, q = u;
                var r = w(loc, y), A = w(prevLoc, y), x = w(loc, q), s = w(prevLoc, q);
                if (r < A && x > s) {
                    if ((prevLoc.x - o.x) < 25) {
                        return 0
                    }
                    p = loc;
                    return 300
                }
                p = null;
                return 0
            }

            f.bind("mouseenter", function () {
                clearTimeout(k)
            });
            var l = null;
            var e = null;
            f.bind("mouseleave", function () {
                if (j) {
                    k = setTimeout(function () {
                        m.removeClass(b.current)
                    }, b.leaveDelay)
                }
                if (b.onmouseleave) {
                    b.onmouseleave()
                }
                l = null
            });
            m.bind("mouseenter", function () {
                var o = a(this);
                var r = this;
                var q = function () {
                    l = jQuery.inArray(r, m);
                    m.removeClass(b.current);
                    o.addClass(b.current);
                    j = true;
                    if (c) {
                        c(o)
                    }
                };
                n = setTimeout(function () {
                    if (h(o) == 0) {
                        q();
                        clearTimeout(e)
                    }
                }, b.enterDelay);
                e = setTimeout(function () {
                    if (l != jQuery.inArray(r, m)) {
                        q()
                    }
                }, 700)
            });
            m.bind("mouseleave", function () {
                var o = a(this);
                clearTimeout(n);
                clearTimeout(e)
            });
            a(document).mousemove(function (o) {
                d.push({x: o.pageX, y: o.pageY});
                if (d.length > g) {
                    d.shift()
                }
            })
        })
    }
})(jQuery);
(function (a) {
    a.fn.Jtab = function (d, h) {
        if (!this.length) {
            return
        }
        if (typeof d == "function") {
            h = d;
            d = {}
        }
        var b = a.extend({
            type: "static",
            auto: false,
            event: "mouseover",
            currClass: "curr",
            source: "data-tag",
            hookKey: "data-widget",
            hookItemVal: "tab-item",
            hookContentVal: "tab-content",
            stay: 5000,
            delay: 100,
            threshold: null,
            mainTimer: null,
            subTimer: null,
            index: 0,
            compatible: false
        }, d || {});
        var f = a(this).find("*[" + b.hookKey + "=" + b.hookItemVal + "]"), e = a(this).find("*[" + b.hookKey + "=" + b.hookContentVal + "]"), k = b.source.toLowerCase().match(/http:\/\/|\d|\.aspx|\.ascx|\.asp|\.php|\.html\.htm|.shtml|.js/g);
        if (f.length != e.length) {
            return false
        }
        var j = function (m, l) {
            b.subTimer = setTimeout(function () {
                f.eq(b.index).removeClass(b.currClass);
                if (b.compatible) {
                    e.eq(b.index).hide()
                }
                if (l) {
                    b.index++;
                    if (b.index == f.length) {
                        b.index = 0
                    }
                } else {
                    b.index = m
                }
                b.type = (f.eq(b.index).attr(b.source) != null) ? "dynamic" : "static";
                c()
            }, b.delay)
        };
        var g = function () {
            b.mainTimer = setInterval(function () {
                j(b.index, true)
            }, b.stay)
        };
        var c = function () {
            f.eq(b.index).addClass(b.currClass);
            if (b.compatible) {
                e.eq(b.index).show()
            }
            switch (b.type) {
                default:
                case"static":
                    var l = "";
                    break;
                case"dynamic":
                    var l = (!k) ? f.eq(b.index).attr(b.source) : b.source;
                    f.eq(b.index).removeAttr(b.source);
                    break
            }
            if (h) {
                h(l, e.eq(b.index), b.index)
            }
        };
        f.each(function (l) {
            a(this).bind(b.event, function () {
                clearTimeout(b.subTimer);
                clearInterval(b.mainTimer);
                j(l, false)
            }).bind("mouseleave", function () {
                if (b.auto) {
                    g()
                } else {
                    return
                }
            })
        });
        if (b.type == "dynamic") {
            j(b.index, false)
        }
        if (b.auto) {
            g()
        }
    }
})(jQuery);
(function (a) {
    a.fn.Jlazyload = function (j, n) {
        if (!this.length) {
            return
        }
        var f = a.extend({
            type: null,
            offsetParent: null,
            source: "data-lazyload",
            placeholderImage: "http://misc.360buyimg.com/lib/img/e/blank.gif",
            placeholderClass: "loading-style2",
            threshold: 200
        }, j || {}), k = this, g, m, l = function (r) {
            var u = r.scrollLeft, t = r.scrollTop, s = r.offsetWidth, q = r.offsetHeight;
            while (r.offsetParent) {
                u += r.offsetLeft;
                t += r.offsetTop;
                r = r.offsetParent
            }
            return {left: u, top: t, width: s, height: q}
        }, e = function () {
            var v = document.documentElement, r = document.body, u = window.pageXOffset ? window.pageXOffset : (v.scrollLeft || r.scrollLeft), t = window.pageYOffset ? window.pageYOffset : (v.scrollTop || r.scrollTop), s = v.clientWidth, q = v.clientHeight;
            return {left: u, top: t, width: s, height: q}
        }, d = function (w, v) {
            var y, x, s, r, q, u, z = f.threshold ? parseInt(f.threshold) : 0;
            y = w.left + w.width / 2;
            x = v.left + v.width / 2;
            s = w.top + w.height / 2;
            r = v.top + v.height / 2;
            q = (w.width + v.width) / 2;
            u = (w.height + v.height) / 2;
            return Math.abs(y - x) < (q + z) && Math.abs(s - r) < (u + z)
        }, b = function (q, s, r) {
            if (f.placeholderImage && f.placeholderClass) {
                r.attr("src", f.placeholderImage).addClass(f.placeholderClass)
            }
            if (q) {
                r.attr("src", s).removeAttr(f.source);
                if (n) {
                    n(s, r)
                }
            }
        }, c = function (q, t, r) {
            if (q) {
                var s = a("#" + t);
                s.html(r.val()).removeAttr(f.source);
                r.remove();
                if (n) {
                    n(t, r)
                }
            }
        }, p = function (q, s, r) {
            if (q) {
                r.removeAttr(f.source);
                if (n) {
                    n(s, r)
                }
            }
        }, o = function () {
            m = e(), k = k.filter(function () {
                return a(this).attr(f.source)
            });
            a.each(k, function () {
                var t = a(this).attr(f.source);
                if (!t) {
                    return
                }
                var s = (!f.offsetParent) ? m : l(a(f.offsetParent).get(0)), r = l(this), q = d(s, r);
                switch (f.type) {
                    case"image":
                        b(q, t, a(this));
                        break;
                    case"textarea":
                        c(q, t, a(this));
                        break;
                    case"module":
                        p(q, t, a(this));
                        break;
                    default:
                        break
                }
            })
        }, h = function () {
            if (k.length > 0) {
                clearTimeout(g);
                g = setTimeout(function () {
                    o()
                }, 10)
            }
        };
        o();
        if (!f.offsetParent) {
            a(window).bind("scroll", function () {
                h()
            }).bind("reset", function () {
                h()
            })
        } else {
            a(f.offsetParent).bind("scroll", function () {
                h()
            })
        }
    }
})(jQuery);
(function (a) {
    a.Jtimer = function (d, h) {
        var c = a.extend({
            pids: null,
            template: null,
            reset: null,
            mainPlaceholder: "timed",
            subPlaceholder: "timer",
            resetPlaceholder: "reset",
            iconPlaceholder: "icon",
            finishedClass: "",
            timer: []
        }, d || {}), g = function (l) {
            var k = l.split(" "), j = k[0].split("-"), m = k[1].split(":");
            return new Date(j[0], j[1] - 1, j[2], m[0], m[1], m[2])
        }, e = function (j) {
            if (String(j).length < 2) {
                j = "0" + j
            }
            return j
        }, f = function (t, p) {
            if (p == {} || !p || !p.start || !p.end) {
                return
            }
            var j = g(p.start), l = g(p.server), n = g(p.end), v, u, o, s = (j - l) / 1000, m = (n - l) / 1000, w = "#" + c.mainPlaceholder + t, k = "#" + c.subPlaceholder + p.qid, r = "#" + c.resetPlaceholder + p.qid;
            if (s <= 0) {
                var q = c.template.process(p);
                a(w).html(q)
            }
            c.timer[p.qid] = setInterval(function () {
                if (s > 0) {
                    clearInterval(c.timer[p.qid]);
                    return
                } else {
                    if (m > 0) {
                        v = Math.floor(m / 3600);
                        u = Math.floor((m - v * 3600) / 60);
                        o = (m - v * 3600) % 60;
                        a(k).html("\u5269\u4f59<b>" + e(v) + "</b>\u5c0f\u65f6<b>" + e(u) + "</b>\u5206<b>" + e(o) + "</b>\u79d2");
                        m--
                    } else {
                        a(k).html("\u62a2\u8d2d\u7ed3\u675f\uff01");
                        if (c.iconPlaceholder) {
                            iconElement = "#" + c.iconPlaceholder + p.qid;
                            a(iconElement).attr("class", c.finishedClass).html("\u62a2\u5b8c")
                        }
                        if (c.reset) {
                            a(k).append('<a href="javascript:void(0)" id="' + r.substring(1) + '">\u5237\u65b0</a>');
                            a(r).bind("click", function () {
                                a.each(c.timer, function (x) {
                                    clearInterval(this)
                                });
                                c.reset()
                            })
                        }
                        clearInterval(c.timer[p.qid])
                    }
                }
            }, 1000)
        }, b = function (k, j) {
            return ((g(k.end) - g(k.server)) - (g(j.end) - g(j.server)))
        };
        a.ajax({
            url: "http://qiang.jd.com/HomePageNewLimitBuy.ashx?callback=?",
            data: {ids: c.pids},
            dataType: "jsonp",
            success: function (j) {
                if (j && j.data) {
                    j.data.sort(b);
                    a.each(j.data, function (k) {
                        f((k + 1), j.data[k])
                    })
                }
                if (h) {
                    h()
                }
            }
        })
    }
})(jQuery);
(function (a) {
    a.fn.Jslider = function (h, n) {
        if (!this.length) {
            return
        }
        if (typeof h == "function") {
            n = h;
            h = {}
        }
        var d = a.extend({
            auto: false,
            reInit: false,
            data: [],
            defaultIndex: 0,
            slideWidth: 0,
            slideHeight: 0,
            slideDirection: 1,
            speed: "normal",
            stay: 5000,
            delay: 150,
            maxAmount: null,
            template: null,
            showControls: true
        }, h || {});
        var g = a(this), e = null, k = null, j = null, c = null, m = null, o = function () {
            var p;
            if (d.maxAmount && d.maxAmount < d.data.length) {
                d.data.splice(d.maxAmount, d.data.length - d.maxAmount)
            }
            if (typeof d.data == "object") {
                if (d.data.length) {
                    p = {};
                    p.json = d.data
                } else {
                    p = d.data
                }
            }
            var r = d.template;
            if (d.reInit) {
                var s, u = r.controlsContent.process(p);
                p.json = p.json.slice(1);
                s = r.itemsContent.process(p);
                g.find(".slide-items").eq(0).append(s);
                g.find(".slide-controls").eq(0).html(u)
            } else {
                var t = r.itemsWrap.replace("{innerHTML}", r.itemsContent) + r.controlsWrap.replace("{innerHTML}", r.controlsContent), q = t.process(p);
                g.html(q)
            }
            e = g.find(".slide-items");
            k = g.find(".slide-controls");
            j = k.find("span");
            f();
            l();
            if (n) {
                n(g)
            }
        }, f = function () {
            j.bind("mouseover", function () {
                var p = j.index(this);
                if (p == d.defaultIndex) {
                    return
                }
                clearTimeout(m);
                clearInterval(c);
                m = setTimeout(function () {
                    b(p)
                }, d.delay)
            }).bind("mouseleave", function () {
                clearTimeout(m);
                clearInterval(c);
                l()
            });
            e.bind("mouseover", function () {
                clearTimeout(m);
                clearInterval(c)
            }).bind("mouseleave", function () {
                l()
            })
        }, b = function (p) {
            j.each(function (v) {
                if (v == p) {
                    a(this).addClass("curr")
                } else {
                    a(this).removeClass("curr")
                }
            });
            var u = 0, t = 0;
            if (d.slideDirection == 3) {
                var q = e.children(), r = q.eq(d.defaultIndex), s = q.eq(p);
                r.css({zIndex: 0});
                s.css({zIndex: 1});
                r.fadeOut("fast");
                s.fadeIn("slow");
                d.defaultIndex = p
            } else {
                if (d.slideDirection == 1) {
                    e.css({width: d.slideWidth * d.data.length});
                    u = -d.slideWidth * p
                } else {
                    t = -d.slideHeight * p
                }
                e.animate({top: t + "px", left: u + "px"}, d.speed, function () {
                    d.defaultIndex = p
                })
            }
        }, l = function () {
            if (d.auto) {
                c = setInterval(function () {
                    var p = d.defaultIndex;
                    p++;
                    if (p == d.data.length) {
                        p = 0
                    }
                    b(p)
                }, d.stay)
            }
        };
        o()
    }
})(jQuery);
jQuery.fn.pagination = function (a, b) {
    b = jQuery.extend({
        items_per_page: 10,
        num_display_entries: 10,
        current_page: 0,
        num_edge_entries: 0,
        link_to: "#",
        prev_text: "Prev",
        next_text: "Next",
        ellipse_text: "...",
        prev_show_always: true,
        next_show_always: true,
        callback: function () {
            return false
        }
    }, b || {});
    return this.each(function () {
        function f() {
            return Math.ceil(a / b.items_per_page)
        }

        function h() {
            var l = Math.ceil(b.num_display_entries / 2);
            var m = f();
            var k = m - b.num_display_entries;
            var n = g > l ? Math.max(Math.min(g - l, k), 0) : 0;
            var j = g > l ? Math.min(g + l, m) : Math.min(b.num_display_entries, m);
            return [n, j]
        }

        function e(k, j) {
            g = k;
            c();
            var l = b.callback(k, d);
            if (!l) {
                if (j.stopPropagation) {
                    j.stopPropagation()
                } else {
                    j.cancelBubble = true
                }
            }
            return l
        }

        function c() {
            d.empty();
            var k = h();
            var o = f();
            if (o == 1) {
                $(".Pagination").css({display: "none"})
            }
            var p = function (q) {
                return function (r) {
                    return e(q, r)
                }
            };
            var n = function (q, r) {
                q = q < 0 ? 0 : (q < o ? q : o - 1);
                r = jQuery.extend({text: q + 1, classes: ""}, r || {});
                if (q == g) {
                    var s = $("<a href='javascript:void(0)' class='current'>" + (r.text) + "</a>")
                } else {
                    var s = $("<a>" + (r.text) + "</a>").bind("click", p(q)).attr("href", b.link_to.replace(/__id__/, q))
                }
                if (r.classes) {
                    s.addClass(r.classes)
                }
                d.append(s)
            };
            if (b.prev_text && (g > 0 || b.prev_show_always)) {
                n(g - 1, {text: b.prev_text, classes: "prev"})
            }
            if (k[0] > 0 && b.num_edge_entries > 0) {
                var j = Math.min(b.num_edge_entries, k[0]);
                for (var l = 0; l < j; l++) {
                    n(l)
                }
                if (b.num_edge_entries < k[0] && b.ellipse_text) {
                    jQuery("<span>" + b.ellipse_text + "</span>").appendTo(d)
                }
            }
            for (var l = k[0]; l < k[1]; l++) {
                n(l)
            }
            if (k[1] < o && b.num_edge_entries > 0) {
                if (o - b.num_edge_entries > k[1] && b.ellipse_text) {
                    jQuery("<span>" + b.ellipse_text + "</span>").appendTo(d)
                }
                var m = Math.max(o - b.num_edge_entries, k[1]);
                for (var l = m; l < o; l++) {
                    n(l)
                }
            }
            if (b.next_text && (g < o - 1 || b.next_show_always)) {
                n(g + 1, {text: b.next_text, classes: "next"})
            }
        }

        var g = b.current_page;
        a = (!a || a < 0) ? 1 : a;
        b.items_per_page = (!b.items_per_page || b.items_per_page < 0) ? 1 : b.items_per_page;
        var d = jQuery(this);
        this.selectPage = function (j) {
            e(j)
        };
        this.prevPage = function () {
            if (g > 0) {
                e(g - 1);
                return true
            } else {
                return false
            }
        };
        this.nextPage = function () {
            if (g < f() - 1) {
                e(g + 1);
                return true
            } else {
                return false
            }
        };
        c()
    })
};
(function (a) {
    a.extend(a.browser, {
        client: function () {
            return {
                width: document.documentElement.clientWidth,
                height: document.documentElement.clientHeight,
                bodyWidth: document.body.clientWidth,
                bodyHeight: document.body.clientHeight
            }
        }, scroll: function () {
            var b = document.documentElement.scrollTop;
            var g = document.body.scrollTop;
            var f = document.documentElement.scrollLeft;
            var c = document.body.scrollLeft;
            var e = !!b ? b : g;
            var d = !!f ? f : c;
            return {
                width: document.documentElement.scrollWidth,
                height: document.documentElement.scrollHeight,
                bodyWidth: document.body.scrollWidth,
                bodyHeight: document.body.scrollHeight,
                left: d,
                top: e
            }
        }, screen: function () {
            return {width: window.screen.width, height: window.screen.height}
        }, isIE6: a.browser && a.browser.msie && a.browser.version == 6, isMinW: function (b) {
            return Math.min(a.browser.client().bodyWidth, a.browser.client().width) <= b
        }, isMinH: function (b) {
            return a.browser.client().height <= b
        }
    })
})(jQuery);
(function (a) {
    a.fn.jdPosition = function (f) {
        var e = a.extend({mode: null}, f || {});
        switch (e.mode) {
            default:
            case"center":
                var c = a(this).outerWidth(), g = a(this).outerHeight();
                var b = a.browser.isMinW(c), d = a.browser.isMinH(g);
                a(this).css({
                    left: a.browser.scroll().left + Math.max((a.browser.client().width - c) / 2, 0) + "px",
                    top: (!a.browser.isIE6) ? (d ? a.browser.scroll().top : (a.browser.scroll().top + Math.max((a.browser.client().height - g) / 2, 0) + "px")) : ((a.browser.scroll().top <= a.browser.client().bodyHeight - g) ? (a.browser.scroll().top + Math.max((a.browser.client().height - g) / 2, 0) + "px") : (a.browser.client().height - g) / 2 + "px")
                });
                break;
            case"auto":
                break;
            case"fixed":
                break
        }
    }
})(jQuery);
(function (a) {
    a.fn.jdThickBox = function (f, k) {
        if (typeof f == "function") {
            k = f;
            f = {}
        }
        var o = a.extend({
            type: "text",
            source: null,
            width: null,
            height: null,
            title: null,
            _frame: "",
            _div: "",
            _box: "",
            _con: "",
            _loading: "thickloading",
            close: false,
            _close: "",
            _fastClose: false,
            _close_val: "\u00d7",
            _titleOn: true,
            _title: "",
            _autoReposi: false,
            _countdown: false,
            _thickPadding: 10,
            _wrapBorder: 1
        }, f || {});
        var e = (typeof this != "function") ? a(this) : null;
        var c;
        var m = function () {
            clearInterval(c);
            a(".thickframe").add(".thickdiv").remove();
            a(".thickbox").empty().remove();
            if (o._autoReposi) {
                a(window).unbind("resize.jdThickBox").unbind("scroll.jdThickBox")
            }
        };
        if (o.close) {
            m();
            return false
        }
        var d = function (p) {
            if (p != "") {
                return p.match(/\w+/)
            } else {
                return ""
            }
        };
        var n = function (p) {
            if (a(".thickframe").length == 0 || a(".thickdiv").length == 0) {
                a("<iframe class='thickframe' id='" + d(o._frame) + "' marginwidth='0' marginheight='0' frameborder='0' scrolling='no'></iframe>").appendTo(a(document.body));
                a("<div class='thickdiv' id='" + d(o._div) + "'></div>").appendTo(a(document.body))
            } else {
                a(".thickframe").add(".thickdiv").show()
            }
            a("<div class='thickbox' id='" + d(o._box) + "'><div class='thickwrap'></div></div>").appendTo(a(document.body));
            if (a(".thickwrap")) {
                a(".thickwrap").css("width", o.width + o._thickPadding * 2);
                o._wrapBorder = 1
            }
            if (o._titleOn) {
                h(p)
            }
            a("<div class='thickcon' id='" + d(o._con) + "' style='width:" + o.width + "px;height:" + o.height + "px;'></div>").appendTo(a(".thickwrap"));
            if (o._countdown) {
                b()
            }
            a(".thickcon").addClass(o._loading);
            g();
            j();
            l(p);
            if (o._autoReposi) {
                a(window).bind("resize.jdThickBox", g).bind("scroll.jdThickBox", g)
            }
            if (o._fastClose) {
                a(document.body).bind("click.jdThickBox", function (r) {
                    r = r ? r : window.event;
                    var q = r.srcElement ? r.srcElement : r.target;
                    if (q.className == "thickdiv") {
                        a(this).unbind("click.jdThickBox");
                        m()
                    }
                })
            }
        };
        var b = function () {
            var p = o._countdown;
            a("<div class='thickcountdown' style='width:" + o.width + "'><span id='jd-countdown'>" + p + "</span>\u79d2\u540e\u81ea\u52a8\u5173\u95ed</div>").appendTo(a(".thickwrap"));
            c = setInterval(function () {
                p--;
                a("#jd-countdown").html(p);
                if (p == 0) {
                    p = o._countdown;
                    m()
                }
            }, 1000)
        };
        var h = function (p) {
            o.title = (o.title == null && p) ? p.attr("title") : o.title;
            a("<div class='thicktitle' id='" + d(o._title) + "' style='width:" + o.width + "'><span>" + o.title + "</span></div>").appendTo(a(".thickwrap"))
        };
        var j = function () {
            if (o._close != null) {
                a("<a href='#' class='thickclose' id='" + d(o._close) + "'>" + o._close_val + "</a>").appendTo(a(".thickwrap"));
                a(".thickclose").one("click", function () {
                    m();
                    return false
                })
            }
        };
        var l = function (p) {
            o.source = (o.source == null) ? p.attr("href") : o.source;
            switch (o.type) {
                default:
                case"text":
                    a(".thickcon").html(o.source);
                    a(".thickcon").removeClass(o._loading);
                    if (k) {
                        k()
                    }
                    break;
                case"html":
                    a(o.source).clone().appendTo(a(".thickcon")).show();
                    a(".thickcon").removeClass(o._loading);
                    if (k) {
                        k()
                    }
                    break;
                case"image":
                    o._index = (o._index == null) ? e.index(p) : o._index;
                    a(".thickcon").append("<img src='" + o.source + "' width='" + o.width + "' height='" + o.height + "'>");
                    o.source = null;
                    a(".thickcon").removeClass(o._loading);
                    if (k) {
                        k()
                    }
                    break;
                case"ajax":
                case"json":
                    if (k) {
                        k(o.source, a(".thickcon"), function () {
                            a(".thickcon").removeClass(o._loading)
                        })
                    }
                    break;
                case"iframe":
                    a("<iframe src='" + o.source + "' marginwidth='0' marginheight='0' frameborder='0' scrolling='no' style='width:" + o.width + "px;height:" + o.height + "px;border:0;'></iframe>").appendTo(a(".thickcon"));
                    a(".thickcon").removeClass(o._loading);
                    if (k) {
                        k()
                    }
                    break
            }
        };
        var g = function () {
            var q = o._thickPadding * 2 + parseInt(o.width);
            a(".thickcon").css({
                width: o.width,
                height: o.height,
                paddingLeft: o._thickPadding,
                paddingRight: o._thickPadding
            });
            setTimeout(function () {
                a(".thickbox").css({
                    width: q + o._wrapBorder * 2,
                    height: parseInt(o._titleOn ? a(".thicktitle").outerHeight() : 0) + parseInt(a(".thickcon").outerHeight()) + o._wrapBorder * 2
                })
            }, 100);
            a(".thickbox").jdPosition({mode: "center"});
            if (a.browser.isIE6) {
                var s = a(".thickbox").outerWidth(), t = a(".thickbox").outerHeight();
                var p = a.browser.isMinW(s), r = a.browser.isMinH(t);
                a(".thickframe").add(".thickdiv").css({
                    width: p ? s : "100%",
                    height: Math.max(a.browser.client().height, a.browser.client().bodyHeight) + "px"
                })
            }
        };
        if (e != null) {
            e.click(function () {
                n(a(this));
                return false
            })
        } else {
            n()
        }
    };
    a.jdThickBox = a.fn.jdThickBox
})(jQuery);
function jdThickBoxclose() {
    $(".thickclose").trigger("click")
}
(function (a) {
    a.fn.jdMarquee = function (h, b) {
        if (typeof h == "function") {
            b = h;
            h = {}
        }
        var j = a.extend({
            deriction: "up",
            speed: 10,
            auto: false,
            width: null,
            height: null,
            step: 1,
            control: false,
            _front: null,
            _back: null,
            _stop: null,
            _continue: null,
            wrapstyle: "",
            stay: 5000,
            delay: 20,
            dom: "div>ul>li".split(">"),
            mainTimer: null,
            subTimer: null,
            tag: false,
            convert: false,
            btn: null,
            disabled: "disabled",
            pos: {ojbect: null, clone: null}
        }, h || {});
        var u = this.find(j.dom[1]);
        var e = this.find(j.dom[2]);
        var r;
        if (j.deriction == "up" || j.deriction == "down") {
            var l = u.eq(0).outerHeight();
            var c = j.step * e.eq(0).outerHeight();
            u.css({width: j.width + "px", overflow: "hidden"})
        }
        if (j.deriction == "left" || j.deriction == "right") {
            var n = e.length * e.eq(0).outerWidth();
            u.css({width: n + "px", overflow: "hidden"});
            var c = j.step * e.eq(0).outerWidth()
        }
        var o = function () {
            var s = "<div style='position:relative;overflow:hidden;z-index:1;width:" + j.width + "px;height:" + j.height + "px;" + j.wrapstyle + "'></div>";
            u.css({position: "absolute", left: 0, top: 0}).wrap(s);
            j.pos.object = 0;
            r = u.clone();
            u.after(r);
            switch (j.deriction) {
                default:
                case"up":
                    u.css({marginLeft: 0, marginTop: 0});
                    r.css({marginLeft: 0, marginTop: l + "px"});
                    j.pos.clone = l;
                    break;
                case"down":
                    u.css({marginLeft: 0, marginTop: 0});
                    r.css({marginLeft: 0, marginTop: -l + "px"});
                    j.pos.clone = -l;
                    break;
                case"left":
                    u.css({marginTop: 0, marginLeft: 0});
                    r.css({marginTop: 0, marginLeft: n + "px"});
                    j.pos.clone = n;
                    break;
                case"right":
                    u.css({marginTop: 0, marginLeft: 0});
                    r.css({marginTop: 0, marginLeft: -n + "px"});
                    j.pos.clone = -n;
                    break
            }
            if (j.auto) {
                k();
                u.hover(function () {
                    m(j.mainTimer)
                }, function () {
                    k()
                });
                r.hover(function () {
                    m(j.mainTimer)
                }, function () {
                    k()
                })
            }
            if (b) {
                b()
            }
            if (j.control) {
                g()
            }
        };
        var k = function (s) {
            m(j.mainTimer);
            j.stay = s ? s : j.stay;
            j.mainTimer = setInterval(function () {
                t()
            }, j.stay)
        };
        var t = function () {
            m(j.subTimer);
            j.subTimer = setInterval(function () {
                q()
            }, j.delay)
        };
        var m = function (s) {
            if (s != null) {
                clearInterval(s)
            }
        };
        var p = function (s) {
            if (s) {
                a(j._front).unbind("click");
                a(j._back).unbind("click");
                a(j._stop).unbind("click");
                a(j._continue).unbind("click")
            } else {
                g()
            }
        };
        var g = function () {
            if (j._front != null) {
                a(j._front).click(function () {
                    a(j._front).addClass(j.disabled);
                    p(true);
                    m(j.mainTimer);
                    j.convert = true;
                    j.btn = "front";
                    t();
                    if (!j.auto) {
                        j.tag = true
                    }
                    f()
                })
            }
            if (j._back != null) {
                a(j._back).click(function () {
                    a(j._back).addClass(j.disabled);
                    p(true);
                    m(j.mainTimer);
                    j.convert = true;
                    j.btn = "back";
                    t();
                    if (!j.auto) {
                        j.tag = true
                    }
                    f()
                })
            }
            if (j._stop != null) {
                a(j._stop).click(function () {
                    m(j.mainTimer)
                })
            }
            if (j._continue != null) {
                a(j._continue).click(function () {
                    k()
                })
            }
        };
        var f = function () {
            if (j.tag && j.convert) {
                j.convert = false;
                if (j.btn == "front") {
                    if (j.deriction == "down") {
                        j.deriction = "up"
                    }
                    if (j.deriction == "right") {
                        j.deriction = "left"
                    }
                }
                if (j.btn == "back") {
                    if (j.deriction == "up") {
                        j.deriction = "down"
                    }
                    if (j.deriction == "left") {
                        j.deriction = "right"
                    }
                }
                if (j.auto) {
                    k()
                } else {
                    k(4 * j.delay)
                }
            }
        };
        var d = function (w, v, s) {
            if (s) {
                m(j.subTimer);
                j.pos.object = w;
                j.pos.clone = v;
                j.tag = true
            } else {
                j.tag = false
            }
            if (j.tag) {
                if (j.convert) {
                    f()
                } else {
                    if (!j.auto) {
                        m(j.mainTimer)
                    }
                }
            }
            if (j.deriction == "up" || j.deriction == "down") {
                u.css({marginTop: w + "px"});
                r.css({marginTop: v + "px"})
            }
            if (j.deriction == "left" || j.deriction == "right") {
                u.css({marginLeft: w + "px"});
                r.css({marginLeft: v + "px"})
            }
        };
        var q = function () {
            var v = (j.deriction == "up" || j.deriction == "down") ? parseInt(u.get(0).style.marginTop) : parseInt(u.get(0).style.marginLeft);
            var w = (j.deriction == "up" || j.deriction == "down") ? parseInt(r.get(0).style.marginTop) : parseInt(r.get(0).style.marginLeft);
            var x = Math.max(Math.abs(v - j.pos.object), Math.abs(w - j.pos.clone));
            var s = Math.ceil((c - x) / j.speed);
            switch (j.deriction) {
                case"up":
                    if (x == c) {
                        d(v, w, true);
                        a(j._front).removeClass(j.disabled);
                        p(false)
                    } else {
                        if (v <= -l) {
                            v = w + l;
                            j.pos.object = v
                        }
                        if (w <= -l) {
                            w = v + l;
                            j.pos.clone = w
                        }
                        d((v - s), (w - s))
                    }
                    break;
                case"down":
                    if (x == c) {
                        d(v, w, true);
                        a(j._back).removeClass(j.disabled);
                        p(false)
                    } else {
                        if (v >= l) {
                            v = w - l;
                            j.pos.object = v
                        }
                        if (w >= l) {
                            w = v - l;
                            j.pos.clone = w
                        }
                        d((v + s), (w + s))
                    }
                    break;
                case"left":
                    if (x == c) {
                        d(v, w, true);
                        a(j._front).removeClass(j.disabled);
                        p(false)
                    } else {
                        if (v <= -n) {
                            v = w + n;
                            j.pos.object = v
                        }
                        if (w <= -n) {
                            w = v + n;
                            j.pos.clone = w
                        }
                        d((v - s), (w - s))
                    }
                    break;
                case"right":
                    if (x == c) {
                        d(v, w, true);
                        a(j._back).removeClass(j.disabled);
                        p(false)
                    } else {
                        if (v >= n) {
                            v = w - n;
                            j.pos.object = v
                        }
                        if (w >= n) {
                            w = v - n;
                            j.pos.clone = w
                        }
                        d((v + s), (w + s))
                    }
                    break
            }
        };
        if (j.deriction == "up" || j.deriction == "down") {
            if (l >= j.height && l >= j.step) {
                o()
            }
        }
        if (j.deriction == "left" || j.deriction == "right") {
            if (n >= j.width && n >= j.step) {
                o()
            }
        }
    }
})(jQuery);
$.login = function (a) {
    a = $.extend({
        loginService: "http://passport." + pageConfig.FN_getDomain() + "/loginservice.aspx?callback=?",
        loginMethod: "Login",
        loginUrl: "https://passport." + pageConfig.FN_getDomain() + "/new/login.aspx",
        returnUrl: location.href,
        automatic: true,
        complete: null,
        modal: false
    }, a || {});
    if (a.loginService != "" && a.loginMethod != "") {
        $.getJSON(a.loginService, {method: a.loginMethod}, function (b) {
            if (b != null) {
                if (a.complete != null) {
                    a.complete(b.Identity)
                }
                if (!b.Identity.IsAuthenticated && a.automatic && a.loginUrl != "") {
                    if (a.modal) {
                        jdModelCallCenter.login()
                    } else {
                        location.href = a.loginUrl + "?ReturnUrl=" + escape(a.returnUrl)
                    }
                }
            }
        })
    }
};
function getparam() {
    var a = "";
    var e = "";
    var c = new Object();
    var g = location.search.substring(1);
    var f = g.split("&");
    for (var d = 0; d < f.length; d++) {
        var h = f[d].indexOf("=");
        if (h == -1) {
            continue
        }
        var b = f[d].substring(0, h);
        if (f[d].substring(0, h) == "sid") {
            a = unescape(f[d].substring(h + 1))
        }
        if (f[d].substring(0, h) == "t") {
            e = unescape(f[d].substring(h + 1))
        }
    }
    if (a != "" || e != "") {
        return "&sid=" + escape(a) + "&t=" + escape(e)
    } else {
        return ""
    }
}
(function (a) {
    a.jdCalcul = function (g) {
        var b = null;
        var g = g.join(",");
        var e = "http://qiang.jd.com/HomePageNewLimitBuy.ashx?callback=?&ids=" + g;
        var d = "http://item.jd.com/";
        var f = function (n) {
            var r = a.extend({contentid: "#limit", clockid: "#clock", rankid: "#rank", limitid: "#limitbuy"}, n || {});
            if (n == {} || n == "" || r.start == null || r.start == "" || r.end == null || r.end == "" || r.pros.length < 1) {
                return
            }
            r.start = c(r.start);
            r.start = (a.browser.mozzia) ? Date.parse(r.start) : r.start;
            r.server = c(r.server);
            r.server = (a.browser.mozzia) ? Date.parse(r.server) : r.server;
            r.end = c(r.end);
            r.end = (a.browser.mozzia) ? Date.parse(r.end) : r.end;
            r.contentid = a(r.contentid + r.qid);
            r.clockid = a(r.clockid + r.qid);
            r.rankid = a(r.rankid + r.qid);
            r.limitid = a(r.limitid + r.qid);
            var o = (r.start - r.server) / 1000, q, p, m, j;
            var l = (r.end - r.server) / 1000;
            var h = function () {
                var s = '<li><div class="p-img"><a href="{6}{0}.html" target="_blank"><img src="{1}" width="100" height="100" /></a>{2}</div><div class="p-name"><a href="{6}{0}.html" target="_blank">{3}</a></div><div class="p-price">\u62a2\u8d2d\u4ef7\uff1a<strong>{4}</strong>{5}</div></li>';
                var t = "<ul>";
                a.each(r.pros, function (w) {
                    var A = r.pros[w].id, z = r.pros[w].tp, x = "<div class='pi9'></div>", y = unescape(r.pros[w].mc), u = r.pros[w].qg, v = "(" + r.pros[w].zk + "\u6298)";
                    t += s.replace(/\{0\}/g, A).replace("{1}", z).replace("{2}", x).replace("{3}", y).replace("{4}", u).replace("{5}", v).replace(/\{6\}/g, d)
                });
                t += "</ul>";
                r.contentid.html(t)
            };
            var k = function () {
                if (o > 0) {
                    return
                } else {
                    if (l > 0) {
                        q = Math.floor(l / 3600);
                        p = Math.floor((l - q * 3600) / 60);
                        m = (l - q * 3600) % 60;
                        r.clockid.html("\u5269\u4f59<b>" + q + "</b>\u5c0f\u65f6<b>" + p + "</b>\u5206<b>" + m + "</b>\u79d2");
                        l--
                    } else {
                        r.clockid.html("\u62a2\u8d2d\u7ed3\u675f");
                        clearInterval(j);
                        r.limitid.hide();
                        if (r.rankid.length > 0) {
                            r.rankid.show()
                        }
                    }
                }
            };
            if (o <= 0 && l > 0) {
                h();
                if (r.rankid.length > 0) {
                    r.rankid.hide()
                }
                r.limitid.show()
            }
            k();
            j = setInterval(function () {
                k()
            }, 1000)
        };
        var c = function (k) {
            var j = k.split(" ");
            var h = j[0].split("-");
            var l = j[1].split(":");
            return new Date(h[0], h[1] - 1, h[2], l[0], l[1], l[2])
        };
        a.ajax({
            url: e, dataType: "jsonp", success: function (h) {
                if (h) {
                    b = h.data;
                    a.each(b, function (j) {
                        f(b[j])
                    })
                }
            }
        })
    }
})(jQuery);
function mlazyload(d) {
    var c = {defObj: null, defHeight: 0, fn: null};
    c = $.extend(c, d || {});
    var b = c.defHeight, f = (typeof c.defObj == "object") ? c.defObj : $(c.defObj);
    if (f.length < 1) {
        return
    }
    var a = function () {
        var g = document, h = (navigator.userAgent.toLowerCase().match(/iPad/i) == "ipad") ? window.pageYOffset : Math.max(g.documentElement.scrollTop, g.body.scrollTop);
        return g.documentElement.clientHeight + h - c.defHeight
    };
    var e = function () {
        if (f.offset().top <= a() && !f.attr("load")) {
            f.attr("load", "true");
            if (c.fn) {
                c.fn()
            }
        }
    };
    e();
    $(window).bind("scroll", function () {
        e()
    })
}
var jdRecent = {
    element: $("#recent ul"),
    jsurl: "http://www.jd.com/lishiset.aspx?callback=jdRecent.setData&id=",
    cookiename: "_recent",
    list: $.cookie("_recent"),
    url: location.href,
    init: function () {
        var a = this.url.match(/\/(\d{6}).html/);
        var b = (a != null && a[0].indexOf("html") != -1) ? a[1] : "";
        if (!this.list || this.list == null || this.list == "") {
            if (b == "") {
                return this.getData(0)
            } else {
                this.list = b
            }
        } else {
            if (b == "" || this.list.indexOf(b) != -1) {
                this.list = this.list
            } else {
                if (this.list.split(".").length >= 10) {
                    this.list = this.list.replace(/.\d+$/, "")
                }
                this.list = b + "." + this.list
            }
        }
        $.cookie(this.cookiename, this.list, {expires: 7, path: "/", domain: "jd.com", secure: false});
        this.getData(this.list)
    },
    clear: function () {
        $.cookie(this.cookiename, "", {expires: 7, path: "/", domain: "jd.com", secure: false})
    },
    getData: function (a) {
        if (a == 0) {
            this.element.html("<li><div class='norecode'>\u6682\u65e0\u8bb0\u5f55!</div></li>");
            return
        }
        var b = a.split(".");
        for (i in b) {
            if (i == 0) {
                this.element.empty()
            }
            $.getJSONP(this.jsurl + b[i], this.setData)
        }
    },
    setData: function (a) {
        this.element.append("<li><div class='p-img'><a href='" + a.url + "'><img src='" + a.img + "' /></a></div><div class='p-name'><a href='" + a.url + "'>" + decodeURIComponent(a.name) + "</a></div></li>")
    }
};
$("#clearRec").click(function () {
    jdRecent.clear();
    jdRecent.getData(0)
});
mlazyload({
    defObj: "#recent", defHeight: 50, fn: function () {
        if (jdRecent.element.length == 1) {
            jdRecent.init()
        }
    }
});
var jdModelCallCenter = {
    settings: {clstag1: 0, clstag2: 0}, tbClose: function () {
        if ($(".thickbox").length != 0) {
            jdThickBoxclose()
        }
    }, login: function () {
        this.tbClose();
        var c = this;
        var b = navigator.userAgent.toLowerCase(), a = (b.match(/ucweb/i) == "ucweb" || b.match(/rv:1.2.3.4/i) == "rv:1.2.3.4");
        if (a) {
            location.href = "https://passport." + pageConfig.FN_getDomain() + "/new/login.aspx?ReturnUrl=" + escape(location.href);
            return
        }
        setTimeout(function () {
            $.jdThickBox({
                type: "iframe",
                title: "\u60a8\u5c1a\u672a\u767b\u5f55",
                source: "https://passport.jd.com/uc/popupLogin2013?clstag1=" + c.settings.clstag1 + "&clstag2=" + c.settings.clstag2 + "&r=" + Math.random(),
                width: 390,
                height: 450,
                _title: "thicktitler",
                _close: "thickcloser",
                _con: "thickconr"
            })
        }, 20)
    }, regist: function () {
        var a = this;
        this.tbClose();
        setTimeout(function () {
            $.jdThickBox({
                type: "iframe",
                title: "\u60a8\u5c1a\u672a\u767b\u5f55",
                source: "http://reg.jd.com/reg/popupPerson?clstag1=" + a.settings.clstag1 + "&clstag2=" + a.settings.clstag2 + "&r=" + Math.random(),
                width: 390,
                height: 450,
                _title: "thicktitler",
                _close: "thickcloser",
                _con: "thickconr"
            })
        }, 20)
    }, init: function () {
        var a = this;
        $.ajax({
            url: ("https:" == document.location.protocol ? "https://" : "http://") + "passport." + pageConfig.FN_getDomain() + "/new/helloService.ashx?m=ls&sso=0",
            dataType: "jsonp",
            success: function (b) {
                a.tbClose();
                if (b && b.info) {
                    $("#loginbar").html(b.info)
                }
                a.settings.fn()
            }
        })
    }
};
$.extend(jdModelCallCenter, {
    autoLocation: function (a) {
        var b = this;
        $.login({
            modal: true, complete: function (c) {
                if (c != null && c.IsAuthenticated != null && c.IsAuthenticated) {
                    window.location = a
                }
            }
        })
    }
});
$.extend(jdModelCallCenter, {
    doAttention: function (a) {
        var b = "http://t.jd.com/product/followProduct.action?productId=" + a;
        $.login({
            modal: true, complete: function (c) {
                if (c != null && c.IsAuthenticated != null && c.IsAuthenticated) {
                    var d = 510;
                    var e = 440;
                    $.jdThickBox({
                        type: "iframe",
                        source: b + "&t=" + Math.random(),
                        width: d,
                        height: e,
                        title: "\u63d0\u793a",
                        _box: "attboxr",
                        _con: "attconr",
                        _countdown: false
                    }, function () {
                    })
                }
            }
        })
    }
});
$(".btn-coll").livequery("click", function () {
    var b = $(this);
    var a = parseInt(b.attr("id").replace("coll", ""));
    $.extend(jdModelCallCenter.settings, {
        clstag1: "login|keycount|5|3",
        clstag2: "login|keycount|5|4",
        id: a,
        fn: function () {
            jdModelCallCenter.doAttention(this.id)
        }
    });
    jdModelCallCenter.settings.fn()
});
if (typeof pageConfig !== "undefined") {
    pageConfig.isHome = (function () {
        return pageConfig.navId && pageConfig.navId == "home" && location.href.indexOf("www.jd.com") >= 0
    })()
}
$.bigiframe = function (d, c, a) {
    if (d && $.browser.msie && $.browser.version == 6) {
        if (typeof(c) == "undefined") {
            var c = d.outerWidth()
        }
        if (typeof(a) == "undefined") {
            var a = d.outerHeight()
        }
        var b = '<iframe src="javascript:false;" frameBorder="0" style="width:' + c + "px;height:" + a + 'px;position:absolute;z-index:-1;opacity:0;filter:alpha(opacity=0);top:0;left:0;" id="bigiframe">';
        d.append(b);
        d.bind("mouseenter", function () {
            d.find("#bigiframe").show()
        }).bind("mouseleave", function () {
            d.find("#bigiframe").hide()
        })
    }
};
function getHashProbability(c, b) {
    function a(f) {
        for (var d = 0, e = 0; e < f.length; e++) {
            d = (d << 5) - d + f.charCodeAt(e);
            d &= d
        }
        return d
    }

    return Math.abs(a(c)) % b
}
function clothingAbTest() {
    if (pageConfig.navId == "home") {
        var b = CookieUtil.getCookie("__jda");
        if (b) {
            var a = getHashProbability(b, 10000);
            var e = $("#_JD_ALLSORT div.fore6");
            var d = e.find(".subitem .fore1 dt a");
            var c = e.find(".subitem .fore2 dt a");
            if (a <= 5000) {
                e.find("h3").html('<a href="http://channel.jd.com/1315-1342.html" clstag="homepage|keycount|home2013|0606a4">\u7537\u88c5</a>\u3001<a href="http://channel.jd.com/1315-1343.html" clstag="homepage|keycount|home2013|0606a3">\u5973\u88c5</a>\u3001<a href="http://channel.jd.com/1315-1345.html" clstag="homepage|keycount|home2013|0606a5">\u5185\u8863</a>\u3001<a href="http://channel.jd.com/jewellery.html" clstag="homepage|keycount|home2013|0606a6">\u73e0\u5b9d</a>');
                d.attr("clstag", "homepage|keycount|home2013|0606b3");
                c.attr("clstag", "homepage|keycount|home2013|0606b4")
            } else {
                e.find("h3").html('<a href="http://channel.jd.com/clothing.html" clstag="homepage|keycount|home2013|0606a1">\u670d\u9970\u5185\u8863</a>\u3001<a href="http://channel.jd.com/jewellery.html" clstag="homepage|keycount|home2013|0606a2">\u73e0\u5b9d\u9996\u9970</a>');
                d.attr("clstag", "homepage|keycount|home2013|0606b1");
                c.attr("clstag", "homepage|keycount|home2013|0606b2")
            }
        }
    }
}
var GlobalReco = function (a) {
    this.param = $.extend({
        lid: readCookie("ipLoc-djd") || "",
        lim: 6,
        ec: "utf-8",
        uuid: -1,
        pin: readCookie("pin") || ""
    }, a.param);
    this.$el = a.$el;
    this.template = a.template;
    this.reBuildJSON = a.reBuildJSON;
    this.skuHooks = a.skuHooks || "SKUS_recommend";
    this.ext = a.ext || {};
    this.callback = a.callback || function () {
        };
    this.debug = a.debug;
    if (!this.param.p) {
        throw new Error("The param [p] is not Specificed")
    }
    this.init()
};
GlobalReco.prototype = {
    init: function () {
        var a = readCookie("__jda");
        if (this.param.lid.indexOf("-") > 0) {
            this.param.lid = this.param.lid.split("-")[0]
        } else {
            this.param.lid = "1"
        }
        if (a) {
            if (a.split(".")[1] == "-") {
                this.param.uuid = -1
            } else {
                this.param.uuid = a.split(".")[1]
            }
        } else {
            this.param.uuid = -1
        }
        this.get(this.rid)
    }, get: function (f, e) {
        var g = this;
        var b;
        var d = pageConfig.queryParam;
        var c = [];
        if (pageConfig.product) {
            for (b = 0; b < pageConfig.product.cat.length; b++) {
                this.param["c" + (b + 1)] = pageConfig.product.cat[b]
            }
        }
        if (d) {
            for (var a in d) {
                if (d.hasOwnProperty(a)) {
                    if (a == "c1" || a == "c2" || a == "c3") {
                        g.param[a] = d[a]
                    } else {
                        c.push(a + ":" + d[a])
                    }
                }
            }
            g.param.hi = c.join(",")
        }
        if (this.debug) {
            console.info("http://diviner.jd.com/diviner?" + decodeURIComponent($.param(this.param)))
        }
        $.ajax({
            url: "http://diviner.jd.com/diviner?" + decodeURIComponent($.param(this.param)),
            dataType: "jsonp",
            scriptCharset: this.param.ec,
            cache: true,
            jsonpCallback: "call" + parseInt((Math.random() * 100000), 10),
            success: function (j) {
                var h = !!(j.success && j && j.data && j.data.length);
                if (h) {
                    g.set(j)
                } else {
                    g.$el.html('<div class="ac">\u300c\u6682\u65e0\u6570\u636e\u300d</div>')
                }
                if (this.debug) {
                    console.log(j)
                }
                g.callback.apply(g, [h, j])
            }
        })
    }, set: function (b) {
        pageConfig[this.skuHooks] = [];
        b.skuHooks = this.skuHooks;
        b.ext = this.ext;
        if (this.reBuildJSON && this.reBuildJSON > 0) {
            b.data = tools.reBuildJSON(b.data, this.reBuildJSON)
        }
        if (this.debug) {
            alert(this.template.process(b))
        }
        try {
            this.$el.show().html(this.template.process(b))
        } catch (a) {
            if (/isdebug/.test(location.href) && typeof console !== "undefined") {
                console.error("[pid=" + this.param.p + "] " + a)
            }
        }
        this.setTrackCode(b.impr)
    }, setTrackCode: function (c) {
        var b = this.$el.find("li");
        var d = this;
        var a = "&m=UA-J2011-1&ref=" + encodeURIComponent(document.referrer);
        b.each(function () {
            var e = $(this).attr("data-clk");
            $(this).bind("click", function (f) {
                var g = $(f.target);
                if (g.is("a") || g.is("img") || g.is("span")) {
                    d.newImage(e + a, true)
                }
                if (g.is("input") && g.attr("checked") == true) {
                    d.newImage(e + a, true)
                }
            })
        });
        this.newImage(c + a, true)
    }, newImage: function (c, b, d) {
        var a = new Image();
        c = b ? (c + "&random=" + Math.random() + "" + (new Date)) : c;
        a.onload = function () {
            if (typeof d !== "undefined") {
                d(c)
            }
        };
        a.setAttribute("src", c)
    }
};
var category = {
    OBJ: $("#_JD_ALLSORT"),
    URL_Serv: "http://d.jd.com/configs/get?type=JSON",
    URL_BrandsServ: "http://d.jd.com/brandVclist2/get?callback=category.getBrandService&ids=a,9211,9212^b,9214,9215^c,9217,9218^d,9220,9221^e,9223,9224^f,9226,9227^g,9229,9230^h,9232,9233^m,9235,9236^i,9238,9239^j,9241,9242^p,9244,9245^k,9247,9248^l,9250,9251",
    FN_GetLink: function (d, e) {
        var a, b;
        switch (d) {
            case 1:
                a = e.u;
                b = e.n;
                break;
            case 2:
                a = e.split("|")[0];
                b = e.split("|")[1];
                break
        }
        function c(f, g) {
            pageConfig.RE_HL_link = pageConfig.RE_HL_link || /sale.jd.com/;
            pageConfig.RE_HL_text = pageConfig.RE_HL_text || /11.11/;
            pageConfig.HL_style = "color:#E4393C";
            return pageConfig.RE_HL_link.test(f) && pageConfig.RE_HL_text.test(g) ? pageConfig.HL_style : ""
        }

        if (a == "") {
            return b
        } else {
            if (!/^http[s]?:\/\/([\w-]+\.)+[\w-]+([\w-.\/?%&=]*)?$/.test(a)) {
                a = a.replace(/-000$/, "");
                if (a.match(/^\d*-\d*$/)) {
                    a = "http://channel.jd.com/" + a + ".html"
                } else {
                    a = "http://list.jd.com/" + a + ".html"
                }
            }
            return '<a style="' + c(a, b) + '" href="' + a + '">' + b + "</a>"
        }
    },
    FN_SetLink: function (c) {
        var d = "";
        var b = pageConfig.isHome ? 'clstag="homepage|keycount|home2013|0604e"' : "";
        var f = pageConfig.isHome ? 'clstag="homepage|keycount|home2013|0603e"' : "";
        var a = pageConfig.isHome ? 'clstag="homepage|keycount|home2013|0605e"' : "";
        var e = pageConfig.isHome ? 'clstag="homepage|keycount|home2013|0602e"' : "";
        switch (c) {
            case"a":
                d = '<div class="categorys-links" ' + e + '><a href="http://smart.jd.com/" target="_blank"><img src="http://img11.360buyimg.com/da/jfs/t673/208/1292971615/21690/1c564367/54c5b8aeN9836b9e1.jpg" /></a></div>';
                break;
            case"c":
                d = '<div class="categorys-links" ' + b + '><a href="http://group.jd.com/index/20000001.htm" target="_blank"><img src="http://img13.360buyimg.com/da/jfs/t328/179/568110786/5477/d602dfd5/54180c0eN5ddce4d3.png" /></a></div>';
                break;
            case"b":
                d = '<div class="categorys-links" id="categorys-links-cellphone" ' + f + '><a href="http://sale.jd.com/act/UaSsnjAKQNeyiY.html" target="_blank">JDPhone\u8ba1\u5212</a></div>';
                break;
            case"d":
                d = '<div class="categorys-links" id="categorys-links-jzc" ' + a + '><a href="http://channel.jd.com/jiazhuang.html" target="_blank">\u5bb6\u88c5\u57ce</a></div>';
                break;
            default:
                break
        }
        return d
    },
    DATA_Simple: {
        "1": [{l: "http://book.jd.com/", n: "\u56fe\u4e66"}, {
            l: "http://mvd.jd.com/",
            n: "\u97f3\u50cf"
        }, {l: "http://e.jd.com/", n: "\u6570\u5b57\u5546\u54c1"}],
        "2": [{l: "http://channel.jd.com/electronic.html", n: "\u5bb6\u7528\u7535\u5668"}],
        "3": [{l: "http://shouji.jd.com/", n: "\u624b\u673a"}, {
            l: "http://channel.jd.com/digital.html",
            n: "\u6570\u7801"
        }, {l: "http://mobile.jd.com/index.do", n: "\u4eac\u4e1c\u901a\u4fe1"}],
        "4": [{l: "http://channel.jd.com/computer.html", n: "\u7535\u8111\u3001\u529e\u516c"}],
        "5": [{l: "http://channel.jd.com/home.html", n: "\u5bb6\u5c45"}, {
            l: "http://channel.jd.com/furniture.html",
            n: "\u5bb6\u5177"
        }, {
            l: "http://channel.jd.com/decoration.html",
            n: "\u5bb6\u88c5"
        }, {l: "http://channel.jd.com/kitchenware.html", n: "\u53a8\u5177"}],
        "6": [{
            l: "http://channel.jd.com/1315-1342.html",
            n: "\u7537\u88c5"
        }, {l: "http://channel.jd.com/1315-1343.html", n: "\u5973\u88c5"}, {
            l: "http://channel.jd.com/1315-1345.html",
            n: "\u5185\u8863"
        }, {l: "http://channel.jd.com/jewellery.html", n: "\u73e0\u5b9d"}],
        "7": [{l: "http://channel.jd.com/beauty.html", n: "\u4e2a\u62a4\u5316\u5986"}],
        "8": [{l: "http://channel.jd.com/shoes.html", n: "\u978b\u9774"}, {
            l: "http://channel.jd.com/bag.html",
            n: "\u7bb1\u5305"
        }, {l: "http://channel.jd.com/watch.html", n: "\u949f\u8868"}, {
            l: "http://channel.jd.com/1672-2615.html",
            n: "\u5962\u4f88\u54c1"
        }],
        "9": [{l: "http://channel.jd.com/sports.html", n: "\u8fd0\u52a8\u6237\u5916"}],
        "10": [{l: "http://car.jd.com/", n: "\u6c7d\u8f66"}, {
            l: "http://channel.jd.com/auto.html",
            n: "\u6c7d\u8f66\u7528\u54c1"
        }],
        "11": [{l: "http://channel.jd.com/baby.html", n: "\u6bcd\u5a74"}, {
            l: "http://channel.jd.com/toys.html",
            n: "\u73a9\u5177\u4e50\u5668"
        }],
        "12": [{
            l: "http://channel.jd.com/food.html",
            n: "\u98df\u54c1\u996e\u6599"
        }, {l: "http://channel.jd.com/wine.html", n: "\u9152\u7c7b"}, {
            l: "http://channel.jd.com/freshfood.html",
            n: "\u751f\u9c9c"
        }],
        "13": [{l: "http://channel.jd.com/health.html", n: "\u8425\u517b\u4fdd\u5065"}],
        "14": [{l: "http://caipiao.jd.com/", n: "\u5f69\u7968"}, {
            l: "http://trip.jd.com/",
            n: "\u65c5\u884c"
        }, {l: "http://chongzhi.jd.com/", n: "\u5145\u503c"}, {l: "http://piao.jd.com/", n: "\u7968\u52a1"}]
    },
    TPL_Simple: '{for item in data}<div class="item fore${parseInt(item_index)}">    <span data-split="1" {if pageConfig.isHome} clstag="homepage|keycount|home2013|06{if parseInt(item_index)+1>9}${parseInt(item_index)+1}{else}0${parseInt(item_index)+1}{/if}a"{/if}>        <h3>{for sItem in item}{if sItem_index!=0}\u3001{/if}<a href="${sItem.l}">${sItem.n}</a>{/for}</h3>        <s></s>    </span></div>{/for}<div class="extra"><a href="http://www.jd.com/allSort.aspx">\u5168\u90e8\u5546\u54c1\u5206\u7c7b</a></div>',
    FN_InitSimple: function () {
        var c;
        var b = {};
        var a = $("#categorys-2013");
        b.data = this.DATA_Simple;
        a.addClass("categorys-2014");
        c = this.TPL_Simple.process(b);
        var d = $("#_JD_ALLSORT");
        d.html(c);
        $.bigiframe(d)
    },
    FN_GetData: function () {
        $.getJSONP(this.URL_Serv, category.getDataService)
    },
    FN_GetBrands: function () {
        $.getJSONP(this.URL_BrandsServ, category.getBrandService)
    },
    FN_RefactorJSON: function (g, f) {
        var e = g.length / f;
        var d = [];
        for (var c = 0; c < e; c++) {
            d.push({tabs: [], increment: null, count: f, skuids: []})
        }
        var a = 0;
        for (var b = 0; b < g.length; b++) {
            if (b % f == 0) {
                a++
            }
            d[(a - 1)]["tabs"].push(g[b]);
            d[(a - 1)]["increment"] = a;
            d[(a - 1)]["skuids"].push(g[b].wid)
        }
        return d
    },
    renderItem: function (c, a) {
        var d = '<div class="item fore${index+1}">    <span data-split="1" {if pageConfig.isHome}clstag="homepage|keycount|home2013|0${601+parseInt(index)}a"{/if}><h3>${n}</h3><s></s></span>    <div class="i-mc">        <div onclick="$(this).parent().parent().removeClass(\'hover\')" class="close">\u00d7</div>        <div class="subitem" {if pageConfig.isHome}clstag="homepage|keycount|home2013|0${601+parseInt(index)}b"{/if}>            {for subitem in i}            <dl class="fore${parseInt(subitem_index)+1}">                <dt>${category.FN_GetLink(1,subitem)}</dt>                <dd>{for link in subitem.i}<em>${category.FN_GetLink(2,link)}</em>{/for}</dd>            </dl>            {/for}        </div>        <div class="cat-right-con fr" id="JD_sort_${t}"><div class="loading-style1"><b></b>\u52a0\u8f7d\u4e2d\uff0c\u8bf7\u7a0d\u5019...</div></div>    </div></div>';
        var b = '<div class="item item-col2 fore${index+1}">    <span data-split="1" {if pageConfig.isHome}clstag="homepage|keycount|home2013|0${601+parseInt(index)}a"{/if}><h3>${n}</h3><s></s></span>    <div class="i-mc">        <ul class="title-list lh">            <li class="fore1"><a href="http://chongzhi.jd.com/">\u5145\u503c\u7f34\u8d39</a></li>            <li class="fore2"><a href="http://caipiao.jd.com/">\u4eac\u4e1c\u5f69\u7968</a></li>            <li class="fore3"><a href="http://channel.jd.com/4938-12316.html">\u57f9\u8bad\u6559\u80b2</a></li>            <li class="fore4"><a href="http://jipiao.jd.com/ticketquery/flightHotcity.action">\u4f18\u9009\u673a\u7968</a></li>            <li class="fore5"><a href="http://channel.jd.com/4938-12300.html">\u65c5\u884c\u7b7e\u8bc1</a></li>            <li class="fore6"><a href="http://game.jd.com/">\u4eac\u4e1c\u6e38\u620f</a></li>        </ul>        <div onclick="$(this).parent().parent().removeClass(\'hover\')" class="close">\u00d7</div>        <div class="subitem" {if pageConfig.isHome}clstag="homepage|keycount|home2013|0${601+parseInt(index)}b"{/if}>            {for item in i}            <div class="sub-item-col sub-item-col${item_index} fl">                {for subitem in item.tabs}                <dl class="fore${parseInt(subitem_index)+1}">                    <dt>${category.FN_GetLink(1,subitem)}</dt>                    <dd>{for link in subitem.i}<em>${category.FN_GetLink(2,link)}</em>{/for}</dd>                </dl>                {/for}					{if item_index==1}<div class="cat-right-con" id="JD_sort_${t}" clstag="homepage|keycount|home2013|0614c"><div class="loading-style1"><b></b>\u52a0\u8f7d\u4e2d\uff0c\u8bf7\u7a0d\u5019...</div></div>{/if}            </div>            {/for}        </div>    </div></div>';
        if (c.t == "l") {
            return b.process(c)
        } else {
            return d.process(c)
        }
    },
    FN_GetBrands: function () {
        $.getJSONP(this.URL_BrandsServ, category.getBrandService)
    },
    getDataService: function (c) {
        var e = [];
        var f = this;
        $.each(c.data, function (g) {
            this.index = g;
            if (this.t == "l") {
                this.i = f.FN_RefactorJSON(this.i, 7)
            }
            e.push(f.renderItem(this, g))
        });
        this.OBJ.attr("load", "1").html(e.join(""));
        $.bigiframe(this.OBJ);
        this.FN_GetBrands();
        var b = this;
        var a = this.OBJ.outerWidth();
        var d = this.OBJ.outerHeight();
        $("#_JD_ALLSORT").dropdown({
            delay: 0, onmouseleave: function () {
                $("#_JD_ALLSORT .item").removeClass("hover")
            }
        }, function (l) {
            var g = document.documentElement.scrollTop + document.body.scrollTop, k, p, m = $("#nav-2013").offset().top + 39;
            if (g <= m) {
                if (l.hasClass("fore13")) {
                    p = 3
                } else {
                    p = 3
                }
                g = p
            } else {
                k = l.offset().top;
                if (g > k - 5) {
                    g = k - m - 10
                } else {
                    g = Math.max(3, g - m)
                }
            }
            var o = l.find(".i-mc");
            o.css({top: g + "px"});
            if (b.OBJ.find("iframe")) {
                var j = o.outerWidth() + a;
                var n = o.outerHeight() > d ? o.outerHeight() : d;
                b.OBJ.find("iframe").css({width: j, height: n, top: g})
            }
            if (typeof firstCategoryHover === "function") {
                firstCategoryHover(l)
            }
        })
    },
    getRightAreaTPL: function (e) {
        var d = "";
        var c = "";
        var b = "";
        var a = "";
        d = this.FN_SetLink(e);
        c = '{if p.length!=0}<dl class="categorys-promotions">    <dd>        <ul>            {for item in p}            <li>                <a href="${item.u}" target="_blank">                {if item.i}                    <img src="${item.i}" width="194" height="70" title="${item.n}" style="margin-bottom: 4px;" />                {else}                    ${item.n}                {/if}                </a>            </li>            {/for}        </ul>    </dd></dl>{/if}';
        b = '{if b.length!=0}<dl class="categorys-brands">    {if id=="k"}        <dt>\u63a8\u8350\u54c1\u724c\u51fa\u7248\u5546/\u4e66\u5e97</dt>    {else}        {if id=="l"}        <dt>\u63a8\u8350\u4ea7\u54c1</dt>        {else}        <dt>\u63a8\u8350\u54c1\u724c</dt>        {/if}    {/if}    <dd>        <ul>            {for item in b} <li><a href="${item.u}" target="_blank">${item.n}</a></li> {/for}        </ul>    </dd></dl>{/if}';
        if (/c|b|d/.test(e)) {
            a = d + b + c
        } else {
            a = d + c + b
        }
        return a
    },
    getBrandService: function (a) {
        var c = this, b = a.data;
        this.OBJ.attr("load", "2");
        $.each(b, function (e) {
            var f = this.id;
            var d = c.getRightAreaTPL(f);
            $("#JD_sort_" + f).html(d.process(this))
        });
        $(".cat-right-con").each(function (d) {
            if (pageConfig.isHome) {
                $(this).find(".categorys-promotions").attr("clstag", "homepage|keycount|home2013|0" + (601 + d) + "c");
                $(this).find(".categorys-brands").attr("clstag", "homepage|keycount|home2013|0" + (601 + d) + "d")
            }
        })
    },
    FN_Init: function () {
        if (!this.OBJ.length) {
            return
        }
        if (!this.OBJ.attr("load")) {
            if (window.pageConfig && window.pageConfig.pageId != 0) {
                this.FN_InitSimple()
            }
            if ($("#categorys").length) {
                $("#categorys").Jdropdown({delay: 200})
            } else {
                $("#categorys-2013").Jdropdown({delay: 200}, function (b) {
                    if (typeof allCategoryHover === "function") {
                        allCategoryHover(b)
                    }
                })
            }
        }
        var a = this;
        this.OBJ.one("mouseover", function () {
            var b = a.OBJ.attr("load");
            if (!b) {
                a.FN_GetData()
            } else {
                if (b == 1) {
                    a.FN_GetBrands()
                } else {
                    return
                }
            }
        })
    }
};
var UC = {
    DATA_Cookie: "aview",
    TPL_UnRegist: '<div class="prompt">            <span class="fl">\u60a8\u597d\uff0c\u8bf7<a href="javascript:login()" clstag="homepage|keycount|home2013|04a">\u767b\u5f55</a></span>            <span class="fr"></span>        </div>',
    TPL_Regist: '<div class="prompt">                <span class="fl"><strong>${Unick}</strong></span>                <span class="fr"><a href="http://home.jd.com/">\u53bb\u6211\u7684\u4eac\u4e1c\u9996\u9875&nbsp;&gt;</a></span>            </div>',
    TPL_OList: {
        placeholder: '<div id="jduc-orderlist"></div>',
        fragment: '<div class="orderlist">                <div class="smt">                    <h4>\u6700\u65b0\u8ba2\u5355\u72b6\u6001\uff1a</h4>                    <div class="extra"><a href="http://order.jd.com/center/list.action" target="_blank">\u67e5\u770b\u6240\u6709\u8ba2\u5355&nbsp;&gt;</a></div>                </div>                <div class="smc">                    <ul>                        {for item in orderList}                        <li class="fore${parseInt(item_index)+1}">                            <div class="p-img fl">                                {for image in item.OrderDetail}                                    {if image_index<2}                                        <a href="http://www.jd.com/product/${image.ProductId}.html" target="_blank"><img src="${pageConfig.FN_GetImageDomain(image.ProductId)}n5/${image.ImgUrl}" width="50" height="50" alt="${image.ProductName}" /></a>                                    {/if}                                {/for}                                {if item.OrderDetail.length>2}                                    <a href="${item.passKeyUrl}" target="_blank" class="more">\u66f4\u591a</a>                                {/if}                            </div>                            <div class="p-detail fr">                                \u8ba2\u5355\u53f7\uff1a${item.OrderId}<br />                                \u72b6\u3000\u6001\uff1a<span>${UC.FN_SetState(item.OrderState)}</span><br />                                \u3000\u3000\u3000\u3000<a href="${item.passKeyUrl}">\u67e5\u770b\u8be6\u60c5</a>                            </div>                        </li>                        {/for}                    </ul>                </div>            </div>'
    },
    TPL_UList: '<div class="uclist">                <ul class="fore1 fl">                    <li><a target="_blank" clstag="homepage|keycount|home2013|04b" href="http://order.jd.com/center/list.action">\u5f85\u5904\u7406\u8ba2\u5355<span id="num-unfinishedorder"></span></a></li>                    <li><a target="_blank" clstag="homepage|keycount|home2013|04c" href="http://club.jd.com/myjd/userConsultationList_1.html">\u54a8\u8be2\u56de\u590d<span id="num-consultation"></span></a></li>                    <li><a target="_blank" clstag="homepage|keycount|home2013|04d" href="http://t.jd.com/product/followProductList.action?isReduce=true">\u964d\u4ef7\u5546\u54c1<span id="num-reduction"></span></a></li>                    <li><a target="_blank" clstag="homepage|keycount|home2013|shouhou" href="http://myjd.jd.com/repair/orderlist.action">\u8fd4\u4fee\u9000\u6362\u8d27</a></li>                    <li><a target="_blank" clstag="homepage|keycount|home2013|04e" href="http://quan.jd.com/user_quan.action">\u4f18\u60e0\u5238<span id="num-ticket"></span></a></li>                </ul>                <ul class="fore2 fl">                    <li><a target="_blank" clstag="homepage|keycount|home2013|04i" href="http://t.jd.com/home/follow">\u6211\u7684\u5173\u6ce8&nbsp;&gt;</a></li>                    <li><a target="_blank" clstag="homepage|keycount|home2013|04g" href="http://bean.jd.com/myJingBean/list">\u6211\u7684\u4eac\u8c46&nbsp;&gt;</a></li>                    <li><a target="_blank" clstag="homepage|keycount|home2013|licai" href="http://trade.jr.jd.com/centre/browse.action">\u6211\u7684\u7406\u8d22&nbsp;&gt;</a></li>                    <li class="J_baitiao hide"><a target="_blank" clstag="homepage|keycount|home2013|baitiao" href="http://baitiao.jd.com/creditUser/list">\u6211\u7684\u767d\u6761&nbsp;&gt;</a></li>                    <li class="J_jincai hide"><a target="_blank" clstag="homepage|keycount|home2013|jincai" href="http://baitiao.jd.com/jinCai/record">\u4eac\u4e1c\u91d1\u91c7&nbsp;&gt;</a></li>                </ul>            </div>',
    TPL_VList: {
        placeholder: '<div class="viewlist">                <div class="smt" clstag="homepage|keycount|home2013|04k">                    <h4>\u6700\u8fd1\u6d4f\u89c8\u7684\u5546\u54c1\uff1a</h4>                    <div style="float:right;padding-right:9px;"><a style="border:0;color:#005EA7" href="http://my.jd.com/history/list.html" target="_blank">\u67e5\u770b\u6d4f\u89c8\u5386\u53f2&nbsp;&gt;</a></div>                </div>                <div class="smc" id="jduc-viewlist" clstag="homepage|keycount|home2013|04j">                    <div class="loading-style1"><b></b>\u52a0\u8f7d\u4e2d\uff0c\u8bf7\u7a0d\u5019...</div>                    <ul class="lh hide"></ul>                </div>            </div>',
        fragment: '<ul class="lh">{for item in data}<li data-clk="${item.clk}"><a href="http://item.jd.com/${item.sku}.html" target="_blank" title="${item.t}"><img src="${pageConfig.FN_GetImageDomain(item.sku)}n5/${item.img}" width="50" height="50" alt="${item.t}" /></a></li>{/for}</ul>'
    },
    FN_SetState: function (a) {
        var a = a;
        if (a.length > 4) {
            a = "<span title=" + a + ">" + a.substr(0, 4) + "...</span>"
        }
        return a
    },
    FN_InitNewVList: function (b) {
        var f = !!b ? b.split("|") : [], a = f.length, e = [], c, d = 0;
        while (d < a) {
            e.push(f[d].split(".")[1]);
            d++
        }
        c = e.join(",");
        $.getJSONP("http://my.jd.com/product/info.html?ids=" + c + "&jsoncallback=UC.FN_ShowVList")
    },
    FN_InitRecent: function () {
        var a = new GlobalReco({
            $el: $("#jduc-viewlist"),
            skuHooks: "SKUS_recent_view",
            template: UC.TPL_VList.fragment,
            param: {p: 202001, sku: "", ck: "pin,ipLocation,atw,aview", lim: 5},
            callback: function () {
            }
        })
    },
    FN_InitVList: function (b) {
        var e = JSON.parse(b), a = e.length, d = ",";
        for (var c = 0; c < a; c++) {
            if (!new RegExp(e[c]["s"]).test(d)) {
                d += (e[c]["s"] + ",")
            }
        }
        d = d.replace(/(^,*)|(,*$)/g, "");
        $.getJSONP("http://my.jd.com/product/info.html?ids=" + d + "&jsoncallback=UC.FN_ShowVList")
    },
    FN_ShowVList: function (c) {
        if (!c) {
            return
        }
        var d = $("#jduc-viewlist").find(".loading-style1");
        c.length = c.length > 5 ? 5 : c.length;
        var b = {list: c};
        if (d.length > 0) {
            d.hide()
        }
        var a = this.TPL_VList.fragment.process(b);
        $("#jduc-viewlist").find("ul").eq(0).html(a).show()
    },
    FN_setWords: function (b) {
        var c = '<font style="color:{0}">({1})</font>', a = "";
        if (b == 0) {
            a = "#ccc"
        } else {
            a = "#c00"
        }
        return pageConfig.FN_StringFormat(c, a, b)
    },
    FN_InitOList: function () {
        $.ajax({
            url: "http://minijd.jd.com/getOrderList", dataType: "jsonp", success: function (b) {
                if (b && b.error == 0 && b.orderList) {
                    var a = UC.TPL_OList.fragment.process(b);
                    $("#jduc-orderlist").html(a)
                }
            }
        });
        $.ajax({
            url: "http://minijd.jd.com/getHomeCount", dataType: "jsonp", success: function (a) {
                if (a && a.error == 0) {
                    $("#num-unfinishedorder").html(UC.FN_setWords(a.orderCount))
                }
            }
        });
        $.ajax({
            url: "http://comm.360buy.com/index.php?mod=Consultation&action=havingReplyCount",
            dataType: "jsonp",
            success: function (a) {
                if (a) {
                    $("#num-consultation").html(UC.FN_setWords(a.cnt))
                }
            }
        });
        $.ajax({
            url: "http://follow.soa.jd.com/product/queryForReduceProductCount.action?",
            dataType: "jsonp",
            success: function (a) {
                if (a && a.data > 0) {
                    $("#num-reduction").html(UC.FN_setWords(a.data))
                }
            }
        });
        $.ajax({
            url: "http://quan.jd.com/getcouponcount.action", dataType: "jsonp", success: function (a) {
                if (a) {
                    $("#num-ticket").html(UC.FN_setWords(a.CouponCount))
                }
            }
        })
    }
};
var MCART = {
    DATA_Cookie: "cn",
    DATA_Amount: readCookie("cn") || "0",
    URL_Serv: "http://cart.jd.com/cart/miniCartServiceNew.action",
    TPL_Iframe: '<iframe scrolling="no" frameborder="0" marginheight="0" marginwidth="0" id="settleup-iframe"></iframe>',
    TPL_NoGoods: '<div class="prompt"><div class="nogoods"><b></b>\u8d2d\u7269\u8f66\u4e2d\u8fd8\u6ca1\u6709\u5546\u54c1\uff0c\u8d76\u7d27\u9009\u8d2d\u5427\uff01</div></div>',
    TPL_List: {
        wrap: '<div id="settleup-content"><div class="smt"><h4 class="fl">\u6700\u65b0\u52a0\u5165\u7684\u5546\u54c1</h4></div><div class="smc"></div><div class="smb ar">\u5171<b>${Num}</b>\u4ef6\u5546\u54c1\u3000\u5171\u8ba1<strong>\uffe5 ${TotalPromotionPrice.toFixed(2)}</strong><br><a href="http://cart.jd.com/cart/cart.html?r=${+new Date}" title="\u53bb\u8d2d\u7269\u8f66\u7ed3\u7b97" id="btn-payforgoods">\u53bb\u8d2d\u7269\u8f66\u7ed3\u7b97</a></div></div>',
        sigle: '<ul id="mcart-sigle">{for list in TheSkus}  <li>      <div class="p-img fl"><a href="http://item.jd.com/${list.Id}.html" target="_blank"><img src="${pageConfig.FN_GetImageDomain(list.Id)}n5/${list.ImgUrl}" width="50" height="50" alt=""></a></div>      <div class="p-name fl"><a href="http://item.jd.com/${list.Id}.html" title="${list.Name}" target="_blank">${list.Name}</a></div>      <div class="p-detail fr ar">          <span class="p-price"><strong>\uffe5${list.PromotionPrice.toFixed(2)}</strong>\u00d7${list.Num}</span>          <br>          {if parseInt(list.FanPrice)>0}          <span class="hl-green">\u8fd4\u73b0\uff1a\uffe5<em>${list.FanPrice}</em></span>          <br>          {/if}          {if parseInt(list.Score)>0}          <span class="hl-orange">\u9001\u4eac\u8c46\uff1a<em>${list.Score}</em></span>          <br>          {/if}          <a class="delete" data-id="${list.Id}" data-type="RemoveProduct" href="#delete">\u5220\u9664</a>      </div>      {for jq in list.CouponAD}      <div class="gift-jq">[\u8d60\u5238] \u8d60\u9001${jq.Jing}\u4eac\u5238 ${jq.LimitAd}</a></div>      {/for}  </li>{/for}</ul>',
        gift: '<ul id="mcart-gift">{for list in TheGifts}  <li>      <div class="p-img fl"><a href="http://item.jd.com/${list.MainSKU.Id}.html" target="_blank"><img src="${pageConfig.FN_GetImageDomain(list.MainSKU.Id)}n5/${list.MainSKU.ImgUrl}" width="50" height="50" alt=""></a></div>      <div class="p-name fl"><a href="http://item.jd.com/${list.MainSKU.Id}.html" title="${list.MainSKU.Name}" target="_blank">${list.MainSKU.Name}</a></div>      <div class="p-detail fr ar">          <span class="p-price"><strong>\uffe5${list.PromotionPrice.toFixed(2)}</strong>\u00d7${list.Num}</span>          <br>          {if parseInt(list.FanPrice)>0}          <span class="hl-green">\u8fd4\u73b0\uff1a\uffe5<em>${list.FanPrice}</em></span>          <br>          {/if}          {if parseInt(list.Score)>0}          <span class="hl-orange">\u9001\u4eac\u8c46\uff1a<em>${list.Score}</em></span>          <br>          {/if}          <a class="delete" data-id="${list.MainSKU.Id}" data-type="RemoveProduct" href="#delete">\u5220\u9664</a>      </div>      {for gift in list.Skus}      <div class="gift"><a href="http://item.jd.com/${gift.Id}.html" target="_blank">[{if gift.Type==2}\u8d60\u54c1{/if}{if gift.Type==1}\u9644\u4ef6{/if}] ${gift.Name}</a></div>      {/for}      {for jq in list.CouponAD}      <div class="gift-jq">[\u8d60\u5238] \u8d60\u9001${jq.Jing}\u5143\u4eac\u5238 ${jq.LimitAd}</a></div>      {/for}  </li>  {/for}</ul>',
        suit: '{for suit in TheSuit}<ul id="mcart-suit">  <li class="dt">      <div class="fl"><span>[\u5957\u88c5]</span> ${suit.Name}</div>      <div class="fr"><em>\u5c0f\u8ba1\uff1a\uffe5${(suit.PromotionPrice*suit.Num).toFixed(2)}</em></div>      <div class="clr"></div>  </li>  {for list in suit.Skus}  <li>      <div class="p-img fl"><a href="http://item.jd.com/${list.Id}.html" target="_blank"><img src="${pageConfig.FN_GetImageDomain(list.Id)}n5/${list.ImgUrl}" width="50" height="50" alt=""></a></div>      <div class="p-name fl"><span></span><a href="http://item.jd.com/${list.Id}.html" title="${list.Name}" target="_blank">${list.Name}</a></div>      <div class="p-detail fr ar">          <span class="p-price"><strong>\uffe5${list.PromotionPrice.toFixed(2)}</strong>\u00d7${list.Num}</span>          <br>          {if parseInt(list.FanPrice)>0}          <span class="hl-green">\u8fd4\u73b0\uff1a\uffe5<em>${list.FanPrice}</em></span>          <br>          {/if}          {if parseInt(list.Score)>0}          <span class="hl-orange">\u9001\u4eac\u8c46\uff1a<em>${list.Score}</em></span>          <br>          {/if}          <a class="delete" data-id="${list.Id}|${suit.Id}" data-type="RemoveSuit" href="#delete">\u5220\u9664</a>      </div>      {for gift in list.Gifts}      <div class="gift"><a href="http://item.jd.com/${gift.Id}.html" target="_blank">[{if gift.Type==2}\u8d60\u54c1{/if}{if gift.Type==1}\u9644\u4ef6{/if}] ${gift.Name}</a></div>      {/for}      {for jq in list.CouponAD}      <div class="gift-jq">[\u8d60\u5238] \u8d60\u9001${jq.Jing}\u5143\u4eac\u5238 ${jq.LimitAd}</a></div>      {/for}  </li>  {/for}</ul>{/for}',
        mj: '{for mj in ManJian}<ul id="mcart-mj">  <li class="dt">      <div class="fl"><span class="hl-green">\u6ee1\u51cf</span>{if mj.ManFlag} \u5df2\u8d2d\u6ee1{if mj.ManNum>0}${mj.ManNum}\u4ef6{else}${mj.ManPrice}\u5143{/if}\uff0c\u5df2\u51cf${mj.JianPrice}\u5143{else}\u8d2d\u6ee1{if mj.ManNum>0}${mj.ManNum}\u4ef6{else}${mj.ManPrice}\u5143{/if}\uff0c\u5373\u53ef\u4eab\u53d7\u6ee1\u51cf\u4f18\u60e0{/if}</div>      <div class="fr"><em>\u5c0f\u8ba1\uff1a\uffe5${(mj.PromotionPrice*mj.Num).toFixed(2)}</em></div>      <div class="clr"></div>  </li>  {for list in mj.Skus}  <li>      <div class="p-img fl"><a href="http://item.jd.com/${list.Id}.html" target="_blank"><img src="${pageConfig.FN_GetImageDomain(list.Id)}n5/${list.ImgUrl}" width="50" height="50" alt=""></a></div>      <div class="p-name fl"><span></span><a href="http://item.jd.com/${list.Id}.html" title="${list.Name}" target="_blank">${list.Name}</a></div>      <div class="p-detail fr ar">          <span class="p-price"><strong>\uffe5${list.PromotionPrice.toFixed(2)}</strong>\u00d7${list.Num}</span>          <br>          {if parseInt(list.FanPrice)>0}          <span class="hl-green">\u8fd4\u73b0\uff1a\uffe5<em>${list.FanPrice}</em></span>          <br>          {/if}          {if parseInt(list.Score)>0}          <span class="hl-orange">\u9001\u4eac\u8c46\uff1a<em>${list.Score}</em></span>          <br>          {/if}          <a class="delete" data-id="${list.Id}|${mj.Id}" data-type="RemoveSuit" href="#delete">\u5220\u9664</a>      </div>      {for gift in list.Gifts}      <div class="gift"><a href="http://item.jd.com/${gift.Id}.html" target="_blank">[{if gift.Type==2}\u8d60\u54c1{/if}{if gift.Type==1}\u9644\u4ef6{/if}] ${gift.Name}</a></div>      {/for}      {for jq in list.CouponAD}      <div class="gift-jq">[\u8d60\u5238] \u8d60\u9001${jq.Jing}\u5143\u4eac\u5238 ${jq.LimitAd}</a></div>      {/for}  </li>  {/for}</ul>{/for}',
        mz: '{for mz in ManZeng}<ul id="mcart-mz">  <li class="dt">      <div class="fl"><span class="hl-orange">\u6ee1\u8d60</span>          {if mz.ManFlag}              \u5df2\u8d2d\u6ee1${mz.ManPrice}\u5143\uff0c\u60a8{if mz.ManGifts.length>0}\u5df2{else}\u53ef{/if}\u9886\u8d60\u54c1          {else}              \u8d2d\u6ee1${mz.ManPrice}\u5143\uff0c\u5373\u53ef\u9886\u53d6\u8d60\u54c1          {/if}      </div>      <div class="fr"><em>\u5c0f\u8ba1\uff1a\uffe5${(mz.PromotionPrice*mz.Num).toFixed(2)}</em></div>      <div class="clr"></div>  </li>  {for gift in mz.ManGifts}<li class="dt-mz"><a href="${gift.Id}" target="_blank">[\u8d60\u54c1]${gift.Name}</a>\u00d7${gift.Num}</li>{/for}  {for list in mz.Skus}  <li>      <div class="p-img fl"><a href="http://item.jd.com/${list.Id}.html" target="_blank"><img src="${pageConfig.FN_GetImageDomain(list.Id)}n5/${list.ImgUrl}" width="50" height="50" alt=""></a></div>      <div class="p-name fl"><span></span><a href="http://item.jd.com/${list.Id}.html" title="${list.Name}" target="_blank">${list.Name}</a></div>      <div class="p-detail fr ar">          <span class="p-price"><strong>\uffe5${list.PromotionPrice.toFixed(2)}</strong>\u00d7${list.Num}</span>          <br>          {if parseInt(list.FanPrice)>0}          <span class="hl-green">\u8fd4\u73b0\uff1a\uffe5<em>${list.FanPrice}</em></span>          <br>          {/if}          {if parseInt(list.Score)>0}          <span class="hl-orange">\u9001\u4eac\u8c46\uff1a<em>${list.Score}</em></span>          <br>          {/if}          <a class="delete" data-id="${list.Id}|${mz.Id}" data-type="RemoveSuit" href="#delete">\u5220\u9664</a>      </div>      {for gift in list.Gifts}      <div class="gift"><a href="http://item.jd.com/${gift.Id}.html" target="_blank">[{if gift.Type==2}\u8d60\u54c1{/if}{if gift.Type==1}\u9644\u4ef6{/if}] ${gift.Name}</a></div>      {/for}      {for jq in list.CouponAD}      <div class="gift-jq">[\u8d60\u5238] \u8d60\u9001${jq.Jing}\u5143\u4eac\u5238 ${jq.LimitAd}</a></div>      {/for}  </li>  {/for}</ul>{/for}'
    },
    FN_BindEvents: function () {
        var a = this;
        $("#settleup-content .delete").bind("click", function () {
            var d = $(this).attr("data-id").split("|"), b = $(this).attr("data-type"), c = {method: b, cartId: d[0]};
            if (!d) {
                return
            }
            if (d.length > 1 && !!d[1]) {
                c.targetId = d[1]
            }
            $.ajax({
                url: MCART.URL_Serv, data: c, dataType: "jsonp", success: function (e) {
                    if (e.Result) {
                        a.FN_Refresh()
                    }
                }
            })
        })
    },
    FN_Refresh: function () {
        var b = document.getElementById("settleup") ? $("#settleup dl") : $("#settleup-2013 dl");
        var d = b.find("dd").eq(0), c, a = function (h) {
            var e = h.Cart, l = e.TheSkus.length + e.TheSuit.length + e.TheGifts.length + e.ManJian.length + e.ManZeng.length, f = MCART.TPL_List.sigle.process(h.Cart), j = MCART.TPL_List.gift.process(h.Cart), o = MCART.TPL_List.suit.process(h.Cart), n = MCART.TPL_List.mz.process(h.Cart), k = MCART.TPL_List.mj.process(h.Cart);
            if (l > 0) {
                d.html(MCART.TPL_List.wrap.process(h.Cart));
                d.find("#settleup-content .smc").html(f + j + o + k + n);
                $("#settleup-url").attr("href", "http://cart.jd.com/cart/cart.html?r=" + (+new Date))
            } else {
                d.html(MCART.TPL_NoGoods)
            }
            if ($.browser.msie && $.browser.version == 6) {
                var m = $("#settleup-content");
                m.before(MCART.TPL_Iframe);
                var g = $("#settleup-iframe");
                g.height(m.height())
            }
            MCART.FN_BindEvents()
        };
        $.ajax({
            url: MCART.URL_Serv, data: {method: "GetCart"}, dataType: "jsonp", success: function (e) {
                a(e)
            }
        });
        MCART.DATA_Amount = readCookie(MCART.DATA_Cookie);
        if (MCART.DATA_Amount != null) {
            $("#shopping-amount").html(MCART.DATA_Amount).parent().show()
        }
    }
};
var NotifyPop = {
    _saleNotify: "http://skunotify." + pageConfig.FN_getDomain() + "/pricenotify.html?",
    _stockNotify: "http://skunotify." + pageConfig.FN_getDomain() + "/storenotify.html?",
    init: function (c, e) {
        var b = this, f = this.serializeUrl(location.href), d = /from=weibo/.test(location.href) ? location.search.replace(/\?/, "") : "", a;
        if (/from=weibo/.test(location.href)) {
            a = f.param.type;
            this.setThickBox(a, d)
        }
        c.livequery("click", function () {
            var j = this, h = $(this).attr("id"), g = $(this).attr("data-type") || 2;
            b.sku = $(this).attr("data-sku");
            b.checkLogin(function (k) {
                if (!k.IsAuthenticated) {
                    jdModelCallCenter.settings.fn = function () {
                        b.checkLogin(function (l) {
                            if (l.IsAuthenticated) {
                                b._userPin = l.Name;
                                b.setThickBox(g, d)
                            }
                        })
                    };
                    jdModelCallCenter.login()
                } else {
                    b._userPin = k.Name;
                    b.setThickBox(g, d)
                }
            });
            return false
        }).attr("href", "#none").removeAttr("target")
    },
    serializeUrl: function (a) {
        var l = a.indexOf("?"), h = a.substr(0, l), d = a.substr(l + 1), b = d.split("&"), f = b.length, e, g = {}, k, j, c;
        for (e = 0; e < f; e++) {
            k = b[e].split("=");
            j = k[0];
            c = k[1];
            g[j] = c
        }
        return {url: h, param: g}
    },
    checkLogin: function (a) {
        if (typeof a !== "function") {
            return
        }
        $.getJSON("http://passport." + pageConfig.FN_getDomain() + "/loginservice.aspx?method=Login&callback=?", function (b) {
            if (b.Identity) {
                a(b.Identity)
            }
        })
    },
    setThickBox: function (d, e) {
        var j, b, a, c, g = {
            skuId: this.sku,
            pin: this._userPin,
            webSite: 1,
            origin: 1,
            source: 1
        }, f = this.serializeUrl(location.href);
        if (/blogPin/.test(location.href)) {
            g.blogPin = f.param.blogPin
        }
        if (d == 1) {
            j = "\u964d\u4ef7\u901a\u77e5";
            b = this._saleNotify;
            c = 250
        }
        if (d == 2) {
            j = "\u5230\u8d27\u901a\u77e5";
            b = this._stockNotify;
            c = 210;
            g.storeAddressId = readCookie("ipLoc-djd") || "0-0-0"
        }
        if (!!e) {
            b = b + e
        } else {
            b = b + $.param(g)
        }
        $.jdThickBox({
            type: "iframe",
            source: decodeURIComponent(b) + "&nocache=" + (+new Date()),
            width: 500,
            height: c,
            title: j,
            _box: "notify_box",
            _con: "notify_con",
            _title: "notify_title"
        })
    }
};
(function () {
    pageConfig.FN_ImgError(document);
    $("img[data-lazyload]").Jlazyload({type: "image", placeholderClass: "err-product"});
    category.FN_Init();
    if (document.getElementById("shortcut")) {
        $("#shortcut .menu").Jdropdown({delay: 50})
    } else {
        $("#biz-service").Jdropdown({delay: 50}, function () {
            $.ajax({
                url: "http://www.jd.com/hotwords.aspx?position=new-index-002",
                dataType: "script",
                scriptCharset: "gb2312",
                cache: true
            })
        });
        $("#site-nav").Jdropdown({delay: 50}, function () {
            $.ajax({
                url: "http://www.jd.com/hotwords.aspx?position=new-index-003",
                dataType: "script",
                scriptCharset: "gb2312",
                cache: true
            })
        })
    }
    if (document.getElementById("navitems")) {
        $("#navitems li").Jdropdown()
    } else {
        $("#navitems-2013 li").Jdropdown()
    }
    $.ajax({
        url: ("https:" == document.location.protocol ? "https://" : "http://") + "passport." + pageConfig.FN_getDomain() + "/new/helloService.ashx?m=ls",
        dataType: "jsonp",
        scriptCharset: "gb2312",
        success: function (b) {
            if (b && b.info) {
                $("#loginbar").html(b.info)
            }
            if (b && b.sso) {
                $.each(b.sso, function () {
                    $.getJSON(this)
                })
            }
        }
    });
    if (document.getElementById("settleup")) {
        if (MCART.DATA_Amount != null) {
            $("#settleup s").eq(0).addClass("shopping");
            $("#shopping-amount").html(MCART.DATA_Amount)
        }
        $("#settleup dl").Jdropdown({delay: 200}, function (b) {
            MCART.FN_Refresh();
            $("#settleup-url").attr("href", "http://cart.jd.com/cart/cart.html?r=" + (+new Date))
        })
    } else {
        if (MCART.DATA_Amount != null) {
            $("#shopping-amount").html(MCART.DATA_Amount)
        }
        $("#settleup-2013 dl").Jdropdown({delay: 200}, function (b) {
            MCART.FN_Refresh();
            $("#settleup-url").attr("href", "http://cart.jd.com/cart/cart.html?r=" + (+new Date))
        })
    }
    var a = document.getElementById("my360buy") ? $("#my360buy") : $("#my360buy-2013");
    a.find("dl").Jdropdown({delay: 100}, function (c) {
        if (c.attr("load")) {
            return
        }
        function b(d) {
            $.ajax({
                url: "http://api.credit.wangyin.com/veyron/query/queryCreditJsonp",
                type: "get",
                dataType: "jsonp",
                data: {platform: 1, userId: readCookie("pin"), productId: -1},
                success: function (e) {
                    if (e && e[0]) {
                        d(e[0].productId)
                    }
                }
            })
        }

        $.login({
            automatic: false, complete: function (f) {
                if (!f) {
                    return
                }
                var e = c.find("dd").eq(0), d = "";
                if (!f.IsAuthenticated) {
                    d += UC.TPL_UnRegist;
                    d += UC.TPL_UList
                } else {
                    d += UC.TPL_Regist.process(f);
                    d += UC.TPL_OList.placeholder;
                    d += UC.TPL_UList
                }
                d += UC.TPL_VList.placeholder;
                e.html(d);
                if (readCookie("pin")) {
                    b(function (g) {
                        if (g == "3") {
                            e.find(".J_jincai").show()
                        } else {
                            e.find(".J_baitiao").show()
                        }
                    })
                } else {
                    e.find(".J_baitiao").show()
                }
                c.attr("load", "1");
                setTimeout(function () {
                    c.removeAttr("load")
                }, 60000);
                UC.FN_InitOList();
                UC.FN_InitRecent()
            }
        })
    });
    document.onkeyup = function (d) {
        var b = document.activeElement.tagName.toLowerCase();
        if (b == "input" || b == "textarea") {
            return
        }
        var d = d ? d : window.event, c = d.keyCode || d.which;
        switch (c) {
            case 68:
                if (!window.pageConfig.clientViewTop) {
                    window.pageConfig.clientViewTop = 0
                }
                window.pageConfig.clientViewTop += document.documentElement.clientHeight;
                window.scrollTo(0, pageConfig.clientViewTop);
                break;
            case 83:
                window.scrollTo(0, 0);
                window.pageConfig.clientViewTop = 0;
                document.getElementById("key").focus();
                break;
            case 84:
                window.scrollTo(0, 0);
                window.pageConfig.clientViewTop = 0;
                break;
            default:
                break
        }
    }
})();
var $o = (function () {
    var g = {};
    g.replace = function (s, t) {
        return s.replace(/#{(.*?)}/g, function () {
            var u = arguments[1];
            if ("undefined" != typeof(t[u])) {
                return t[u]
            } else {
                return arguments[0]
            }
        })
    };
    String.prototype.isEmpty = function () {
        return 0 == this.length
    };
    var f = '<a style="color:#005AA0" onclick="$o.del(event)">\u5220\u9664</a>';
    var q = "\u641C\u7D22\u5386\u53F2", c = "\u7EA6#{amount}\u4E2A\u5546\u54C1", l = 'history="1"', p = 'style="color:#005AA0"';
    var h = '<li id="d_#{id}" suggest-pos="#{suggest_pos}" title="#{title}" onclick="$o.clickItem(this)" #{history_mark}><div class="search-item" #{history_style}>#{keyword}</div><div class="search-count">#{search_count}</div></li>';
    var b = '<div id="d_#{id}" suggest-pos="#{suggest_pos}" class="#{className}" title="#{title}" cid="#{cid}" cLevel="#{cLevel}" onclick="$o.clickItem(this)"><div class="search-item">\u5728<strong>#{cname}</strong>\u5206\u7c7b\u4e2d\u641c\u7d22</div><div class="search-count">\u7EA6#{amount}\u4E2A\u5546\u54C1</div></div>';
    var d = '<div id="d_#{id}" suggest-pos="#{suggest_pos}" class="#{className}" title="#{title}" pm_type="#{pm_type}" onclick="$o.clickItem(this)"><div class="search-item">\u627E<strong>#{cname}</strong>\u76F8\u5173\u4F18\u60E0</div><div class="search-count"></div></div>';
    var k = '<li class="fore1"><div id="d_#{id}" suggest-pos="#{suggest_pos}" class="fore1" title="#{title}" onclick="$o.clickItem(this)" #{history_mark}><div class="search-item" #{history_style}>#{keyword}</div><div class="search-count">#{search_count}</div></div>#{categorys}</li>';
    var o = "http://dd.search.jd.com/?ver=2&zip=1&key=#{keyword}";
    var n = "#FFDFC6";
    var e = "#FFF";
    var m = $("#key");
    var r = $("#shelper");

    function a() {
        this.length = 0;
        this.index = -1;
        this.iLastModified = 0;
        this.lastKeyword = false
    }

    a.prototype.init = function () {
        this.length = 0;
        this.index = -1;
        this.click = false
    };
    a.prototype.hideTip = function () {
        this.init();
        this.lastKeyword = false;
        r.html("").hide()
    };
    a.prototype.clickItem = function (v) {
        var u = v.getAttribute("cid"), w = "&suggest=" + v.getAttribute("suggest-pos");
        if (null != u && "" != u) {
            search.cid = u
        } else {
            search.cid = null
        }
        var s = v.getAttribute("cLevel");
        if (null != s && "" != s) {
            search.cLevel = s
        } else {
            search.cLevel = null
        }
        var t = v.getAttribute("title");
        if (null != t && !$.trim(t).isEmpty()) {
            m.val(t)
        }
        if (v.getAttribute("pm_type") !== null) {
            w += "&prom_type=0"
        }
        search.additinal = w;
        this.click = v.id.substr(2) - r.find("li[history='1']").length;
        search("key")
    };
    a.prototype.mouseenter = function (v) {
        var v = $(v);
        if (v.attr("history")) {
            v.find(".search-count").html(f)
        }
        v.css("background", n);
        var t = v.attr("id").split("_"), s = parseInt(t[1], 10);
        if (s != this.index) {
            if (this.index > -1) {
                var u = $("#d_" + this.index);
                u.css("background", e);
                if (u.attr("history")) {
                    u.find(".search-count").html(q)
                }
            }
            this.index = s
        }
    };
    a.prototype.mouseleave = function (s) {
        s.css("background", e);
        if (s.attr("history")) {
            s.find(".search-count").html(q)
        }
    };
    a.prototype.selectItemNode = function (y) {
        var w = this;
        var v = $("#d_" + w.index + ":visible");
        v.css("background-color", e);
        if (v.attr("history")) {
            v.find(".search-count").html(q)
        }
        if (w.index == -1 && y == -1) {
            y = 0
        }
        w.index = (w.length + w.index + y) % w.length;
        var z = $("#d_" + w.index), x = "&suggest=" + z.attr("suggest-pos");
        if (z.length > 0) {
            if (z.attr("history")) {
                z.find(".search-count").html(f)
            }
            z.css("background-color", n);
            var t = z.attr("title");
            if (null != t && !$.trim(t).isEmpty()) {
                m.val(t)
            }
            var u = z.attr("cid");
            if (null != u && "" != u) {
                search.cid = u
            } else {
                search.cid = null
            }
            var s = z.attr("cLevel");
            if (null != s && "" != s) {
                search.cLevel = s
            } else {
                search.cLevel = null
            }
            if (typeof(z.attr("pm_type")) != "undefined") {
                x += "&prom_type=0"
            }
            search.additinal = x;
            w.click = w.index - r.find("li[history='1']").length
        }
    };
    a.prototype.input = function () {
        var s = this;
        if (s.timeoutId) {
            clearTimeout(s.timeoutId)
        }
        s.timeoutId = setTimeout(function () {
            var t = $.trim(m.val());
            if (t === s.lastKeyword || (!t && !readCookie("pin") && !readCookie("_tp"))) {
                return false
            } else {
                s.lastKeyword = t
            }
            var u = g.replace(o, {keyword: encodeURIComponent(t)});
            $.ajax({
                url: u, dataType: "jsonp", scriptCharset: "utf-8", jsonp: "callback", success: (function (v) {
                    return function (w) {
                        if (s.iLastModified > v) {
                            return
                        }
                        s.iLastModified = v;
                        w && s.onloadItems(w)
                    }
                })(new Date().getTime())
            })
        }, 150)
    };
    a.prototype.keydown_up = function (u) {
        var t = this;
        var s = u || window.event;
        if (0 == m.length) {
            m = $("#key")
        }
        if (0 == r.length) {
            r = $("tie")
        }
        var v = s.keyCode;
        switch (v) {
            case 38:
                t.selectItemNode(-1);
                break;
            case 40:
                t.selectItemNode(1);
                break;
            case 27:
                t.hideTip();
                break;
            case 37:
                break;
            case 39:
                break;
            default:
                if (!$.browser.mozilla) {
                    t.input()
                }
                break
        }
    };
    a.prototype.onloadItems = function (K) {
        if (0 == K.length) {
            this.hideTip();
            return
        }
        var w = this;
        w.init();
        var B = "";
        var C = 0;
        if (window.pageConfig && window.pageConfig.searchType) {
            C = window.pageConfig.searchType
        }
        var M = 0, B = "";
        var G = 0, F = $.trim(m.val());
        for (var I = 0, x = K.length; I < x; I++) {
            var D = K[I];
            if (!D) {
                continue
            }
            var L = $.trim(D.key), E = D.his ? q : g.replace(c, {amount: D.qre}), A = D.his ? l : "", z = D.his ? p : "";
            var H = L.toLowerCase().indexOf(F.toLowerCase());
            var t = L;
            if (F.length && H == 0 && !D.his) {
                t = F + "<strong>" + L.substring(H + F.length) + "</strong>"
            }
            if (D.ci && D.ci.length > 0) {
                var s = "", J = G++;
                if (I == 0 && w.show_prompt() && D.act) {
                    s += g.replace(d, {id: G, title: L, pm_type: 0, className: "item1", cname: L, suggest_pos: M});
                    G++
                }
                for (var v = 0, u = D.ci.length; v < u; v++) {
                    var y = D.ci[v].cid;
                    if (0 == C) {
                        if ("string" == typeof(y) && /^[1-8]4$/.test(y)) {
                            continue
                        }
                    } else {
                        if (5 == C) {
                            if ("string" == typeof(y) && !(/^[5-8]2$/.test(y))) {
                                continue
                            }
                        } else {
                            if (1 == C || 2 == C || 3 == C || 4 == C) {
                                continue
                            }
                        }
                    }
                    s += g.replace(b, {
                        id: G,
                        title: L,
                        cid: y,
                        cLevel: D.ci[v].cle,
                        className: "item1",
                        cname: D.ci[v].cna,
                        amount: D.ci[v].cre,
                        suggest_pos: M
                    });
                    G++
                }
                B += g.replace(k, {
                    id: J,
                    title: L,
                    keyword: t,
                    suggest_pos: M,
                    categorys: s,
                    search_count: E,
                    history_mark: A,
                    history_style: z
                });
                M++
            } else {
                B += g.replace(h, {
                    id: G,
                    title: L,
                    keyword: t,
                    suggest_pos: M,
                    search_count: E,
                    history_mark: A,
                    history_style: z
                });
                G++;
                M++
            }
        }
        w.length = G;
        if ("" != B) {
            B += '<li class="close" onclick="$o.hideTip()">\u5173\u95ed</li>';
            r.html(B).show();
            r.find('[id^="d_"]').bind("mouseleave", function () {
                w.mouseleave($(this))
            }).bind("mouseenter", function () {
                w.mouseenter($(this))
            })
        } else {
            r.html("").hide()
        }
    };
    a.prototype.show_prompt = function () {
        var s = 0;
        if (window.pageConfig && window.pageConfig.searchType) {
            s = window.pageConfig.searchType * 1
        }
        if (!s || s == 1) {
            return true
        }
        return false
    };
    a.prototype.bind_input = function () {
        if ($.browser.mozilla) {
            m.bind("keydown", function (s) {
                j.keydown_up(s)
            });
            m.bind("input", function (s) {
                j.input(s)
            })
        } else {
            m.bind("keyup", function (s) {
                j.keydown_up(s)
            })
        }
        m.focus(function () {
            setTimeout(function () {
                j.input()
            }, 10)
        });
        r.parent().bind("mouseenter", function () {
            j.e_position = true;
            if (j.timeoutId) {
                clearTimeout(j.timeoutId)
            }
        }).bind("mouseleave", function () {
            j.e_position = false;
            j.timeoutId = setTimeout(function () {
                j.hideTip()
            }, 500)
        });
        $(document).click(function () {
            if (!j.e_position) {
                j.hideTip()
            }
        })
    };
    a.prototype.del = function (u) {
        var t = this;
        u = u ? u : window.event;
        if (window.event) {
            u.cancelBubble = true;
            u.returnValue = false
        } else {
            u.stopPropagation();
            u.preventDefault()
        }
        var v = $(u.srcElement ? u.srcElement : u.target), s = v.parent().parent().attr("title");
        $.ajax({
            url: "http://search.jd.com/suggest.php?op=del&callback=?&key=" + encodeURIComponent(s),
            dataType: "jsonp",
            scriptCharset: "utf-8",
            beforeSend: function () {
                v.parents("li").hide()
            },
            success: function (w) {
                t.lastKeyword = false;
                m.focus()
            }
        })
    };
    var j = new a();
    j.bind_input();
    return j
})();
pageConfig.FN_InitSidebar = function () {
    if (!$("#toppanel").length) {
        $(document.body).prepend('<div class="w ld" id="toppanel"></div>')
    }
    $("#toppanel").append('<div id="sidepanel" class="hide"></div>');
    var a = $("#sidepanel");
    this.scroll = function () {
        var b = this;
        $(window).bind("scroll", function () {
            var c = document.body.scrollTop || document.documentElement.scrollTop;
            if (c == 0) {
                a.hide()
            } else {
                a.show()
            }
        });
        b.initCss();
        $(window).bind("resize", function () {
            b.initCss()
        })
    };
    this.initCss = function () {
        var b, c = pageConfig.compatible ? 1210 : 990;
        if (screen.width >= 1210) {
            if ($.browser.msie && $.browser.version <= 6) {
                b = {right: "-26px"}
            } else {
                b = {right: (document.documentElement.clientWidth - c) / 2 - 26 + "px"}
            }
            a.css(b)
        }
    };
    this.addCss = function (b) {
        a.css(b)
    };
    this.addItem = function (b) {
        a.append(b)
    };
    this.setTop = function () {
        this.addItem("<a href='#' class='gotop' title='\u4f7f\u7528\u5feb\u6377\u952eT\u4e5f\u53ef\u8fd4\u56de\u9876\u90e8\u54e6\uff01'><b></b>\u8fd4\u56de\u9876\u90e8</a>")
    }
};
pageConfig.FN_InitContrast = function (d, c, b) {
    var d = d || "_contrast", b = b || "list", c = c || "http://misc.360buyimg.com/product/m/1.0.0/widget/p-compare/p-compare.js", a = readCookie(d + "_status");
    if (pageConfig.isInitContrast) {
        return false
    }
    if ((a == "show" || a == "side") && !!readCookie(d) == true) {
        $.ajax({
            url: c, dataType: "script", cache: true, success: function () {
                if (Contrast) {
                    Contrast.init(b, d)
                }
            }
        })
    } else {
        $(".btn-compare").bind("click", function () {
            var e = this.getAttribute("skuid");
            $.ajax({
                url: c, dataType: "script", cache: true, success: function () {
                    if (Contrast) {
                        Contrast.init(b, d).showPopWin(e)
                    }
                }
            })
        })
    }
    pageConfig.isInitContrast = 1
};
if (!/debug=global/.test(location.href)) {
    $.ajax({
        url: "http://nfa.jd.com/loadFa_toJson.js?aid=2_601_5095",
        dataType: "script",
        scriptCharset: "gbk",
        cache: true
    })
}
;
