﻿// written by Lukasz Wieczorek at http://lukasz.io
// Please do not remove this and give credit if you repost. Thanks!

var myName=prompt("new name of layer","");

var layerLength = app.activeDocument.layers.length;
var docRef  = app.activeDocument;

docRef.activeLayer.name = myName;