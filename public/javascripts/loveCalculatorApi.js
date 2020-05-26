async function serverCall () {
    let fName = document.getElementById( 'Fname' ).value;
    let sName = document.getElementById( 'Sname' ).value;

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
    console.log( data );
}