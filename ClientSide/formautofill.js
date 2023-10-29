
var formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSfg6AZp6zNnD_Qyf02swPdn2_S0YAkv9SpALooj_N7o9u0e6w/viewform';
var formSchema = [
    {type: 'radio'},      // A
    {type: 'radio'},      // B
    {type: 'checkbox'},   // C
    {type: 'checkbox'},   // D
    // {type: 'short_text', func: generateAnswerE },   // E
    // {type: 'paragraph', func: generateParagraph },  // F
];

function generateAnswerE() {
  // Let's say we want a random number
  return Math.floor(Math.random() * 30) + 16;
}

function generateParagraph() {
  // Just for the example
  return "Hello world";
}

(function() {
  window.addEventListener('load', function() {
    if (window.location.pathname.indexOf('/forms/d') === 0) { // If we're on the form page
      submitRandomForm();
    } else if (window.location.pathname.indexOf('/forms/u') === 0) { // If we're on the "submitted" page
      window.location.href = formUrl;
    }

    function submitRandomForm() {
      var formItems = document.querySelectorAll('.freebirdFormviewerViewItemsItemItem');

      for (var i = 0; i < formSchema.length; i++) {
        var field = formSchema[i],
            item  = formItems[i];
        switch(field.type) {
            case 'radio':
                var radios     = item.querySelectorAll(".appsMaterialWizToggleRadiogroupRadioButtonContainer"),
                    radioIndex = Math.floor(Math.random() * radios.length);
                radios[radioIndex].click();
                break;
            case 'checkbox':
                var checkboxes    = item.querySelectorAll(".appsMaterialWizTogglePapercheckboxCheckbox"),
                    checkboxIndex = Math.floor(Math.random() * checkboxes.length);
                checkboxes[checkboxIndex].click();
                break;
            // case 'short_text':
            //     item.querySelector(".quantumWizTextinputPaperinputInput").value = field.func();
            //     break;
            // case 'paragraph':
            //     item.querySelector(".quantumWizTextinputPapertextareaInput").value = field.func();
            //     break;
        }
      }

      // Submit
      document.querySelector(".freebirdFormviewerViewCenteredContent .appsMaterialWizButtonPaperbuttonLabel").click();
    }
  });
})();

