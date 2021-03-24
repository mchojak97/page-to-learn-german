// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"data/flashcardsList.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.flashcardsList = void 0;
var flashcardsList = [{
  polish: 'kot',
  german: 'die Katze'
}, {
  polish: 'zaczynać',
  german: 'anfagen'
}, {
  polish: 'robotnik',
  german: 'der Arbeiter'
}, {
  polish: 'fotograf',
  german: 'der Fotograf'
}, {
  polish: 'biurko',
  german: 'die Schreibtisch'
}, {
  polish: 'szynka',
  german: 'der Schinken'
}, {
  polish: 'kiełbasa',
  german: 'die Wurst'
}, {
  polish: 'sól',
  german: 'das Salz'
}, {
  polish: 'mięso',
  german: 'das Fleisch'
}, {
  polish: 'ryż',
  german: 'der Reis'
}, {
  polish: 'ziemniaki',
  german: 'die Kartoffeln'
}, {
  polish: 'makaron',
  german: 'die Nudeln'
}, {
  polish: 'ciasto',
  german: 'der Kuchen'
}, {
  polish: 'lody',
  german: 'das Eis'
}, {
  polish: 'mleko',
  german: 'die Milch'
}, {
  polish: 'cukier',
  german: 'der Zucker'
}, {
  polish: 'herbata',
  german: 'der Tee'
}, {
  polish: 'kawa',
  german: 'der Kaffe'
}, {
  polish: 'woda',
  german: 'das Wasser'
}, {
  polish: 'garnek',
  german: 'der Topf'
}];
exports.flashcardsList = flashcardsList;
},{}],"data/phrasesList.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.phrasesList = void 0;
var phrasesList = [{
  polish: "Ja mam...",
  german: "Ich habe..."
}, {
  polish: "Mieszkam w...",
  german: "Ich wohne in..."
}, {
  polish: "Mam 20 lat.",
  german: "Ich bin 20 Jahre alt."
}, {
  polish: "Rozumie Pan/i?",
  german: "Verstehen Sie?"
}, {
  polish: "Gdzie to jest?",
  german: "Wo ist es?"
}, {
  polish: "Można? Mogę?",
  german: "Darf ich?"
}, {
  polish: "Nie szkodzi.",
  german: "Keine Ursache."
}, {
  polish: "Czy mówi pan/I po polsku?",
  german: "Sprechen Sie Polnisch?"
}, {
  polish: "Słabo mówię po niemiecku.",
  german: "Ich spreche kaum Deutsch."
}, {
  polish: "Czy mógłby pan mówić wolniej?",
  german: "Können Sie langsamer sprechen?"
}, {
  polish: "Czy mógłby pan to powtórzyć?",
  german: "Können Sie das wiederholen?"
}, {
  polish: "Słucham?",
  german: "Wie bitte?"
}, {
  polish: "Nie zrozumiałem tego.",
  german: "Ich habe das nicht verstanden."
}, {
  polish: "Co to znaczy?",
  german: "Was bedeutet das?"
}, {
  polish: "Nie rozumiem.",
  german: "Ich verstehe nicht."
}, {
  polish: "Co słychać?",
  german: "Wie geht's?"
}];
exports.phrasesList = phrasesList;
},{}],"src/index.js":[function(require,module,exports) {
"use strict";

var _flashcardsList = require("../data/flashcardsList");

var _phrasesList = require("../data/phrasesList");

var flashcardCover = document.querySelector(".learning__flashcard");
var flashcardFront = document.querySelector(".flashcard--front");
var flashcardBack = document.querySelector(".flashcard--back");
var reverseButton = document.querySelector(".flashcard__button--reverse");
var nextButton = document.querySelector(".flashcard__button--next");
var chooseSection = document.querySelector(".choose");
var homeButton = document.querySelector(".home__button");
var learningSection = document.querySelector(".learning");
var chooseButtonPolish = document.querySelector(".choose__button--polish");
var chooseButtonGerman = document.querySelector(".choose__button--german");
var chooseButtonPhrases = document.querySelector(".choose__button--phrases");
var checkButton = document.querySelector(".flashcard__button--check");
var inputForm = document.querySelector(".learning__answer"); //Get first flashcard

var randomWord = _flashcardsList.flashcardsList[Math.floor(Math.random() * _flashcardsList.flashcardsList.length)]; //Get first phrase


var randomPhrase = _phrasesList.phrasesList[Math.floor(Math.random() * _phrasesList.phrasesList.length)];

var section;
var language = {
  POLISH: "polish",
  GERMAN: "german",
  PHRASES: "phrases"
}; //Displaying Choose Section on click 'Ucz się' button

var displayChooseSection = function displayChooseSection() {
  return chooseSection.style.display = "flex";
};

homeButton.addEventListener("click", displayChooseSection); //Displaying Learning Section with Polish-German Flashcards on click 'Start' button

var displayPolishSection = function displayPolishSection() {
  learningSection.style.display = "grid";
  flashcardFront.textContent = randomWord.polish;
  flashcardBack.textContent = randomWord.german;
  section = language.POLISH;
};

chooseButtonPolish.addEventListener("click", displayPolishSection); //Displaying Learning Section with German-Polish Flashcards on click 'Start' button

var displayGermanSection = function displayGermanSection() {
  learningSection.style.display = "grid";
  flashcardFront.textContent = randomWord.german;
  flashcardBack.textContent = randomWord.polish;
  section = language.GERMAN;
};

chooseButtonGerman.addEventListener("click", displayGermanSection); //Displaying Learning Section with Phrases Flashcards on click 'Start' button

var displayPhrasesSection = function displayPhrasesSection() {
  learningSection.style.display = "grid";
  flashcardFront.textContent = randomPhrase.polish;
  flashcardBack.textContent = randomPhrase.german;
  section = language.PHRASES;
};

chooseButtonPhrases.addEventListener("click", displayPhrasesSection); //Fliping flash card

var flipCard = function flipCard() {
  flashcardCover.classList.toggle("is-flipped");
};

reverseButton.addEventListener("click", flipCard); //New flashcard

var newWord = function newWord() {
  randomWord = _flashcardsList.flashcardsList[Math.floor(Math.random() * _flashcardsList.flashcardsList.length)];
  randomPhrase = _phrasesList.phrasesList[Math.floor(Math.random() * _phrasesList.phrasesList.length)]; //checking chosen section

  switch (section) {
    case language.POLISH:
      flashcardFront.textContent = randomWord.polish;
      flashcardBack.textContent = randomWord.german;
      break;

    case language.GERMAN:
      flashcardFront.textContent = randomWord.german;
      flashcardBack.textContent = randomWord.polish;
      break;

    case language.PHRASES:
      flashcardFront.textContent = randomPhrase.polish;
      flashcardBack.textContent = randomPhrase.german;
      break;

    default:
      flashcardFront.textContent = randomWord.polish;
      flashcardBack.textContent = randomWord.german;
  }

  inputForm.style.color = "white";
  document.getElementById("card-answer").value = "";
};

var nextFlashcard = function nextFlashcard() {
  if (flashcardCover.classList.contains("is-flipped")) {
    flashcardCover.classList.toggle("is-flipped");
    setTimeout(newWord, 300);
  } else newWord();
};

nextButton.addEventListener("click", nextFlashcard);

var checkAnswer = function checkAnswer(event) {
  event.preventDefault();
  var userAnswer = document.getElementById("card-answer").value;
  var correctAnswer = flashcardBack.textContent;
  if (userAnswer !== correctAnswer) inputForm.style.color = "#DD0000";else {
    inputForm.style.color = "green";
    flipCard();
  }
};

var checkAnswerOnEnter = function checkAnswerOnEnter(event) {
  inputForm.style.color = "rgb(245, 245, 245)";

  if (event.key == "Enter") {
    event.preventDefault();
    var userAnswer = document.getElementById("card-answer").value;
    var correctAnswer = flashcardBack.textContent;
    if (userAnswer !== correctAnswer) inputForm.style.color = "#DD0000";else {
      inputForm.style.color = "green";
      flipCard();
    }
  }
};

checkButton.addEventListener("click", checkAnswer);
inputForm.addEventListener("keypress", checkAnswerOnEnter, false);
},{"../data/flashcardsList":"data/flashcardsList.js","../data/phrasesList":"data/phrasesList.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "60736" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/index.js"], null)
//# sourceMappingURL=/src.a2b27638.js.map