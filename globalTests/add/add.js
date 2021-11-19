/*! *****************************************************************************
 * made by Abiria
 * 
 * Copyright (c) Abiria All rights reserved.
 * in 2020 Wed Jen 04
 ***************************************************************************** */

'use strict'

function add(...numbers) {
  if (numbers.length) {
    return numbers.reduce((sum, number) => sum + number)
  } return 0
}

module.exports = add