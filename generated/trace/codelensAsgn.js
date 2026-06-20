
if (allTraceData === undefined) {
    var allTraceData = {};
}
(function() { // IIFE to avoid variable collision
    let codelensID = "rs-codelensAsgn";  //fallback
    let partnerCodelens = document.currentScript.parentElement.querySelector(".pytutorVisualizer");
    if (partnerCodelens) {
        codelensID = partnerCodelens.id;
    }
    allTraceData[codelensID] = {"code": "score = 9;\nprint(score)\nscore += 1  \nprint(score)\nbonus = 11 % 3\nprint(bonus)\nscore *= bonus\nprint(score);\n", "trace": [{"line": 1, "event": "step_line", "func_name": "<module>", "globals": {}, "ordered_globals": [], "stack_to_render": [], "heap": {}, "stdout": ""}, {"line": 2, "event": "step_line", "func_name": "<module>", "globals": {"score": 9}, "ordered_globals": ["score"], "stack_to_render": [], "heap": {}, "stdout": ""}, {"line": 3, "event": "step_line", "func_name": "<module>", "globals": {"score": 9}, "ordered_globals": ["score"], "stack_to_render": [], "heap": {}, "stdout": "9\n"}, {"line": 4, "event": "step_line", "func_name": "<module>", "globals": {"score": 10}, "ordered_globals": ["score"], "stack_to_render": [], "heap": {}, "stdout": "9\n"}, {"line": 5, "event": "step_line", "func_name": "<module>", "globals": {"score": 10}, "ordered_globals": ["score"], "stack_to_render": [], "heap": {}, "stdout": "9\n10\n"}, {"line": 6, "event": "step_line", "func_name": "<module>", "globals": {"score": 10, "bonus": 2}, "ordered_globals": ["score", "bonus"], "stack_to_render": [], "heap": {}, "stdout": "9\n10\n"}, {"line": 7, "event": "step_line", "func_name": "<module>", "globals": {"score": 10, "bonus": 2}, "ordered_globals": ["score", "bonus"], "stack_to_render": [], "heap": {}, "stdout": "9\n10\n2\n"}, {"line": 8, "event": "step_line", "func_name": "<module>", "globals": {"score": 20, "bonus": 2}, "ordered_globals": ["score", "bonus"], "stack_to_render": [], "heap": {}, "stdout": "9\n10\n2\n"}, {"line": 8, "event": "return", "func_name": "<module>", "globals": {"score": 20, "bonus": 2}, "ordered_globals": ["score", "bonus"], "stack_to_render": [], "heap": {}, "stdout": "9\n10\n2\n20\n"}], "startingInstruction": 0};
})();