const btn = document.getElementById('scan-btn');
      const log = document.getElementById('log');
      let scanning = false;
      let interval;
      btn.onclick = () => {
        scanning = !scanning;
        btn.classList.toggle('active');
        btn.querySelector('span').innerText = scanning ? 'SCANNING...' : 'TAP TO SCAN';
        
        window.speechSynthesis.cancel();
        if (scanning) {
          log.innerText = "Scanning environment...";
          const msg = new SpeechSynthesisUtterance("Aura Guide activated. Scanning environment.");
          window.speechSynthesis.speak(msg);
          
          interval = setTimeout(() => {
            log.innerText = "Obstacle detected 2 meters ahead.";
            window.speechSynthesis.speak(new SpeechSynthesisUtterance("Obstacle detected 2 meters ahead. Please step slightly to your right."));
          }, 3500);
        } else {
          clearTimeout(interval);
          log.innerText = "System Ready.";
          window.speechSynthesis.speak(new SpeechSynthesisUtterance("Scan stopped."));
        }
      };