// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Pablo Fiallos
// Created on: Sep 2020
// This file contains the JS functions for index.html

"use strict"


function enterClicked() {
  // input
  const a = parseFloat(document.getElementById("aValue").value)
  const b = parseFloat(document.getElementById("bValue").value)
  const h = parseFloat(document.getElementById("hValue").value)
  const area =  (a + b) / 2 * h
  const areaRounded = area.toFixed(2)
  // output
  document.getElementById("user-info").innerHTML =
    "A = " + areaRounded + "u <sup>2</sup>"
}