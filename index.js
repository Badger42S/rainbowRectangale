window.onload = () => {
    const mainContainer = document.getElementById('mainContainer');
    const rectangleToplength = document.getElementById('rectangleToplength');
    const rectangleLeftlength = document.getElementById('rectangleLeftlength');
    const changeButton = document.getElementById('changeButton');

    const changeColorRectangle = ( toplength, leftlength) => {
        mainContainer.innerHTML = '';

        const top = toplength > 0 ? toplength: 10;
        const left = leftlength > 0 ? leftlength: 10;

        for(let i = 0; i < top; i++) {
            for(let j = 0; j < left; j++) {
                let squareEl = document.createElement('div');
                squareEl.style.height = '50px';
                squareEl.style.width = '50px';
                squareEl.style.border = '1px solid black';
                
                let h,l =0;
                h = 300*i/top;
                l = 50 - 3*j;
            
                squareEl.onmouseenter =  event => {
                    event.target.style.backgroundColor = `hsl(${h}, 100%, ${l}%)`;
                };
                squareEl.onmouseleave =  event => {
                    event.target.style.backgroundColor = 'transparent';
                };
                mainContainer.appendChild(squareEl);
            };
        };
    };
    
    changeButton.onclick = ()=>{changeColorRectangle(rectangleToplength.value, rectangleLeftlength.value)};
    changeColorRectangle(0, 0);
};