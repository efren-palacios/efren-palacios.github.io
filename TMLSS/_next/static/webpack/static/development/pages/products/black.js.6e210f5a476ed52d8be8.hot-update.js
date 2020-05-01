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
        className: "jsx-3263136002" + " " + (this.showHideClassName || ""),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 5
        }
      }, __jsx("div", {
        onClick: this.hideModal,
        className: "jsx-3263136002" + " " + "closeModal",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 6
        }
      }, "X"), __jsx("div", {
        className: "jsx-3263136002" + " " + "display",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 6
        }
      }, __jsx("img", {
        style: {
          height: "750px",
          border: '2px solid black'
        },
        src: this.modalImage,
        className: "jsx-3263136002",
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
        className: "jsx-3263136002" + " " + "display",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 6
        }
      }, __jsx("h1", {
        className: "jsx-3263136002",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 7
        }
      }, "\\\\ Black --:--", " ", __jsx("span", {
        className: "jsx-3263136002" + " " + "price",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 8
        }
      }, __jsx("br", {
        className: "jsx-3263136002",
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
        className: "jsx-3263136002" + " " + "price",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 7
        }
      }, "Sari modern influence sportswear trend commercial valuable. Artistic extraordinary xs make up breathable conservative imprint color effect. Embroidery pattern hand-made showcase. Value stock artistry conformity pastel pumps creative vintage cut cheap. Catwalk emphasis hippie hair trademark consumer influence tailored. Imprint cheap wardrobe. Impeccable illustration emphasis. Buttons beautiful zipper inspiration comfortable. Luxurious instagram revealing. Sari ensemble emphasis expirement impeccable modification trademark waistline minimalist."))), __jsx("div", {
        id: "products",
        className: "jsx-3263136002",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 5
        }
      }, __jsx("div", {
        className: "jsx-3263136002" + " " + "title",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 6
        }
      }, __jsx("h1", {
        className: "jsx-3263136002" + " " + "ptitle",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 7
        }
      }, "\\\\ Black --:--", " ", __jsx("span", {
        className: "jsx-3263136002" + " " + "price",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 8
        }
      }, __jsx("br", {
        className: "jsx-3263136002",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 9
        }
      }), "$69.99 + tax"))), __jsx("div", {
        className: "jsx-3263136002" + " " + "product",
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
          className: "jsx-3263136002" + " " + "image",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 8
          }
        }));
      }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "3263136002",
        __self: this
      }, ".display-grid.jsx-3263136002{display:grid;}.display-none.jsx-3263136002{display:none;}.display.jsx-3263136002{background-color:#f1eee9;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}#modal.jsx-3263136002{height:100vh;width:100vw;position:fixed;top:0;left:0;z-index:3;background:#101010;grid-template-columns:50% 50%;}#products.jsx-3263136002{width:100%;height:100vh;display:grid;grid-template-columns:auto;color:#f1eee9;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;}.product.jsx-3263136002{display:grid;grid-template-columns:auto auto auto auto;grid-gap:auto;justify-items:center;}.image.jsx-3263136002{max-width:370px;cursor:pointer;}h2.jsx-3263136002{margin:0;pading:0;text-align:center;}.title.jsx-3263136002{height:0;}.ptitle.jsx-3263136002{margin:0;padding:2em 0;text-align:center;text-transform:uppercase;font-size:24pt;color:#f1eee9;}.price.jsx-3263136002{font-size:12pt;text-align:center;font-weight:normal;}.closeModal.jsx-3263136002{position:absolute;top:0;right:0;margin-top:1em;margin-right:2.5em;font-size:24pt;font-weight:bold;cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRWZmeVxcYW50aVxccGFnZXNcXHByb2R1Y3RzXFxibGFjay5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyRmdCLEFBR29CLEFBR0EsQUFHWSxBQU1aLEFBVUYsQUFRRSxBQU1HLEFBSVAsQUFLQSxBQUdBLEFBUU0sQUFLRyxTQXBCVCxBQUtWLEFBR2UsRUExQkQsRUF0QmQsQUFHQSxBQVNhLEFBa0I4QixFQTBCeEIsQ0FwQkgsRUFLRyxBQW9CWixLQVpZLENBMUJMLEFBdUNMLENBeERLLEFBT0UsTUF3QmhCLENBMEJnQixDQU5JLEdBZnBCLENBbEI0QixHQVZyQixDQW9DbUIsS0FuQ2xCLENBaURZLEtBTnBCLENBMUNXLEVBZUksUUFkSyxDQVFMLEVBMEJDLEFBY0EsR0FqQ00sU0FORSxHQTBCVCxBQWNHLENBaERhLFFBZS9CLEtBb0JBLEdBY2dCLENBNURJLGFBWXBCLENBaURBLDBFQXpDQSxLQW5Cd0IsbUdBQ3hCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcRWZmeVxcYW50aVxccGFnZXNcXHByb2R1Y3RzXFxibGFjay5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9MYXlvdXQnO1xyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCB1c2VSZWYgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcclxuXHJcbmNsYXNzIEJsYWNrIGV4dGVuZHMgQ29tcG9uZW50IHtcdFxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgICAgdGhpcy5zaG93TW9kYWwgPSAoKSA9PiB7XHJcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7IHNob3c6IHRydWUgfSk7XHRcdFx0XHRcclxuXHRcdFx0fTtcclxuXHRcdFx0dGhpcy5oaWRlTW9kYWwgPSAoKSA9PiB7XHJcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7IHNob3c6IGZhbHNlIH0pO1xyXG5cdFx0XHR9O1xyXG5cdFx0dGhpcy5pbWdSZWYgPSBSZWFjdC5jcmVhdGVSZWYoKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7IHNob3c6IGZhbHNlIH07XHJcblx0XHR0aGlzLmltYWdlcyA9IFtcIkJMQU5LXCIsIFwiQkxBTktcIiwgXCJCTEFOS1wiLCBcIkJMQU5LXCJdO1xyXG5cdFx0dGhpcy5pbWdNb2RhbDtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHRoaXMuc2hvd0hpZGVDbGFzc05hbWUgPSB0aGlzLnN0YXRlLnNob3cgPyBcImRpc3BsYXktZ3JpZFwiIDogXCJkaXNwbGF5LW5vbmVcIjtcclxuICAgIHJldHVybiAoXHJcblx0XHRcdDxMYXlvdXQ+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3RoaXMuc2hvd0hpZGVDbGFzc05hbWV9IGlkPVwibW9kYWxcIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2xvc2VNb2RhbFwiIG9uQ2xpY2s9e3RoaXMuaGlkZU1vZGFsfT5cclxuXHRcdFx0XHRcdFx0WFxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRpc3BsYXlcIj5cclxuXHRcdFx0XHRcdFx0PGltZyBzdHlsZT17eyBoZWlnaHQ6IFwiNzUwcHhcIiwgYm9yZGVyOiAnMnB4IHNvbGlkIGJsYWNrJyB9fSBzcmM9e3RoaXMubW9kYWxJbWFnZX0gLz5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdlxyXG5cdFx0XHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0XHRcdGJhY2tncm91bmRDb2xvcjogXCIjMTAxMDEwXCIsXHJcblx0XHRcdFx0XHRcdFx0ZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcclxuXHRcdFx0XHRcdFx0XHRwYWRkaW5nOiBcIjVlbVwiLFxyXG5cdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJkaXNwbGF5XCJcclxuXHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0PGgxPlxyXG5cdFx0XHRcdFx0XHRcdFxcXFwgQmxhY2sgLS06LS17XCIgXCJ9XHJcblx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwicHJpY2VcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxiciAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0JDY5Ljk5ICsgdGF4XHJcblx0XHRcdFx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHQ8L2gxPlxyXG5cdFx0XHRcdFx0XHQ8aDIgc3R5bGU9e3sgdGV4dEFsaWduOiBcImxlZnRcIiwgcGFkZGluZzogXCIxZW1cIiB9fSBjbGFzc05hbWU9XCJwcmljZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFNhcmkgbW9kZXJuIGluZmx1ZW5jZSBzcG9ydHN3ZWFyIHRyZW5kIGNvbW1lcmNpYWwgdmFsdWFibGUuXHJcblx0XHRcdFx0XHRcdFx0QXJ0aXN0aWMgZXh0cmFvcmRpbmFyeSB4cyBtYWtlIHVwIGJyZWF0aGFibGUgY29uc2VydmF0aXZlIGltcHJpbnRcclxuXHRcdFx0XHRcdFx0XHRjb2xvciBlZmZlY3QuIEVtYnJvaWRlcnkgcGF0dGVybiBoYW5kLW1hZGUgc2hvd2Nhc2UuIFZhbHVlIHN0b2NrXHJcblx0XHRcdFx0XHRcdFx0YXJ0aXN0cnkgY29uZm9ybWl0eSBwYXN0ZWwgcHVtcHMgY3JlYXRpdmUgdmludGFnZSBjdXQgY2hlYXAuXHJcblx0XHRcdFx0XHRcdFx0Q2F0d2FsayBlbXBoYXNpcyBoaXBwaWUgaGFpciB0cmFkZW1hcmsgY29uc3VtZXIgaW5mbHVlbmNlXHJcblx0XHRcdFx0XHRcdFx0dGFpbG9yZWQuIEltcHJpbnQgY2hlYXAgd2FyZHJvYmUuIEltcGVjY2FibGUgaWxsdXN0cmF0aW9uXHJcblx0XHRcdFx0XHRcdFx0ZW1waGFzaXMuIEJ1dHRvbnMgYmVhdXRpZnVsIHppcHBlciBpbnNwaXJhdGlvbiBjb21mb3J0YWJsZS5cclxuXHRcdFx0XHRcdFx0XHRMdXh1cmlvdXMgaW5zdGFncmFtIHJldmVhbGluZy4gU2FyaSBlbnNlbWJsZSBlbXBoYXNpcyBleHBpcmVtZW50XHJcblx0XHRcdFx0XHRcdFx0aW1wZWNjYWJsZSBtb2RpZmljYXRpb24gdHJhZGVtYXJrIHdhaXN0bGluZSBtaW5pbWFsaXN0LlxyXG5cdFx0XHRcdFx0XHQ8L2gyPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBpZD1cInByb2R1Y3RzXCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+XHJcblx0XHRcdFx0XHRcdDxoMSBjbGFzc05hbWU9XCJwdGl0bGVcIj5cclxuXHRcdFx0XHRcdFx0XHRcXFxcIEJsYWNrIC0tOi0te1wiIFwifVxyXG5cdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInByaWNlXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8YnIgLz5cclxuXHRcdFx0XHRcdFx0XHRcdCQ2OS45OSArIHRheFxyXG5cdFx0XHRcdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0PC9oMT5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0XCI+XHJcblx0XHRcdFx0XHRcdHt0aGlzLmltYWdlcy5tYXAoKHgpID0+IChcclxuXHRcdFx0XHRcdFx0XHQ8bW90aW9uLmRpdiBcdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0ICBpbml0aWFsPXt7b3BhY2l0eTowfX1cclxuXHRcdFx0XHRcdFx0XHRcdGFuaW1hdGU9e3tvcGFjaXR5OjF9fVx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0ZXhpdD17e29wYWNpdHk6MH19XHJcblx0XHRcdFx0XHRcdFx0XHR3aGlsZUhvdmVyPXt7c2NhbGU6MS4wNX19XHJcblx0XHRcdFx0XHRcdFx0XHRvblRhcD17e3NjYWxlOi45NX19PlxyXG5cdFx0XHRcdFx0XHRcdDxpbWdcclxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImltYWdlXCJcclxuXHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7bWF4V2lkdGg6ICczNzBweCcsIGN1cnNvcjogJ3BvaW50ZXInfX1cclxuXHRcdFx0XHRcdFx0XHRcdGtleT17eC50b1N0cmluZygpfVx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdHJlZj17dGhpcy5pbWdSZWZ9XHJcblx0XHRcdFx0XHRcdFx0XHRzcmM9e2AuLi8ke3h9LnBuZ2B9XHJcblx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHRoaXMubW9kYWxJbWFnZSA9IGAuLi8ke3h9LnBuZ2A7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuc2hvd01vZGFsKCk7XHJcblx0XHRcdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0PC9tb3Rpb24uZGl2PlxyXG5cdFx0XHRcdFx0XHQpKX1cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxzdHlsZSBqc3g+e2BcclxuXHRcdFx0XHRcdC5kaXNwbGF5LWdyaWQge1xyXG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBncmlkO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0LmRpc3BsYXktbm9uZSB7XHJcblx0XHRcdFx0XHRcdGRpc3BsYXk6IG5vbmU7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQuZGlzcGxheSB7XHJcblx0XHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICNmMWVlZTk7XHJcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0I21vZGFsIHtcclxuXHRcdFx0XHRcdFx0aGVpZ2h0OiAxMDB2aDtcclxuXHRcdFx0XHRcdFx0d2lkdGg6IDEwMHZ3O1xyXG5cdFx0XHRcdFx0XHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0XHRcdFx0XHRcdHRvcDogMDtcclxuXHRcdFx0XHRcdFx0bGVmdDogMDtcclxuXHRcdFx0XHRcdFx0ei1pbmRleDogMztcclxuXHRcdFx0XHRcdFx0YmFja2dyb3VuZDogIzEwMTAxMDtcclxuXHRcdFx0XHRcdFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1MCUgNTAlO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0I3Byb2R1Y3RzIHtcclxuXHRcdFx0XHRcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRcdFx0XHRcdGhlaWdodDogMTAwdmg7XHJcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGdyaWQ7XHJcblx0XHRcdFx0XHRcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0bztcclxuXHRcdFx0XHRcdFx0Y29sb3I6ICNmMWVlZTk7XHJcblx0XHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0LnByb2R1Y3Qge1xyXG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBncmlkO1xyXG5cdFx0XHRcdFx0XHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0byBhdXRvIGF1dG87XHJcblx0XHRcdFx0XHRcdGdyaWQtZ2FwOiBhdXRvO1xyXG5cdFx0XHRcdFx0XHRqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQuaW1hZ2Uge1xyXG5cdFx0XHRcdFx0XHRtYXgtd2lkdGg6IDM3MHB4O1xyXG5cdFx0XHRcdFx0XHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRoMiB7XHJcblx0XHRcdFx0XHRcdG1hcmdpbjogMDtcclxuXHRcdFx0XHRcdFx0cGFkaW5nOiAwO1xyXG5cdFx0XHRcdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQudGl0bGUge1xyXG5cdFx0XHRcdFx0XHRoZWlnaHQ6IDA7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQucHRpdGxlIHtcclxuXHRcdFx0XHRcdFx0bWFyZ2luOiAwO1xyXG5cdFx0XHRcdFx0XHRwYWRkaW5nOiAyZW0gMDtcclxuXHRcdFx0XHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0XHRcdFx0XHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDI0cHQ7XHJcblx0XHRcdFx0XHRcdGNvbG9yOiAjZjFlZWU5O1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0LnByaWNlIHtcclxuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxMnB0O1xyXG5cdFx0XHRcdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQuY2xvc2VNb2RhbCB7XHJcblx0XHRcdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdFx0XHRcdFx0dG9wOiAwO1xyXG5cdFx0XHRcdFx0XHRyaWdodDogMDtcclxuXHRcdFx0XHRcdFx0bWFyZ2luLXRvcDogMWVtO1xyXG5cdFx0XHRcdFx0XHRtYXJnaW4tcmlnaHQ6IDIuNWVtO1xyXG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDI0cHQ7XHJcblx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdFx0XHRcdFx0XHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0YH08L3N0eWxlPlxyXG5cdFx0XHQ8L0xheW91dD5cclxuXHRcdCk7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmxhY2siXX0= */\n/*@ sourceURL=C:\\\\Users\\\\Effy\\\\anti\\\\pages\\\\products\\\\black.js */"));
    }
  }]);

  return Black;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Black);

/***/ })

})
//# sourceMappingURL=black.js.6e210f5a476ed52d8be8.hot-update.js.map