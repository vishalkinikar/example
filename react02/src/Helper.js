export const dateFormat = () => {
    let today = new Date();
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let dd   = today.getDate();
    let mm   = months[today.getMonth()];
    let yyyy = today.getFullYear();

    if(dd<10)  { dd='0'+dd }

    return `${mm} ${dd}, ${yyyy}`;
}

export const timeFormat = () => {
    let time = new Date();
    return time.toLocaleString('en-US', { hour: 'numeric', minute: "numeric", second: "numeric", hour12: true});
}

export const round = num => Number(num.toFixed(2));

export const getTime = () => {
    let time = new Date();
    return time.toLocaleString('en-US', { hour: 'numeric', minute: "numeric", second: "numeric", hour12: true})
}

export const formatTicks = (newNum, oldNum) => {
    let change = newNum - oldNum;
    let per = (change / newNum * 100);
    let array = [newNum, round(per), getTime()];
    return array;
}