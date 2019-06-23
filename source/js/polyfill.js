// ========================================================
// POLYFILL
// ========================================================

// ========================================================
// HASH
// ========================================================
function hashReplace(h){if(h.substr(0,1)!='#')h='#'+h;(typeof window.location.replace=='function')?window.location.replace(window.location.pathname+h):window.location.hash=h;}

// ========================================================
// WINDOW RESIZE
// ========================================================
var SCREENSIZE = 0,
    WIDESCREEN = false;

function windowResize() {
    if (window.getComputedStyle != null) {
        SCREENSIZE = window.getComputedStyle(document.body, ':after').getPropertyValue('content');
        SCREENSIZE = parseInt(SCREENSIZE.replace(/["']{1}/gi, ""));
        if (isNaN(SCREENSIZE)) SCREENSIZE = 0;
    }
};


// ========================================================
// GSAP TIMELINE - ADD DELAY
// ========================================================

/**
* Add a delay at the end of the timeline (or at any label)
* @param {number} delay    Seconds to wait
* @param {string} position Label name where to start the delay
* 
* Usage: tl.addDelay(4); //easy!
*/
TimelineMax.prototype.addDelay = function (delay, position) {
    var delayAttr;
    if(typeof delay === 'undefined' || isNaN(delay)){
        return this;//skip if invalid parameters
    }
    if (typeof position === 'undefined') {
        delayAttr = '+=' + delay; //add delay at the end of the timeline
    } else if (typeof position === 'string') {
        delayAttr = position + '+=' + delay; //add delay after label
    } else if(!isNaN(position)) {
        delayAttr = delay + position; //if they're both numbers, assume absolute position
    } else {
        return this; //nothing done
    }
    return this.set({}, {}, delayAttr);
};


