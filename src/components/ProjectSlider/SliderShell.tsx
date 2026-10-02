'use client';

import clsx from 'clsx';
import { useEffect, useRef } from 'react';
import { LuChevronLeft, LuChevronRight, LuChevronsRight } from 'react-icons/lu';
import styles from './ProjectSlider.module.css';

interface ISliderShellProps {
    children: React.ReactNode;
    className?: string;
    label: string;
    count: number;
}

const SPEED = 22; // px per second
const RESUME_DELAY = 3500;
const EDGE_PAUSE = 1800;

export const SliderShell = function SliderShell({
    children,
    className,
    label,
    count,
}: ISliderShellProps) {
    const rootRef = useRef<HTMLDivElement>(null);
    const viewportRef = useRef<HTMLDivElement>(null);
    const pauseUntil = useRef(0);

    useEffect(() => {
        const root = rootRef.current;
        const viewport = viewportRef.current;
        if (!root || !viewport) return;

        const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
        let frame = 0;
        let last = 0;
        let direction = 1;
        let position = viewport.scrollLeft;
        let isVisible = false;
        let isHovered = false;

        const updateState = () => {
            const max = viewport.scrollWidth - viewport.clientWidth;
            const progress = max > 0 ? viewport.scrollLeft / max : 0;
            root.style.setProperty('--progress', progress.toFixed(4));
            root.style.setProperty('--thumb', (viewport.clientWidth / viewport.scrollWidth).toFixed(4));
            root.dataset.start = String(viewport.scrollLeft <= 2);
            root.dataset.end = String(viewport.scrollLeft >= max - 2);
            root.dataset.scrollable = String(max > 2);
        };

        const tick = (time: number) => {
            frame = requestAnimationFrame(tick);
            const delta = last ? Math.min(time - last, 64) : 0;
            last = time;

            const isPaused = reducedMotion.matches
                || !isVisible
                || isHovered
                || document.hidden
                || Date.now() < pauseUntil.current;

            if (isPaused) {
                position = viewport.scrollLeft;
                return;
            }

            const max = viewport.scrollWidth - viewport.clientWidth;
            if (max <= 0) return;

            position += (direction * SPEED * delta) / 1000;
            if (position >= max) {
                position = max;
                direction = -1;
                pauseUntil.current = Date.now() + EDGE_PAUSE;
            } else if (position <= 0) {
                position = 0;
                direction = 1;
                pauseUntil.current = Date.now() + EDGE_PAUSE;
            }
            viewport.scrollLeft = position;
        };

        const onInteract = () => {
            pauseUntil.current = Date.now() + RESUME_DELAY;
            root.dataset.touched = 'true';
        };
        const onPointerEnter = (event: PointerEvent) => {
            if (event.pointerType === 'mouse') isHovered = true;
        };
        const onPointerLeave = () => {
            isHovered = false;
        };

        const observer = new IntersectionObserver(([entry]) => {
            isVisible = entry.isIntersecting;
            if (isVisible && !root.dataset.seen) {
                root.dataset.seen = 'true';
                pauseUntil.current = Math.max(pauseUntil.current, Date.now() + 1200);
            }
        }, { threshold: 0.25 });

        const resizeObserver = new ResizeObserver(updateState);

        observer.observe(viewport);
        resizeObserver.observe(viewport);
        viewport.addEventListener('scroll', updateState, { passive: true });
        viewport.addEventListener('pointerdown', onInteract);
        viewport.addEventListener('wheel', onInteract, { passive: true });
        viewport.addEventListener('touchstart', onInteract, { passive: true });
        viewport.addEventListener('keydown', onInteract);
        viewport.addEventListener('focusin', onInteract);
        root.addEventListener('pointerenter', onPointerEnter);
        root.addEventListener('pointerleave', onPointerLeave);

        updateState();
        frame = requestAnimationFrame(tick);

        return () => {
            cancelAnimationFrame(frame);
            observer.disconnect();
            resizeObserver.disconnect();
            viewport.removeEventListener('scroll', updateState);
            viewport.removeEventListener('pointerdown', onInteract);
            viewport.removeEventListener('wheel', onInteract);
            viewport.removeEventListener('touchstart', onInteract);
            viewport.removeEventListener('keydown', onInteract);
            viewport.removeEventListener('focusin', onInteract);
            root.removeEventListener('pointerenter', onPointerEnter);
            root.removeEventListener('pointerleave', onPointerLeave);
        };
    }, []);

    const scrollByPage = (direction: 1 | -1) => {
        const viewport = viewportRef.current;
        if (!viewport || !rootRef.current) return;
        pauseUntil.current = Date.now() + RESUME_DELAY;
        rootRef.current.dataset.touched = 'true';
        viewport.scrollBy({ left: direction * viewport.clientWidth * 0.7, behavior: 'smooth' });
    };

    return (
        <div ref={rootRef} className={clsx(styles.root, className)} data-start="true">
            <div
                ref={viewportRef}
                className={styles.viewport}
                role="region"
                aria-label={`${label}: ${count}, scroll horizontally`}
                tabIndex={0}
            >
                <div className={styles.track}>{children}</div>
            </div>
            <div className={styles.controls}>
                <span className={styles.hint} aria-hidden="true">
                    <LuChevronsRight className={styles.hintIcon} />
                    <span className={styles.hintTouch}>swipe</span>
                    <span className={styles.hintPointer}>scroll</span>
                    &nbsp;· {count} projects
                </span>
                <span className={styles.progress} aria-hidden="true">
                    <span className={styles.progressThumb} />
                </span>
                <button
                    type="button"
                    className={styles.button}
                    onClick={() => scrollByPage(-1)}
                    aria-label="Previous projects"
                    data-dir="prev"
                >
                    <LuChevronLeft />
                </button>
                <button
                    type="button"
                    className={styles.button}
                    onClick={() => scrollByPage(1)}
                    aria-label="Next projects"
                    data-dir="next"
                >
                    <LuChevronRight />
                </button>
            </div>
        </div>
    );
};
