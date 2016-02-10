<!DOCTYPE html>
<!--
* Level
* Copyright (c) 2016 Michele Reho, Tobias Haussener, Gérard Tyedmers
* Licensed under the MPL License
-->
<html lang="en">
    <head>
        <meta http-equiv="Content-Type" content="text/html;charset=utf-8" >
        <meta name="viewport" content="width=device-width, user-scalable=no,initial-scale=1 , minimum-scale=1.0, maximum-scale=1.0">
        <meta name="apple-mobile-web-app-capable" content="yes" >
        <meta name="apple-mobile-web-app-status-bar-style" content="black" >
        <link rel="apple-touch-icon" type="image/x-icon" href="img/apple-touch-icon-57x57.png" >
        <link rel="apple-touch-icon" sizes="76x76" href="img/apple-touch-icon-76x76.png" >
        <link rel="apple-touch-icon" sizes="120x120" href="img/apple-touch-icon-120x120.png" >
        <link rel="apple-touch-icon" sizes="152x152" href="img/apple-touch-icon-152x152.png" >
        <link rel="apple-touch-icon" sizes="180x180" href="img/apple-touch-icon-180x180.png" >
        <link rel="apple-touch-icon" sizes="192x192" href="img/apple-touch-icon-192x192.png" >
        <title>Level</title>
        <link rel="stylesheet" href="css/stylesheet.css">
        <link rel="shortcut icon" type="image/x-icon" href="img/favicon.ico" >
    </head>
    <body>
        <div id="main">
            <svg id="svg1" viewBox="0 0 385 100"  xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="grad_background_fill" x1="0" x2="0" y1="0" y2="1">
                        <stop stop-color="#28c800" offset="0"></stop>
                        <stop stop-color="#7fff00" offset="1"></stop>
                    </linearGradient>
                    <linearGradient id="grad_background_stroke" x1="0" x2="0" y1="0" y2="1">
                        <stop stop-color="#777788" offset="0"></stop>
                        <stop stop-color="#aaaabb" offset="0.3"></stop>
                        <stop stop-color="#445566" offset="1"></stop>
                    </linearGradient>
                    <linearGradient id="grad_bubble_stroke" y2="1" x2="1" y1="0" x1="0">
                        <stop stop-color="#000000" offset="0" stop-opacity="1"></stop>
                        <stop stop-color="#336633" offset="1" stop-opacity="0.3"></stop>
                    </linearGradient>
                    <radialGradient id="grad_bubble_fill" cx="50%" cy="50%" r="50%" fx="30%" fy="20%">
                        <stop offset="0%" style="stop-color:#ffffff; stop-opacity:0.8"></stop>
                        <stop offset="100%" style="stop-color:#ffffff; stop-opacity:0.3"></stop>
                    </radialGradient>
                    <radialGradient id="grad_gloss_top" cx="50%" cy="10%" r="50%" fx="50%" fy="00%">
                        <stop offset="0%" style="stop-color:rgb(255,255,255);stop-opacity:0.5"></stop>
                        <stop offset="99%" style="stop-color:rgb(255,255,255);stop-opacity:0.6"></stop>
                        <stop offset="100%" style="stop-color:rgb(255,255,255);stop-opacity:0"></stop>
                    </radialGradient>
                    <linearGradient id="grad_gloss_bottom" x1="0" x2="0" y1="0" y2="1">
                        <stop stop-color="#ffffff" offset="0.5" stop-opacity="0"></stop>
                        <stop stop-color="#ffffff" offset="0.5" stop-opacity="0.1"></stop>
                        <stop stop-color="#ffffff" offset="1" stop-opacity="0.4"></stop>
                    </linearGradient>
                </defs>
                <g>
                    <rect id="background" height="90" width="375" y="5" x="5" rx="10" ry="10" stroke-width="5" stroke="url(#grad_background_stroke)" fill="url(#grad_background_fill)"></rect>
                    <ellipse id="bubble" cy="50" cx="192" ry="31" rx="44" stroke-width="2" stroke="url(#grad_bubble_stroke)" fill="url(#grad_bubble_fill)"></ellipse>
                    <line x1="145" y1="8" x2="145" y2="92" style="stroke:rgb(255, 0, 0);stroke-width:2"></line>
                    <line x1="240" y1="8" x2="240" y2="92" style="stroke:rgb(255,0,0);stroke-width:2"></line>
                    <rect id="gloss" height="66" width="371" y="8" x="7" rx="9" ry="9" fill-opacity="0.76" fill="url(#grad_gloss_top)"></rect>
                    <rect id="gloss2" height="84" width="367" y="7" x="9" rx="8" ry="8" fill-opacity="0.76" fill="url(#grad_gloss_bottom)"></rect>
                </g>
            </svg>
            <svg id="svg2" viewBox="0 0 385 100" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="grad_background_fill2" x1="0" x2="1" y1="0" y2="0">
                        <stop stop-color="#28c800" offset="0"></stop>
                        <stop stop-color="#7fff00" offset="1"></stop>
                    </linearGradient>
                    <linearGradient id="grad_background_stroke2" x1="0" x2="1" y1="0" y2="0">
                        <stop stop-color="#777788" offset="0"></stop>
                        <stop stop-color="#aaaabb" offset="0.3"></stop>
                        <stop stop-color="#445566" offset="1"></stop>
                    </linearGradient>
                    <linearGradient id="grad_bubble_stroke2" x1="0" x2="1" y1="1" y2="0">
                        <stop stop-color="#000000" offset="0" stop-opacity="1"></stop>
                        <stop stop-color="#336633" offset="1" stop-opacity="0.3"></stop>
                    </linearGradient>
                    <radialGradient id="grad_bubble_fill2" cx="50%" cy="50%" r="50%" fx="30%" fy="80%">
                        <stop offset="0%" style="stop-color:#ffffff; stop-opacity:0.8"></stop>
                        <stop offset="100%" style="stop-color:#ffffff; stop-opacity:0.3"></stop>
                    </radialGradient>
                    <radialGradient id="grad_gloss_top2" cx="10%" cy="50%" r="50%" fx="00%" fy="50%">
                        <stop offset="0%" style="stop-color:rgb(255,255,255);stop-opacity:0.3"></stop>
                        <stop offset="99%" style="stop-color:rgb(255,255,255);stop-opacity:0.6"></stop>
                        <stop offset="100%" style="stop-color:rgb(255,255,255);stop-opacity:0"></stop>
                    </radialGradient>
                    <linearGradient id="grad_gloss_bottom2" x1="0" x2="1" y1="0" y2="0">
                        <stop stop-color="#ffffff" offset="0.5" stop-opacity="0"></stop>
                        <stop stop-color="#ffffff" offset="0.5" stop-opacity="0.1"></stop>
                        <stop stop-color="#ffffff" offset="1" stop-opacity="0.4"></stop>
                    </linearGradient>
                </defs>
                <g>
                    <rect id="background2" height="90" width="375" y="5" x="5" rx="10" ry="10" stroke-width="5" stroke="url(#grad_background_stroke2)" fill="url(#grad_background_fill2)"></rect>
                    <ellipse id="bubble2" cy="50" cx="192" ry="31" rx="44" stroke-width="2" stroke="url(#grad_bubble_stroke2)" fill="url(#grad_bubble_fill2)"></ellipse>
                    <line x1="145" y1="8" x2="145" y2="92" style="stroke:rgb(255, 0, 0);stroke-width:2"></line>
                    <line x1="240" y1="8" x2="240" y2="92" style="stroke:rgb(255,0,0);stroke-width:2"></line>
                    <rect id="gloss3" height="86" width="325" y="8" x="7" rx="9" ry="9" fill-opacity="0.76" fill="url(#grad_gloss_top2)"></rect>
                    <rect id="gloss4" height="84" width="367" y="7" x="9" rx="8" ry="8" fill-opacity="0.76" fill="url(#grad_gloss_bottom2)"></rect>
                </g>
            </svg>
        </div>
        <script src="js/orientation.js"></script>
    </body>
</html>
