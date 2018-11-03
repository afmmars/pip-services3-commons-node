"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Result generated by schema validation
 */
var ValidationResult = /** @class */ (function () {
    /**
     * Creates a new instance of validation ressult and sets its values.
     *
     * @param path      a dot notation path of the validated element.
     * @param type      a type of the validation result: Information, Warning, or Error.
     * @param code      an error code.
     * @param message   a human readable message.
     * @param expected  an value expected by schema validation.
     * @param actual    an actual value found by schema validation.
     *
     * @see [[ValidationResultType]]
     */
    function ValidationResult(path, type, code, message, expected, actual) {
        if (path === void 0) { path = null; }
        if (type === void 0) { type = null; }
        if (code === void 0) { code = null; }
        if (message === void 0) { message = null; }
        if (expected === void 0) { expected = null; }
        if (actual === void 0) { actual = null; }
        this._path = path;
        this._type = type;
        this._code = code;
        this._message = message;
        this._expected = expected;
        this._actual = actual;
    }
    /**
     * Gets dot notation path of the validated element.
     *
     * @returns the path of the validated element.
     */
    ValidationResult.prototype.getPath = function () {
        return this._path;
    };
    /**
     * Gets the type of the validation result: Information, Warning, or Error.
     *
     * @returns the type of the validation result.
     *
     * @see [[ValidationResultType]]
     */
    ValidationResult.prototype.getType = function () {
        return this._type;
    };
    /**
     * Gets the error code.
     *
     * @returns the error code
     */
    ValidationResult.prototype.getCode = function () {
        return this._code;
    };
    /**
     * Gets the human readable message.
     *
     * @returns the result message.
     */
    ValidationResult.prototype.getMessage = function () {
        return this._message;
    };
    /**
     * Gets the value expected by schema validation.
     *
     * @returns the expected value.
     */
    ValidationResult.prototype.getExpected = function () {
        return this._expected;
    };
    /**
     * Gets the actual value found by schema validation.
     *
     * @returns the actual value.
     */
    ValidationResult.prototype.getActual = function () {
        return this._actual;
    };
    return ValidationResult;
}());
exports.ValidationResult = ValidationResult;
//# sourceMappingURL=ValidationResult.js.map