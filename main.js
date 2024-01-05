const cursor = document.querySelector(".cursor");

window.onmousemove = e => {
    const x = e.clientX - cursor.offsetWidth / 2,
    y = e.clientY - cursor.offsetHeight / 2;
    
    const keyframes = {
        transform: cursor.style.transform = `translate(${x}px, ${y}px)`
    }

    cursor.animate(keyframes, {
        duration: 800,
        fill: "forwards"
    });
}


function loader() {
    let counter = document.querySelector(".count p")
    let currentValue = 0;

    function updateCounter() {
        if (currentValue < 100) {
            let increment = Math.floor(Math.random() * 10) + 1;
            currentValue = Math.min(currentValue + increment, 100);
            counter.textContent = currentValue;

            let delay = Math.floor(Math.random() * 200) + 25;
            setTimeout(updateCounter, delay);
        }
    }
    updateCounter();
}

loader();
gsap.to(".count", {opacity: 0, delay: 3.5, duration: 0.5})