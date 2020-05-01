webpackHotUpdate("static\\development\\pages\\products\\black.js",{

/***/ "./pages/products/black.js":
/*!*********************************!*\
  !*** ./pages/products/black.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");





var _jsxFileName = "C:\\Users\\Effy\\anti\\pages\\products\\black.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





var Black = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(Black, _Component);

  var _super = _createSuper(Black);

  function Black() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Black);

    _this = _super.call(this);

    _this.showModal = function () {
      _this.setState({
        show: true
      });
    };

    _this.hideModal = function () {
      _this.setState({
        show: false
      });
    };

    _this.imgRef = react__WEBPACK_IMPORTED_MODULE_7___default.a.createRef();
    _this.state = {
      show: false
    };
    _this.images = ["BLANK", "BLANK", "BLANK", "BLANK"];
    _this.imgModal;
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Black, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      this.showHideClassName = this.state.show ? "display-grid" : "display-none";
      return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_6__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 4
        }
      }, __jsx("div", {
        id: "modal",
        style: {
          transition: "all 1s"
        },
        className: "jsx-139610318" + " " + (this.showHideClassName || ""),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 5
        }
      }, __jsx("div", {
        onClick: this.hideModal,
        className: "jsx-139610318" + " " + "closeModal",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 6
        }
      }, "X"), __jsx("div", {
        className: "jsx-139610318" + " " + "display",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 6
        }
      }, __jsx("div", {
        style: {
          position: "relative"
        },
        className: "jsx-139610318",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 7
        }
      }, __jsx("h1", {
        style: {
          color: "black",
          fontSize: "24pt",
          fontWeight: "bold",
          position: "absolute",
          top: "50%",
          left: 0,
          right: 0,
          bottom: 0
        },
        className: "jsx-139610318" + " " + "price",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 8
        }
      }, "PLACEHOLDER"), __jsx("img", {
        style: {
          height: "750px",
          border: "2px solid black"
        },
        src: this.modalImage,
        className: "jsx-139610318",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 8
        }
      }))), __jsx("div", {
        style: {
          backgroundColor: "#101010",
          flexDirection: "column",
          padding: "5em"
        },
        className: "jsx-139610318" + " " + "display",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 6
        }
      }, __jsx("h1", {
        className: "jsx-139610318",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 7
        }
      }, "\\\\ Black --:--", " ", __jsx("p", {
        style: {
          textAlign: "center"
        },
        className: "jsx-139610318" + " " + "price",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 8
        }
      }, "$69.99 + tax")), __jsx("h2", {
        style: {
          textAlign: "left",
          padding: "1em"
        },
        className: "jsx-139610318" + " " + "price",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 7
        }
      }, "Sari modern influence sportswear trend commercial valuable. Artistic extraordinary xs make up breathable conservative imprint color effect. Embroidery pattern hand-made showcase. Value stock artistry conformity pastel pumps creative vintage cut cheap. Catwalk emphasis hippie hair trademark consumer influence tailored. Imprint cheap wardrobe. Impeccable illustration emphasis. Buttons beautiful zipper inspiration comfortable. Luxurious instagram revealing. Sari ensemble emphasis expirement impeccable modification trademark waistline minimalist."))), __jsx("div", {
        id: "products",
        className: "jsx-139610318",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 5
        }
      }, __jsx("div", {
        className: "jsx-139610318" + " " + "title",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 6
        }
      }, __jsx("h1", {
        className: "jsx-139610318" + " " + "ptitle",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 7
        }
      }, "\\\\ Black --:--", " ", __jsx("span", {
        className: "jsx-139610318" + " " + "price",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 8
        }
      }, __jsx("br", {
        className: "jsx-139610318",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 9
        }
      }), "$69.99 + tax"))), __jsx("div", {
        className: "jsx-139610318" + " " + "product",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 6
        }
      }, this.images.map(function (x) {
        return __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_8__["motion"].div, {
          initial: {
            opacity: 0
          },
          animate: {
            opacity: 1
          },
          exit: {
            opacity: 0
          },
          whileHover: {
            scale: 1.05
          },
          onTap: {
            scale: 0.95
          },
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 8
          }
        }, __jsx("img", {
          style: {
            maxWidth: "370px",
            cursor: "pointer"
          },
          key: x.toString(),
          ref: _this2.imgRef,
          src: "../".concat(x, ".png"),
          onClick: function onClick() {
            _this2.modalImage = "../".concat(x, ".png");

            _this2.showModal();
          },
          className: "jsx-139610318" + " " + "image",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 101,
            columnNumber: 9
          }
        }));
      }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "139610318",
        __self: this
      }, ".display-grid.jsx-139610318{opacity:1;display:grid;-webkit-transition:all 2s;transition:all 2s;}.display-none.jsx-139610318{display:none;opacity:0;-webkit-transition:all 2s;transition:all 2s;}.display.jsx-139610318{background-color:#f1eee9;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}#modal.jsx-139610318{height:100vh;width:100vw;position:fixed;top:0;left:0;z-index:3;background:#101010;grid-template-columns:50% 50%;}#products.jsx-139610318{width:100%;height:100vh;display:grid;grid-template-columns:auto;color:#f1eee9;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;}.product.jsx-139610318{display:grid;grid-template-columns:auto auto auto auto;grid-gap:auto;justify-items:center;}.image.jsx-139610318{max-width:370px;cursor:pointer;}h2.jsx-139610318{margin:0;pading:0;text-align:center;}.title.jsx-139610318{height:0;}.ptitle.jsx-139610318{margin:0;padding:2em 0;text-align:center;text-transform:uppercase;font-size:24pt;color:#f1eee9;}.price.jsx-139610318{font-size:12pt;text-align:center;font-weight:normal;}.closeModal.jsx-139610318{position:absolute;top:0;right:0;margin-top:1em;margin-right:2.5em;font-size:24pt;font-weight:bold;cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRWZmeVxcYW50aVxccGFnZXNcXHByb2R1Y3RzXFxibGFjay5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtSGdCLEFBR2lCLEFBS0csQUFLWSxBQU1aLEFBVUYsQUFRRSxBQU1HLEFBSVAsQUFLQSxBQUdBLEFBUU0sQUFLRyxTQXBCVCxBQUtWLEFBR2UsQ0FwREQsQ0EwQkEsRUFyQkosQUFXRyxBQWtCOEIsRUEwQnhCLENBcEJILEVBS0csQUFvQlosS0FoRVksQUFLQSxBQStDQSxDQTFCTCxBQXVDTCxDQXhESyxBQU9FLE1Bd0JoQixDQTBCZ0IsQ0FOSSxHQWZwQixDQWxCNEIsR0FWckIsQ0FvQ21CLEtBbkNsQixDQWlEWSxLQU5wQixDQTFDVyxFQWVJLFFBZEssQ0FRTCxFQTBCQyxBQWNBLENBbkVoQixBQUtBLEVBNkJzQixTQU5FLEdBMEJULEFBY0csQ0FoRGEsUUFlL0IsS0FvQkEsR0FjZ0IsQ0E1REksYUFZcEIsQ0FpREEsMEVBekNBLEtBbkJ3QixtR0FDeEIiLCJmaWxlIjoiQzpcXFVzZXJzXFxFZmZ5XFxhbnRpXFxwYWdlc1xccHJvZHVjdHNcXGJsYWNrLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xheW91dCc7XHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIHVzZVJlZiB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xyXG5cclxuY2xhc3MgQmxhY2sgZXh0ZW5kcyBDb21wb25lbnQge1x0XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgICB0aGlzLnNob3dNb2RhbCA9ICgpID0+IHtcclxuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHsgc2hvdzogdHJ1ZSB9KTtcdFx0XHRcdFxyXG5cdFx0XHR9O1xyXG5cdFx0XHR0aGlzLmhpZGVNb2RhbCA9ICgpID0+IHtcclxuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHsgc2hvdzogZmFsc2UgfSk7XHJcblx0XHRcdH07XHJcblx0XHR0aGlzLmltZ1JlZiA9IFJlYWN0LmNyZWF0ZVJlZigpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHsgc2hvdzogZmFsc2UgfTtcclxuXHRcdHRoaXMuaW1hZ2VzID0gW1wiQkxBTktcIiwgXCJCTEFOS1wiLCBcIkJMQU5LXCIsIFwiQkxBTktcIl07XHJcblx0XHR0aGlzLmltZ01vZGFsO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgdGhpcy5zaG93SGlkZUNsYXNzTmFtZSA9IHRoaXMuc3RhdGUuc2hvdyA/IFwiZGlzcGxheS1ncmlkXCIgOiBcImRpc3BsYXktbm9uZVwiO1xyXG4gICAgcmV0dXJuIChcclxuXHRcdFx0PExheW91dD5cclxuXHRcdFx0XHQ8ZGl2XHJcblx0XHRcdFx0XHRjbGFzc05hbWU9e3RoaXMuc2hvd0hpZGVDbGFzc05hbWV9XHJcblx0XHRcdFx0XHRpZD1cIm1vZGFsXCJcclxuXHRcdFx0XHRcdHN0eWxlPXt7IHRyYW5zaXRpb246IFwiYWxsIDFzXCIgfX1cclxuXHRcdFx0XHQ+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNsb3NlTW9kYWxcIiBvbkNsaWNrPXt0aGlzLmhpZGVNb2RhbH0+XHJcblx0XHRcdFx0XHRcdFhcclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkaXNwbGF5XCI+XHJcblx0XHRcdFx0XHRcdDxkaXYgc3R5bGU9e3sgcG9zaXRpb246IFwicmVsYXRpdmVcIiB9fT5cclxuXHRcdFx0XHRcdFx0XHQ8aDFcclxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cInByaWNlXCJcclxuXHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGNvbG9yOiBcImJsYWNrXCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcdGZvbnRTaXplOiBcIjI0cHRcIixcclxuXHRcdFx0XHRcdFx0XHRcdFx0Zm9udFdlaWdodDogXCJib2xkXCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcdHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcdHRvcDogXCI1MCVcIixcclxuXHRcdFx0XHRcdFx0XHRcdFx0bGVmdDogMCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0cmlnaHQ6IDAsXHJcblx0XHRcdFx0XHRcdFx0XHRcdGJvdHRvbTogMCxcclxuXHRcdFx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0UExBQ0VIT0xERVJcclxuXHRcdFx0XHRcdFx0XHQ8L2gxPlxyXG5cdFx0XHRcdFx0XHRcdDxpbWdcclxuXHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7IGhlaWdodDogXCI3NTBweFwiLCBib3JkZXI6IFwiMnB4IHNvbGlkIGJsYWNrXCIgfX1cclxuXHRcdFx0XHRcdFx0XHRcdHNyYz17dGhpcy5tb2RhbEltYWdlfVxyXG5cdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2XHJcblx0XHRcdFx0XHRcdHN0eWxlPXt7XHJcblx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiBcIiMxMDEwMTBcIixcclxuXHRcdFx0XHRcdFx0XHRmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxyXG5cdFx0XHRcdFx0XHRcdHBhZGRpbmc6IFwiNWVtXCIsXHJcblx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImRpc3BsYXlcIlxyXG5cdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHQ8aDE+XHJcblx0XHRcdFx0XHRcdFx0XFxcXCBCbGFjayAtLTotLXtcIiBcIn1cclxuXHRcdFx0XHRcdFx0XHQ8cCBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0gY2xhc3NOYW1lPVwicHJpY2VcIj5cclxuXHRcdFx0XHRcdFx0XHRcdCQ2OS45OSArIHRheFxyXG5cdFx0XHRcdFx0XHRcdDwvcD5cclxuXHRcdFx0XHRcdFx0PC9oMT5cclxuXHRcdFx0XHRcdFx0PGgyIHN0eWxlPXt7IHRleHRBbGlnbjogXCJsZWZ0XCIsIHBhZGRpbmc6IFwiMWVtXCIgfX0gY2xhc3NOYW1lPVwicHJpY2VcIj5cclxuXHRcdFx0XHRcdFx0XHRTYXJpIG1vZGVybiBpbmZsdWVuY2Ugc3BvcnRzd2VhciB0cmVuZCBjb21tZXJjaWFsIHZhbHVhYmxlLlxyXG5cdFx0XHRcdFx0XHRcdEFydGlzdGljIGV4dHJhb3JkaW5hcnkgeHMgbWFrZSB1cCBicmVhdGhhYmxlIGNvbnNlcnZhdGl2ZSBpbXByaW50XHJcblx0XHRcdFx0XHRcdFx0Y29sb3IgZWZmZWN0LiBFbWJyb2lkZXJ5IHBhdHRlcm4gaGFuZC1tYWRlIHNob3djYXNlLiBWYWx1ZSBzdG9ja1xyXG5cdFx0XHRcdFx0XHRcdGFydGlzdHJ5IGNvbmZvcm1pdHkgcGFzdGVsIHB1bXBzIGNyZWF0aXZlIHZpbnRhZ2UgY3V0IGNoZWFwLlxyXG5cdFx0XHRcdFx0XHRcdENhdHdhbGsgZW1waGFzaXMgaGlwcGllIGhhaXIgdHJhZGVtYXJrIGNvbnN1bWVyIGluZmx1ZW5jZVxyXG5cdFx0XHRcdFx0XHRcdHRhaWxvcmVkLiBJbXByaW50IGNoZWFwIHdhcmRyb2JlLiBJbXBlY2NhYmxlIGlsbHVzdHJhdGlvblxyXG5cdFx0XHRcdFx0XHRcdGVtcGhhc2lzLiBCdXR0b25zIGJlYXV0aWZ1bCB6aXBwZXIgaW5zcGlyYXRpb24gY29tZm9ydGFibGUuXHJcblx0XHRcdFx0XHRcdFx0THV4dXJpb3VzIGluc3RhZ3JhbSByZXZlYWxpbmcuIFNhcmkgZW5zZW1ibGUgZW1waGFzaXMgZXhwaXJlbWVudFxyXG5cdFx0XHRcdFx0XHRcdGltcGVjY2FibGUgbW9kaWZpY2F0aW9uIHRyYWRlbWFyayB3YWlzdGxpbmUgbWluaW1hbGlzdC5cclxuXHRcdFx0XHRcdFx0PC9oMj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgaWQ9XCJwcm9kdWN0c1wiPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPlxyXG5cdFx0XHRcdFx0XHQ8aDEgY2xhc3NOYW1lPVwicHRpdGxlXCI+XHJcblx0XHRcdFx0XHRcdFx0XFxcXCBCbGFjayAtLTotLXtcIiBcIn1cclxuXHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJwcmljZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGJyIC8+XHJcblx0XHRcdFx0XHRcdFx0XHQkNjkuOTkgKyB0YXhcclxuXHRcdFx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0XHRcdDwvaDE+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdFwiPlxyXG5cdFx0XHRcdFx0XHR7dGhpcy5pbWFnZXMubWFwKCh4KSA9PiAoXHJcblx0XHRcdFx0XHRcdFx0PG1vdGlvbi5kaXZcclxuXHRcdFx0XHRcdFx0XHRcdGluaXRpYWw9e3sgb3BhY2l0eTogMCB9fVxyXG5cdFx0XHRcdFx0XHRcdFx0YW5pbWF0ZT17eyBvcGFjaXR5OiAxIH19XHJcblx0XHRcdFx0XHRcdFx0XHRleGl0PXt7IG9wYWNpdHk6IDAgfX1cclxuXHRcdFx0XHRcdFx0XHRcdHdoaWxlSG92ZXI9e3sgc2NhbGU6IDEuMDUgfX1cclxuXHRcdFx0XHRcdFx0XHRcdG9uVGFwPXt7IHNjYWxlOiAwLjk1IH19XHJcblx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0PGltZ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJpbWFnZVwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7IG1heFdpZHRoOiBcIjM3MHB4XCIsIGN1cnNvcjogXCJwb2ludGVyXCIgfX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0a2V5PXt4LnRvU3RyaW5nKCl9XHJcblx0XHRcdFx0XHRcdFx0XHRcdHJlZj17dGhpcy5pbWdSZWZ9XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNyYz17YC4uLyR7eH0ucG5nYH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMubW9kYWxJbWFnZSA9IGAuLi8ke3h9LnBuZ2A7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5zaG93TW9kYWwoKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0PC9tb3Rpb24uZGl2PlxyXG5cdFx0XHRcdFx0XHQpKX1cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxzdHlsZSBqc3g+e2BcclxuXHRcdFx0XHRcdC5kaXNwbGF5LWdyaWQge1xyXG5cdFx0XHRcdFx0XHRvcGFjaXR5OiAxO1xyXG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBncmlkO1xyXG5cdFx0XHRcdFx0XHR0cmFuc2l0aW9uOiBhbGwgMnM7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQuZGlzcGxheS1ub25lIHtcclxuXHRcdFx0XHRcdFx0ZGlzcGxheTogbm9uZTtcclxuXHRcdFx0XHRcdFx0b3BhY2l0eTowO1xyXG5cdFx0XHRcdFx0XHR0cmFuc2l0aW9uOiBhbGwgMnM7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQuZGlzcGxheSB7XHJcblx0XHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICNmMWVlZTk7XHJcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0I21vZGFsIHtcclxuXHRcdFx0XHRcdFx0aGVpZ2h0OiAxMDB2aDtcclxuXHRcdFx0XHRcdFx0d2lkdGg6IDEwMHZ3O1xyXG5cdFx0XHRcdFx0XHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0XHRcdFx0XHRcdHRvcDogMDtcclxuXHRcdFx0XHRcdFx0bGVmdDogMDtcclxuXHRcdFx0XHRcdFx0ei1pbmRleDogMztcclxuXHRcdFx0XHRcdFx0YmFja2dyb3VuZDogIzEwMTAxMDtcclxuXHRcdFx0XHRcdFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1MCUgNTAlO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0I3Byb2R1Y3RzIHtcclxuXHRcdFx0XHRcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRcdFx0XHRcdGhlaWdodDogMTAwdmg7XHJcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGdyaWQ7XHJcblx0XHRcdFx0XHRcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0bztcclxuXHRcdFx0XHRcdFx0Y29sb3I6ICNmMWVlZTk7XHJcblx0XHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0LnByb2R1Y3Qge1xyXG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBncmlkO1xyXG5cdFx0XHRcdFx0XHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0byBhdXRvIGF1dG87XHJcblx0XHRcdFx0XHRcdGdyaWQtZ2FwOiBhdXRvO1xyXG5cdFx0XHRcdFx0XHRqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQuaW1hZ2Uge1xyXG5cdFx0XHRcdFx0XHRtYXgtd2lkdGg6IDM3MHB4O1xyXG5cdFx0XHRcdFx0XHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRoMiB7XHJcblx0XHRcdFx0XHRcdG1hcmdpbjogMDtcclxuXHRcdFx0XHRcdFx0cGFkaW5nOiAwO1xyXG5cdFx0XHRcdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQudGl0bGUge1xyXG5cdFx0XHRcdFx0XHRoZWlnaHQ6IDA7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQucHRpdGxlIHtcclxuXHRcdFx0XHRcdFx0bWFyZ2luOiAwO1xyXG5cdFx0XHRcdFx0XHRwYWRkaW5nOiAyZW0gMDtcclxuXHRcdFx0XHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0XHRcdFx0XHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDI0cHQ7XHJcblx0XHRcdFx0XHRcdGNvbG9yOiAjZjFlZWU5O1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0LnByaWNlIHtcclxuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxMnB0O1xyXG5cdFx0XHRcdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQuY2xvc2VNb2RhbCB7XHJcblx0XHRcdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdFx0XHRcdFx0dG9wOiAwO1xyXG5cdFx0XHRcdFx0XHRyaWdodDogMDtcclxuXHRcdFx0XHRcdFx0bWFyZ2luLXRvcDogMWVtO1xyXG5cdFx0XHRcdFx0XHRtYXJnaW4tcmlnaHQ6IDIuNWVtO1xyXG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDI0cHQ7XHJcblx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdFx0XHRcdFx0XHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0YH08L3N0eWxlPlxyXG5cdFx0XHQ8L0xheW91dD5cclxuXHRcdCk7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmxhY2siXX0= */\n/*@ sourceURL=C:\\\\Users\\\\Effy\\\\anti\\\\pages\\\\products\\\\black.js */"));
    }
  }]);

  return Black;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Black);

/***/ })

})
//# sourceMappingURL=black.js.5fb90ae7e65cf3fe5ef4.hot-update.js.map