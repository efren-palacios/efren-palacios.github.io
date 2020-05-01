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
        className: "jsx-1344614016" + " " + (this.showHideClassName || ""),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 5
        }
      }, __jsx("div", {
        onClick: this.hideModal,
        className: "jsx-1344614016" + " " + "closeModal",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 6
        }
      }, "X"), __jsx("div", {
        className: "jsx-1344614016" + " " + "display",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 6
        }
      }, __jsx("div", {
        style: {
          position: "relative"
        },
        className: "jsx-1344614016",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29,
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
        className: "jsx-1344614016" + " " + "price",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 8
        }
      }, "PLACEHOLDER"), __jsx("img", {
        style: {
          height: "750px",
          border: "2px solid black"
        },
        src: this.modalImage,
        className: "jsx-1344614016",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 8
        }
      }))), __jsx("div", {
        style: {
          backgroundColor: "#101010",
          flexDirection: "column",
          padding: "5em"
        },
        className: "jsx-1344614016" + " " + "display",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 6
        }
      }, __jsx("h1", {
        className: "jsx-1344614016",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 7
        }
      }, "\\\\ Black --:--", " ", __jsx("p", {
        style: {
          textAlign: "center"
        },
        className: "jsx-1344614016" + " " + "price",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 8
        }
      }, "$69.99 + tax")), __jsx("h2", {
        style: {
          textAlign: "left",
          padding: "1em"
        },
        className: "jsx-1344614016" + " " + "price",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 7
        }
      }, "Sari modern influence sportswear trend commercial valuable. Artistic extraordinary xs make up breathable conservative imprint color effect. Embroidery pattern hand-made showcase. Value stock artistry conformity pastel pumps creative vintage cut cheap. Catwalk emphasis hippie hair trademark consumer influence tailored. Imprint cheap wardrobe. Impeccable illustration emphasis. Buttons beautiful zipper inspiration comfortable. Luxurious instagram revealing. Sari ensemble emphasis expirement impeccable modification trademark waistline minimalist."))), __jsx("div", {
        id: "products",
        className: "jsx-1344614016",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 5
        }
      }, __jsx("div", {
        className: "jsx-1344614016" + " " + "title",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 6
        }
      }, __jsx("h1", {
        className: "jsx-1344614016" + " " + "ptitle",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 7
        }
      }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_8__["motion"].span, {
        initial: {
          opacity: 0,
          y: -50
        },
        animate: {
          opacity: 1,
          y: 0
        },
        transition: {
          duration: 0.5
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 8
        }
      }, "\\\\ Black --:--", " "), __jsx("span", {
        className: "jsx-1344614016" + " " + "price",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 8
        }
      }, __jsx("br", {
        className: "jsx-1344614016",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 9
        }
      }), "$69.99 + tax"))), __jsx("div", {
        className: "jsx-1344614016" + " " + "product",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94,
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
            lineNumber: 96,
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
          className: "jsx-1344614016" + " " + "image",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 103,
            columnNumber: 9
          }
        }));
      }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "1344614016",
        __self: this
      }, ".display-grid.jsx-1344614016{display:grid;}.display-none.jsx-1344614016{display:none;}.display.jsx-1344614016{background-color:#f1eee9;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}#modal.jsx-1344614016{height:100vh;width:100vw;position:fixed;top:0;left:0;z-index:3;background:#101010;grid-template-columns:50% 50%;-webkit-transition:all 1s;transition:all 1s;}#products.jsx-1344614016{width:100%;height:100vh;display:grid;grid-template-columns:auto;color:#f1eee9;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;}.product.jsx-1344614016{display:grid;grid-template-columns:auto auto auto auto;grid-gap:auto;justify-items:center;}.image.jsx-1344614016{max-width:370px;cursor:pointer;}h2.jsx-1344614016{margin:0;pading:0;text-align:center;}.title.jsx-1344614016{height:0;}.ptitle.jsx-1344614016{margin:0;padding:2em 0;text-align:center;text-transform:uppercase;font-size:24pt;color:#f1eee9;}.price.jsx-1344614016{font-size:12pt;text-align:center;font-weight:normal;}.closeModal.jsx-1344614016{position:absolute;top:0;right:0;margin-top:1em;margin-right:2.5em;font-size:24pt;font-weight:bold;cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRWZmeVxcYW50aVxccGFnZXNcXHByb2R1Y3RzXFxibGFjay5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxSGdCLEFBR29CLEFBR0EsQUFHWSxBQU1aLEFBV0YsQUFRRSxBQU1HLEFBSVAsQUFLQSxBQUdBLEFBUU0sQUFLRyxTQXBCVCxBQUtWLEFBR2UsRUExQkQsRUF2QmQsQUFHQSxBQVNhLEFBbUI4QixFQTBCeEIsQ0FwQkgsRUFLRyxBQW9CWixLQVpZLENBMUJMLEFBdUNMLENBekRLLEFBT0UsTUF5QmhCLENBMEJnQixDQU5JLEdBZnBCLENBbEI0QixHQVhyQixDQXFDbUIsS0FwQ2xCLENBa0RZLEtBTnBCLENBM0NXLEVBZ0JJLFFBZkssQ0FTTCxFQTBCQyxBQWNBLEdBakNNLFNBTkUsR0EwQlQsQUFjRyxDQWpEYSxRQWdCL0IsS0FvQkEsR0FjZ0IsQ0E3REksYUFZRCxDQWtEbkIsMkNBakRBLCtCQVFBLEtBcEJ3QixtR0FDeEIiLCJmaWxlIjoiQzpcXFVzZXJzXFxFZmZ5XFxhbnRpXFxwYWdlc1xccHJvZHVjdHNcXGJsYWNrLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xheW91dCc7XHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIHVzZVJlZiB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xyXG5cclxuY2xhc3MgQmxhY2sgZXh0ZW5kcyBDb21wb25lbnQge1x0XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgICB0aGlzLnNob3dNb2RhbCA9ICgpID0+IHtcclxuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHsgc2hvdzogdHJ1ZSB9KTtcdFx0XHRcdFxyXG5cdFx0XHR9O1xyXG5cdFx0XHR0aGlzLmhpZGVNb2RhbCA9ICgpID0+IHtcclxuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHsgc2hvdzogZmFsc2UgfSk7XHJcblx0XHRcdH07XHJcblx0XHR0aGlzLmltZ1JlZiA9IFJlYWN0LmNyZWF0ZVJlZigpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHsgc2hvdzogZmFsc2UgfTtcclxuXHRcdHRoaXMuaW1hZ2VzID0gW1wiQkxBTktcIiwgXCJCTEFOS1wiLCBcIkJMQU5LXCIsIFwiQkxBTktcIl07XHJcblx0XHR0aGlzLmltZ01vZGFsO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgdGhpcy5zaG93SGlkZUNsYXNzTmFtZSA9IHRoaXMuc3RhdGUuc2hvdyA/IFwiZGlzcGxheS1ncmlkXCIgOiBcImRpc3BsYXktbm9uZVwiO1xyXG4gICAgcmV0dXJuIChcclxuXHRcdFx0PExheW91dD5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17dGhpcy5zaG93SGlkZUNsYXNzTmFtZX0gaWQ9XCJtb2RhbFwiPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjbG9zZU1vZGFsXCIgb25DbGljaz17dGhpcy5oaWRlTW9kYWx9PlxyXG5cdFx0XHRcdFx0XHRYXHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZGlzcGxheVwiPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiBcInJlbGF0aXZlXCIgfX0+XHJcblx0XHRcdFx0XHRcdFx0PGgxXHJcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJwcmljZVwiXHJcblx0XHRcdFx0XHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRjb2xvcjogXCJibGFja1wiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRmb250U2l6ZTogXCIyNHB0XCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcdGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR0b3A6IFwiNTAlXCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcdGxlZnQ6IDAsXHJcblx0XHRcdFx0XHRcdFx0XHRcdHJpZ2h0OiAwLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRib3R0b206IDAsXHJcblx0XHRcdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdFBMQUNFSE9MREVSXHJcblx0XHRcdFx0XHRcdFx0PC9oMT5cclxuXHRcdFx0XHRcdFx0XHQ8aW1nXHJcblx0XHRcdFx0XHRcdFx0XHRzdHlsZT17eyBoZWlnaHQ6IFwiNzUwcHhcIiwgYm9yZGVyOiBcIjJweCBzb2xpZCBibGFja1wiIH19XHJcblx0XHRcdFx0XHRcdFx0XHRzcmM9e3RoaXMubW9kYWxJbWFnZX1cclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdlxyXG5cdFx0XHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0XHRcdGJhY2tncm91bmRDb2xvcjogXCIjMTAxMDEwXCIsXHJcblx0XHRcdFx0XHRcdFx0ZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcclxuXHRcdFx0XHRcdFx0XHRwYWRkaW5nOiBcIjVlbVwiLFxyXG5cdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJkaXNwbGF5XCJcclxuXHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0PGgxPlxyXG5cdFx0XHRcdFx0XHRcdFxcXFwgQmxhY2sgLS06LS17XCIgXCJ9XHJcblx0XHRcdFx0XHRcdFx0PHAgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiIH19IGNsYXNzTmFtZT1cInByaWNlXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQkNjkuOTkgKyB0YXhcclxuXHRcdFx0XHRcdFx0XHQ8L3A+XHJcblx0XHRcdFx0XHRcdDwvaDE+XHJcblx0XHRcdFx0XHRcdDxoMiBzdHlsZT17eyB0ZXh0QWxpZ246IFwibGVmdFwiLCBwYWRkaW5nOiBcIjFlbVwiIH19IGNsYXNzTmFtZT1cInByaWNlXCI+XHJcblx0XHRcdFx0XHRcdFx0U2FyaSBtb2Rlcm4gaW5mbHVlbmNlIHNwb3J0c3dlYXIgdHJlbmQgY29tbWVyY2lhbCB2YWx1YWJsZS5cclxuXHRcdFx0XHRcdFx0XHRBcnRpc3RpYyBleHRyYW9yZGluYXJ5IHhzIG1ha2UgdXAgYnJlYXRoYWJsZSBjb25zZXJ2YXRpdmUgaW1wcmludFxyXG5cdFx0XHRcdFx0XHRcdGNvbG9yIGVmZmVjdC4gRW1icm9pZGVyeSBwYXR0ZXJuIGhhbmQtbWFkZSBzaG93Y2FzZS4gVmFsdWUgc3RvY2tcclxuXHRcdFx0XHRcdFx0XHRhcnRpc3RyeSBjb25mb3JtaXR5IHBhc3RlbCBwdW1wcyBjcmVhdGl2ZSB2aW50YWdlIGN1dCBjaGVhcC5cclxuXHRcdFx0XHRcdFx0XHRDYXR3YWxrIGVtcGhhc2lzIGhpcHBpZSBoYWlyIHRyYWRlbWFyayBjb25zdW1lciBpbmZsdWVuY2VcclxuXHRcdFx0XHRcdFx0XHR0YWlsb3JlZC4gSW1wcmludCBjaGVhcCB3YXJkcm9iZS4gSW1wZWNjYWJsZSBpbGx1c3RyYXRpb25cclxuXHRcdFx0XHRcdFx0XHRlbXBoYXNpcy4gQnV0dG9ucyBiZWF1dGlmdWwgemlwcGVyIGluc3BpcmF0aW9uIGNvbWZvcnRhYmxlLlxyXG5cdFx0XHRcdFx0XHRcdEx1eHVyaW91cyBpbnN0YWdyYW0gcmV2ZWFsaW5nLiBTYXJpIGVuc2VtYmxlIGVtcGhhc2lzIGV4cGlyZW1lbnRcclxuXHRcdFx0XHRcdFx0XHRpbXBlY2NhYmxlIG1vZGlmaWNhdGlvbiB0cmFkZW1hcmsgd2Fpc3RsaW5lIG1pbmltYWxpc3QuXHJcblx0XHRcdFx0XHRcdDwvaDI+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGlkPVwicHJvZHVjdHNcIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5cclxuXHRcdFx0XHRcdFx0PGgxIGNsYXNzTmFtZT1cInB0aXRsZVwiPlxyXG5cdFx0XHRcdFx0XHRcdDxtb3Rpb24uc3BhblxyXG5cdFx0XHRcdFx0XHRcdFx0aW5pdGlhbD17eyBvcGFjaXR5OiAwLCB5OiAtNTAgfX1cclxuXHRcdFx0XHRcdFx0XHRcdGFuaW1hdGU9e3sgb3BhY2l0eTogMSwgeTogMCB9fVxyXG5cdFx0XHRcdFx0XHRcdFx0dHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC41IH19XHJcblx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XFxcXCBCbGFjayAtLTotLXtcIiBcIn1cclxuXHRcdFx0XHRcdFx0XHQ8L21vdGlvbi5zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInByaWNlXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8YnIgLz5cclxuXHRcdFx0XHRcdFx0XHRcdCQ2OS45OSArIHRheFxyXG5cdFx0XHRcdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0PC9oMT5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0XCI+XHJcblx0XHRcdFx0XHRcdHt0aGlzLmltYWdlcy5tYXAoKHgpID0+IChcclxuXHRcdFx0XHRcdFx0XHQ8bW90aW9uLmRpdlxyXG5cdFx0XHRcdFx0XHRcdFx0aW5pdGlhbD17eyBvcGFjaXR5OiAwIH19XHJcblx0XHRcdFx0XHRcdFx0XHRhbmltYXRlPXt7IG9wYWNpdHk6IDEgfX1cclxuXHRcdFx0XHRcdFx0XHRcdGV4aXQ9e3sgb3BhY2l0eTogMCB9fVxyXG5cdFx0XHRcdFx0XHRcdFx0d2hpbGVIb3Zlcj17eyBzY2FsZTogMS4wNSB9fVxyXG5cdFx0XHRcdFx0XHRcdFx0b25UYXA9e3sgc2NhbGU6IDAuOTUgfX1cclxuXHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aW1nXHJcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImltYWdlXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3sgbWF4V2lkdGg6IFwiMzcwcHhcIiwgY3Vyc29yOiBcInBvaW50ZXJcIiB9fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRrZXk9e3gudG9TdHJpbmcoKX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0cmVmPXt0aGlzLmltZ1JlZn1cclxuXHRcdFx0XHRcdFx0XHRcdFx0c3JjPXtgLi4vJHt4fS5wbmdgfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5tb2RhbEltYWdlID0gYC4uLyR7eH0ucG5nYDtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnNob3dNb2RhbCgpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHQ8L21vdGlvbi5kaXY+XHJcblx0XHRcdFx0XHRcdCkpfVxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PHN0eWxlIGpzeD57YFxyXG5cdFx0XHRcdFx0LmRpc3BsYXktZ3JpZCB7XHJcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGdyaWQ7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQuZGlzcGxheS1ub25lIHtcclxuXHRcdFx0XHRcdFx0ZGlzcGxheTogbm9uZTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdC5kaXNwbGF5IHtcclxuXHRcdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogI2YxZWVlOTtcclxuXHRcdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQjbW9kYWwge1xyXG5cdFx0XHRcdFx0XHRoZWlnaHQ6IDEwMHZoO1xyXG5cdFx0XHRcdFx0XHR3aWR0aDogMTAwdnc7XHJcblx0XHRcdFx0XHRcdHBvc2l0aW9uOiBmaXhlZDtcclxuXHRcdFx0XHRcdFx0dG9wOiAwO1xyXG5cdFx0XHRcdFx0XHRsZWZ0OiAwO1xyXG5cdFx0XHRcdFx0XHR6LWluZGV4OiAzO1xyXG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjMTAxMDEwO1xyXG5cdFx0XHRcdFx0XHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwJSA1MCU7XHJcblx0XHRcdFx0XHRcdHRyYW5zaXRpb246IGFsbCAxcztcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdCNwcm9kdWN0cyB7XHJcblx0XHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHRcdFx0XHRoZWlnaHQ6IDEwMHZoO1xyXG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBncmlkO1xyXG5cdFx0XHRcdFx0XHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG87XHJcblx0XHRcdFx0XHRcdGNvbG9yOiAjZjFlZWU5O1xyXG5cdFx0XHRcdFx0XHRhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdC5wcm9kdWN0IHtcclxuXHRcdFx0XHRcdFx0ZGlzcGxheTogZ3JpZDtcclxuXHRcdFx0XHRcdFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG8gYXV0byBhdXRvO1xyXG5cdFx0XHRcdFx0XHRncmlkLWdhcDogYXV0bztcclxuXHRcdFx0XHRcdFx0anVzdGlmeS1pdGVtczogY2VudGVyO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0LmltYWdlIHtcclxuXHRcdFx0XHRcdFx0bWF4LXdpZHRoOiAzNzBweDtcclxuXHRcdFx0XHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0aDIge1xyXG5cdFx0XHRcdFx0XHRtYXJnaW46IDA7XHJcblx0XHRcdFx0XHRcdHBhZGluZzogMDtcclxuXHRcdFx0XHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0LnRpdGxlIHtcclxuXHRcdFx0XHRcdFx0aGVpZ2h0OiAwO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0LnB0aXRsZSB7XHJcblx0XHRcdFx0XHRcdG1hcmdpbjogMDtcclxuXHRcdFx0XHRcdFx0cGFkZGluZzogMmVtIDA7XHJcblx0XHRcdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdFx0XHRcdFx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAyNHB0O1xyXG5cdFx0XHRcdFx0XHRjb2xvcjogI2YxZWVlOTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdC5wcmljZSB7XHJcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTJwdDtcclxuXHRcdFx0XHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0XHRcdFx0XHRmb250LXdlaWdodDogbm9ybWFsO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0LmNsb3NlTW9kYWwge1xyXG5cdFx0XHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdFx0XHRcdHRvcDogMDtcclxuXHRcdFx0XHRcdFx0cmlnaHQ6IDA7XHJcblx0XHRcdFx0XHRcdG1hcmdpbi10b3A6IDFlbTtcclxuXHRcdFx0XHRcdFx0bWFyZ2luLXJpZ2h0OiAyLjVlbTtcclxuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAyNHB0O1xyXG5cdFx0XHRcdFx0XHRmb250LXdlaWdodDogYm9sZDtcclxuXHRcdFx0XHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdGB9PC9zdHlsZT5cclxuXHRcdFx0PC9MYXlvdXQ+XHJcblx0XHQpO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJsYWNrIl19 */\n/*@ sourceURL=C:\\\\Users\\\\Effy\\\\anti\\\\pages\\\\products\\\\black.js */"));
    }
  }]);

  return Black;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Black);

/***/ })

})
//# sourceMappingURL=black.js.5e35b0d438a05ce014bc.hot-update.js.map