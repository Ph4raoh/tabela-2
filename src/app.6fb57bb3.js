(function (e) {
  function a(a) {
    for (
      var n, r, l = a[0], s = a[1], u = a[2], m = 0, c = [];
      m < l.length;
      m++
    )
      (r = l[m]),
        Object.prototype.hasOwnProperty.call(i, r) && i[r] && c.push(i[r][0]),
        (i[r] = 0);
    for (n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n]);
    d && d(a);
    while (c.length) c.shift()();
    return o.push.apply(o, u || []), t();
  }
  function t() {
    for (var e, a = 0; a < o.length; a++) {
      for (var t = o[a], n = !0, l = 1; l < t.length; l++) {
        var s = t[l];
        0 !== i[s] && (n = !1);
      }
      n && (o.splice(a--, 1), (e = r((r.s = t[0]))));
    }
    return e;
  }
  var n = {},
    i = { app: 0 },
    o = [];
  function r(a) {
    if (n[a]) return n[a].exports;
    var t = (n[a] = { i: a, l: !1, exports: {} });
    return e[a].call(t.exports, t, t.exports, r), (t.l = !0), t.exports;
  }
  (r.m = e),
    (r.c = n),
    (r.d = function (e, a, t) {
      r.o(e, a) || Object.defineProperty(e, a, { enumerable: !0, get: t });
    }),
    (r.r = function (e) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (r.t = function (e, a) {
      if ((1 & a && (e = r(e)), 8 & a)) return e;
      if (4 & a && "object" === typeof e && e && e.__esModule) return e;
      var t = Object.create(null);
      if (
        (r.r(t),
        Object.defineProperty(t, "default", { enumerable: !0, value: e }),
        2 & a && "string" != typeof e)
      )
        for (var n in e)
          r.d(
            t,
            n,
            function (a) {
              return e[a];
            }.bind(null, n)
          );
      return t;
    }),
    (r.n = function (e) {
      var a =
        e && e.__esModule
          ? function () {
              return e["default"];
            }
          : function () {
              return e;
            };
      return r.d(a, "a", a), a;
    }),
    (r.o = function (e, a) {
      return Object.prototype.hasOwnProperty.call(e, a);
    }),
    (r.p = "/");
  var l = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    s = l.push.bind(l);
  (l.push = a), (l = l.slice());
  for (var u = 0; u < l.length; u++) a(l[u]);
  var d = s;
  o.push([0, "chunk-vendors"]), t();
})({
  0: function (e, a, t) {
    e.exports = t("56d7");
  },
  "034f": function (e, a, t) {
    "use strict";
    t("85ec");
  },
  2667: function (e, a, t) {},
  "56d7": function (e, a, t) {
    "use strict";
    t.r(a);
    t("e260"), t("e6cf"), t("cca6"), t("a79d");
    var n = t("2b0e"),
      i = function () {
        var e = this,
          a = e.$createElement,
          t = e._self._c || a;
        return t("div", { attrs: { id: "app" } }, [t("calculator")], 1);
      },
      o = [],
      r = function () {
        var e = this,
          a = e.$createElement,
          t = e._self._c || a;
        return t("form", [
          t(
            "div",
            { staticClass: "column-1" },
            [
              t("p", [
                e._v(
                  "Complete com suas medidas para calcular seu percentual de gordura"
                ),
              ]),
              t(
                "div",
                { staticClass: "form-field", class: { filled: e.gender } },
                [
                  t("label", { attrs: { for: "model-gender" } }, [
                    e._v("Gênero"),
                  ]),
                  t("div", [
                    t(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: e.gender,
                            expression: "gender",
                          },
                        ],
                        attrs: { id: "model-gender" },
                        on: {
                          change: function (a) {
                            var t = Array.prototype.filter
                              .call(a.target.options, function (e) {
                                return e.selected;
                              })
                              .map(function (e) {
                                var a = "_value" in e ? e._value : e.value;
                                return a;
                              });
                            e.gender = a.target.multiple ? t : t[0];
                          },
                        },
                      },
                      [
                        t("option", { attrs: { value: "", disabled: "" } }, [
                          e._v("Selecione"),
                        ]),
                        e._l(e.GENDERS, function (a) {
                          return t(
                            "option",
                            { key: a.value, domProps: { value: a.value } },
                            [e._v(e._s(a.label))]
                          );
                        }),
                      ],
                      2
                    ),
                  ]),
                ]
              ),
              t(
                "div",
                { staticClass: "form-field", class: { filled: "" !== e.age } },
                [
                  t("label", { attrs: { for: "model-age" } }, [e._v("Idade")]),
                  t("div", [
                    t(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: e.age,
                            expression: "age",
                          },
                        ],
                        attrs: { id: "model-age" },
                        on: {
                          change: function (a) {
                            var t = Array.prototype.filter
                              .call(a.target.options, function (e) {
                                return e.selected;
                              })
                              .map(function (e) {
                                var a = "_value" in e ? e._value : e.value;
                                return a;
                              });
                            e.age = a.target.multiple ? t : t[0];
                          },
                        },
                      },
                      [
                        t("option", { attrs: { value: "", disabled: "" } }, [
                          e._v("Selecione"),
                        ]),
                        e._l(e.genderData(e.gender).ages, function (a, n) {
                          return t(
                            "option",
                            { key: n, domProps: { value: n } },
                            [e._v(e._s(a))]
                          );
                        }),
                      ],
                      2
                    ),
                  ]),
                ]
              ),
              t(
                "div",
                { staticClass: "form-field", class: { filled: e.waist } },
                [
                  t("label", { attrs: { for: "model-waist" } }, [
                    e._v("Abdômen"),
                  ]),
                  t("div", [
                    t("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: e.waist,
                          expression: "waist",
                        },
                      ],
                      attrs: { id: "model-waist", type: "number", step: "1" },
                      domProps: { value: e.waist },
                      on: {
                        input: function (a) {
                          a.target.composing || (e.waist = a.target.value);
                        },
                      },
                    }),
                    t("span", { staticClass: "input-append" }, [e._v("cm")]),
                  ]),
                ]
              ),
              t(
                "div",
                { staticClass: "form-field", class: { filled: e.neck } },
                [
                  t("label", { attrs: { for: "model-neck" } }, [
                    e._v("Pescoço"),
                  ]),
                  t("div", [
                    t("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: e.neck,
                          expression: "neck",
                        },
                      ],
                      attrs: { id: "model-neck", type: "number", step: "1" },
                      domProps: { value: e.neck },
                      on: {
                        input: function (a) {
                          a.target.composing || (e.neck = a.target.value);
                        },
                      },
                    }),
                    t("span", { staticClass: "input-append" }, [e._v("cm")]),
                  ]),
                ]
              ),
              t(
                "div",
                { staticClass: "form-field", class: { filled: e.height } },
                [
                  t("label", { attrs: { for: "model-height" } }, [
                    e._v("Altura"),
                  ]),
                  t("div", [
                    t("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: e.height,
                          expression: "height",
                        },
                      ],
                      attrs: { id: "model-height", type: "number", step: "1" },
                      domProps: { value: e.height },
                      on: {
                        keydown: function (a) {
                          return e.validateIntegerInput(a);
                        },
                        input: function (a) {
                          a.target.composing || (e.height = a.target.value);
                        },
                      },
                    }),
                    t("span", { staticClass: "input-append" }, [e._v("cm")]),
                    e._m(0),
                  ]),
                ]
              ),
              "female" === e.gender
                ? [
                    t(
                      "div",
                      { staticClass: "form-field", class: { filled: e.hip } },
                      [
                        t("label", { attrs: { for: "model-hip" } }, [
                          e._v("Quadril"),
                        ]),
                        t("div", [
                          t("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: e.hip,
                                expression: "hip",
                              },
                            ],
                            attrs: {
                              id: "model-hip",
                              type: "number",
                              step: "1",
                            },
                            domProps: { value: e.hip },
                            on: {
                              input: function (a) {
                                a.target.composing || (e.hip = a.target.value);
                              },
                            },
                          }),
                          t("span", { staticClass: "input-append" }, [
                            e._v("cm"),
                          ]),
                        ]),
                      ]
                    ),
                    t(
                      "div",
                      {
                        staticClass: "form-field",
                        class: { filled: null !== e.isMenstruating },
                      },
                      [
                        t("label", { staticClass: "full-width" }, [
                          e._v("Você é uma mulher no período menstrual?"),
                        ]),
                        t("div", [
                          t("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: e.isMenstruating,
                                expression: "isMenstruating",
                              },
                            ],
                            attrs: { type: "radio", id: "is-menstruating" },
                            domProps: {
                              value: !0,
                              checked: e._q(e.isMenstruating, !0),
                            },
                            on: {
                              change: function (a) {
                                e.isMenstruating = !0;
                              },
                            },
                          }),
                          t("label", { attrs: { for: "is-menstruating" } }, [
                            e._v("Sim"),
                          ]),
                          t("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: e.isMenstruating,
                                expression: "isMenstruating",
                              },
                            ],
                            attrs: { type: "radio", id: "is-not-menstruating" },
                            domProps: {
                              value: !1,
                              checked: e._q(e.isMenstruating, !1),
                            },
                            on: {
                              change: function (a) {
                                e.isMenstruating = !1;
                              },
                            },
                          }),
                          t(
                            "label",
                            { attrs: { for: "is-not-menstruating" } },
                            [e._v("Não")]
                          ),
                        ]),
                      ]
                    ),
                  ]
                : e._e(),
            ],
            2
          ),
          null !== e.bodyfat
            ? t("div", { staticClass: "column-2" }, [
                isNaN(e.bodyfat) || 0 == e.bodyfat || e.bodyfat >= 100
                  ? t("div", { staticClass: "bodyfat-error" }, [
                      e._v(
                        " Houve um erro ao calcular seu percentual de gordura, verifique seus dados. "
                      ),
                    ])
                  : t(
                      "div",
                      [
                        t("div", { staticClass: "bodyfat-result" }, [
                          e._v(" Percentual de Gordura: "),
                          t("span", [e._v(e._s(e.bodyfat) + "%")]),
                        ]),
                        "male" === e.gender
                          ? t("ReferenceTable", {
                              attrs: {
                                title:
                                  "Tabela de Gordura Corporal Ideal Para Homens",
                                header: e.GENDERS[0].ages,
                                body: e.genderData("male").table,
                                bodyfat: Number(e.bodyfat),
                                age: e.age,
                              },
                            })
                          : e._e(),
                        "female" === e.gender
                          ? t("ReferenceTable", {
                              attrs: {
                                title:
                                  "Tabela de Gordura Corporal Ideal Para Mulheres",
                                header: e.GENDERS[1].ages,
                                body: e.genderData("female").table,
                                bodyfat: Number(e.bodyfat),
                                age: e.age,
                                warning: e.isMenstruating
                                  ? "no período menstrual as MULHERES podem ficar inchadas e apresentarem resultados “mascarados”, isso é normal!"
                                  : "",
                              },
                            })
                          : e._e(),
                      ],
                      1
                    ),
              ])
            : e._e(),
        ]);
      },
      l = [
        function () {
          var e = this,
            a = e.$createElement,
            t = e._self._c || a;
          return t("p", { staticClass: "description" }, [
            t("strong", [e._v("Atenção:")]),
            e._v(
              " Preencha sua altura sem vírgula, exemplo: se você tem 1,70m preencha o campo assim: 170"
            ),
          ]);
        },
      ],
      s =
        (t("caad"),
        t("7db0"),
        t("4de4"),
        t("6b93"),
        t("a9e3"),
        t("b680"),
        function () {
          var e = this,
            a = e.$createElement,
            t = e._self._c || a;
          return t("div", [
            t("p", { staticClass: "result-wrapper" }, [
              t("strong", [e._v(e._s(e.result.label))]),
              e._v(" " + e._s(e.result.message) + " "),
            ]),
            t(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: !!e.warning,
                    expression: "!!warning",
                  },
                ],
                staticClass: "warning-msg",
              },
              [
                t("strong", [e._v("Atenção:")]),
                e._v(" " + e._s(e.warning) + " "),
              ]
            ),
            t("div", { staticClass: "reference-table-wrapper" }, [
              t("h3", [e._v(e._s(e.title))]),
              t(
                "table",
                [
                  t(
                    "tr",
                    [
                      t("th", { staticClass: "my-age" }),
                      e._l(e.header, function (a, n) {
                        return t(
                          "th",
                          { key: n, class: { "my-age": e.isMyAge(n) } },
                          [e._v(" " + e._s(a) + " ")]
                        );
                      }),
                    ],
                    2
                  ),
                  e._l(e.body, function (a) {
                    return t(
                      "tr",
                      { key: a.key },
                      [
                        t("th", { staticClass: "my-age" }, [
                          e._v(e._s(a.label)),
                        ]),
                        e._l(a.age, function (n, i) {
                          return t(
                            "td",
                            {
                              key: i,
                              class: {
                                highlight: e.shouldHighlight(a.key, i),
                                "my-age": e.isMyAge(i),
                              },
                            },
                            [
                              null === n.bodyfat.min
                                ? [
                                    e._v(
                                      " menos de " + e._s(n.bodyfat.max) + "% "
                                    ),
                                  ]
                                : null === n.bodyfat.max
                                ? [
                                    e._v(
                                      " mais de " + e._s(n.bodyfat.min) + "% "
                                    ),
                                  ]
                                : [
                                    e._v(
                                      " " +
                                        e._s(n.bodyfat.min) +
                                        "% a " +
                                        e._s(n.bodyfat.max) +
                                        "% "
                                    ),
                                  ],
                            ],
                            2
                          );
                        }),
                      ],
                      2
                    );
                  }),
                ],
                2
              ),
            ]),
          ]);
        }),
      u = [],
      d = t("5530"),
      m = {
        props: {
          header: Array,
          body: Array,
          bodyfat: Number,
          age: Number,
          title: String,
          warning: String,
        },
        computed: {
          result: function () {
            var e = { message: "", label: "", age: null };
            for (var a in this.body) {
              var t = this.body[a];
              for (var n in t.age) {
                var i = Number(n);
                if (this.isResult(t.age[n].bodyfat, i))
                  return Object(d["a"])(Object(d["a"])({}, t), {}, { age: i });
              }
            }
            return e;
          },
        },
        methods: {
          isBodyfatBetween: function (e, a) {
            var t = a.min,
              n = a.max,
              i = a.maxInclusive;
            return null === t
              ? e < n
              : null === n
              ? e >= t
              : (!1 !== i && (n += 1), e >= t && e < n);
          },
          isMyAge: function (e) {
            return e === this.age;
          },
          shouldHighlight: function (e, a) {
            return e === this.result.key && this.result.age === a;
          },
          isResult: function (e, a) {
            return this.isMyAge(a) && this.isBodyfatBetween(this.bodyfat, e);
          },
        },
      },
      c = m,
      f = (t("8cc1"), t("2877")),
      p = Object(f["a"])(c, s, u, !1, null, "4993fcb6", null),
      v = p.exports,
      g = {
        value: "male",
        label: "Masculino",
        ages: [
          "entre 20 e 29 anos",
          "entre 30 e 39 anos",
          "entre 40 e 49 anos",
          "mais de 50 anos",
        ],
        table: [
          {
            key: "atleta",
            label: "Atleta",
            message:
              "😁 Excelente! Podemos dar o ponta pé inicial com os treinos de hipertrofia.",
            age: [
              { bodyfat: { min: null, max: 11 } },
              { bodyfat: { min: null, max: 12 } },
              { bodyfat: { min: null, max: 14 } },
              { bodyfat: { min: null, max: 15 } },
            ],
          },
          {
            key: "bom",
            label: "Bom",
            message:
              "🙂 Bacana! Podemos começar com os treinos de hipertrofia.",
            age: [
              { bodyfat: { min: 11, max: 13 } },
              { bodyfat: { min: 12, max: 14 } },
              { bodyfat: { min: 14, max: 16 } },
              { bodyfat: { min: 15, max: 17 } },
            ],
          },
          {
            key: "normal",
            label: "Normal",
            message:
              "😐 Na média, recomendo começar com os treinos de hipertrofia.",
            age: [
              { bodyfat: { min: 14, max: 20 } },
              { bodyfat: { min: 15, max: 21 } },
              { bodyfat: { min: 17, max: 23 } },
              { bodyfat: { min: 18, max: 24 } },
            ],
          },
          {
            key: "elevado",
            label: "Elevado",
            message:
              "🙁 Atenção! Esse é um indicativo que devemos começar com os treinos de emagrecimento. Vamos iniciar com tudo? ",
            age: [
              { bodyfat: { min: 21, max: 23, maxInclusive: !1 } },
              { bodyfat: { min: 22, max: 24, maxInclusive: !1 } },
              { bodyfat: { min: 24, max: 26, maxInclusive: !1 } },
              { bodyfat: { min: 25, max: 27, maxInclusive: !1 } },
            ],
          },
          {
            key: "muito-elevado",
            label: "Muito Elevado",
            message:
              "☹️ Muita atenção! Esse é um indicativo que devemos começar com os treinos de emagrecimento. Vamos iniciar com tudo?",
            age: [
              { bodyfat: { min: 23, max: null } },
              { bodyfat: { min: 24, max: null } },
              { bodyfat: { min: 26, max: null } },
              { bodyfat: { min: 27, max: null } },
            ],
          },
        ],
      },
      b = {
        value: "female",
        label: "Feminino",
        ages: [
          "entre 20 e 29 anos",
          "entre 30 e 39 anos",
          "entre 40 e 49 anos",
          "mais de 50 anos",
        ],
        table: [
          {
            key: "atleta",
            label: "Atleta",
            message:
              "😁 Excelente! Podemos dar o ponta pé inicial com os treinos de hipertrofia.",
            age: [
              { bodyfat: { min: null, max: 16 } },
              { bodyfat: { min: null, max: 17 } },
              { bodyfat: { min: null, max: 18 } },
              { bodyfat: { min: null, max: 19 } },
            ],
          },
          {
            key: "bom",
            label: "Bom",
            message:
              "🙂 Bacana! Podemos começar com os treinos de hipertrofia.",
            age: [
              { bodyfat: { min: 16, max: 19 } },
              { bodyfat: { min: 17, max: 20 } },
              { bodyfat: { min: 18, max: 21 } },
              { bodyfat: { min: 19, max: 22 } },
            ],
          },
          {
            key: "normal",
            label: "Normal",
            message:
              "😐 Nível normal, mas pode ser que você ainda tenha alguma gordurinha localizada, e, se esse for o caso, recomendo iniciar pelo emagrecimento, ok?",
            age: [
              { bodyfat: { min: 20, max: 28 } },
              { bodyfat: { min: 21, max: 29 } },
              { bodyfat: { min: 22, max: 30 } },
              { bodyfat: { min: 23, max: 31 } },
            ],
          },
          {
            key: "elevado",
            label: "Elevado",
            message:
              "🙁 Nível de risco, isso é um sinal de que você precisa iniciar pelo emagrecimento. Vamos juntos nessa?",
            age: [
              { bodyfat: { min: 29, max: 31, maxInclusive: !1 } },
              { bodyfat: { min: 30, max: 32, maxInclusive: !1 } },
              { bodyfat: { min: 31, max: 33, maxInclusive: !1 } },
              { bodyfat: { min: 32, max: 34, maxInclusive: !1 } },
            ],
          },
          {
            key: "muito-elevado",
            label: "Muito elevado",
            message:
              "☹️ Muita atenção! Esse é um indicativo que devemos começar com os treinos de emagrecimento. Vamos iniciar com tudo?",
            age: [
              { bodyfat: { min: 31, max: null } },
              { bodyfat: { min: 32, max: null } },
              { bodyfat: { min: 33, max: null } },
              { bodyfat: { min: 34, max: null } },
            ],
          },
        ],
      },
      y = {
        components: { ReferenceTable: v },
        data: function () {
          return {
            GENDERS: [g, b],
            age: "",
            gender: "",
            waist: "",
            neck: "",
            height: "",
            hip: "",
            isMenstruating: "",
            bodyfat: null,
          };
        },
        watch: {
          age: "calculateBodyfat",
          gender: "calculateBodyfat",
          waist: "calculateBodyfat",
          neck: "calculateBodyfat",
          height: "calculateBodyfat",
          hip: "calculateBodyfat",
          isMenstruating: "calculateBodyfat",
        },
        methods: {
          validateIntegerInput: function (e) {
            var a = /^\d$/.test(e.key);
            a ||
              ["Backspace", "Shift", "Tab", "ArrowUp", "ArrowDown"].includes(
                e.key
              ) ||
              e.preventDefault();
          },
          genderData: function (e) {
            var a = this.GENDERS.find(function (a) {
              return a.value === e;
            });
            return a || { ages: [] };
          },
          calculateBodyfat: function () {
            this.gender &&
              ("male" === this.gender &&
                (this.bodyfat = this.calculateMaleBodyfat()),
              "female" === this.gender &&
                (this.bodyfat = this.calculateFemaleBodyfat()));
          },
          calculateMaleBodyfat: function () {
            var e = this.gender,
              a = this.waist,
              t = this.neck,
              n = this.height,
              i = this.age;
            if (
              [e, a, t, n, i].filter(function (e) {
                return null === e || "" === e;
              }).length > 0
            )
              return null;
            var o =
              86.01 * Math.log10(Number(a) - Number(t)) -
              70.041 * Math.log10(Number(n)) +
              30.3;
            return Math.max(0, o.toFixed(1));
          },
          calculateFemaleBodyfat: function () {
            var e = this.gender,
              a = this.waist,
              t = this.neck,
              n = this.height,
              i = this.hip,
              o = this.isMenstruating,
              r = this.age;
            if (
              [e, a, t, n, i, o, r].filter(function (e) {
                return null === e || "" === e;
              }).length > 0
            )
              return null;
            var l =
              163.205 * Math.log10(Number(a) + Number(i) - Number(t)) -
              97.684 * Math.log10(Number(n)) -
              104.912;
            return Math.max(0, l.toFixed(1));
          },
        },
      },
      h = y,
      x = (t("6a45"), Object(f["a"])(h, r, l, !1, null, "edfe1d1c", null)),
      _ = x.exports,
      w = { name: "App", components: { Calculator: _ } },
      k = w,
      N = (t("034f"), Object(f["a"])(k, i, o, !1, null, null, null)),
      M = N.exports;
    (n["a"].config.productionTip = !1),
      (window.onload = function () {
        new n["a"]({
          render: function (e) {
            return e(M);
          },
        }).$mount("#app");
      });
  },
  "6a45": function (e, a, t) {
    "use strict";
    t("2667");
  },
  "6f38": function (e, a, t) {},
  "85ec": function (e, a, t) {},
  "8cc1": function (e, a, t) {
    "use strict";
    t("6f38");
  },
});
//# sourceMappingURL=app.6fb57bb3.js.map
