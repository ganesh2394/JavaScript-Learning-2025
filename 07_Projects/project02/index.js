const form = document.querySelector("#bmi-form");

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseFloat(document.querySelector("#height").value);
  const weight = parseFloat(document.querySelector("#weight").value);
  const result = document.querySelector("#result");

  // Input validation
  if (isNaN(height) || height <= 0) {
    result.innerHTML = ` Please enter a valid height`;
    return;
  }

  if (isNaN(weight) || weight <= 0) {
    result.innerHTML = ` Please enter a valid weight`;
    return;
  }

  // Calculate BMI
  const bmi_result = (weight / ((height / 100) ** 2)).toFixed(2);

  let category = "";
  if (bmi_result < 18.5) {
    category = "Underweight";
  } else if (bmi_result >= 18.5 && bmi_result < 24.9) {
    category = "Normal weight";
  } else if (bmi_result >= 25 && bmi_result < 29.9) {
    category = "Overweight";
  } else {
    category = "Obese";
  }

  result.innerHTML = `
    <p><strong>BMI:</strong> ${bmi_result}</p>
    <p><strong>Category:</strong> ${category}</p>
  `;
});
