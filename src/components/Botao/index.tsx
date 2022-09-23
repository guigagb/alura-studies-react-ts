import React from "react";
import style from './Botao.module.scss'

interface Props {
    children: any, 
    type?: "button" | "submit" | "reset"
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}

class Botao extends React.Component<Props> {
    render(): React.ReactNode {
        return (
            <button 
                className={style.botao}
                type={this.props.type || 'button'}
                onClick={this.props.onClick}
            >{this.props.children}</button>
        )
    }
}

export default Botao