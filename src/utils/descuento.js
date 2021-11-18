const toThousand = require("./toThousand");

module.exports = (precio,descuento) => toThousand(precio -(descuento * precio /100).toFixed(0))