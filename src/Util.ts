export const CleanName = (name: string): string => {
    return name.split("-").map(word => {
        return word.charAt(0).toUpperCase().concat(word.substr(1));
    }).join(" ");
}

export const GetDisplayId = (num: number): string => {
    return "#" + String(num).padStart(4, "0");
}