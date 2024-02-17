    const form = document.getElementById('form');
    const hoursInput = document.getElementById('hh');
    const minutesInput = document.getElementById('mm');
    const secondsInput = document.getElementById('ss');
    const ct = document.getElementById('h4');
    const body = document.body;
    const alertSound = new Audio("music.mp3");

    form.addEventListener('submit', function(event) {
        event.preventDefault();
  
        const hours = +hoursInput.value;
        const minutes = +minutesInput.value;
        const seconds = +secondsInput.value;
  
        const totalSeconds = (hours * 3600) + (minutes * 60) + seconds;
  
        if (totalSeconds <= 0) {
          alert('Please enter a valid time.');
          return;
        }
  


        const countdownDiv = document.createElement('div');
        countdownDiv.classList.add("rem-time");
        body.appendChild(countdownDiv);
        startCountdown(totalSeconds, countdownDiv);
        form.reset();
      });



      function startCountdown(totalSeconds, countdownDiv) {

        ct.classList.add("hide");

        const oneSecond = 1000;
        
        let remainingSeconds = totalSeconds;

        const h3 = document.createElement('h3');
        h3.classList.add("blurrr");
        h3.innerText = "Time Left :";
        
        const p1 = document.createElement('p');
        const sp1 = document.createElement('span');
        const p2 = document.createElement('p');
        const sp2 = document.createElement('span');
        const p3 = document.createElement('p');
        
        sp1.innerText = " : ";
        sp2.innerText = " : ";

        countdownDiv.append(h3, p1, sp1, p2, sp2, p3);


        const stopButton = document.createElement('button');
        stopButton.textContent = 'Delete';
        stopButton.classList.add("del");
        stopButton.addEventListener('click', function() {
          clearInterval(intervalId);
          countdownDiv.innerHTML = '';
        });
        countdownDiv.appendChild(stopButton);
  
          const intervalId = setInterval(function() {
          const hours = Math.floor(remainingSeconds / 3600);
          const minutes = Math.floor((remainingSeconds % 3600) / 60);
          const seconds = remainingSeconds % 60;
  
          p1.textContent = `${hours.toString().padStart(2, '0')}`;
          p2.textContent = `${minutes.toString().padStart(2, '0')}`;
          p3.textContent = `${seconds.toString().padStart(2, '0')}`;

          if (remainingSeconds === 0) {
            clearInterval(intervalId);
            h3.innerText = "Timer is Up !!!";
            p1.textContent = "";
            p2.textContent = "";
            p3.textContent = "";
            sp1.innerText = "";
            sp2.innerText = "";
            alertSound.play();
            countdownDiv.classList.add("bgg");
            h3.classList.toggle("blurrr");
            h3.classList.toggle("reddd");
          }
          remainingSeconds--;
        }, oneSecond);
      }