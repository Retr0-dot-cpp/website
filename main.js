const cursor = document.getElementById("cursor");

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
