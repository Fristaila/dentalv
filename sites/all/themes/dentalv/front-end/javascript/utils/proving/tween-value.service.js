export { tweenValue };

function hand(selector, self) {
  $(selector).val(self.val());
}
function tweenValue(selector) {
  $(document).on('input', selector, function () {
  const self = $(this);

    self.on('keyup', () => {
      hand(selector, self);
    });
  });
}
