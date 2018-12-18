module.exports = (() => {    
    var state = new Uint32Array(4);    
    var MAXINT_PLUS_1 = Math.pow(2, 32)
    for (var i = 0; i < state.length; i++) {
        state[i] = Math.random() * MAXINT_PLUS_1;
    }
    var saved;

    return {     
        seed: (s) => {
            if (s === 0 || s == null) {                
                return;
            }            
            if (typeof s === 'number') {             
                state[0] = s >>> 0;
            } else if (s.constructor && s.constructor.name === 'Uint32Array') {
                for (var i = 0; i < state.length; i++) {
                    if (s[i] !== undefined) {
                        state[i] = s[i];
                    } else {
                        state[i] = 0;
                    }
                }
            }
        },        
        random: () => {            
            if (saved != null) {
                var temp = saved;
                saved = null;
                return temp / MAXINT_PLUS_1;
            }            
            var x = new Uint32Array(2);
            x[0] = state[0];
            x[1] = state[1];            
            var y = new Uint32Array(2);
            y[0] = state[2];
            y[1] = state[3];            
            state[0] = y[0];
            state[1] = y[1];
            var xl23 = new Uint32Array(2);
            xl23[0] = x[0] << 23;
            xl23[1] = (x[1] << 23) & (x[0] >> 11);
            x[0] ^= xl23[0];
            x[1] ^= xl23[1];
            var xr17 = new Uint32Array(2);
            xr17[1] = x[1] >>> 17;
            xr17[0] = (x[0] >>> 17) & (x[1] << 19);
            x[0] ^= xr17[0];
            x[1] ^= xr17[1];
            var yr26 = new Uint32Array(2);
            yr26[1] = y[1] >>> 26;
            yr26[0] = (y[0] >>> 26) & (y[1] << 6);
            x[0] ^= y[0] ^ yr26[0];
            x[1] ^= y[1] ^ yr26[1];
            state[2] = x[0];
            state[3] = x[1];
            var retval = new Uint32Array(2);
            retval[0] = x[0] + y[0];
            retval[1] = x[1] + y[1] + (retval[0] < x[0]);
            saved = retval[1];
            return retval[0] / MAXINT_PLUS_1;
        }
    };
})();