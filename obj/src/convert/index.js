"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @module convert
 *
 * Todo: Rewrite this description
 *
 * @preferred
 * Contains "soft" data converters. Soft data converters differ from the data conversion algorithms
 * found in typical programming language, due to the fact that they support rare conversions between
 * various data types (such as integer to timespan, timespan to string, and so on).
 *
 * These converters are necessary, due to the fact that data in enterprise systems is represented in
 * various forms and conversion is often necessary – at times in very difficult combinations.
 */
var StringConverter_1 = require("./StringConverter");
exports.StringConverter = StringConverter_1.StringConverter;
var BooleanConverter_1 = require("./BooleanConverter");
exports.BooleanConverter = BooleanConverter_1.BooleanConverter;
var IntegerConverter_1 = require("./IntegerConverter");
exports.IntegerConverter = IntegerConverter_1.IntegerConverter;
var LongConverter_1 = require("./LongConverter");
exports.LongConverter = LongConverter_1.LongConverter;
var FloatConverter_1 = require("./FloatConverter");
exports.FloatConverter = FloatConverter_1.FloatConverter;
var DoubleConverter_1 = require("./DoubleConverter");
exports.DoubleConverter = DoubleConverter_1.DoubleConverter;
var DateTimeConverter_1 = require("./DateTimeConverter");
exports.DateTimeConverter = DateTimeConverter_1.DateTimeConverter;
var ArrayConverter_1 = require("./ArrayConverter");
exports.ArrayConverter = ArrayConverter_1.ArrayConverter;
var MapConverter_1 = require("./MapConverter");
exports.MapConverter = MapConverter_1.MapConverter;
var RecursiveMapConverter_1 = require("./RecursiveMapConverter");
exports.RecursiveMapConverter = RecursiveMapConverter_1.RecursiveMapConverter;
var TypeCode_1 = require("./TypeCode");
exports.TypeCode = TypeCode_1.TypeCode;
var TypeConverter_1 = require("./TypeConverter");
exports.TypeConverter = TypeConverter_1.TypeConverter;
var JsonConverter_1 = require("./JsonConverter");
exports.JsonConverter = JsonConverter_1.JsonConverter;
//# sourceMappingURL=index.js.map