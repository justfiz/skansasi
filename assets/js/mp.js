    AOS.init({
      once: true,
      offset: 100,
      duration: 800,
      easing: 'ease-in-out',
    });
    
    function openImage(img) {
      document.getElementById("modal-img").src = img.src;
      document.getElementById("image-modal").style.display = "flex";
    }