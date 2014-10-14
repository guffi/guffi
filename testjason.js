var jsonVar = {
        text: "example",
        number: 1,
        obj: {
            "more text": "another example"
        },
        obj2: {
             "yet more text": "yet another example"
        }
    }, // THE RAW OBJECT
    jsonStr = JSON.stringify({ foo: "sample", bar: "sample" }, null, 4);
    
regeStr = jsonStr.replace(/({|}[,]*|[^{}:]+:[^{}:,]*[,{]*)/g, function (m, p1) {
var rtnFn = function() {
        return '<div style="text-indent: ' + (f['brace'] * 20) + 'px;">' + p1 + '</div>';
    },
    rtnStr = 0;
    if (p1.lastIndexOf('{') === (p1.length - 1)) {
        rtnStr = rtnFn();
        f['brace'] += 1;
    } else if (p1.indexOf('}') === 0) {
         f['brace'] -= 1;
        rtnStr = rtnFn();
    } else {
        rtnStr = rtnFn();
    }
    return rtnStr;
});
