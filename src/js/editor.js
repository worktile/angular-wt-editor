angular.module("wt-editor")
    .directive("wtEditor", [function () {
        return {
            require: ['wtEditor', '^ngModel'],
            controller: [function() {

            }],
            templateUrl:"wt-editor/editor.html",
            link: function (scope, element, attrs, ctrls) {

            }
        };
    }]);