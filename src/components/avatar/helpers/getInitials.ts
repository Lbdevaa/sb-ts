// Get initials from user name
export function getInitials(name: string) {
    const [firstName, lastName] = name.split(" ");
    return firstName && lastName ? `${firstName.charAt(0)}${lastName.charAt(0)}` : firstName.charAt(0);
}
