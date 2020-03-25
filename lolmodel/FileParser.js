/**
 * @author Pupix / https://github.com/pupix
 */

THREE.FileParser = function (buffer) {

    this.data = new DataView(buffer);
    this._offset = 0;
    this._endian = 'little';

};

THREE.FileParser.prototype = {

    // UTIL
    tell: function () {
        return this._offset;
    },

    // UTIL
    seek: function (offset) {
        this._offset = offset;
    },

    // UTIL
    skip: function (offset) {
        this._offset += offset;
    },

    // UTIL
    endian: function (val) {

        // PREPARING
        if (typeof val === 'string') { val.toLowerCase(); }

        switch(val) {
            case 'be':
            case 'big':
            case !val:
                this._endian = 'big';
                break;
            case 'le':
            case 'little':
            case val:
                this._endian = 'little';
                break;
        }
    },

    /**************************************************************/

    // NATIVE
    buffer: function () {
        return this.data.buffer;
    },

    // NATIVE
    byteLength: function () {
        return this.data.byteLength;
    },

    // NATIVE
    byteOffset: function () {
        return this.data.byteOffset;
    },

    /**************************************************************/

    int8: function (length) {
        return this._get('getInt8', length, 1);
    },

    uint8: function (length) {
        return this._get('getUint8', length, 1);
    },

    int16: function (length) {
        return this._get('getInt16', length, 2);
    },

    uint16: function (length) {
        return this._get('getUint16', length, 2);
    },

    int32: function (length) {
        return this._get('getInt32', length, 4);
    },

    uint32: function (length) {
        return this._get('getUint32', length, 4);
    },

    float: function (length) {
        return this._get('getFloat32', length, 4);
    },

    double: function (length) {
        return this._get('getFloat64', length, 8);
    },

    /**************************************************************/

    // EXTRA
    string: function (length) {
        var res = '',
            i;

        for (i = 0; i < length; i += 1) {
            res += String.fromCharCode(this.uint8());
        }

        return res;
    },

    // EXTRA
    string0: function () {
        var res = '',
            curr;

        do {
            curr = this.uint8();
            res += String.fromCharCode(curr);
        } while(curr !== 0);

        return curr;
    },

    /**************************************************************/

    // PRIVATE
    _get: function (method, length, skipSize) {
        var res = [],
            i;

        // PREPARING
        if (length === undefined) { length = 1; }

        for (i = 0; i < length; i+= 1) {
            res.push(this.data[method](this._offset, this._endian === 'little'));
            this._offset += skipSize;
        }

        return length === 1 ? res[0] : res;
    }

};