export function getLocalTime() {
    return new Date(new Date().getTime()).toLocaleString('en-US', {
        weekday: 'long',
        day: '2-digit',
        hour: 'numeric',
        hour12: true,
        minute: '2-digit',
        timeZone: 'Asia/Jakarta'
    });
}  