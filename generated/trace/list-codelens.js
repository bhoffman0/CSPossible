
if (allTraceData === undefined) {
    var allTraceData = {};
}
(function() { // IIFE to avoid variable collision
    let codelensID = "rs-list-codelens";  //fallback
    let partnerCodelens = document.currentScript.parentElement.querySelector(".pytutorVisualizer");
    if (partnerCodelens) {
        codelensID = partnerCodelens.id;
    }
    allTraceData[codelensID] = {"code": "numbers = [1,2,3,4]\nnumbers[0] = 2\nnumbers[1] = numbers[0] + 2\nnumbers[2] *= 2 \nnumbers[3] = numbers[3] + numbers[1]\nprint(numbers)\n", "trace": [{"line": 1, "event": "step_line", "func_name": "<module>", "globals": {}, "ordered_globals": [], "stack_to_render": [], "heap": {}, "stdout": ""}, {"line": 2, "event": "step_line", "func_name": "<module>", "globals": {"numbers": ["REF", 1]}, "ordered_globals": ["numbers"], "stack_to_render": [], "heap": {"1": ["LIST", 1, 2, 3, 4]}, "stdout": ""}, {"line": 3, "event": "step_line", "func_name": "<module>", "globals": {"numbers": ["REF", 1]}, "ordered_globals": ["numbers"], "stack_to_render": [], "heap": {"1": ["LIST", 2, 2, 3, 4]}, "stdout": ""}, {"line": 4, "event": "step_line", "func_name": "<module>", "globals": {"numbers": ["REF", 1]}, "ordered_globals": ["numbers"], "stack_to_render": [], "heap": {"1": ["LIST", 2, 4, 3, 4]}, "stdout": ""}, {"line": 5, "event": "step_line", "func_name": "<module>", "globals": {"numbers": ["REF", 1]}, "ordered_globals": ["numbers"], "stack_to_render": [], "heap": {"1": ["LIST", 2, 4, 6, 4]}, "stdout": ""}, {"line": 6, "event": "step_line", "func_name": "<module>", "globals": {"numbers": ["REF", 1]}, "ordered_globals": ["numbers"], "stack_to_render": [], "heap": {"1": ["LIST", 2, 4, 6, 8]}, "stdout": ""}, {"line": 6, "event": "return", "func_name": "<module>", "globals": {"numbers": ["REF", 1]}, "ordered_globals": ["numbers"], "stack_to_render": [], "heap": {"1": ["LIST", 2, 4, 6, 8]}, "stdout": "[2, 4, 6, 8]\n"}], "startingInstruction": 0};
})();