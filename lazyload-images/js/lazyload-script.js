document.querySelectorAll('.lazyloading-content img').forEach((e)=>{	
	e.setAttribute('data-lazyloading',e.getAttribute('src'));
	e.removeAttribute('src');
});

 






document.addEventListener("DOMContentLoaded", function() {
    var lazyImages = [].slice.call(document.querySelectorAll(".lazyloading-content img"));
  
    if ("IntersectionObserver" in window) {
      let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            let entryImg = entry.target.getAttribute('data-lazyloading');
            entry.target.setAttribute('src',entryImg);
            entry.target.classList.add('lazyLoading');
          }
        });
      });
  
      lazyImages.forEach(function(lazyImage) {
        lazyImageObserver.observe(lazyImage);
      });
    } else {
      // Possibly fall back to event handlers here
    }
  });