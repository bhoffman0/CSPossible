
if (allTraceData === undefined) {
    var allTraceData = {};
}
(function() { // IIFE to avoid variable collision
    let codelensID = "rs-codelensNestedIfs";  //fallback
    let partnerCodelens = document.currentScript.parentElement.querySelector(".pytutorVisualizer");
    if (partnerCodelens) {
        codelensID = partnerCodelens.id;
    }
    allTraceData[codelensID] = {"code": "grade = 50\nif grade >= 90:\n    print(\"A\")\nelif grade >= 80:\n    print(\"B\")\nelif grade >= 70:\n    print(\"C\")\nelif grade >= 60:\n    print(\"D\")\nelse:\n    print(\"F\")\n", "trace": [{"line": 1, "event": "step_line", "func_name": "<module>", "globals": {}, "ordered_globals": [], "stack_to_render": [], "heap": {}, "stdout": ""}, {"line": 2, "event": "step_line", "func_name": "<module>", "globals": {"grade": 50}, "ordered_globals": ["grade"], "stack_to_render": [], "heap": {}, "stdout": ""}, {"line": 4, "event": "step_line", "func_name": "<module>", "globals": {"grade": 50}, "ordered_globals": ["grade"], "stack_to_render": [], "heap": {}, "stdout": ""}, {"line": 6, "event": "step_line", "func_name": "<module>", "globals": {"grade": 50}, "ordered_globals": ["grade"], "stack_to_render": [], "heap": {}, "stdout": ""}, {"line": 8, "event": "step_line", "func_name": "<module>", "globals": {"grade": 50}, "ordered_globals": ["grade"], "stack_to_render": [], "heap": {}, "stdout": ""}, {"line": 11, "event": "step_line", "func_name": "<module>", "globals": {"grade": 50}, "ordered_globals": ["grade"], "stack_to_render": [], "heap": {}, "stdout": ""}, {"line": 11, "event": "return", "func_name": "<module>", "globals": {"grade": 50}, "ordered_globals": ["grade"], "stack_to_render": [], "heap": {}, "stdout": "F\n"}], "startingInstruction": 0};
})();