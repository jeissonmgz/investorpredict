import moment from "moment";

const getNextDays = (daysRequired: number) => {
  let days: string[] = [];

  for (let i = 1; i <= daysRequired; i++) {
    days = [...days, moment().add(i, "days").format("DD/MM/YYYY")];
  }

  return days;
};

export const Time = {
  getNextDays,
};
