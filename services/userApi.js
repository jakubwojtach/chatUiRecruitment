export const getUserData = async (number) => {
    const data = await fetch(`https://randomuser.me/api/?results=${number}`);
    const body = await data.json();
    return body;
};
