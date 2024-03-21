
    document.addEventListener("DOMContentLoaded", function() {
        updateProgressBar(); 
    });

    function updateProgressBar() {
        var totalQuestions = document.querySelectorAll('.question').length;
        var answeredQuestions = 0;

        document.querySelectorAll('.question select').forEach(function(select) {
            if (select.value !== "") {
                answeredQuestions++;
            }
        });

        document.querySelectorAll('.question input[type="text"]').forEach(function(input) {
            if (input.value.length > 0) {
                answeredQuestions++;
            }
        });

        document.querySelectorAll('.question input[type="radio"]').forEach(function(radio) {
            if (radio.checked) {
                answeredQuestions++;
            }
        });

        var progress = totalQuestions > 0 ? (answeredQuestions / totalQuestions) * 100 : 0; 
        document.getElementById('progress').style.width = progress + '%';
   
       
    
      
    }
    