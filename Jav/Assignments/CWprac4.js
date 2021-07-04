// Gravity Flip

const flip = (direction, columns) => (
    [...columns].sort((A, Z) => {
      if (direction === 'R') return A - Z
      if (direction === 'L') return Z - A
    })
  )