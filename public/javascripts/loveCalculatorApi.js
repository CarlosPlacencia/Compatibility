   // Creating the heart loading animation
   let heart = new ldBar( '.loadingHeart', {
    'type': 'fill',
    'path': 'M90.5,23.2c0-12.5-10.2-22.7-22.7-22.7c-13.6,0-20.9,8.6-22.3,13.8C44.3,8.9,35.1,0.5,23.2,0.5C10.7,0.5,0.5,10.70.5,23.2c0,22.2,36.5,45.3,45,55.9C53.5,67.3,90.5,46.3,90.5,23.2z',
    'duration': '2.3',
    'fill': '#F62459',
    'fill-background': '#ddd', // Color of the background
    'fill-background-extrude': 0,
    'transition-in': true,
    'duration': 2
} );

async function serverCall () {
    let fName = document.querySelector( '.fName' ).value;
    let sName = document.querySelector( '.sName' ).value;
    let message = document.querySelectorAll( '.message');


    let names = {
        fname: fName,
        sname: sName,
    };

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(names) // body data type must match "Content-Type" header
    }

    const responce = await fetch('/loveApi', options);
    const data = await responce.json();
  
    let percentage = Number(data.percentage);

    message[0].textContent = data.result;
    message[1].textContent = data.result;
    heart.set(percentage);

}

