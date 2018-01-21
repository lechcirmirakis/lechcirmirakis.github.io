/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _gamefield = __webpack_require__(2);

	var _gamefield2 = _interopRequireDefault(_gamefield);

	var _GameState = __webpack_require__(6);

	var _GameState2 = _interopRequireDefault(_GameState);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var app = document.getElementById('app');
	var wrapper = document.createElement('div');
	wrapper.className = 'wrapper';
	var notification = document.createElement('div');
	notification.className = 'notification';

	var render = function render() {
	  wrapper.append((0, _gamefield2.default)('computer'));
	  wrapper.append((0, _gamefield2.default)('user'));
	};

	var clear = function clear() {
	  wrapper.innerHTML = '';
	};

	_GameState2.default.reRender = function () {
	  clear();
	  render();
	  notification.innerText = "It`s " + _GameState2.default.shootingTurn + " shoots";
	};

	var main = function main() {
	  _GameState2.default.startGame();
	  notification.innerText = "It`s " + _GameState2.default.shootingTurn + " shoots";
	  app.append(notification);
	  app.append(wrapper);
	  render();
	};

	main();

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _cell = __webpack_require__(3);

	var _cell2 = _interopRequireDefault(_cell);

	var _GameState = __webpack_require__(6);

	var _GameState2 = _interopRequireDefault(_GameState);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var GameField = function GameField(type) {
	  var field = document.createElement('div');
	  field.className = 'field ' + type;
	  var shipSet = _GameState2.default.shipsSet[type];
	  var cells = _GameState2.default.cells[type];
	  shipSet.shipsPlacment.forEach(function (row, x) {
	    row.forEach(function (cell, y) {
	      field.append(new _cell2.default(x, y, cell, type, cells[x][y].attempted).htmlNode);
	    });
	  });
	  // let i = 0;
	  // while (i < 100) { // petla while "wstrzykuje" kratki cell * 100 do fielda (planszy);
	  //   field.append(Cell());
	  //   i++;
	  // }
	  //
	  return field;
	}; // import "kratki"
	exports.default = GameField;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // tworze funkcje ktora tworzy diva (bedzie to kratka )
	// const Cell = (ship) => {
	//   const cell = document.createElement('div');
	//   cell.className = `cell ${ship === 1 ? 'has-ship' : ''}`; //template string
	//   cell.addEventListener('click', () => {
	//   });
	//
	//   return cell;
	// }


	var _GameState = __webpack_require__(6);

	var _GameState2 = _interopRequireDefault(_GameState);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Cell = function () {
	  function Cell(x, y, ship, fieldType, attempted) {
	    _classCallCheck(this, Cell);

	    this.htmlNode = document.createElement('div');
	    this.htmlNode.className = 'cell ' + (fieldType === 'computer' ? '' : ship ? 'has-ship' : ''); //template string
	    this.htmlNode.className += '' + (attempted ? ship ? ' hit' : ' miss' : '');
	    this.x = x;
	    this.y = y;
	    this.fieldType = fieldType;

	    if (fieldType === 'computer') {
	      this.htmlNode.addEventListener('click', this.atemptCell.bind(this));
	    }
	    this.ship = ship;
	  }

	  _createClass(Cell, [{
	    key: 'atemptCell',
	    value: function atemptCell() {
	      this.htmlNode.className += '' + (this.ship ? ' hit' : ' miss');
	      _GameState2.default.shipAttempt(this.x, this.y, this.fieldType);
	    }
	  }]);

	  return Cell;
	}();

	exports.default = Cell;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _ship = __webpack_require__(5);

	var _ship2 = _interopRequireDefault(_ship);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	// import statku

	var ShipSet = function () {
	  function ShipSet() {
	    _classCallCheck(this, ShipSet);

	    this.shipsPlacment = new Array(10);
	    for (var i = 0; i < 10; i++) {
	      this.shipsPlacment[i] = new Array(10);
	      for (var j = 0; j < 10; j++) {
	        this.shipsPlacment[i][j] = null;
	      }
	    }
	    this.generateSeveralShips(20);
	  }

	  _createClass(ShipSet, [{
	    key: 'generateRandomShip',
	    value: function generateRandomShip() {
	      var ship = void 0;
	      do {
	        ship = new _ship2.default(Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)); // tworzymy nowy statek z randomowymi x,y
	      } while (!ship.isOnField());
	      return ship;
	    }
	  }, {
	    key: 'generateSeveralShips',
	    value: function generateSeveralShips(number) {
	      var ships = [];
	      for (var i = 0; i < number; i++) {
	        do {
	          ships[i] = this.generateRandomShip();
	        } while (!this.spaceIsAvailable(ships[i]));
	        this.assignPlacement(ships[i]);
	      }
	    }
	  }, {
	    key: 'spaceIsAvailable',
	    value: function spaceIsAvailable(ship) {
	      // if (this.shipsPlacment[ship.x][ship.y] !== 0) {
	      //   return false;
	      // } else {
	      //   return true
	      // }
	      return this.shipsPlacment[ship.x][ship.y] == null;
	    }
	  }, {
	    key: 'assignPlacement',
	    value: function assignPlacement(ship) {
	      this.shipsPlacment[ship.x][ship.y] = ship;
	    }
	  }]);

	  return ShipSet;
	}();

	exports.default = ShipSet;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Ship = function () {
	  function Ship(x, y) {
	    _classCallCheck(this, Ship);

	    this.x = x;
	    this.y = y;
	    this.attempted = false;
	  }

	  _createClass(Ship, [{
	    key: "isOnField",
	    value: function isOnField() {
	      // if (this.x >= 0 && this.x < 10 && this.y >= 0 && this.y < 10) {
	      //   return true;
	      // } else {
	      //   return false;
	      // }
	      return this.x >= 0 && this.x < 10 && this.y >= 0 && this.y < 10;
	    }
	  }, {
	    key: "attemptShip",
	    value: function attemptShip() {
	      this.attempted = true;
	    }
	  }]);

	  return Ship;
	}();

	;

	exports.default = Ship;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _ShipsSet = __webpack_require__(4);

	var _ShipsSet2 = _interopRequireDefault(_ShipsSet);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var GameState = function () {
	  function GameState() {
	    _classCallCheck(this, GameState);

	    this.shootingTurn = null;
	    this.reRender = null;
	    this.interval = null;
	    this.shipsSet = {
	      user: new _ShipsSet2.default(),
	      computer: new _ShipsSet2.default()
	    };
	    this.cells = {
	      user: this.shipsSet.user.shipsPlacment.map(function (row) {
	        return row.map(function (cell) {
	          return {
	            attempted: cell ? cell.attempted : false
	          };
	        });
	      }),
	      computer: this.shipsSet.computer.shipsPlacment.map(function (row) {
	        return row.map(function (cell) {
	          return {
	            attempted: cell ? cell.attempted : false
	          };
	        });
	      })
	    };
	    this.makeRandomShot = this.makeRandomShot.bind(this);
	  }

	  _createClass(GameState, [{
	    key: 'startGame',
	    value: function startGame() {
	      var players = ['computer', 'user'];
	      this.shootingTurn = players[Math.round(Math.random())];
	      if (this.shootingTurn === 'computer') {
	        this.computerShot();
	      }
	    }
	  }, {
	    key: 'switchTurn',
	    value: function switchTurn() {
	      this.shootingTurn = '' + (this.shootingTurn === 'computer' ? 'user' : 'computer');
	      this.reRender();
	      clearInterval(this.interval);
	      if (this.shootingTurn === "computer") {
	        this.computerShot();
	      }
	    }
	  }, {
	    key: 'computerShot',
	    value: function computerShot() {
	      this.interval = setInterval(this.makeRandomShot, 1000);
	    }
	  }, {
	    key: 'makeRandomShot',
	    value: function makeRandomShot() {
	      var x = void 0,
	          y = void 0;
	      do {
	        x = Math.floor(Math.random() * 10);
	        y = Math.floor(Math.random() * 10);
	      } while (this.shipsSet.user.shipsPlacment[x][y] && this.shipsSet.user.shipsPlacment[x][y].attempted);
	      this.shipAttempt(x, y, 'user');
	    }
	  }, {
	    key: 'shipAttempt',
	    value: function shipAttempt(x, y, fieldType) {
	      this.cellAttempt(x, y, fieldType);
	      if (this.shipsSet[fieldType].shipsPlacment[x][y]) {
	        this.shipsSet[fieldType].shipsPlacment[x][y].attemptShip();
	      } else {
	        this.switchTurn();
	      }
	    }
	  }, {
	    key: 'cellAttempt',
	    value: function cellAttempt(x, y, fieldType) {
	      this.cells[fieldType][x][y].attempted = true;
	      this.reRender();
	    }
	  }]);

	  return GameState;
	}();

	exports.default = new GameState();

/***/ })
/******/ ]);