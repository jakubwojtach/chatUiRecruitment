export const renderDate = (date, currentMessage, previousMessage) => {
    const currentDate = new Date();
    const givenDate = new Date(date);

    const areYearsEqual = currentDate.getFullYear() === givenDate.getFullYear();
    const areMonthsEqual = currentDate.getMonth() === givenDate.getMonth();
    const areDaysEqual = currentDate.getDay() === givenDate.getDay();

    const currDateString = `${new Date(
        currentMessage.date,
    ).getHours()}:${new Date(currentMessage.date).getMinutes()}`;
    const prevDateString = previousMessage
        ? `${new Date(previousMessage.date).getHours()}:${new Date(
              previousMessage.date,
          ).getMinutes()}`
        : '';

    const wasDateDisplayed = prevDateString === currDateString;

    if (areYearsEqual && areMonthsEqual && areDaysEqual) {
        if (!wasDateDisplayed) {
            return `${givenDate.getHours()}:${givenDate.getMinutes()}`;
        }
        return null;
    } else {
        if (!wasDateDisplayed) {
            return `${givenDate.toLocaleString('en-GB', {
                timeZone: 'UTC',
                hour: '2-digit',
                minute: '2-digit',
                month: '2-digit',
                day: '2-digit',
                year: '2-digit',
            })}`;
        }
        return null;
    }
};
