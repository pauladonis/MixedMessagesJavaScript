function generateRandomNumber(num) {
    // Gets # from 0 -> num - 1
    return Math.floor(Math.random() * num)
  }
  
  const workoutAdvice = {
    day: ['push', 'pull', 'legs', 'rest'],
    mode: ['go hard', 'do nothing', 'smash it', 'go beyond your limit', 'take it easy'],
    recovery: ['get a massage', 'make sure to consume enough protein', 'relax with your friends', 'make sure to sleep at least 8 hours']
  }
  
  // Store the 'advice' in an array
  let trainerAdvice = []
  
  // Iterate over the object
  for(let prop in workoutAdvice) {
    let optionIdx = generateRandomNumber(workoutAdvice[prop].length)
  
    // use the object's properties to customize the message being added to trainerAdvice  
    switch(prop) {
      case 'day':
        trainerAdvice.push(`Today is a "${workoutAdvice[prop][optionIdx]} day".`)
        break
      case 'mode':
        trainerAdvice.push(`You should: "${workoutAdvice[prop][optionIdx]}".`)
        break
      case 'recovery':
        trainerAdvice.push(`For a better recovery: "${workoutAdvice[prop][optionIdx]}".`)
        break
      default:
        trainerAdvice.push('There is not enough info.')
    }
  }
  
  function formatAdvice() {
    const formatted = trainerAdvice.join('\n')
    console.log(formatted)
  }
  
  formatAdvice(trainerAdvice);