(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Notification.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Notification.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Notification',
  data: function data() {
    return {
      isDismissed: false
    };
  },
  methods: {
    dismiss: function dismiss() {
      this.isDismissed = true;
      this.$buefy.snackbar.open({
        message: 'Dismissed',
        queue: false
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Orders/OrdersForm.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Orders/OrdersForm.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_clone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/clone */ "./node_modules/lodash/clone.js");
/* harmony import */ var lodash_clone__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_clone__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_TitleBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/TitleBar */ "./resources/js/components/TitleBar.vue");
/* harmony import */ var _components_HeroBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/HeroBar */ "./resources/js/components/HeroBar.vue");
/* harmony import */ var _components_Tiles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Tiles */ "./resources/js/components/Tiles.vue");
/* harmony import */ var _components_CardComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/CardComponent */ "./resources/js/components/CardComponent.vue");
/* harmony import */ var _components_FilePicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/FilePicker */ "./resources/js/components/FilePicker.vue");
/* harmony import */ var _components_Notification__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/Notification */ "./resources/js/components/Notification.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'OrdersForm',
  components: {
    FilePicker: _components_FilePicker__WEBPACK_IMPORTED_MODULE_5__["default"],
    CardComponent: _components_CardComponent__WEBPACK_IMPORTED_MODULE_4__["default"],
    Tiles: _components_Tiles__WEBPACK_IMPORTED_MODULE_3__["default"],
    HeroBar: _components_HeroBar__WEBPACK_IMPORTED_MODULE_2__["default"],
    TitleBar: _components_TitleBar__WEBPACK_IMPORTED_MODULE_1__["default"],
    Notification: _components_Notification__WEBPACK_IMPORTED_MODULE_6__["default"]
  },
  props: {
    id: {
      "default": null
    }
  },
  data: function data() {
    return {
      isLoading: false,
      item: null,
      form: this.getClearFormObject(),
      createdReadable: null
    };
  },
  computed: {
    titleStack: function titleStack() {
      var lastCrumb;

      if (this.isProfileExists) {
        lastCrumb = this.form.name;
      } else {
        lastCrumb = 'New client';
      }

      return ['Admin', 'Orders', lastCrumb];
    },
    heroTitle: function heroTitle() {
      if (this.isProfileExists) {
        return "Bestellung: " + this.item.order_id + ', ' + this.item.manufacturer + ' ' + this.item.model;
      } else {
        return 'Create Client';
      }
    },
    formCardTitle: function formCardTitle() {
      if (this.isProfileExists) {
        return 'Kunde: ' + this.item.customer_name + ' ' + this.item.customer_lastname;
      } else {
        return 'Kunde: ' + this.item.customer_name + ' ' + this.item.customer_lastname;
      }
    },
    isProfileExists: function isProfileExists() {
      return !!this.item;
    }
  },
  created: function created() {
    this.getData();
  },
  methods: {
    getClearFormObject: function getClearFormObject() {
      return {
        id: null,
        belongs_to_customer: null,
        ordered_car: null,
        ordered_color: null,
        ordered_duration: null,
        positive_liquidity: null,
        order_created: null,
        order_delivered: null,
        order_status: null,
        contract_start: null,
        contract_end: null,
        updated_at: null,
        created_at: new Date(),
        order_id: null,
        manufacturer: null,
        model: null,
        carclass_id: null,
        companyname: null,
        street: null,
        streetnumber: null,
        postalcode: null,
        city: null,
        phone: null,
        email: null,
        contactperson: null,
        customer_name: null,
        customer_lastname: null,
        customer_street: null,
        customer_postalcode: null,
        customer_city: null,
        customer_phonenumber: null,
        customer_email: null
      };
    },
    getData: function getData() {
      var _this = this;

      if (this.id) {
        axios.get("/orders/".concat(this.id)).then(function (r) {
          _this.form = r.data.data['0'];
          _this.item = lodash_clone__WEBPACK_IMPORTED_MODULE_0___default()(r.data.data['0']);
          _this.form.created_date = new Date(r.data.data.created_mm_dd_yyyy);
        })["catch"](function (e) {
          _this.item = null;

          _this.$buefy.toast.open({
            message: "Error: ".concat(e.message),
            type: 'is-danger',
            queue: false
          });
        });
      }
    },
    input: function input(v) {//this.createdReadable = moment(v).format('MMM D, Y').toString()
    },
    submit: function submit() {
      var _this2 = this;

      this.isLoading = true;
      var method = 'patch';
      var url = "/orders/".concat(this.id);
      console.log('ID: ' + this.id);
      axios({
        method: method,
        url: url,
        data: this.form
      }).then(function (r) {
        _this2.isLoading = false;

        if (!_this2.id && r.data.data.id) {
          _this2.$router.push({
            name: 'orders.edit',
            params: {
              id: r.data.data.id
            }
          });

          _this2.$buefy.snackbar.open({
            message: 'Created',
            queue: false
          });
        } else {
          _this2.item = r.data.data;

          _this2.$buefy.snackbar.open({
            message: 'Updated',
            queue: false
          });
        }
      })["catch"](function (e) {
        _this2.isLoading = false;

        _this2.$buefy.toast.open({
          message: "Error: ".concat(e.message),
          type: 'is-danger',
          queue: false
        });
      });
    }
  },
  watch: {
    id: function id(newValue) {
      this.form = this.getClearFormObject();
      this.item = null;

      if (newValue) {
        this.getData();
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Notification.vue?vue&type=template&id=6a4ce154&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Notification.vue?vue&type=template&id=6a4ce154& ***!
  \***************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return !_vm.isDismissed
    ? _c("div", { staticClass: "notification" }, [
        _c("div", { staticClass: "level" }, [
          _c("div", { staticClass: "level-left" }, [
            _c("div", { staticClass: "level-item" }, [_vm._t("default")], 2)
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "level-right" }, [
            _c(
              "button",
              {
                staticClass: "button is-small is-white",
                attrs: { type: "button" },
                on: { click: _vm.dismiss }
              },
              [_vm._v("Dismiss")]
            )
          ])
        ])
      ])
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Orders/OrdersForm.vue?vue&type=template&id=a15d2b78&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Orders/OrdersForm.vue?vue&type=template&id=a15d2b78& ***!
  \***************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "hero-bar",
        [
          _vm._v("\n     " + _vm._s(_vm.heroTitle) + " \n     "),
          _c(
            "router-link",
            {
              staticClass: "button",
              attrs: { slot: "right", to: "/orders/index" },
              slot: "right"
            },
            [_vm._v("\n       Bestellungen - Details\n     ")]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "section",
        { staticClass: "section is-main-section" },
        [
          _c(
            "tiles",
            [
              _c(
                "card-component",
                {
                  staticClass: "tile is-child",
                  attrs: { title: _vm.formCardTitle, icon: "account-edit" }
                },
                [
                  _c(
                    "form",
                    {
                      on: {
                        submit: function($event) {
                          $event.preventDefault()
                          return _vm.submit($event)
                        }
                      }
                    },
                    [
                      _vm.id
                        ? [
                            _c(
                              "b-field",
                              {
                                attrs: {
                                  horizontal: "",
                                  label: "Kundennummer:"
                                }
                              },
                              [
                                _vm._v(
                                  _vm._s(_vm.form.belongs_to_customer) +
                                    "\n             "
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "b-field",
                              {
                                attrs: {
                                  horizontal: "",
                                  label: "Bestellnummer:"
                                }
                              },
                              [
                                _vm._v(
                                  _vm._s(_vm.form.order_id) + "\n             "
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "b-field",
                              {
                                attrs: { horizontal: "", label: "Mietdauer:" }
                              },
                              [
                                _vm._v(
                                  _vm._s(_vm.form.ordered_duration) +
                                    " Monate\n             "
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "b-field",
                              {
                                attrs: { horizontal: "", label: "Summe mtl.:" }
                              },
                              [
                                _vm._v(
                                  _vm._s(_vm.form.monthlyprice) +
                                    " €\n             "
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "b-field",
                              { attrs: { horizontal: "", label: "Erstellt:" } },
                              [_vm._v(_vm._s(_vm.form.order_created))]
                            ),
                            _vm._v(" "),
                            _c(
                              "b-field",
                              { attrs: { horizontal: "", label: "Status:" } },
                              [
                                _c(
                                  "b-select",
                                  {
                                    attrs: { placeholder: "auswählen" },
                                    model: {
                                      value: _vm.form.order_status,
                                      callback: function($$v) {
                                        _vm.$set(_vm.form, "order_status", $$v)
                                      },
                                      expression: "form.order_status"
                                    }
                                  },
                                  [
                                    _c(
                                      "option",
                                      { attrs: { value: "Offen" } },
                                      [_vm._v("Offen")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "option",
                                      {
                                        attrs: {
                                          "v-value": _vm.form.order_status
                                        }
                                      },
                                      [_vm._v(_vm._s(_vm.form.order_status))]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "option",
                                      { attrs: { value: "in Bearbeitung" } },
                                      [_vm._v("in Bearbeitung")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "option",
                                      { attrs: { value: "Versendet" } },
                                      [_vm._v("Versendet")]
                                    )
                                  ]
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c("hr")
                          ]
                        : _vm._e(),
                      _vm._v(" "),
                      _c("hr"),
                      _vm._v(" "),
                      _c(
                        "b-field",
                        {
                          attrs: {
                            label: "Fahrzeug",
                            message: "Fahrzeug",
                            horizontal: ""
                          }
                        },
                        [
                          _c("b-input", {
                            attrs: { required: "" },
                            model: {
                              value: _vm.form.manufacturer,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "manufacturer", $$v)
                              },
                              expression: "form.manufacturer"
                            }
                          }),
                          _vm._v(" "),
                          _c("b-input", {
                            attrs: { required: "" },
                            model: {
                              value: _vm.form.model,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "model", $$v)
                              },
                              expression: "form.model"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("hr"),
                      _vm._v(" "),
                      _c(
                        "b-field",
                        { attrs: { label: "Fhzg-Klasse", horizontal: "" } },
                        [
                          _c("b-input", {
                            attrs: { required: "" },
                            model: {
                              value: _vm.form.carclassname,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "carclassname", $$v)
                              },
                              expression: "form.carclassname"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-field",
                        { attrs: { label: "Farbe", horizontal: "" } },
                        [
                          _c("b-input", {
                            attrs: { required: "" },
                            model: {
                              value: _vm.form.ordered_color,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "ordered_color", $$v)
                              },
                              expression: "form.ordered_color"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-field",
                        { attrs: { label: "Getriebe", horizontal: "" } },
                        [
                          _c("b-input", {
                            attrs: { required: "" },
                            model: {
                              value: _vm.form.gear,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "gear", $$v)
                              },
                              expression: "form.gear"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-field",
                        { attrs: { label: "Antrieb", horizontal: "" } },
                        [
                          _c("b-input", {
                            attrs: { required: "" },
                            model: {
                              value: _vm.form.car_drive,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "car_drive", $$v)
                              },
                              expression: "form.car_drive"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-field",
                        { attrs: { label: "Kraftstoff", horizontal: "" } },
                        [
                          _c("b-input", {
                            attrs: { required: "" },
                            model: {
                              value: _vm.form.fuel,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "fuel", $$v)
                              },
                              expression: "form.fuel"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-field",
                        {
                          attrs: { label: "Leistung (KW / PS)", horizontal: "" }
                        },
                        [
                          _c("b-input", {
                            attrs: { required: "" },
                            model: {
                              value: _vm.form.kilowatt,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "kilowatt", $$v)
                              },
                              expression: "form.kilowatt"
                            }
                          }),
                          _vm._v(" "),
                          _c("b-input", {
                            attrs: { required: "" },
                            model: {
                              value: _vm.form.horsepower,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "horsepower", $$v)
                              },
                              expression: "form.horsepower"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("hr"),
                      _vm._v(" "),
                      _c(
                        "b-field",
                        { attrs: { horizontal: "" } },
                        [
                          _c(
                            "b-button",
                            {
                              attrs: {
                                type: "is-primary",
                                loading: _vm.isLoading,
                                "native-type": "submit"
                              }
                            },
                            [_vm._v("Speichern")]
                          )
                        ],
                        1
                      )
                    ],
                    2
                  )
                ]
              ),
              _vm._v(" "),
              _vm.isProfileExists
                ? _c(
                    "card-component",
                    {
                      staticClass: "tile is-child",
                      attrs: { title: "Verkäufer", icon: "account" }
                    },
                    [
                      _c(
                        "b-field",
                        {
                          attrs: {
                            label: "Händler",
                            message: "Händler",
                            horizontal: ""
                          }
                        },
                        [
                          _c("b-input", {
                            attrs: { required: "" },
                            model: {
                              value: _vm.form.companyname,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "companyname", $$v)
                              },
                              expression: "form.companyname"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-field",
                        {
                          attrs: {
                            label: "Kontakt",
                            message: "Kontakt",
                            horizontal: ""
                          }
                        },
                        [
                          _c("b-input", {
                            attrs: { required: "" },
                            model: {
                              value: _vm.form.contactperson,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "contactperson", $$v)
                              },
                              expression: "form.contactperson"
                            }
                          }),
                          _vm._v(" "),
                          _c("b-input", {
                            attrs: { required: "" },
                            model: {
                              value: _vm.form.phone,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "phone", $$v)
                              },
                              expression: "form.phone"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-field",
                        {
                          attrs: {
                            label: "Anschrift",
                            message: "Anschrift",
                            horizontal: ""
                          }
                        },
                        [
                          _c("b-input", {
                            attrs: { required: "" },
                            model: {
                              value: _vm.form.street,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "street", $$v)
                              },
                              expression: "form.street"
                            }
                          }),
                          _vm._v(" "),
                          _c("b-input", {
                            attrs: { required: "" },
                            model: {
                              value: _vm.form.streetnumber,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "streetnumber", $$v)
                              },
                              expression: "form.streetnumber"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-field",
                        { attrs: { horizontal: "" } },
                        [
                          _c("b-input", {
                            attrs: { required: "" },
                            model: {
                              value: _vm.form.postalcode,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "postalcode", $$v)
                              },
                              expression: "form.postalcode"
                            }
                          }),
                          _vm._v(" "),
                          _c("b-input", {
                            attrs: { required: "" },
                            model: {
                              value: _vm.form.city,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "city", $$v)
                              },
                              expression: "form.city"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("hr"),
                      _vm._v(" "),
                      _vm.isProfileExists
                        ? _c(
                            "card-component",
                            {
                              staticClass: "tile is-child",
                              attrs: {
                                title: "Lieferanschrift",
                                icon: "account"
                              }
                            },
                            [
                              _c(
                                "b-field",
                                {
                                  attrs: {
                                    label: "Lieferanschr.",
                                    horizontal: ""
                                  }
                                },
                                [
                                  _c("b-input", {
                                    attrs: { required: "" },
                                    model: {
                                      value: _vm.form.customer_name,
                                      callback: function($$v) {
                                        _vm.$set(_vm.form, "customer_name", $$v)
                                      },
                                      expression: "form.customer_name"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("b-input", {
                                    attrs: { required: "" },
                                    model: {
                                      value: _vm.form.customer_lastname,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.form,
                                          "customer_lastname",
                                          $$v
                                        )
                                      },
                                      expression: "form.customer_lastname"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "b-field",
                                {
                                  attrs: {
                                    label: "Lieferanschr.",
                                    horizontal: ""
                                  }
                                },
                                [
                                  _c("b-input", {
                                    attrs: { required: "" },
                                    model: {
                                      value: _vm.form.customer_street,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.form,
                                          "customer_street",
                                          $$v
                                        )
                                      },
                                      expression: "form.customer_street"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("b-input", {
                                    attrs: { required: "" },
                                    model: {
                                      value: _vm.form.customer_postalcode,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.form,
                                          "customer_postalcode",
                                          $$v
                                        )
                                      },
                                      expression: "form.customer_postalcode"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("b-input", {
                                    attrs: { required: "" },
                                    model: {
                                      value: _vm.form.customer_city,
                                      callback: function($$v) {
                                        _vm.$set(_vm.form, "customer_city", $$v)
                                      },
                                      expression: "form.customer_city"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "b-field",
                                { attrs: { label: "Kontakt", horizontal: "" } },
                                [
                                  _c("b-input", {
                                    attrs: { required: "" },
                                    model: {
                                      value: _vm.form.customer_email,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.form,
                                          "customer_email",
                                          $$v
                                        )
                                      },
                                      expression: "form.customer_email"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("b-input", {
                                    attrs: { required: "" },
                                    model: {
                                      value: _vm.form.customer_phonenumber,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.form,
                                          "customer_phonenumber",
                                          $$v
                                        )
                                      },
                                      expression: "form.customer_phonenumber"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c("hr"),
                              _vm._v(" "),
                              _vm.isProfileExists
                                ? _c(
                                    "card-component",
                                    {
                                      staticClass: "tile is-child",
                                      attrs: {
                                        title: "Zahlungsdaten",
                                        icon: "account"
                                      }
                                    },
                                    [
                                      _c(
                                        "b-field",
                                        {
                                          attrs: {
                                            label: "Bank",
                                            message: "Bank",
                                            horizontal: ""
                                          }
                                        },
                                        [
                                          _c("b-input", {
                                            attrs: { required: "" },
                                            model: {
                                              value: _vm.form.bankname,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.form,
                                                  "bankname",
                                                  $$v
                                                )
                                              },
                                              expression: "form.bankname"
                                            }
                                          })
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "b-field",
                                        {
                                          attrs: {
                                            label: "IBAN",
                                            message: "IBAN",
                                            horizontal: ""
                                          }
                                        },
                                        [
                                          _c("b-input", {
                                            attrs: { required: "" },
                                            model: {
                                              value: _vm.form.iban,
                                              callback: function($$v) {
                                                _vm.$set(_vm.form, "iban", $$v)
                                              },
                                              expression: "form.iban"
                                            }
                                          })
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "b-field",
                                        {
                                          attrs: {
                                            label: "BIC",
                                            message: "BIC",
                                            horizontal: ""
                                          }
                                        },
                                        [
                                          _c("b-input", {
                                            attrs: { required: "" },
                                            model: {
                                              value: _vm.form.bic,
                                              callback: function($$v) {
                                                _vm.$set(_vm.form, "bic", $$v)
                                              },
                                              expression: "form.bic"
                                            }
                                          })
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  )
                                : _vm._e()
                            ],
                            1
                          )
                        : _vm._e()
                    ],
                    1
                  )
                : _vm._e()
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Notification.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/Notification.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Notification_vue_vue_type_template_id_6a4ce154___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Notification.vue?vue&type=template&id=6a4ce154& */ "./resources/js/components/Notification.vue?vue&type=template&id=6a4ce154&");
/* harmony import */ var _Notification_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Notification.vue?vue&type=script&lang=js& */ "./resources/js/components/Notification.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Notification_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Notification_vue_vue_type_template_id_6a4ce154___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Notification_vue_vue_type_template_id_6a4ce154___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Notification.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Notification.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/Notification.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Notification_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Notification.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Notification.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Notification_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Notification.vue?vue&type=template&id=6a4ce154&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/Notification.vue?vue&type=template&id=6a4ce154& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Notification_vue_vue_type_template_id_6a4ce154___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Notification.vue?vue&type=template&id=6a4ce154& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Notification.vue?vue&type=template&id=6a4ce154&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Notification_vue_vue_type_template_id_6a4ce154___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Notification_vue_vue_type_template_id_6a4ce154___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/Orders/OrdersForm.vue":
/*!**************************************************!*\
  !*** ./resources/js/views/Orders/OrdersForm.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _OrdersForm_vue_vue_type_template_id_a15d2b78___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OrdersForm.vue?vue&type=template&id=a15d2b78& */ "./resources/js/views/Orders/OrdersForm.vue?vue&type=template&id=a15d2b78&");
/* harmony import */ var _OrdersForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OrdersForm.vue?vue&type=script&lang=js& */ "./resources/js/views/Orders/OrdersForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _OrdersForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _OrdersForm_vue_vue_type_template_id_a15d2b78___WEBPACK_IMPORTED_MODULE_0__["render"],
  _OrdersForm_vue_vue_type_template_id_a15d2b78___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Orders/OrdersForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Orders/OrdersForm.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/views/Orders/OrdersForm.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OrdersForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./OrdersForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Orders/OrdersForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OrdersForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Orders/OrdersForm.vue?vue&type=template&id=a15d2b78&":
/*!*********************************************************************************!*\
  !*** ./resources/js/views/Orders/OrdersForm.vue?vue&type=template&id=a15d2b78& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OrdersForm_vue_vue_type_template_id_a15d2b78___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./OrdersForm.vue?vue&type=template&id=a15d2b78& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Orders/OrdersForm.vue?vue&type=template&id=a15d2b78&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OrdersForm_vue_vue_type_template_id_a15d2b78___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OrdersForm_vue_vue_type_template_id_a15d2b78___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);