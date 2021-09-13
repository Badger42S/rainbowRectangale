window.onload = () => {
    const mainContainer = document.getElementById('mainContainer');
    const rectangleToplength = document.getElementById('rectangleToplength');
    const rectangleLeftlength = document.getElementById('rectangleLeftlength');
    const changeButton = document.getElementById('changeButton');

    const changeColorRectangle = ( toplength, leftlength) => {
        const top = toplength > 0 ? toplength: 10;
        const left = leftlength > 0 ? leftlength: 10;

        mainContainer.innerHTML = '';
        mainContainer.style.height = `${top*50 + 20}px`;
        mainContainer.style.width = `${left*50 + 20}px`;

        for(let i = 0; i < top; i++) {
            for(let j = 0; j < left; j++) {
                let rectangleEl = document.createElement('div');
                rectangleEl.style.height = '50px';
                rectangleEl.style.width = '50px';
                rectangleEl.style.border = '1px solid black';
                
                let h,l =0;
                h = 300*i/top;
                l = 50 - 3*j;
            
                rectangleEl.onmouseenter =  event => {
                    event.target.style.backgroundColor = `hsl(${h}, 100%, ${l}%)`;
                };
                rectangleEl.onmouseleave =  event => {
                    event.target.style.backgroundColor = 'transparent';
                };
                mainContainer.appendChild(rectangleEl);
            };
        };
    };
    
    changeButton.onclick = ()=>{changeColorRectangle(rectangleToplength.value, rectangleLeftlength.value)};
    changeColorRectangle(0, 0);
};