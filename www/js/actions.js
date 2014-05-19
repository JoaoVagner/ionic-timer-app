function stopResumeTimer(sectionId, btn) {
  if (btn.innerHTML === 'Start') {
    document.getElementById(sectionId).getElementsByTagName('timer')[0].start();
    btn.innerHTML = 'Stop';
  }
  else if (btn.innerHTML === 'Stop') {
    document.getElementById(sectionId).getElementsByTagName('timer')[0].stop();
    btn.innerHTML = 'Resume';
  }
  else {
    document.getElementById(sectionId).getElementsByTagName('timer')[0].resume();
    btn.innerHTML = 'Stop';
  }
}