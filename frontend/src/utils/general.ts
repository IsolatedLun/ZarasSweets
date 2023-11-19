export function capitalize(x: string) {
    return x.slice(0, 1).toUpperCase() + x.slice(1)
}

export function deCleanText(x: string) {
    return x.split(' ').map(word => word.toLowerCase()).join("_")
}

export function handleInAppUsers() {
    const userAgent = window.navigator.userAgent;
    if(!userAgent.includes("Instagram") || !userAgent.includes("Facebook")) {
        return;
    }

    if(userAgent.includes("Iphone") || userAgent.includes("Ipad") || userAgent.includes("Ipod")) {
        window.location.href = "safari://" + window.location.href;
    } else {
        window.location.href = "googlechrome://" + window.location.href;
    }

}