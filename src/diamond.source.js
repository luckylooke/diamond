/**
 * @overview dragon - Library for adding support of SOLID principles to any project, for now it just have support of "open-closed" principle.
 * @copyright Copyright (c) 2016 Ctibor Laky and contributors
 * @license   Licensed under MIT license
 * @version   0.0.1
 */

var Promise = require('es6-promise').Promise;

module.exports = {
    procedureGroups: {},
    context: null,
    run: function (procedureGroupName, callback) {

        // https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/arguments
        var args = (arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments)),
            result = [],
            procedureGroup = this.procedureGroups[procedureGroupName],
            procedures = procedureGroup.procedures,
            proceduresLength = procedures.length,
            breakOnValues = procedureGroup.breakOnValues.length;

        args.splice(0, 2);
        args.unshift(Promise);

        executeProcedure(0);

        function executeProcedure(i) {
            "use strict";
            if(i == proceduresLength)
                return callback(result[i-1], result, args);

            result[i] = procedures[i].apply(procedures[i], args);

            if(breakOnValues && breakOnValues.indexOf(result[i]))
                return callback(result[i], result, args);

            if(result[i] instanceof Promise)
                result[i].then(function (value) {
                        result[i] = value;
                        executeProcedure(i+1);
                    },
                    function (reason) {
                        result[i] = reason;
                    });
            else
                executeProcedure(i+1);
        }
    },
    registerProcedureGroup: function (procedureGroupName, procedureGroupOptions) {
        if(this.procedureGroups[procedureGroupName])
            throw new Error('Trying to register the same ProcedureGroup twice! ProcedureGroupName: ' + procedureGroupName);
        this.procedureGroups[procedureGroupName] = new ProcedureGroup(procedureGroupName, procedureGroupOptions);
        return this.procedureGroups[procedureGroupName];
    }
};

function ProcedureGroup(name, options) {
    this.procedures = [];
    this.name = name;
    this.breakOnValues = options.breakOnValues;
}

ProcedureGroup.prototype.addProcedure = function (procedure, index) {
    if(index)
        this.procedures.splice(index, 0, procedure);
    else
        this.procedures.push(procedure);
};