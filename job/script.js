// OPEN POPUP
function openPopup(title, company, location, salary, skills, image) {

  document.getElementById("popup").style.display = "flex";

  document.getElementById("popupTitle").innerText = title;

  document.getElementById("popupCompany").innerText = company;

  document.getElementById("popupLocation").innerText = location;

  document.getElementById("popupSalary").innerText = salary;

  document.getElementById("popupSkills").innerText = skills;

  document.getElementById("popupImage").src = image;

}

// CLOSE POPUP
function closePopup() {

  document.getElementById("popup").style.display = "none";

  // Hide form when popup closes
  document.getElementById("applyForm").style.display = "none";

}

// SHOW APPLY FORM
function showApplyForm() {

  const form = document.getElementById("applyForm");

  if (form.style.display === "block") {

    form.style.display = "none";

  } else {

    form.style.display = "block";

  }

}

// FORM SUBMIT
document.getElementById("applyForm").addEventListener("submit", function(e) {

  e.preventDefault();

  alert("Application Submitted Successfully ✅");

  // Reset form
  this.reset();

  // Hide form
  this.style.display = "none";

});

// CLOSE POPUP WHEN CLICK OUTSIDE
window.onclick = function(event) {

  const popup = document.getElementById("popup");

  if (event.target === popup) {

    closePopup();

  }

};