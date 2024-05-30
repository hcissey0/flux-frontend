
const TimeDisplay = ({ timestamp }: {timestamp:string}) => {
    const now = new Date().getTime();
    const then = new Date(timestamp).getTime();
    const diff = now - then;

    const secs = 1000;
    const mins = secs * 60;
    const hrs = mins * 60;
    const dys = hrs * 24;
    const wks = dys * 7;
    const mnts = dys * 30.4375;
    const yrs = mnts * 12;

    let timeDisplay;
    if (diff < mins) {
        const seconds = Math.floor(diff / secs);
        timeDisplay = `${seconds}s`;
    } else if (diff < hrs) {
        const minutes = Math.floor(diff / mins);
        timeDisplay = minutes === 1 ? `${minutes}min` : `${minutes}mins`;
    } else if (diff < dys) {
        const hours = Math.floor(diff / hrs);
        timeDisplay = hours === 1 ? `${hours}hr` : `${hours}hrs`;
    } else if (diff < wks) {
        const days = Math.floor(diff / dys);
        timeDisplay = days === 1 ? `${days}day` : `${days}days`;
    } else if (diff < mnts) {
        const weeks = Math.floor(diff / wks);
        timeDisplay = weeks === 1? `${weeks}wk` : `${weeks}wks`;
    } else if (diff < yrs) {
        const months = Math.floor(diff / mnts);
        timeDisplay = months === 1? `${months}mo` : `${months}mos`;
    } else if (diff > yrs) {
        const years = Math.floor(diff / yrs);
        timeDisplay = years === 1? `${years}yr` : `${years}yrs`;
    } else {
        timeDisplay = '0s';
    }
  return (
    <div>{timeDisplay}</div>
  )
}

export default TimeDisplay

