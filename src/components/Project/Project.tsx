import clsx from 'clsx';
import { IconType } from 'react-icons';
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
    stack: { Icon: IconType; name: string; color?: string; href: string }[];
    maxWidth?: number;
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
    maxWidth,
}: IProjectProps) {
    const CustomTag = href ? 'a' : 'div';
    const customProps: { href?: string; target?: string } = {};
    if (CustomTag === 'a') {
        customProps.href = href;
        customProps.target = '_blank';
    }

    const isCurrentYear = time === new Date().getFullYear().toString();

    return (
        <li className={clsx(styles.item, {[styles.isCurrentYear]: isCurrentYear}, status ? styles[status] : '', className)}>
            {isCurrentYear && <>
                <span className={styles.newTag}>new</span>
                <span className={styles.newTag}>new</span>
                <span className={styles.newTag}>new</span>
                <span className={styles.newTag}>new</span>
                <span className={styles.newTag}>new</span>
                <span className={styles.newTag}>new</span>
                <span className={styles.newTag}>new</span>
                <span className={styles.newTag}>new</span>
            </>}
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
                </div>
                <div className={styles.head}>
                    <CustomTag {...customProps} className={styles.title}>
                        {title}
                        {href ? <LuExternalLink className={styles.arrow} /> : null}
                    </CustomTag>
                    <span className={styles.time}>{time}</span>
                </div>
                <p
                    style={{ maxWidth: maxWidth ? `${maxWidth}px` : undefined }}
                    className={styles.description}>{description}</p>
                <p className={styles.stack}>
                    {stack.map(({ Icon, name, color, href }) => {
                        return (
                            <Tag
                                className={styles.tag}
                                key={name}
                                Icon={Icon}
                                size="small"
                                iconColor={color}
                                href={href}
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
    theme?: 'github' | 'npm';
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
            className={classNames}>
            {Icon ? <Icon className={styles.projectTagIcon} /> : null}
            {children}
        </a>
    );
};
