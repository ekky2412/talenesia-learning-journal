import { apiUrl } from 'src/config'

export const calculateStatistics = (users) => {
  const filteredUsers = users.filter((user) => user.userType === 'user')
  const totalParticipants = filteredUsers.length
  const maleParticipants = filteredUsers.filter((user) => user.gender === 'Male').length
  const femaleParticipants = filteredUsers.filter((user) => user.gender === 'Female').length

  return {
    totalParticipants,
    maleParticipants,
    femaleParticipants,
  }
}

export const averageProgressUser = async (username) => {
  try {
    const response = await fetch(`${apiUrl}/api/progress/peserta/${username}`)
    const data = await response.json()

    // Hitung rata-rata persentase
    const totalPercentage = data.data.reduce((acc, theme) => acc + theme.percentage, 0)
    const avgProgress = data.data.length ? totalPercentage / data.data.length : 0

    return avgProgress
  } catch (error) {
    console.error('Error fetching user progress:', error)
    throw error
  }
}

export const getRandomColor = () => {
  const letters = '0123456789ABCDEF'
  let color = '#'
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}
