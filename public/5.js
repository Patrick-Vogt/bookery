(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Cars/CarsForm.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Cars/CarsForm.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
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
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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
  name: "CarsForm",
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
      details: null,
      item: null,
      form: this.getClearFormObject(),
      createdReadable: null,
      selectVendor: null,
      selectCarclass: null,
      file: null,
      dropFiles: []
    };
  },
  computed: {
    titleStack: function titleStack() {
      var lastCrumb;

      if (this.isProfileExists) {
        lastCrumb = this.form.name;
      } else {
        lastCrumb = "Fahrzeug bearbeiten";
      }

      return ["Admin", "Fahrzeuge", lastCrumb];
    },
    heroTitle: function heroTitle() {
      if (this.isProfileExists) {
        return this.item.manufacturer + " " + this.item.model;
      } else {
        return "Fahrzeug erstellen";
      }
    },
    formCardTitle: function formCardTitle() {
      if (this.isProfileExists) {
        return "Fahrzeug bearbeiten";
      } else {
        return "Neues Fahrzeug";
      }
    },
    isProfileExists: function isProfileExists() {
      return !!this.item;
    }
  },
  created: function created() {
    this.getData();
    this.getDetails();
  },
  methods: {
    onImageChange: function onImageChange(e) {
      console.log(e.target.file[0]);
      this.file = e.target.file[0];
    },
    deleteDropFile: function deleteDropFile(index) {
      this.dropFiles.splice(index, 1);
    },
    getClearFormObject: function getClearFormObject() {
      return {
        id: null,
        manufacturer: null,
        model: null,
        vendor_id: null,
        //vendorname: { companyname: null },
        carclass_id: null,
        //carclassname: { carclassname: null },
        possible_duration1: null,
        //possible_duration2: null,
        //possible_duration3: null,
        //possible_duration4: null,
        //possible_duration5: null,
        //possible_duration6: null,
        extra_1: null,
        //extra_2: null,
        //extra_3: null,
        //extra_4: null,
        //extra_5: null,
        //extra_6: null,
        //extra_7: null,
        //extra_8: null,
        //extra_9: null,
        //extra_10: null,
        //extra_11: null,
        //extra_12: null,
        //extra_13: null,
        //extra_14: null,
        //extra_15: null,
        monthlyprice: null,
        delivery_within: null,
        is_available: null,
        horsepower: null,
        kilowatt: null,
        fuel: null,
        number_doors: null,
        car_drive: null,
        gear: null,
        eu_norm: null,
        available_color1: null,
        //available_color2: null,
        //available_color3: null,
        //available_color4: null,
        //available_color5: null,
        carimage1: null,
        //carimage2: null,
        //carimage3: null,
        //carimage4: null,
        //carimage5: null,
        //cardescription: null,
        created_date: new Date(),
        created_mm_dd_yyyy: null
      };
    },
    getData: function getData() {
      var _this = this;

      if (this.id) {
        axios.get("/cars/".concat(this.id)).then(function (r) {
          _this.form = r.data.data["0"];
          _this.item = lodash_clone__WEBPACK_IMPORTED_MODULE_0___default()(r.data.data["0"]);
          _this.form.created_date = new Date(r.data.data.created_mm_dd_yyyy);
        })["catch"](function (e) {
          _this.item = null;

          _this.$buefy.toast.open({
            message: "Error: ".concat(e.message),
            type: "is-danger",
            queue: false
          });
        });
      }
    },
    getDetails: function getDetails() {
      var _this2 = this;

      this.isLoading = true;
      axios.get("/cars/detail").then(function (r) {
        _this2.isLoading = false;

        if (r.data && r.data.data) {
          if (r.data.data.length > _this2.perPage) {
            _this2.paginated = true;
          }

          _this2.details = r.data.data;
        }
      })["catch"](function (err) {
        _this2.isLoading = false;

        _this2.$buefy.toast.open({
          message: "Error: ".concat(err.message),
          type: "is-danger",
          queue: false
        });
      });
    },
    input: function input(v) {//this.createdReadable = moment(v).format('MMM D, Y').toString()
    },
    submit: function submit() {
      var _this3 = this;

      this.isLoading = true;
      var method = "post";
      var url = "/cars/store";

      if (this.id) {
        method = "patch";
        url = "/cars/".concat(this.id);
        axios({
          method: method,
          url: url,
          data: this.form //,
          //headers: { 'content-type': 'multipart/form-data' }

        }).then(function (r) {
          _this3.isLoading = false;

          if (!_this3.id && r.data.data.id) {
            _this3.$router.push({
              name: "cars.edit",
              params: {
                id: r.data.data.id
              }
            });

            _this3.$buefy.snackbar.open({
              message: "Erstellt",
              queue: false
            });
          } else {
            _this3.item = r.data.data;

            _this3.$buefy.snackbar.open({
              message: "Aktualisiert",
              queue: false
            });
          }
        })["catch"](function (e) {
          _this3.isLoading = false;

          _this3.$buefy.toast.open({
            message: "Error: ".concat(e.message),
            type: "is-danger",
            queue: false
          });
        });
      } else {
        var addImages = function addImages(item, index) {
          formData.append('image[]', item);
        }; //formData.append('image', this.dropFiles);


        var formData = new FormData();
        Object.entries(this.form).forEach(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
              key = _ref2[0],
              value = _ref2[1];

          return formData.append(key, value);
        });
        this.dropFiles.forEach(addImages);
        axios({
          method: method,
          url: url,
          data: formData,
          headers: {
            'content-type': 'multipart/form-data'
          }
        }).then(function (r) {
          _this3.isLoading = false;

          if (!_this3.id && r.data.data.id) {
            _this3.$router.push({
              name: "cars.edit",
              params: {
                id: r.data.data.id
              }
            });

            _this3.$buefy.snackbar.open({
              message: "Erstellt",
              queue: false
            });
          } else {
            _this3.item = r.data.data;

            _this3.$buefy.snackbar.open({
              message: "Aktualisiert",
              queue: false
            });
          }
        })["catch"](function (e) {
          _this3.isLoading = false;

          _this3.$buefy.toast.open({
            message: "Error: ".concat(e.message),
            type: "is-danger",
            queue: false
          });
        });
      }
    }
  },
  watch: {
    id: function id(newValue) {
      this.form = null;
      this.item = null;

      if (newValue) {
        this.getData();
        this.getDetails();
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Cars/CarsForm.vue?vue&type=template&id=4557ed84&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Cars/CarsForm.vue?vue&type=template&id=4557ed84& ***!
  \***********************************************************************************************************************************************************************************************************/
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
          _vm._v("\n      " + _vm._s(_vm.heroTitle) + "\n      "),
          _c(
            "router-link",
            {
              staticClass: "button",
              attrs: { slot: "right", to: "/cars/index" },
              slot: "right"
            },
            [_vm._v("\n        Fahrzeugübersicht\n      ")]
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
                  attrs: { title: _vm.formCardTitle, icon: "car" }
                },
                [
                  _c(
                    "form",
                    {
                      attrs: { id: "mainform" },
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
                            _c("b-field", { attrs: { label: "ID:" } }, [
                              _vm._v(_vm._s(_vm.id) + " ")
                            ]),
                            _vm._v(" "),
                            _c("b-field", { attrs: { label: "Erstellt:" } }, [
                              _vm._v(
                                "\n                " +
                                  _vm._s(_vm.form.date_added) +
                                  "\n              "
                              )
                            ]),
                            _vm._v(" "),
                            _c("hr")
                          ]
                        : _vm._e(),
                      _vm._v(" "),
                      _c("hr"),
                      _vm._v(" "),
                      _c(
                        "b-field",
                        { attrs: { label: "Hersteller", horizontal: "" } },
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
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-field",
                        { attrs: { label: "Modell", horizontal: "" } },
                        [
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
                      _c(
                        "b-field",
                        { attrs: { label: "Fahrzeugklasse", horizontal: "" } },
                        [
                          _c(
                            "b-select",
                            {
                              attrs: { placeholder: "auswählen" },
                              model: {
                                value: _vm.form.carclass_id,
                                callback: function($$v) {
                                  _vm.$set(_vm.form, "carclass_id", $$v)
                                },
                                expression: "form.carclass_id"
                              }
                            },
                            _vm._l(_vm.details.carclasslist, function(
                              carclass
                            ) {
                              return _c(
                                "option",
                                {
                                  key: carclass.id,
                                  domProps: { value: carclass.id }
                                },
                                [
                                  _vm._v(
                                    "\n                  " +
                                      _vm._s(carclass.carclassname) +
                                      "\n                "
                                  )
                                ]
                              )
                            }),
                            0
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("hr"),
                      _vm._v(" "),
                      _c(
                        "b-field",
                        { attrs: { label: "Händler", horizontal: "" } },
                        [
                          _c(
                            "b-select",
                            {
                              attrs: { placeholder: "auswählen" },
                              model: {
                                value: _vm.form.vendor_id,
                                callback: function($$v) {
                                  _vm.$set(_vm.form, "vendor_id", $$v)
                                },
                                expression: "form.vendor_id"
                              }
                            },
                            _vm._l(_vm.details.vendorlist, function(
                              companyname
                            ) {
                              return _c(
                                "option",
                                {
                                  key: companyname.id,
                                  attrs: { "v-bind:value": companyname.id },
                                  domProps: { value: companyname.id }
                                },
                                [
                                  _vm._v(
                                    "\n                  " +
                                      _vm._s(companyname.companyname) +
                                      "\n                "
                                  )
                                ]
                              )
                            }),
                            0
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("hr"),
                      _vm._v(" "),
                      _c(
                        "b-field",
                        {
                          attrs: {
                            label: "Möglich. Vertragslfz.",
                            horizontal: ""
                          }
                        },
                        [
                          _c("b-input", {
                            attrs: { required: "" },
                            model: {
                              value: _vm.form.possible_duration1,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "possible_duration1", $$v)
                              },
                              expression: "form.possible_duration1"
                            }
                          }),
                          _vm._v(" "),
                          _c("b-input", {
                            model: {
                              value: _vm.form.possible_duration2,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "possible_duration2", $$v)
                              },
                              expression: "form.possible_duration2"
                            }
                          }),
                          _vm._v(" "),
                          _c("b-input", {
                            model: {
                              value: _vm.form.possible_duration3,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "possible_duration3", $$v)
                              },
                              expression: "form.possible_duration3"
                            }
                          }),
                          _vm._v(" "),
                          _c("b-input", {
                            model: {
                              value: _vm.form.possible_duration4,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "possible_duration4", $$v)
                              },
                              expression: "form.possible_duration4"
                            }
                          }),
                          _vm._v(" "),
                          _c("b-input", {
                            model: {
                              value: _vm.form.possible_duration5,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "possible_duration5", $$v)
                              },
                              expression: "form.possible_duration5"
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
                        { attrs: { label: "Preis / Monat", horizontal: "" } },
                        [
                          _c("b-input", {
                            attrs: { required: "" },
                            model: {
                              value: _vm.form.monthlyprice,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "monthlyprice", $$v)
                              },
                              expression: "form.monthlyprice"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-field",
                        { attrs: { label: "Lieferdauer", horizontal: "" } },
                        [
                          _c("b-input", {
                            attrs: { required: "" },
                            model: {
                              value: _vm.form.delivery_within,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "delivery_within", $$v)
                              },
                              expression: "form.delivery_within"
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
                            label: "Listing aktiv (1 / 0)",
                            horizontal: ""
                          }
                        },
                        [
                          _c("b-input", {
                            attrs: { required: "" },
                            model: {
                              value: _vm.form.is_available,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "is_available", $$v)
                              },
                              expression: "form.is_available"
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
                        {
                          attrs: {
                            label: "KW / HP",
                            message: "Kilowatt / PS",
                            horizontal: ""
                          }
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
                      _c(
                        "b-field",
                        { attrs: { label: "Kraftstoff", horizontal: "" } },
                        [
                          _c(
                            "b-select",
                            {
                              attrs: { placeholder: "auswählen" },
                              model: {
                                value: _vm.form.fuel,
                                callback: function($$v) {
                                  _vm.$set(_vm.form, "fuel", $$v)
                                },
                                expression: "form.fuel"
                              }
                            },
                            [
                              _c("option", { attrs: { value: "Benzin" } }, [
                                _vm._v("Benzin")
                              ]),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "Diesel" } }, [
                                _vm._v("Diesel")
                              ]),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "Elektro" } }, [
                                _vm._v("Elektro")
                              ]),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "Hybrid" } }, [
                                _vm._v("Hybrid")
                              ])
                            ]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-field",
                        { attrs: { label: "Anz. Türen", horizontal: "" } },
                        [
                          _c("b-input", {
                            attrs: { required: "" },
                            model: {
                              value: _vm.form.number_doors,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "number_doors", $$v)
                              },
                              expression: "form.number_doors"
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
                          _c(
                            "b-select",
                            {
                              attrs: { placeholder: "auswählen" },
                              model: {
                                value: _vm.form.car_drive,
                                callback: function($$v) {
                                  _vm.$set(_vm.form, "car_drive", $$v)
                                },
                                expression: "form.car_drive"
                              }
                            },
                            [
                              _c(
                                "option",
                                { attrs: { value: "Heckantrieb" } },
                                [_vm._v("Heckantrieb")]
                              ),
                              _vm._v(" "),
                              _c(
                                "option",
                                { attrs: { value: "Frontantrieb" } },
                                [_vm._v("Frontantrieb")]
                              ),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "Allrad" } }, [
                                _vm._v("Allrad")
                              ])
                            ]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-field",
                        { attrs: { label: "Getriebe", horizontal: "" } },
                        [
                          _c(
                            "b-select",
                            {
                              attrs: { placeholder: "auswählen" },
                              model: {
                                value: _vm.form.gear,
                                callback: function($$v) {
                                  _vm.$set(_vm.form, "gear", $$v)
                                },
                                expression: "form.gear"
                              }
                            },
                            [
                              _c("option", { attrs: { value: "Manuell" } }, [
                                _vm._v("Manuell")
                              ]),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "Automatik" } }, [
                                _vm._v("Automatik")
                              ])
                            ]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-field",
                        { attrs: { label: "Euro-Norm", horizontal: "" } },
                        [
                          _c(
                            "b-select",
                            {
                              attrs: { placeholder: "auswählen" },
                              model: {
                                value: _vm.form.eu_norm,
                                callback: function($$v) {
                                  _vm.$set(_vm.form, "eu_norm", $$v)
                                },
                                expression: "form.eu_norm"
                              }
                            },
                            [
                              _c("option", { attrs: { value: "Euro 6" } }, [
                                _vm._v("Euro 6")
                              ]),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "Euro 5" } }, [
                                _vm._v("Euro 5")
                              ]),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "Euro 4" } }, [
                                _vm._v("Euro 4")
                              ]),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "Euro 3" } }, [
                                _vm._v("Euro 3")
                              ]),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "Euro 2" } }, [
                                _vm._v("Euro 2")
                              ]),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "Euro 1" } }, [
                                _vm._v("Euro 1")
                              ])
                            ]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("hr"),
                      _vm._v(" "),
                      _c(
                        "b-field",
                        {
                          attrs: { label: "Verfügbare Farben", horizontal: "" }
                        },
                        [
                          _c("b-input", {
                            attrs: { required: "" },
                            model: {
                              value: _vm.form.available_color1,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "available_color1", $$v)
                              },
                              expression: "form.available_color1"
                            }
                          }),
                          _vm._v(" "),
                          _c("b-input", {
                            model: {
                              value: _vm.form.available_color2,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "available_color2", $$v)
                              },
                              expression: "form.available_color2"
                            }
                          }),
                          _vm._v(" "),
                          _c("b-input", {
                            model: {
                              value: _vm.form.available_color3,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "available_color3", $$v)
                              },
                              expression: "form.available_color3"
                            }
                          }),
                          _vm._v(" "),
                          _c("b-input", {
                            model: {
                              value: _vm.form.available_color4,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "available_color4", $$v)
                              },
                              expression: "form.available_color4"
                            }
                          }),
                          _vm._v(" "),
                          _c("b-input", {
                            model: {
                              value: _vm.form.available_color5,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "available_color5", $$v)
                              },
                              expression: "form.available_color5"
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
                        {
                          attrs: {
                            label: "Ausstattungs-Extras",
                            horizontal: ""
                          }
                        },
                        [
                          _c("b-input", {
                            attrs: { required: "" },
                            model: {
                              value: _vm.form.extra_1,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "extra_1", $$v)
                              },
                              expression: "form.extra_1"
                            }
                          }),
                          _vm._v(" "),
                          _c("b-input", {
                            model: {
                              value: _vm.form.extra_2,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "extra_2", $$v)
                              },
                              expression: "form.extra_2"
                            }
                          }),
                          _vm._v(" "),
                          _c("b-input", {
                            model: {
                              value: _vm.form.extra_3,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "extra_3", $$v)
                              },
                              expression: "form.extra_3"
                            }
                          }),
                          _vm._v(" "),
                          _c("b-input", {
                            model: {
                              value: _vm.form.extra_4,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "extra_4", $$v)
                              },
                              expression: "form.extra_4"
                            }
                          }),
                          _vm._v(" "),
                          _c("b-input", {
                            model: {
                              value: _vm.form.extra_5,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "extra_5", $$v)
                              },
                              expression: "form.extra_5"
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
                            label: "Ausstattungs-Extras 2",
                            horizontal: ""
                          }
                        },
                        [
                          _c("b-input", {
                            model: {
                              value: _vm.form.extra_6,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "extra_6", $$v)
                              },
                              expression: "form.extra_6"
                            }
                          }),
                          _vm._v(" "),
                          _c("b-input", {
                            model: {
                              value: _vm.form.extra_7,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "extra_7", $$v)
                              },
                              expression: "form.extra_7"
                            }
                          }),
                          _vm._v(" "),
                          _c("b-input", {
                            model: {
                              value: _vm.form.extra_8,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "extra_8", $$v)
                              },
                              expression: "form.extra_8"
                            }
                          }),
                          _vm._v(" "),
                          _c("b-input", {
                            model: {
                              value: _vm.form.extra_9,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "extra_9", $$v)
                              },
                              expression: "form.extra_9"
                            }
                          }),
                          _vm._v(" "),
                          _c("b-input", {
                            model: {
                              value: _vm.form.extra_10,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "extra_10", $$v)
                              },
                              expression: "form.extra_10"
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
                            label: "Ausstattungs-Extras 3",
                            horizontal: ""
                          }
                        },
                        [
                          _c("b-input", {
                            model: {
                              value: _vm.form.extra_11,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "extra_11", $$v)
                              },
                              expression: "form.extra_11"
                            }
                          }),
                          _vm._v(" "),
                          _c("b-input", {
                            model: {
                              value: _vm.form.extra_12,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "extra_12", $$v)
                              },
                              expression: "form.extra_12"
                            }
                          }),
                          _vm._v(" "),
                          _c("b-input", {
                            model: {
                              value: _vm.form.extra_13,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "extra_13", $$v)
                              },
                              expression: "form.extra_13"
                            }
                          }),
                          _vm._v(" "),
                          _c("b-input", {
                            model: {
                              value: _vm.form.extra_14,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "extra_14", $$v)
                              },
                              expression: "form.extra_14"
                            }
                          }),
                          _vm._v(" "),
                          _c("b-input", {
                            model: {
                              value: _vm.form.extra_15,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "extra_15", $$v)
                              },
                              expression: "form.extra_15"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("hr"),
                      _vm._v(" "),
                      _c(
                        "section",
                        [
                          _c(
                            "b-field",
                            [
                              _c(
                                "b-upload",
                                {
                                  attrs: { multiple: "", "drag-drop": "" },
                                  model: {
                                    value: _vm.dropFiles,
                                    callback: function($$v) {
                                      _vm.dropFiles = $$v
                                    },
                                    expression: "dropFiles"
                                  }
                                },
                                [
                                  _c("section", { staticClass: "section" }, [
                                    _c(
                                      "div",
                                      {
                                        staticClass: "content has-text-centered"
                                      },
                                      [
                                        _c(
                                          "p",
                                          [
                                            _c("b-icon", {
                                              attrs: {
                                                icon: "upload",
                                                size: "is-large"
                                              }
                                            })
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c("p", [
                                          _vm._v(
                                            "Klicken oder bis zu 5 Fahrzeugbilder hineinlegen"
                                          )
                                        ])
                                      ]
                                    )
                                  ])
                                ]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "tags" },
                            _vm._l(_vm.dropFiles, function(file, index) {
                              return _c(
                                "span",
                                { key: index, staticClass: "tag is-primary" },
                                [
                                  _vm._v(
                                    "\n                " +
                                      _vm._s(file.name) +
                                      "\n                "
                                  ),
                                  _c("button", {
                                    staticClass: "delete is-small",
                                    attrs: { type: "button" },
                                    on: {
                                      click: function($event) {
                                        return _vm.deleteDropFile(index)
                                      }
                                    }
                                  })
                                ]
                              )
                            }),
                            0
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("hr"),
                      _vm._v(" "),
                      _c(
                        "b-field",
                        {
                          attrs: {
                            label: "Fahrzeugbeschreibung (HTML)",
                            message: "Beschreibung",
                            horizontal: ""
                          }
                        },
                        [
                          _c(
                            "b-field",
                            [
                              _c("b-input", {
                                attrs: {
                                  maxlength: "2000",
                                  type: "textarea",
                                  required: ""
                                },
                                model: {
                                  value: _vm.form.cardescription,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "cardescription", $$v)
                                  },
                                  expression: "form.cardescription"
                                }
                              })
                            ],
                            1
                          )
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
              )
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

/***/ "./resources/js/views/Cars/CarsForm.vue":
/*!**********************************************!*\
  !*** ./resources/js/views/Cars/CarsForm.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CarsForm_vue_vue_type_template_id_4557ed84___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CarsForm.vue?vue&type=template&id=4557ed84& */ "./resources/js/views/Cars/CarsForm.vue?vue&type=template&id=4557ed84&");
/* harmony import */ var _CarsForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CarsForm.vue?vue&type=script&lang=js& */ "./resources/js/views/Cars/CarsForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CarsForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CarsForm_vue_vue_type_template_id_4557ed84___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CarsForm_vue_vue_type_template_id_4557ed84___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Cars/CarsForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Cars/CarsForm.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/views/Cars/CarsForm.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CarsForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./CarsForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Cars/CarsForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CarsForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Cars/CarsForm.vue?vue&type=template&id=4557ed84&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/Cars/CarsForm.vue?vue&type=template&id=4557ed84& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CarsForm_vue_vue_type_template_id_4557ed84___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./CarsForm.vue?vue&type=template&id=4557ed84& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Cars/CarsForm.vue?vue&type=template&id=4557ed84&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CarsForm_vue_vue_type_template_id_4557ed84___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CarsForm_vue_vue_type_template_id_4557ed84___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);