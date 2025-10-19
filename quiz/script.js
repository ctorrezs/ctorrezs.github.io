function gradeQuiz() {
  var score = 0;

  // ----- Q1 (radio): correct = URL -----
  if (document.getElementById('q1_url') && document.getElementById('q1_url').checked == true) {
    document.getElementById('fb-q1').innerHTML = 'Correct ✅';
    document.getElementById('fb-q1').className = 'feedback correct';
    score = score + 1;
  } else {
    document.getElementById('fb-q1').innerHTML = 'Incorrect ❌';
    document.getElementById('fb-q1').className = 'feedback incorrect';
  }

  // ----- Q2 (radio): correct = Bluetooth -----
  if (document.getElementById('q2_bluetooth') && document.getElementById('q2_bluetooth').checked == true) {
    document.getElementById('fb-q2').innerHTML = 'Correct ✅';
    document.getElementById('fb-q2').className = 'feedback correct';
    score = score + 1;
  } else {
    document.getElementById('fb-q2').innerHTML = 'Incorrect ❌';
    document.getElementById('fb-q2').className = 'feedback incorrect';
  }

  // ----- Q3 (checkbox): correct = Win11, Win8.1, Win7 (and NOT Win6) -----
  var win11 = document.getElementById('q3_win11') && document.getElementById('q3_win11').checked == true;
  var win81 = document.getElementById('q3_win81') && document.getElementById('q3_win81').checked == true;
  var win7  = document.getElementById('q3_win7')  && document.getElementById('q3_win7').checked == true;
  var win6  = document.getElementById('q3_win6')  && document.getElementById('q3_win6').checked == true;

  if (win11 && win81 && win7 && (win6 == false)) {
    document.getElementById('fb-q3').innerHTML = 'Correct ✅';
    document.getElementById('fb-q3').className = 'feedback correct';
    score = score + 1;
  } else {
    document.getElementById('fb-q3').innerHTML = 'Incorrect ❌';
    document.getElementById('fb-q3').className = 'feedback incorrect';
  }

  // ----- Q4 (checkbox): correct = Win11, macOS, Linux (and NOT Chrome) -----
  var w11  = document.getElementById('q4_win11') && document.getElementById('q4_win11').checked == true;
  var mac  = document.getElementById('q4_macos') && document.getElementById('q4_macos').checked == true;
  var lin  = document.getElementById('q4_linux') && document.getElementById('q4_linux').checked == true;
  var chr  = document.getElementById('q4_chrome') && document.getElementById('q4_chrome').checked == true;

  if (w11 && mac && lin && (chr == false)) {
    document.getElementById('fb-q4').innerHTML = 'Correct ✅';
    document.getElementById('fb-q4').className = 'feedback correct';
    score = score + 1;
  } else {
    document.getElementById('fb-q4').innerHTML = 'Incorrect ❌';
    document.getElementById('fb-q4').className = 'feedback incorrect';
  }

  // ----- Show score -----
  if (document.getElementById('score')) {
    document.getElementById('score').innerHTML = 'Score: ' + score + ' / 4';
  }
}

function clearFeedback() {
  // Clears feedback text and classes, resets score text
  var ids = ['fb-q1','fb-q2','fb-q3','fb-q4'];
  for (var i = 0; i < ids.length; i++) {
    var el = document.getElementById(ids[i]);
    if (el) {
      el.innerHTML = '';
      el.className = 'feedback';
    }
  }
  if (document.getElementById('score')) {
    document.getElementById('score').innerHTML = 'Score: 0 / 4';
  }
}
