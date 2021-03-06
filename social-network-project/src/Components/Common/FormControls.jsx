import React from "react";
import styles  from "./FormControls.module.css";

/*export const Textarea = ({input, meta, ...props}) => {

    const hasError = meta.touched && meta.error

    return (
        <div className={styles.formControl + " " + (hasError ? styles.error: "")}>
            <div>
                <textarea {...input} {...props}/>
            </div>
            {hasError &&   <span>{meta.error}</span>}
        </div>
    )
}*/ /// old realisation


export const Element = Element =>  ({input, meta, ...props}) => {

    const hasError = meta.touched && meta.error

    return (
        <div className={styles.formControl + " " + (hasError ? styles.error: "")}>
            <div>
                <Element {...input} {...props}/>
            </div>
            {hasError &&   <span>{meta.error}</span>}
        </div>
    )
}