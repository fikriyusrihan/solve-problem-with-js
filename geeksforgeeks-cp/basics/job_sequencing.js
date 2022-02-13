const jobs = [
  ["a", 2, 100],
  ["b", 1, 19],
  ["c", 2, 27],
  ["d", 1, 25],
  ["e", 3, 15],
];

const jobScheduling = function (jobs, maxDeadline) {

  let arrJobs = [];
  let calendar = new Map;

  // Melakukan pengurutan secara descending terhadap profit
  // Selection sort
  for (let i = 0; i < jobs.length; i++) {
    let idx = i;
    let currentMax = Number.MIN_SAFE_INTEGER;

    for (let j = i; j < jobs.length; j++) {
      if (jobs[j][2] > currentMax) {
        currentMax = jobs[j][2];
        idx = j;
      }  
    }

    let temp = jobs[i];
    jobs[i] = jobs[idx];
    jobs[idx] = temp;
  }

  // Menentukan job dan urutannya
  for (let i = 0; i < jobs.length; i++) {
    for (let j = jobs[i][1]; j > 0; j--) {
      if (!calendar.has(j)) {
        calendar.set(j, jobs[i][0]);
        break;
      }
    }
  }

  for (let i = 1; i <= maxDeadline; i++) {
    arrJobs.push(calendar.get(i));
  }

  return arrJobs;

};

console.log(jobScheduling(jobs, 3));
