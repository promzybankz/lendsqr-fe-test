import { useState } from "react"
import styles from "../../assets/styles/base/input.module.scss"

export interface AppProps{
    type ?: string,
    width?: string,
    height?: string,
    name?: string,
    placeholder?: string
}


export default function BaseInput({ type = 'text', width = '400px', height = '50px', placeholder = 'Enter Value', name }: AppProps){
    const originalType = type
    const [newType, setnewType ] = useState(type);

    return (
        <div style={{
            width: width,
            height: height
        }} className={styles.input_wrapper}>
            <input type={newType} className={styles.input} style={{
                width: width,
                height: height
            }} name="input" placeholder={placeholder} />
            {
                originalType === 'password' 
                ? 
                    <p onClick={() => newType === 'password' ? setnewType('text') : newType === 'text' ? setnewType('password') : ''} className={styles.togglePassword}>
                        { newType === 'text' ? 'Hide' : 'Show' }
                    </p> 
                : 
                ''
            }
            
        </div>
    )
}