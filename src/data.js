const users = [
    { name: "mario", premium: true },
    { name: "luigi", premium: false }
];

export const getPremiumUsers = (users) => {
    return users.filter(user => user.premium);
}

export default users;

// export { getPremiumUsers, users as default }

