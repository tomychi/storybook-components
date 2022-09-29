/// <reference types="react" />
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
export declare const MyLabel: ({ allCaps, color, label, size, fontColor, backgroundColor, }: MyLabelProps) => JSX.Element;
