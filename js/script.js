document.addEventListener <'DOMContentLoaded', function () { const filterCheckboxes = document.querySelectorAll('.filter-checkbox'); const filteredContent = document.getElementById('filtered-content')};

filterCheckboxes.forEach(function (checkbox) { checkbox.addEventListener('change', function () { applyFilters(); }); });






const el = document.getElementById('overlayBtn');
if (el) {
  el.addEventListener('click', swapper, false);
}


 function redirectToPage(pageURL) {
     window.location.href = pageURL; 
    }


    
        document.addEventListener('click', function(event) {
          
          var clickAnimation = document.createElement('div');
          clickAnimation.className = 'click-animation';
    
          
          clickAnimation.style.left = (event.clientX - 10) + 'px';
          clickAnimation.style.top = (event.clientY - 10) + 'px';
    
          
          document.body.appendChild(clickAnimation);
    
          
          clickAnimation.addEventListener('animationend', function() {
            document.body.removeChild(clickAnimation);
          });
        });
    
        
           
        var zoomedImage = document.querySelector('.zoomed-image');
    
        zoomedImage.addEventListener('click', function() {
          zoomedImage.style.transform = 'scale(2.0)'; 
        });
    
        zoomedImage.addEventListener('mouseout', function() {
          zoomedImage.style.transform = 'scale(1.0)'; 
        });

         
         zoomedImage.addEventListener('mouseover', function() {
         zoomedImage.style.transform = 'scale(1.2)'; 
        });

        

           
      
           
        