$(document).ready(readyNow)

function readyNow() {

  $("#displayButton").on('click', displayListOnDom);


  const employees = [
    {
      name: 'Atticus',
      employeeNumber: '2405',
      annualSalary: '47000',
      reviewRating: 3
    },
    {
      name: 'Jem',
      employeeNumber: '62347',
      annualSalary: '63500',
      reviewRating: 4
    },
    {
      name: 'Scout',
      employeeNumber: '6243',
      annualSalary: '74750',
      reviewRating: 5
    },
    {
      name: 'Robert',
      employeeNumber: '26835',
      annualSalary: '66000',
      reviewRating: 1
    },
    {
      name: 'Mayella',
      employeeNumber: '89068',
      annualSalary: '35000',
      reviewRating: 1
    }
  ];

  // YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

  // This problem is massive! Break the problem down, take small steps, and test as you go.
  // What is the fewest lines of code I can write and test to get just a little closer?

  // This is not a race. Everyone on your team should understand what is happening.
  // Ask questions when you don't.

  console.log(employees);

  const bonusDisplay = bonusCalc(employees);

  function bonusCalc(employeesList) {

    let results = [];

    for (let employee of employees) {

      let rating = employee.reviewRating;
      let employeeNumber = employee.employeeNumber;
      let bonusPercentage = 0;
      let totalBonus = 0;
      let totalCompensation = 0;
      let annualIncome = Number(employee.annualSalary);


      if (rating === 3) {
        bonusPercentage = 0.04;
      }

      if (rating === 4) {
        bonusPercentage = 0.06;
      }

      if (rating === 5) {
        bonusPercentage = 0.1;
      }

      if (employeeNumber.length >= 4) {
        bonusPercentage += 0.05;
      }

      if (annualIncome > 65000) {
        bonusPercentage -= 0.01;
      }

      if (bonusPercentage <= 0) {
        bonusPercentage = 0;
      }

      if (bonusPercentage > 0.13) {
        bonusPercentage = 0.13;
      }

      // we interpret bullet point 1 under the individual bonus calc as 
      // meaning that an employee that has a rating less than 3 should
      // get no bonus at all.
      if (employee.reviewRating <= 2) {
        bonusPercentage = 0;
      } // end if no bonus


      totalBonus = annualIncome * bonusPercentage;
      totalCompensation = annualIncome + totalBonus;

      let newObj = {
        name: employee.name,
        bonusPercentage: bonusPercentage,
        totalCompensation: totalCompensation,
        totalBonus: Math.round(String(totalBonus))
      }

      results.push(newObj);

      //console.log(`bonus percentage: ${bonusPercentage}, total bonus: ${totalBonus}, total comp: ${totalCompensation}`);
    }
    return results;
  }
  

  function displayListOnDom() {
    console.log('in displayListOnDom');
    // display list headers
  
    // display bonusDisplay on the DOM
    for (let employee of bonusDisplay) {
      $("#displayList").append(`<li class="bonusList"><span class="name">${employee.name}</span><span class="bonusPercentage"> ${employee.bonusPercentage}</span><span class="totalCompensation"> ${employee.totalCompensation}</span><span class="totalBonus"> ${employee.totalBonus}<span></li>`);
    }
  } // end displayListOnDom

}