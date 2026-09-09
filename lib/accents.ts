/** One vivid accent per course (1–6), used sparingly on a light background. */
export const COURSE_ACCENT: Record<number, string> = {
  1: '#0e7c7b', // teal
  2: '#2563a8', // ocean
  3: '#4f7a2f', // leaf
  4: '#d97528', // amber
  5: '#b31942', // claret
  6: '#7b3aa8', // violet
}

export const accentFor = (n: number) => COURSE_ACCENT[n] ?? '#b31942'
