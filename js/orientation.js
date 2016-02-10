/*
 * Level
 * Copyright (c) 2016 Michele Reho, Tobias Haussener, Gérard Tyedmers
 * Licensed under the MPL License
 */

/*jslint browser:true, devel: true, for: true */
/*globalModernizr, document, window*/

(function () {
    "use strict";
    var ww;
    var wh;
    var minWH;
    var maxWH;
    var i;
    var tiltLR;
    var tiltFB;
    var dir;
    var y;
    var y2;
    var b;
    var b2;
    var h;
    var h2;
    var x;
    var x2;
    var transformAttr;

    /*! modernizr 3.2.0 (Custom Build) | MIT *
     * http://modernizr.com/download/?-devicemotion_deviceorientation-setclasses !*/

    !function(e,n,o){function s(e,n){return typeof e===n}function i(e){var n=f.className,o=Modernizr._config.classPrefix||"";if(l&&(n=n.baseVal),Modernizr._config.enableJSClass){var s=new RegExp("(^|\\s)"+o+"no-js(\\s|$)");n=n.replace(s,"$1"+o+"js$2")}Modernizr._config.enableClasses&&(n+=" "+o+e.join(" "+o),l?f.className.baseVal=n:f.className=n)}function a(){var e,n,o,i,a,f,l;for(var r in c)if(c.hasOwnProperty(r)){if(e=[],n=c[r],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(o=0;o<n.options.aliases.length;o++)e.push(n.options.aliases[o].toLowerCase());for(i=s(n.fn,"function")?n.fn():n.fn,a=0;a<e.length;a++)f=e[a],l=f.split("."),1===l.length?Modernizr[l[0]]=i:(!Modernizr[l[0]]||Modernizr[l[0]]instanceof Boolean||(Modernizr[l[0]]=new Boolean(Modernizr[l[0]])),Modernizr[l[0]][l[1]]=i),t.push((i?"":"no-")+l.join("-"))}}var t=[],f=n.documentElement,l="svg"===f.nodeName.toLowerCase(),c=[],r={_version:"3.2.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var o=this;setTimeout(function(){n(o[e])},0)},addTest:function(e,n,o){c.push({name:e,fn:n,options:o})},addAsyncTest:function(e){c.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=r,Modernizr=new Modernizr,Modernizr.addTest("devicemotion","DeviceMotionEvent"in e),Modernizr.addTest("deviceorientation","DeviceOrientationEvent"in e),a(),i(t),delete r.addTest,delete r.addAsyncTest;for(var d=0;d<Modernizr._q.length;d++)Modernizr._q[d]();e.Modernizr=Modernizr}(window,document);
    //var Modernizr = Object.create(null);
    //Modernizr.deviceorientation = true;

    ww = window.innerWidth;
    wh = window.innerHeight;
    minWH = Math.min(ww, wh);
    maxWH = Math.max(ww ,wh);

    //document.getElementById('main').style.height = (maxWH + 50) + "px";
    //document.getElementById('main').style.width = (minWH + 50) + "px";

    for (i = 0; i < document.getElementsByTagName('svg').length; i += 1) {
        document.getElementsByTagName('svg')[i].setAttribute("height", ((minWH - 20) / 3.85) + "px");
        document.getElementsByTagName('svg')[i].setAttribute("width", (minWH - 20) + "px");
    }
    document.getElementById('svg2').style.top = (minWH / 2 + minWH / 3.85) + "px";

    if (Modernizr.deviceorientation) {
        // Listen for the deviceorientation event and handle the raw data
        window.addEventListener('deviceorientation', function (eventData) {
            // alpha is the compass direction the device is facing in degrees
            dir = eventData.alpha;
            // beta is the front-to-back tilt in degrees, where front is positive
            tiltFB = eventData.beta;
            // gamma is the left-to-right tilt in degrees, where right is positive
            tiltLR = eventData.gamma;


            document.getElementById('tiltLR').innerHTML = Math.round(tiltLR) + " tiltLR";
            document.getElementById('tiltFB').innerHTML = Math.round(tiltFB) + " tiltLR";
            document.getElementById('dir').innerHTML = Math.round(dir) + " dir";

            ww = window.innerWidth;
            wh = window.innerHeight;
            minWH = Math.min(ww, wh);
            maxWH = Math.max(ww ,wh);

            document.getElementById('main').style.height = maxWH + "px";
            document.getElementById('main').style.width = minWH + "px";

            if (window.orientation === 90) {
                document.getElementById('main').style.top = ((maxWH - minWH) / -2) + "px";
                document.getElementById('main').style.left = ((maxWH - minWH) / 2) + "px";
                document.getElementById('main').style.transform = "rotate(-90deg)";
            } else if (window.orientation === -90) {
                document.getElementById('main').style.top = ((maxWH - minWH) / -2) + "px";
                document.getElementById('main').style.left = ((maxWH - minWH) / 2) + "px";
                document.getElementById('main').style.transform = "rotate(90deg)";
            } else if (window.orientation === 0) {
                document.getElementById('main').style.top = "0";
                document.getElementById('main').style.left ="0";
                document.getElementById('main').style.transform = "rotate(0deg)";
            } else if (window.orientation === 180) {
                document.getElementById('main').style.top =  "0";
                document.getElementById('main').style.left =  "0";
                document.getElementById('main').style.transform = "rotate(180deg)";
            }

            if (tiltLR < 0) {
                y = 0 - tiltLR;
                b = -1;
            } else {
                y = tiltLR;
                b = 1;
            }
            if (-90 > tiltFB || tiltFB > 90) {
                b = b * -1;
            }
            h = Math.pow(y, 3 / 4);
            x = b * h * (180.5 - 44) / Math.pow(90, 3 / 4);
            transformAttr = ' translate(' + ((192.5 - x) - document.getElementById("bubble").cx.animVal.value) + ',' + 0 + ')';
            document.getElementById("bubble").setAttribute("transform", transformAttr);


            if (tiltFB < 0) {
                y2 = 0 - tiltFB;
                b2 = -1;
            } else {
                y2 = tiltFB;
                b2 = 1;
            }

            if (tiltFB > 90) {
                y2 = 90 - (tiltFB - 90);
                b2 = 1;
            }

            if (tiltFB < -90) {
                y2 = 0 - (-90 - (tiltFB + 90));
                b2 = -1;
            }

            h2 = Math.pow(y2, 3 / 4);
            x2 = b2 * h2 * (180.5 - 44) / Math.pow(90, 3 / 4);
            transformAttr = ' translate(' + ((192.5 - x2) - document.getElementById("bubble").cx.animVal.value) + ',' + 0 + ')';
            document.getElementById("bubble2").setAttribute("transform", transformAttr);

            document.getElementById("bubble").setAttribute("cy", ((192.5 - x2) * 0.0714 + 36.29) + "");
            document.getElementById("bubble2").setAttribute("cy", ((192.5 + x) * 0.0714 + 36.29) + "");


        }, false);
    } else {
        document.getElementById("main").innerHTML = "THIS DEVICE DOES NOT SUPPORT DEVICE ORIENTATION";
    }

}());
