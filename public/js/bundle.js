/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./application/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./application/index.js":
/*!******************************!*\
  !*** ./application/index.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _classwork_task2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classwork/task2 */ \"./classwork/task2.js\");\n// import comp from './patterns/composition_vs_inheritance';\r\n// import fabric from './patterns/fabric';\r\n// import homeTask1 from '../classwork/task1';\r\n\r\n\r\n\r\n\r\n// comp();\r\n// fabric();\r\n// homeTask1 ();\r\nObject(_classwork_task2__WEBPACK_IMPORTED_MODULE_0__[\"default\"]) ();\r\n\n\n//# sourceURL=webpack:///./application/index.js?");

/***/ }),

/***/ "./classwork/task2.js":
/*!****************************!*\
  !*** ./classwork/task2.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/*\r\n\r\n  Используя методы для создания объектов из задания по композиции написать фабику (HeadHunt), которая будет\r\n  расспределять и создавать сотрудников компании нужного типа.\r\n\r\n  Данные для списка сотрудников: http://www.json-generator.com/api/json/get/cfeTmcNIXS?indent=2\r\n\r\n  HeadHunt => {\r\n    hire( obj ){\r\n      ...\r\n    }\r\n  }\r\n\r\n  Привязать к интерфейсу и вывести на страницу. На кнопку нанять повесить метод hire из фабрики\r\n\r\n*/\r\n\r\nconst Fabric = () => {\r\n\r\n  const MakeBackendMagic = state => ({\r\n    makeBackendMagic: () => console.log(`${state.name} make backend magic`)\r\n  });\r\n\r\n  const MakeFrontendMagic = state => ({\r\n    makeFrontendMagic: () => console.log(`${state.name} make frontend magic`)\r\n  });\r\n\r\n  const MakeItLooksBeautiful = state => ({\r\n    makeItLooksBeautiful: () => console.log(`${state.name} make it looks beautiful`)\r\n  });\r\n\r\n  const DistributeTasks = state => ({\r\n    distributeTasks: () => console.log(`${state.name} distributes tasks`)\r\n  });\r\n\r\n  const DrinkSomeTea = state => ({\r\n    drinkSomeTea: () => console.log(`${state.name} drink some tea`)\r\n  });\r\n\r\n  const WatchYoutube = state => ({\r\n    watchYoutube: () => console.log(`${state.name} wathch Youtube`)\r\n  });\r\n\r\n  const Procrastinate = state => ({\r\n    procrastinate: () => console.log(`${state.name} procrastinate`)\r\n  });\r\n\r\n  const BackendDeveloper = function ({name,gender,age,type,id}) {\r\n    const state ={\r\n      name,\r\n      gender,\r\n      age,\r\n      type: 'backend',\r\n      id\r\n    }\r\n    return Object.assign(\r\n      {},\r\n      state,\r\n      MakeBackendMagic(state),\r\n      DrinkSomeTea(state),\r\n      Procrastinate(state),\r\n    )\r\n  }\r\n\r\n  const FrontendDeveloper = function ({name,gender,age,type,id}) {\r\n    const state ={\r\n      name,\r\n      gender,\r\n      age,\r\n      type: 'frontend',\r\n      id\r\n    }\r\n    return Object.assign(\r\n      {},\r\n      state,\r\n      MakeFrontendMagic(state),\r\n      DrinkSomeTea(state),\r\n      WatchYoutube(state),\r\n    )\r\n  }\r\n\r\n  const Designer = function ({name,gender,age,type,id}) {\r\n    const state ={\r\n      name,\r\n      gender,\r\n      age,\r\n      type: 'design',\r\n      id\r\n    }\r\n    return Object.assign(\r\n      {},\r\n      state,\r\n      MakeItLooksBeautiful(state),\r\n      WatchYoutube(state),\r\n      Procrastinate(state),\r\n    )\r\n  }\r\n\r\n  const ProjectManager = function ({name,gender,age,type,id}) {\r\n    const state ={\r\n      name,\r\n      gender,\r\n      age,\r\n      type: 'project',\r\n      id\r\n    }\r\n    return Object.assign(\r\n      {},\r\n      state,\r\n      DistributeTasks(state),\r\n      Procrastinate(state),\r\n      DrinkSomeTea(state),\r\n    )\r\n  }\r\n\r\n  \r\n\r\n  function HeadHunt () {\r\n    this.hire = function ( obj ){\r\n      // console.log('hire', obj)\r\n      let id = event.target.closest('.node').dataset.id;\r\n      console.log('id', id)\r\n\r\n      this.closest('.availableStaff').removeChild(this.closest('.node'));\r\n      // let index = availableStaff.indexOf((item)=>{\r\n      //   item._id.innerHTML == id\r\n      // });\r\n      let node = availableStaff.filter((el)=>el.id === id)[0];\r\n      myTeam.push(node);\r\n      availableStaff.splice(availableStaff.findIndex((item)=> item.id === id), 1);\r\n      renderTeam (node);\r\n\r\n      // console.log('index', availableStaff.findIndex((item)=> item.id === id));\r\n\r\n      // console.log('node', node);\r\n      console.log('availableStaff', availableStaff);\r\n      console.log('myTeam', myTeam);\r\n    };\r\n\r\n    this.typeFactory = function (state){\r\n      let TypeClass = null;\r\n      switch(state.type){\r\n        case 'backend':\r\n          TypeClass = BackendDeveloper;\r\n          break;\r\n        case 'frontend':\r\n          TypeClass = FrontendDeveloper;\r\n          break;\r\n        case 'design':\r\n          TypeClass = Designer;\r\n          break;\r\n        case 'project':\r\n          TypeClass = ProjectManager;\r\n          break;\r\n        default:\r\n        return false;\r\n      }\r\n      return new TypeClass (state);\r\n    }\r\n  }\r\n\r\n  const mySuperForge = new HeadHunt();\r\n\r\n  // const YeseniaSanford = mySuperForge.typeFactory({\r\n  //   name: 'Yesenia Sanford',\r\n  //   gender: 'female',\r\n  //   age: 21,\r\n  //   type: 'backend'\r\n  // })\r\n\r\n  // console.log(YeseniaSanford)\r\n\r\n  function render (item){\r\n    let available = document.querySelectorAll('.availableStaff')[0];\r\n    let node = document.createElement('div');\r\n    node.className = \"node\";\r\n    node.setAttribute('data-id', `${item._id}`)\r\n    node.innerHTML = `\r\n        <span>${item.name}(${item.age})</span>\r\n        <span class=\"type\">${item.type}</span>\r\n        <button class=\"hide\" style=\"cursor: pointer\">Нанять</button>\r\n    `;\r\n    available.appendChild( node );\r\n    let btn = node.querySelector('.hide');\r\n    btn.addEventListener('click', mySuperForge.hire );\r\n  }\r\n\r\n  function renderTeam (item){\r\n    let available = document.querySelectorAll('.myTeam')[0];\r\n    let node = document.createElement('div');\r\n    node.className = \"nodeTeam\";\r\n    node.setAttribute('data-id', `${item.id}`)\r\n    node.innerHTML = `\r\n        <span>${item.name}(${item.type})</span>\r\n    `;\r\n    available.appendChild( node );\r\n  }\r\n\r\n  let url = 'http://www.json-generator.com/api/json/get/cfeTmcNIXS?indent=2';\r\n\r\n  let myHeaders = new Headers();\r\n  myHeaders.append(\"Content-Type\", \"text/plain\");\r\n\r\n  const ConvertToJSON = (data) => data.json();\r\n\r\n  fetch (url, {method: 'POST', header: myHeaders})\r\n    .then(ConvertToJSON)\r\n    .then( data => {\r\n      // render();\r\n      let x =  data.map(( item ) => {\r\n        availableStaff.push(\r\n          mySuperForge.typeFactory({\r\n            name: item.name,\r\n            gender: item.gender,\r\n            age: item.age,\r\n            type: item.type,\r\n            id: item._id\r\n          })\r\n        );\r\n        render(item);\r\n      });\r\n    })\r\n\r\n  const availableStaff=[];\r\n  const myTeam=[];\r\n\r\n  // console.log(availableStaff)\r\n\r\n  const root = document.getElementById('root');\r\n  const available = document.createElement('div');\r\n  const team = document.createElement('div');\r\n  root.appendChild (available);\r\n  root.appendChild (team);\r\n  available.className = \"availableStaff\";\r\n  team.className = \"myTeam\";\r\n\r\n  \r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n}\r\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Fabric);\n\n//# sourceURL=webpack:///./classwork/task2.js?");

/***/ })

/******/ });