const containers = document.querySelectorAll('.img-container');

// Add hover effects to each container
containers.forEach((container) => {
    container.addEventListener('mouseover', function(){
        this.querySelector('.link').style.height = '16px';
        this.querySelector('.info').style.transform = 'translateY(-8px)';
        const imgElement = this.querySelector('img');
        imgElement.style.transform = "scale(1.05)";
        imgElement.style.filter = "grayscale(100%) brightness(50%) blur(6px)";
        
    })
    container.addEventListener('mouseleave', function(){
        this.querySelector('.link').style.height = '0';
        this.querySelector('.info').style.transform = 'translateY(0)';
        const imgElement = this.querySelector('img');
        imgElement.style.transform = "scale(1)";
        imgElement.style.filter = "grayscale(0%) brightness(100%) blur(0)";
    })
    
})