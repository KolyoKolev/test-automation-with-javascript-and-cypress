(function () {
  const ALL_INPUTS = document.querySelectorAll('input');
  const ALL_LABELS = document.querySelectorAll('label');

  Array.from(ALL_INPUTS).forEach((input, i) => {
    input.oninvalid = function (e) {
      e.target.setCustomValidity('');
      if (!e.target.validity.valid) {
        e.target.setCustomValidity(
          `${Array.from(ALL_LABELS)[i].textContent} should not be left empty`
        );
      }
    };
    input.onvalid = function (e) {
      e.target.setCustomValidity('');
    };
  });
})();
