function calculateAttendance() {
  const totalClasses = parseInt(document.getElementById('total_classes').value);
  const attendedClasses = parseInt(document.getElementById('attended_classes').value);

  const result75 = document.getElementById('result_75');
  const result70 = document.getElementById('result_70');
  const resultsDiv = document.getElementById('results');

  const classesNeeded75 = calculateClassesNeeded(attendedClasses, totalClasses, 75);
  const classesNeeded70 = calculateClassesNeeded(attendedClasses, totalClasses, 70);

  result75.textContent = `You need to attend at least ${classesNeeded75} more classes to reach 75% attendance.`;
  result70.textContent = `You need to attend at least ${classesNeeded70} more classes to reach 70% attendance.`;

  resultsDiv.classList.remove('hidden');
}

function calculateClassesNeeded(attended, totalClasses, targetPercentage) {
  let additionalClasses = 0;

  while ((attended + additionalClasses) / (totalClasses + additionalClasses) * 100 < targetPercentage) {
      additionalClasses++;
  }

  return additionalClasses;
}
