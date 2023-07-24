const phoneRegExp = /^\+?[0-9]+(?:[ -][0-9]+)*$/;
const emailRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const date = (date) => {
    const currentDate = new Date();
    date = new Date(date);
    return date > currentDate;
};

const guest = (guest) => !!guest && guest > 0 && guest < 11;

const string = (str) => !!str && typeof str === "string";

const number = (num) => !!num && typeof +num === "number";

const phone = (phone) => !!phone && phoneRegExp.test(phone);

const email = (email) => !!email && emailRegExp.test(email);

export const is = {
    date,
    guest,
    string,
    number,
    phone,
    email,
};
