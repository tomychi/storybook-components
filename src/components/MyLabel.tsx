import './myLabel.css';


export interface MyLabelProps {
    /**
        Esto es el Testo que se muestra por pantalla 
    */
    label: string;

    /** 
        Esto es el tamaño del texto
    */
    size: 'normal' | 'h1' | 'h2' | 'h3';

    /**
        Esto es el color del texto
    */
    color?: 'primary' | 'secondary' | 'tertiary';

    /**
        Esto es para capitalizar todas las letras
    */

    allCaps?: boolean;

    /**
        Color personalizado de la fuente
    */

    fontColor?: string;

    /**
        Color personalizado del fondo
    */
    backgroundColor?: string;
}


export const MyLabel = ({
    allCaps = false,
    color = 'primary',
    label = 'No Label',
    size = 'normal',
    fontColor,
    backgroundColor = 'transparent',
}: MyLabelProps) => {
    return (
        <span
            className={`label ${size}  text-${color}`}
            style={{ color: fontColor, backgroundColor }}
        >
            {allCaps ? label.toUpperCase() : label}
        </span>
    )
}
