System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Test;
    return {
        setters: [],
        execute: function () {
            Test = (function () {
                function Test() {
                }
                Test.f1 = function () {
                    alert('wow f1');
                };
                return Test;
            }());
            exports_1("Test", Test);
        }
    };
});
//# sourceMappingURL=service.js.map