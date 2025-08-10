export function getActualMonth(): Months  {
  const date = new Date();
  const month = date.getMonth();
  switch (month) {
    case 0: {
      return Months.January
    }
    case 1: {
      return Months.February
    }
    case 2: {
      return Months.March
    }
    case 3: {
      return Months.April
    }
    case 4: {
      return Months.May
    }
    case 5: {
      return Months.June
    }
    case 6: {
      return Months.July
    }
    case 7: {
      return Months.August
    }
    case 8: {
      return Months.September
    }
    case 9: {
      return Months.October
    }
    case 10: {
      return Months.November
    }
    case 11: {
      return Months.December
    }
    default: {
      return Months.August
    }
  }
}

enum Months {
  January = "JANUARY",
  February = "FEBRUARY",
  March = "MARCH",
  April = "APRIL",
  May = "MAY",
  June = "JUNE",
  July = "JULY",
  August = "AUGUST",
  September = "SEPTEMBER",
  October = "OCTOBER",
  November = "NOVEMBER",
  December = "DECEMBER",
}
