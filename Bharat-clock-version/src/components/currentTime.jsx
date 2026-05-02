let currentTime = () => {
    return <p className="time">{new Date().toLocaleTimeString()}</p>
}
export default currentTime;