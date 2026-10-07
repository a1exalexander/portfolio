import { Children } from 'react';
import { SliderShell } from './SliderShell';
import styles from './ProjectSlider.module.css';

interface ICertificateSliderProps {
    children: React.ReactNode;
    className?: string;
}

export const CertificateSlider = function CertificateSlider({
    children,
    className,
}: ICertificateSliderProps) {
    const items = Children.toArray(children);

    return (
        <SliderShell
            className={className}
            label="Certificates"
            itemName="certificates"
            count={items.length}
        >
            <ul className={styles.row}>
                {items.map((item, index) => (
                    <li key={index} className={styles.item}>
                        {item}
                    </li>
                ))}
            </ul>
        </SliderShell>
    );
};
