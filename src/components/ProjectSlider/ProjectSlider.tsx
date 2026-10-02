import clsx from 'clsx';
import { Children, CSSProperties, ReactElement, cloneElement, isValidElement } from 'react';
import { SliderShell } from './SliderShell';
import styles from './ProjectSlider.module.css';

interface IProjectSliderProps {
    children: React.ReactNode;
    className?: string;
    label?: string;
}

interface ICardProps {
    className?: string;
    description?: string;
    stack?: { name: string }[];
    style?: CSSProperties;
    maxWidth?: number;
}

// Card width follows the amount of content, so rows get a natural brick rhythm
const getCardWidth = ({ description = '', stack = [] }: ICardProps) => {
    const stackLength = stack.reduce((sum, { name }) => sum + name.length + 4, 0);
    const weight = description.length + stackLength * 0.6;
    const width = 20 + weight * 0.075;
    return Math.round(Math.min(Math.max(width, 24), 36) * 10) / 10;
};

export const ProjectSlider = function ProjectSlider({
    children,
    className,
    label = 'Projects',
}: IProjectSliderProps) {
    const cards = Children.toArray(children)
        .filter(isValidElement)
        .map((child) => {
            const card = child as ReactElement<ICardProps>;
            return cloneElement(card, {
                className: clsx(card.props.className, styles.card),
                style: { ...card.props.style, '--card-width': `${getCardWidth(card.props)}rem` } as CSSProperties,
                maxWidth: undefined,
            });
        });

    const rows = [
        cards.filter((_, index) => index % 2 === 0),
        cards.filter((_, index) => index % 2 === 1),
    ].filter((row) => row.length > 0);

    return (
        <SliderShell className={className} label={label} count={cards.length}>
            {rows.map((row, index) => (
                <ul key={index} className={clsx(styles.row, index === 1 && styles.rowOffset)}>
                    {row}
                </ul>
            ))}
        </SliderShell>
    );
};
