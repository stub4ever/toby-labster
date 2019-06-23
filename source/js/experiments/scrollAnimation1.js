
import Util from "../utils/Util";
// // import Resizer from "../utils/Resizer";

import ScrollSection from "../ScrolledSection";
import imagesLoaded from 'imagesloaded';
// import lazysizes from 'lazysizes';
// // import charming from 'charming';

        
// // document.addEventListener('lazybeforeunveil', function(e){
// //     var bg = e.target.getAttribute('data-bg');
// //     if(bg){
// //         e.target.style.backgroundImage = 'url(' + bg + ')';
// //     }
// // });

imagesLoaded( document.body, function() {        
    // Remove loading class from body 
    const loadingWrapper = document.querySelector('.loading__wrapper');
    const body = document.body; 

    if(Util.hasClass(body,'loading')) {
        Util.removeClass(loadingWrapper, 'is--visible');
        Util.addClass(loadingWrapper, 'is--invisible');
        Util.removeClass(document.body, 'loading');
    }
    
});
  

 
    