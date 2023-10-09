
const ul = document.querySelector('ul');
const firstTimestampElement = document.querySelector('#first-timestamp');
const lastTimestampElement = document.querySelector('#last-timestamp');
const image = document.querySelector('#nathan');

function randomJson() {
    var randomNumber = Math.floor(Math.random() * 97) + 1; 
    var jsonName = "message_" + randomNumber + ".json"; 


    fetch('json/' + jsonName)
    .then(res => res.json())
    .then(data => {
        const messages = data.messages;
        numMessages = messages.length;

        messages.forEach(message => {
            const li = document.createElement('li');
            li.textContent = `${message.sender_name}: ${message.content}`;
            ul.appendChild(li);

        
            li.addEventListener('mouseover', () => {
                const backgroundImage = document.createElement('div');
                backgroundImage.style.position = 'fixed';
                backgroundImage.style.top = '0';
                backgroundImage.style.left = '0';
                backgroundImage.style.width = '100%';
                backgroundImage.style.height = '100%';
                backgroundImage.style.backgroundImage = `url(${message.image_link})`;
                backgroundImage.style.filter = 'blur(15px)'; // Adjust the value (5px) to control the amount of blur
                backgroundImage.style.zIndex = '-1'; // Place it behind other elements
                document.body.appendChild(backgroundImage);
            });
            
        
            li.addEventListener('mouseout', () => {
                backgroundImage.body.style.backgroundColor = 'black';
                
            });
        });

        const firstMessageTimestamp = messages[0].timestamp_ms;
        const lastMessageTimestamp = messages[messages.length - 1].timestamp_ms;
        const firstDate = new Date(firstMessageTimestamp);
        const lastDate = new Date(lastMessageTimestamp);
        const formattedFirstDate = firstDate.toLocaleString();
        const formattedLastDate = lastDate.toLocaleString();
        firstTimestampElement.textContent = `${formattedFirstDate}`;
        lastTimestampElement.textContent = `${formattedLastDate}`;


        image.addEventListener('click', function() {
            location.reload(); // Reload the page when the image is clicked
            document.body.style.backgroundColor = "red";
            image.style.display = "none";
            firstTimestampElement.style.display = "none";
            lastTimestampElement.style.display = "none";
            document.ul.style.fontFamily = "arial";
        },);

        
    })

    .catch(error => {
        console.error("Error fetching JSON:", error);

    });

    
}

randomJson();


function setup() {
    let c = createCanvas(2000, 1500);
    c.parent('canvas-wrapper');
}

function draw() {
    
    //const ellipseSize = map(numMessages*100, 0, 100, 10, 100); // 
    //fill(0,255,0);
    //ellipse(200, 200, ellipseSize, ellipseSize); // 

    translate(width/2, height/2);
    
   
    
    for (x = 0; x<80; x++){
      for (y = 0 ;y<numMessages; y++){
      
      strokeWeight(.05);
      stroke(255, 0, 0 );
      noFill();
      rotate(30);
      line(numMessages, numMessages, 10 * x, 10 * y);
      }
    }
    

  }







/*const ul = document.querySelector('ul');

function randomJson () {
    var randomNumber = Math.floor(Math.random() * 97 ) + 1; //creating a random number
    var jsonName = "message_" + randomNumber + ".json"; // assigning random number to first part name of img
    //let jsonid = document.getElementById("jsonid").src= "json/" + jsonName;
  }

fetch('json/' jsonName)
.then(res => res.json())
.then(data => {
  
const messages = data.messages;

messages.forEach(message => {
    const li = document.createElement('li');
    li.textContent = `${message.sender_name}: ${message.content}`;

    ul.appendChild(li);
});
})

//pass in files name
   

//https://www.tutorialspoint.com/how-to-import-local-json-file-data-to-my-javascript-variable
//https://www.youtube.com/watch?v=Oage6H4GX2o&ab_channel=ByteGrad */