import clsx from 'clsx';
import Image, { StaticImageData } from 'next/image';
import { CSSProperties } from 'react';
import { IconType } from 'react-icons';
import { FaApple } from 'react-icons/fa';
import { ImGithub } from 'react-icons/im';
import { LuExternalLink } from 'react-icons/lu';
import { SiNpm } from 'react-icons/si';
import { Tag } from '../Tag';
import styles from './Project.module.css';

type  ProjectStatusType = 'production' | 'demo' | 'offline' | 'development';

interface IProjectProps {
    status?: ProjectStatusType;
    className?: string;
    title: string;
    time: string;
    href?: string;
    description: string;
    github?: string;
    npm?: string;
    appStore?: string;
    stack: { Icon: IconType; name: string; color?: string; darkColor?: string; href: string }[];
    maxWidth?: number;
    logo?: StaticImageData;
    style?: CSSProperties;
}

const statusText: Record<ProjectStatusType, string> = {
    demo: 'Demo',
    production: 'Live',
    development: 'In progress',
    offline: 'Not available',
};

export const Project = function Project({
    href,
    description,
    stack,
    time,
    title,
    className,
    status = 'offline',
    github,
    npm,
    appStore,
    maxWidth,
    logo,
    style,
}: IProjectProps) {
    const CustomTag = href ? 'a' : 'div';
    const customProps: { href?: string; target?: string; rel?: string } = {};
    if (CustomTag === 'a') {
        customProps.href = href;
        customProps.target = '_blank';
        customProps.rel = 'noopener noreferrer';
    }

    return (
        <li className={clsx(styles.item, status ? styles[status] : '', className)} style={style}>
            <div className={styles.container}>
                <div className={styles.tagList}>
                    <Project.Tag className={clsx(styles.status, styles.tagItem)}>
                        {statusText[status]}
                    </Project.Tag>
                    {github ? (
                        <Project.Tag
                            href={github}
                            Icon={ImGithub}
                            className={styles.tagItem}
                            theme="github"
                        >
                            open source
                        </Project.Tag>
                    ) : null}
                    {npm ? (
                        <Project.Tag
                            href={npm}
                            Icon={SiNpm}
                            className={styles.tagItem}
                            theme="npm"
                        >
                            npm
                        </Project.Tag>
                    ) : null}
                    {appStore ? (
                        <Project.Tag
                            href={appStore}
                            Icon={FaApple}
                            className={styles.tagItem}
                            theme="ios"
                        >
                            iOS app
                        </Project.Tag>
                    ) : null}
                </div>
                <div className={styles.head}>
                    <CustomTag
                        {...customProps}
                        className={clsx(styles.title, href && styles.titleLink)}>
                        {logo ? (
                            <Image src={logo} alt="" width={20} height={20} className={styles.logo} />
                        ) : null}
                        {title}
                        {href ? <LuExternalLink className={styles.arrow} /> : null}
                    </CustomTag>
                    <span className={styles.time}>{time}</span>
                </div>
                <p
                    style={{ maxWidth: maxWidth ? `${maxWidth}px` : undefined }}
                    className={styles.description}>{description}</p>
                <p className={styles.stack}>
                    {stack.map(({ Icon, name, color, darkColor }) => {
                        return (
                            <Tag
                                className={styles.tag}
                                key={name}
                                Icon={Icon}
                                size="small"
                                iconColor={color}
                                darkIconColor={darkColor}
                            >
                                {name}
                            </Tag>
                        );
                    })}
                </p>
            </div>
        </li>
    );
};

interface TagProps {
    className?: string;
    children: string;
    href?: string;
    Icon?: IconType;
    theme?: 'github' | 'npm' | 'ios';
}

Project.Tag = function Tag({
    children,
    className,
    href,
    Icon,
    theme,
}: TagProps) {
    const classNames = clsx(
        styles.projectTag,
        className,
        theme ? styles[theme] : '',
    );
    if (!href) {
        return <span className={classNames}>{children}</span>;
    }
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={classNames}>
            {Icon ? <Icon className={styles.projectTagIcon} /> : null}
            {children}
        </a>
    );
};
