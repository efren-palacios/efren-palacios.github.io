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
        className: "jsx-1792873955" + " " + (this.showHideClassName || ""),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 5
        }
      }, __jsx("div", {
        onClick: this.hideModal,
        className: "jsx-1792873955" + " " + "closeModal",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 6
        }
      }, "X"), __jsx("div", {
        className: "jsx-1792873955" + " " + "display",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 6
        }
      }, __jsx("img", {
        style: {
          height: "750px"
        },
        src: this.modalImage,
        className: "jsx-1792873955",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 7
        }
      })), __jsx("div", {
        style: {
          backgroundColor: "#101010",
          flexDirection: "column",
          padding: "5em"
        },
        className: "jsx-1792873955" + " " + "display",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 6
        }
      }, __jsx("h1", {
        className: "jsx-1792873955",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 7
        }
      }, "\\\\ Black --:--", " ", __jsx("span", {
        className: "jsx-1792873955" + " " + "price",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 8
        }
      }, __jsx("br", {
        className: "jsx-1792873955",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 9
        }
      }), "$69.99 + tax")), __jsx("h2", {
        style: {
          textAlign: "left",
          padding: "1em"
        },
        className: "jsx-1792873955" + " " + "price",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 7
        }
      }, "Sari modern influence sportswear trend commercial valuable. Artistic extraordinary xs make up breathable conservative imprint color effect. Embroidery pattern hand-made showcase. Value stock artistry conformity pastel pumps creative vintage cut cheap. Catwalk emphasis hippie hair trademark consumer influence tailored. Imprint cheap wardrobe. Impeccable illustration emphasis. Buttons beautiful zipper inspiration comfortable. Luxurious instagram revealing. Sari ensemble emphasis expirement impeccable modification trademark waistline minimalist."))), __jsx("div", {
        id: "products",
        className: "jsx-1792873955",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 5
        }
      }, __jsx("div", {
        className: "jsx-1792873955" + " " + "title",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 6
        }
      }, __jsx("h1", {
        className: "jsx-1792873955" + " " + "ptitle",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 7
        }
      }, "\\\\ Black --:--", " ", __jsx("span", {
        className: "jsx-1792873955" + " " + "price",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 8
        }
      }, __jsx("br", {
        className: "jsx-1792873955",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 9
        }
      }), "$69.99 + tax"))), __jsx("div", {
        className: "jsx-1792873955" + " " + "product",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69,
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
            scale: .95
          },
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 8
          }
        }, __jsx("img", {
          style: {
            maxWidth: '370px',
            cursor: 'pointer'
          },
          key: x.toString(),
          ref: _this2.imgRef,
          src: "../".concat(x, ".png"),
          onClick: function onClick() {
            _this2.modalImage = "../".concat(x, ".png");

            _this2.showModal();
          },
          className: "jsx-1792873955" + " " + "image",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 8
          }
        }));
      }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "1792873955",
        __self: this
      }, ".display-grid.jsx-1792873955{display:grid;}.display-none.jsx-1792873955{display:none;}.display.jsx-1792873955{background-color:#f1eee9;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}#modal.jsx-1792873955{height:100vh;width:100vw;position:fixed;top:0;left:0;z-index:3;background:#101010;grid-template-columns:50% 50%;}#products.jsx-1792873955{width:100%;height:100vh;display:grid;grid-template-columns:auto;color:#f1eee9;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;}.product.jsx-1792873955{display:grid;grid-template-columns:auto auto auto auto;grid-gap:auto;justify-items:center;}.image.jsx-1792873955{max-width:370px;cursor:pointer;border:1px solid black;}h2.jsx-1792873955{margin:0;pading:0;text-align:center;}.title.jsx-1792873955{height:0;}.ptitle.jsx-1792873955{margin:0;padding:2em 0;text-align:center;text-transform:uppercase;font-size:24pt;color:#f1eee9;}.price.jsx-1792873955{font-size:12pt;text-align:center;font-weight:normal;}.closeModal.jsx-1792873955{position:absolute;top:0;right:0;margin-top:1em;margin-right:2.5em;font-size:24pt;font-weight:bold;cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRWZmeVxcYW50aVxccGFnZXNcXHByb2R1Y3RzXFxibGFjay5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyRmdCLEFBR29CLEFBR0EsQUFHWSxBQU1aLEFBVUYsQUFRRSxBQU1HLEFBS1AsQUFLQSxBQUdBLEFBUU0sQUFLRyxTQXBCVCxBQUtWLEFBR2UsRUEzQkQsRUF0QmQsQUFHQSxBQVNhLEFBa0I4QixFQTJCeEIsQ0FyQkgsRUFNRyxBQW9CWixLQVpZLENBM0JMLEFBd0NMLENBekRLLEFBT0UsTUF3QlEsQ0EyQlIsQ0FOSSxHQWZwQixDQW5CNEIsR0FWckIsQ0FxQ21CLEtBcENsQixDQWtEWSxLQU5wQixDQTNDVyxDQXNCWCxDQVBlLFFBZEssQ0FRTCxFQTJCQyxBQWNBLEdBbENNLFNBTkUsR0EyQlQsQUFjRyxDQWpEYSxRQWUvQixLQXFCQSxHQWNnQixDQTdESSxhQVlwQixDQWtEQSwwRUExQ0EsS0FuQndCLG1HQUN4QiIsImZpbGUiOiJDOlxcVXNlcnNcXEVmZnlcXGFudGlcXHBhZ2VzXFxwcm9kdWN0c1xcYmxhY2suanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0JztcclxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XHJcblxyXG5jbGFzcyBCbGFjayBleHRlbmRzIENvbXBvbmVudCB7XHRcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICAgIHRoaXMuc2hvd01vZGFsID0gKCkgPT4ge1xyXG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoeyBzaG93OiB0cnVlIH0pO1x0XHRcdFx0XHJcblx0XHRcdH07XHJcblx0XHRcdHRoaXMuaGlkZU1vZGFsID0gKCkgPT4ge1xyXG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoeyBzaG93OiBmYWxzZSB9KTtcclxuXHRcdFx0fTtcclxuXHRcdHRoaXMuaW1nUmVmID0gUmVhY3QuY3JlYXRlUmVmKCk7XHJcbiAgICB0aGlzLnN0YXRlID0geyBzaG93OiBmYWxzZSB9O1xyXG5cdFx0dGhpcy5pbWFnZXMgPSBbXCJCTEFOS1wiLCBcIkJMQU5LXCIsIFwiQkxBTktcIiwgXCJCTEFOS1wiXTtcclxuXHRcdHRoaXMuaW1nTW9kYWw7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICB0aGlzLnNob3dIaWRlQ2xhc3NOYW1lID0gdGhpcy5zdGF0ZS5zaG93ID8gXCJkaXNwbGF5LWdyaWRcIiA6IFwiZGlzcGxheS1ub25lXCI7XHJcbiAgICByZXR1cm4gKFxyXG5cdFx0XHQ8TGF5b3V0PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXt0aGlzLnNob3dIaWRlQ2xhc3NOYW1lfSBpZD1cIm1vZGFsXCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNsb3NlTW9kYWxcIiBvbkNsaWNrPXt0aGlzLmhpZGVNb2RhbH0+XHJcblx0XHRcdFx0XHRcdFhcclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkaXNwbGF5XCI+XHJcblx0XHRcdFx0XHRcdDxpbWcgc3R5bGU9e3sgaGVpZ2h0OiBcIjc1MHB4XCIgfX0gc3JjPXt0aGlzLm1vZGFsSW1hZ2V9IC8+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXZcclxuXHRcdFx0XHRcdFx0c3R5bGU9e3tcclxuXHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IFwiIzEwMTAxMFwiLFxyXG5cdFx0XHRcdFx0XHRcdGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXHJcblx0XHRcdFx0XHRcdFx0cGFkZGluZzogXCI1ZW1cIixcclxuXHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiZGlzcGxheVwiXHJcblx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdDxoMT5cclxuXHRcdFx0XHRcdFx0XHRcXFxcIEJsYWNrIC0tOi0te1wiIFwifVxyXG5cdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInByaWNlXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8YnIgLz5cclxuXHRcdFx0XHRcdFx0XHRcdCQ2OS45OSArIHRheFxyXG5cdFx0XHRcdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0PC9oMT5cclxuXHRcdFx0XHRcdFx0PGgyIHN0eWxlPXt7IHRleHRBbGlnbjogXCJsZWZ0XCIsIHBhZGRpbmc6IFwiMWVtXCIgfX0gY2xhc3NOYW1lPVwicHJpY2VcIj5cclxuXHRcdFx0XHRcdFx0XHRTYXJpIG1vZGVybiBpbmZsdWVuY2Ugc3BvcnRzd2VhciB0cmVuZCBjb21tZXJjaWFsIHZhbHVhYmxlLlxyXG5cdFx0XHRcdFx0XHRcdEFydGlzdGljIGV4dHJhb3JkaW5hcnkgeHMgbWFrZSB1cCBicmVhdGhhYmxlIGNvbnNlcnZhdGl2ZSBpbXByaW50XHJcblx0XHRcdFx0XHRcdFx0Y29sb3IgZWZmZWN0LiBFbWJyb2lkZXJ5IHBhdHRlcm4gaGFuZC1tYWRlIHNob3djYXNlLiBWYWx1ZSBzdG9ja1xyXG5cdFx0XHRcdFx0XHRcdGFydGlzdHJ5IGNvbmZvcm1pdHkgcGFzdGVsIHB1bXBzIGNyZWF0aXZlIHZpbnRhZ2UgY3V0IGNoZWFwLlxyXG5cdFx0XHRcdFx0XHRcdENhdHdhbGsgZW1waGFzaXMgaGlwcGllIGhhaXIgdHJhZGVtYXJrIGNvbnN1bWVyIGluZmx1ZW5jZVxyXG5cdFx0XHRcdFx0XHRcdHRhaWxvcmVkLiBJbXByaW50IGNoZWFwIHdhcmRyb2JlLiBJbXBlY2NhYmxlIGlsbHVzdHJhdGlvblxyXG5cdFx0XHRcdFx0XHRcdGVtcGhhc2lzLiBCdXR0b25zIGJlYXV0aWZ1bCB6aXBwZXIgaW5zcGlyYXRpb24gY29tZm9ydGFibGUuXHJcblx0XHRcdFx0XHRcdFx0THV4dXJpb3VzIGluc3RhZ3JhbSByZXZlYWxpbmcuIFNhcmkgZW5zZW1ibGUgZW1waGFzaXMgZXhwaXJlbWVudFxyXG5cdFx0XHRcdFx0XHRcdGltcGVjY2FibGUgbW9kaWZpY2F0aW9uIHRyYWRlbWFyayB3YWlzdGxpbmUgbWluaW1hbGlzdC5cclxuXHRcdFx0XHRcdFx0PC9oMj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgaWQ9XCJwcm9kdWN0c1wiPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPlxyXG5cdFx0XHRcdFx0XHQ8aDEgY2xhc3NOYW1lPVwicHRpdGxlXCI+XHJcblx0XHRcdFx0XHRcdFx0XFxcXCBCbGFjayAtLTotLXtcIiBcIn1cclxuXHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJwcmljZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGJyIC8+XHJcblx0XHRcdFx0XHRcdFx0XHQkNjkuOTkgKyB0YXhcclxuXHRcdFx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0XHRcdDwvaDE+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdFwiPlxyXG5cdFx0XHRcdFx0XHR7dGhpcy5pbWFnZXMubWFwKCh4KSA9PiAoXHJcblx0XHRcdFx0XHRcdFx0PG1vdGlvbi5kaXYgXHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdCAgaW5pdGlhbD17e29wYWNpdHk6MH19XHJcblx0XHRcdFx0XHRcdFx0XHRhbmltYXRlPXt7b3BhY2l0eToxfX1cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdGV4aXQ9e3tvcGFjaXR5OjB9fVxyXG5cdFx0XHRcdFx0XHRcdFx0d2hpbGVIb3Zlcj17e3NjYWxlOjEuMDV9fVxyXG5cdFx0XHRcdFx0XHRcdFx0b25UYXA9e3tzY2FsZTouOTV9fT5cclxuXHRcdFx0XHRcdFx0XHQ8aW1nXHJcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJpbWFnZVwiXHJcblx0XHRcdFx0XHRcdFx0XHRzdHlsZT17e21heFdpZHRoOiAnMzcwcHgnLCBjdXJzb3I6ICdwb2ludGVyJ319XHJcblx0XHRcdFx0XHRcdFx0XHRrZXk9e3gudG9TdHJpbmcoKX1cdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHRyZWY9e3RoaXMuaW1nUmVmfVxyXG5cdFx0XHRcdFx0XHRcdFx0c3JjPXtgLi4vJHt4fS5wbmdgfVxyXG5cdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR0aGlzLm1vZGFsSW1hZ2UgPSBgLi4vJHt4fS5wbmdgO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnNob3dNb2RhbCgpO1xyXG5cdFx0XHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdDwvbW90aW9uLmRpdj5cclxuXHRcdFx0XHRcdFx0KSl9XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8c3R5bGUganN4PntgXHJcblx0XHRcdFx0XHQuZGlzcGxheS1ncmlkIHtcclxuXHRcdFx0XHRcdFx0ZGlzcGxheTogZ3JpZDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdC5kaXNwbGF5LW5vbmUge1xyXG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBub25lO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0LmRpc3BsYXkge1xyXG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZjFlZWU5O1xyXG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdCNtb2RhbCB7XHJcblx0XHRcdFx0XHRcdGhlaWdodDogMTAwdmg7XHJcblx0XHRcdFx0XHRcdHdpZHRoOiAxMDB2dztcclxuXHRcdFx0XHRcdFx0cG9zaXRpb246IGZpeGVkO1xyXG5cdFx0XHRcdFx0XHR0b3A6IDA7XHJcblx0XHRcdFx0XHRcdGxlZnQ6IDA7XHJcblx0XHRcdFx0XHRcdHotaW5kZXg6IDM7XHJcblx0XHRcdFx0XHRcdGJhY2tncm91bmQ6ICMxMDEwMTA7XHJcblx0XHRcdFx0XHRcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTAlIDUwJTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdCNwcm9kdWN0cyB7XHJcblx0XHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHRcdFx0XHRoZWlnaHQ6IDEwMHZoO1xyXG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBncmlkO1xyXG5cdFx0XHRcdFx0XHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG87XHJcblx0XHRcdFx0XHRcdGNvbG9yOiAjZjFlZWU5O1xyXG5cdFx0XHRcdFx0XHRhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdC5wcm9kdWN0IHtcclxuXHRcdFx0XHRcdFx0ZGlzcGxheTogZ3JpZDtcclxuXHRcdFx0XHRcdFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG8gYXV0byBhdXRvO1xyXG5cdFx0XHRcdFx0XHRncmlkLWdhcDogYXV0bztcclxuXHRcdFx0XHRcdFx0anVzdGlmeS1pdGVtczogY2VudGVyO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0LmltYWdlIHtcclxuXHRcdFx0XHRcdFx0bWF4LXdpZHRoOiAzNzBweDtcclxuXHRcdFx0XHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdFx0XHRcdFx0XHRib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGgyIHtcclxuXHRcdFx0XHRcdFx0bWFyZ2luOiAwO1xyXG5cdFx0XHRcdFx0XHRwYWRpbmc6IDA7XHJcblx0XHRcdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdC50aXRsZSB7XHJcblx0XHRcdFx0XHRcdGhlaWdodDogMDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdC5wdGl0bGUge1xyXG5cdFx0XHRcdFx0XHRtYXJnaW46IDA7XHJcblx0XHRcdFx0XHRcdHBhZGRpbmc6IDJlbSAwO1xyXG5cdFx0XHRcdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRcdFx0XHRcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMjRwdDtcclxuXHRcdFx0XHRcdFx0Y29sb3I6ICNmMWVlZTk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQucHJpY2Uge1xyXG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDEycHQ7XHJcblx0XHRcdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdC5jbG9zZU1vZGFsIHtcclxuXHRcdFx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHRcdFx0XHR0b3A6IDA7XHJcblx0XHRcdFx0XHRcdHJpZ2h0OiAwO1xyXG5cdFx0XHRcdFx0XHRtYXJnaW4tdG9wOiAxZW07XHJcblx0XHRcdFx0XHRcdG1hcmdpbi1yaWdodDogMi41ZW07XHJcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMjRwdDtcclxuXHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0XHRcdFx0XHRcdGN1cnNvcjogcG9pbnRlcjtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRgfTwvc3R5bGU+XHJcblx0XHRcdDwvTGF5b3V0PlxyXG5cdFx0KTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBCbGFjayJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\Effy\\\\anti\\\\pages\\\\products\\\\black.js */"));
    }
  }]);

  return Black;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Black);

/***/ })

})
//# sourceMappingURL=black.js.3c10d3e734fb466fbfda.hot-update.js.map