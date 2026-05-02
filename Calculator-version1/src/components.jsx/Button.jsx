
import Style from "./Button.module.css"


const Button = () => {
    const buttonnames = [ "C", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "-", "*", "/", "=" ]
    return <div className={Style.buttonContainer}>
            {buttonnames.map((name) => (
                <button key={name} className={Style.button}>
                    {name}
                </button>
            ))}
          </div>
    
}
export default Button