(function () {
  "use strict";

  var forms = document.querySelectorAll("[data-contact-form]");

  forms.forEach(function (form) {
    var fields = [
      { input: form.querySelector("[name='name']"), error: form.querySelector("[data-error-for='name']") },
      { input: form.querySelector("[name='phone']"), error: form.querySelector("[data-error-for='phone']") },
      { input: form.querySelector("[name='message']"), error: form.querySelector("[data-error-for='message']") }
    ];
    var status = form.querySelector("[data-form-status]");
    var locale = document.documentElement.lang === "ar" ? "ar" : "en";
    var messages = locale === "ar" ? {
      required: "هذا الحقل مطلوب.",
      phone: "يرجى إدخال رقم هاتف صالح.",
      success: "سيتم فتح تطبيق البريد الإلكتروني لإرسال رسالتك."
    } : {
      required: "This field is required.",
      phone: "Please enter a valid phone number.",
      success: "Your email application will open so you can send your message."
    };

    function showError(field, message) {
      field.input.setAttribute("aria-invalid", message ? "true" : "false");
      field.error.textContent = message || "";
    }

    function validate() {
      var valid = true;
      fields.forEach(function (field) {
        var value = field.input.value.trim();
        var message = "";
        if (!value) {
          message = messages.required;
        } else if (field.input.name === "phone" && !/^[+0-9()\s-]{7,}$/.test(value)) {
          message = messages.phone;
        }
        showError(field, message);
        if (message) valid = false;
      });
      return valid;
    }

    fields.forEach(function (field) {
      field.input.addEventListener("input", function () {
        if (field.input.getAttribute("aria-invalid") === "true") validate();
      });
    });

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      if (!validate()) {
        status.textContent = "";
        var invalidInput = form.querySelector("[aria-invalid='true']");
        if (invalidInput) invalidInput.focus();
        return;
      }

      var name = form.querySelector("[name='name']").value.trim();
      var phone = form.querySelector("[name='phone']").value.trim();
      var message = form.querySelector("[name='message']").value.trim();
      var subject = locale === "ar" ? "رسالة جديدة من موقع شركة النخيل" : "New message from Al Nakheel Trading Company website";
      var body = locale === "ar"
        ? "الاسم: " + name + "\nالهاتف: " + phone + "\n\nالرسالة:\n" + message
        : "Name: " + name + "\nPhone: " + phone + "\n\nMessage:\n" + message;
      var recipient = form.getAttribute("data-mailto-recipient") || "info@elnakheelgroup.com";

      status.textContent = messages.success;
      window.location.href = "mailto:" + recipient + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
    });
  });
}());
