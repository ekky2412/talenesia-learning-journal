export const calculateStatistics = (users) => {
  const totalParticipants = users.length
  const maleParticipants = users.filter((user) => user.gender === 'Male').length
  const femaleParticipants = users.filter((user) => user.gender === 'Female').length
  const averageProgress = users.reduce((sum, user) => sum + user.progress, 0) / totalParticipants

  return {
    totalParticipants,
    maleParticipants,
    femaleParticipants,
    averageProgress: averageProgress.toFixed(2),
  }
}

export const calculateProgressByTheme = (progressData) => {
  // Create an object to store the progress for each theme
  const themeProgress = {}

  // Iterate through the data and calculate progress for each theme
  progressData.forEach((item) => {
    const theme = `Tema${item.noTema}`
    const hasAnswer = item.jawaban && item.jawaban.trim() !== '' // Check if there is an answer

    // If the theme is not in the themeProgress object, initialize it with the current answer status
    if (!themeProgress[theme]) {
      themeProgress[theme] = { total: 1, answered: hasAnswer ? 1 : 0 }
    } else {
      // If the theme is already in the themeProgress object, increment the total and answered counts
      themeProgress[theme].total += 1
      themeProgress[theme].answered += hasAnswer ? 1 : 0
    }
  })

  // Calculate the progress percentage for each theme
  Object.keys(themeProgress).forEach((theme) => {
    themeProgress[theme].progress = Math.round(
      (themeProgress[theme].answered / themeProgress[theme].total) * 100,
    )
  })

  return themeProgress
}

export const getRandomColor = () => {
  const letters = '0123456789ABCDEF'
  let color = '#'
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}
