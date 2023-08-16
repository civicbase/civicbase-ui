const shuffle = <T>(array: T[]): T[] => {
  // Make a copy of the original array to avoid modifying it
  const shuffledArray = [...array]

  // Iterate over the array in reverse order
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    // Generate a random index between 0 and i (inclusive)
    const j = Math.floor(Math.random() * (i + 1))

    // Swap the elements at indices i and j
    ;[shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]]
  }

  return shuffledArray
}

export default shuffle
