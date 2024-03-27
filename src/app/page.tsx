import { BiLogoTypescript, BiLogoReact } from 'react-icons/bi';
import { ImNpm } from 'react-icons/im';
import { FaWix } from 'react-icons/fa';
import { DiBackbone, DiStylus, DiRedis } from 'react-icons/di';
import { GrProjects } from 'react-icons/gr';
import { RiSupabaseFill } from 'react-icons/ri';
import {
  TbBrandNextjs,
  TbBrandReactNative,
  TbBrandOpenai,
  TbEPassport,
  TbTriangle,
  TbBrandRedux,
} from 'react-icons/tb';
import { BsStripe } from 'react-icons/bs';
import { IoLogoVue, IoLogoFirebase, IoLogoNodejs } from 'react-icons/io5';
import {
  SiPrisma,
  SiStrapi,
  SiRemix,
  SiDecapcms,
  SiInstagram,
  SiAuth0,
  SiRollupdotjs,
  SiGraphql,
  SiAntdesign,
  SiFastify,
  SiNuxtdotjs,
  SiExpo,
  SiGithub,
  SiJavascript,
  SiStorybook,
  SiHiveBlockchain,
  SiNestjs,
  SiTailwindcss,
  SiCssmodules,
  SiSass,
  SiCsswizardry,
  SiStyledcomponents,
  SiMui,
} from 'react-icons/si';
import { LuBird } from 'react-icons/lu';
import {
  Certificate,
  Collage,
  Divider,
  Fullwidth,
  Paragraph,
  Photo,
  Project,
  Tag,
  Ticker,
  Work,
  getAlt,
} from '../components';
import styles from './page.module.css';
import photo1 from '../images/a00008.jpg';
import photo2 from '../images/a00002.jpeg';
import photo3 from '../images/a00004.jpeg';
import photo4 from '../images/a00003.jpeg';
import photo5 from '../images/a00006.jpeg';
import photo6 from '../images/a00001.jpeg';
import photo7 from '../images/a00011.jpeg';
import photoCarpathians2 from '../images/carpathians/c2.jpeg';
import photoCarpathians3 from '../images/carpathians/c3.jpeg';
import photoCarpathians5 from '../images/carpathians/c5.jpeg';
import photoMerge1 from '../images/m1.jpeg';
import photoMerge2 from '../images/m2.jpg';
import cert1 from '../images/c1.png';
import cert2 from '../images/PRJCTR_SQL.png';
import cert3 from '../images/c3.png';
import cert4 from '../images/PR3.png';
import merge from '../images/merge.png';
import mergeAcademy from '../images/merge-academy.ico';
import wisealpha from '../images/wisealpha.jpg';
import beetroot from '../images/beetroot.png';
import mavinx from '../images/mavinx.png';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Oleksandr Ratushnyi',
  description: 'Front-end Developer from Ukraine',
};

export const revalidate = 60 * 60 * 24 * 7; // 1 week

const getNumberOfMonthsFromMay2022 = () => {
  const may2022 = new Date('2022-05-01');
  const now = new Date();
  const diff = now.getTime() - may2022.getTime();
  return Math.floor(diff / (1000 * 60 * 60 * 24 * 30));
};

export default function Home() {
  return (
    <>
      <Ticker href="https://www.savedefenders.info/">
        For <strong>{getNumberOfMonthsFromMay2022()} months</strong>, Russia has
        been hiding the condition and location of 1600 captured defenders of
        <strong> Azovstal and Mariupol</strong>
      </Ticker>
      <main className={styles.main}>
        <section id="about-me">
          <h1 className={styles.title}>hey, I&apos;m Oleksandr Ratushnyi 👋</h1>
          <Paragraph>
            I&apos;m <strong>front-end developer</strong> from 🇺🇦{' '}
            <strong>Ukraine</strong>. My 🫶 stack is{' '}
            <Tag
              href="https://react.dev"
              iconColor="#68dbfb"
              Icon={BiLogoReact}
            >
              React
            </Tag>{' '}
            +{' '}
            <Tag
              href="https://www.typescriptlang.org"
              iconColor="#387cc8"
              Icon={BiLogoTypescript}
            >
              TypeScript
            </Tag>
            . I also experienced in{' '}
            <Tag
              href="https://nodejs.org"
              iconColor="#539e43"
              Icon={IoLogoNodejs}
            >
              Node.js
            </Tag>{' '}
            development, so I&apos;m actually a <strong>full-stack</strong>, but
            at heart I&apos;m a front-end.
          </Paragraph>
          <Photo
            loading="eager"
            src={photo1}
            caption="I'm in the cafe posing for a photo"
          />
          <Paragraph>
            I have experience in teaching and creating courses in front-end
            development. I have successfully released three groups of students
            in front-end development. Additionally, I crafted my own course for
            the Merge Academy.
          </Paragraph>

          <Paragraph>
            When I&apos;m not coding, you might find me capturing life through a
            lens 📸, riding a bicycle 🚴, perfecting my pizza recipe 🍕, or
            embarking on tourist trips with a tent 🏕️. Check out my photography{' '}
            <Tag
              iconColor="#e1306c"
              Icon={SiInstagram}
              href="https://www.instagram.com/sashko.i.photoaparat/"
            >
              Instagram
            </Tag>
            .
          </Paragraph>
          <Collage>
            <Photo src={photo4} grid caption="Hoverla, Carpathian mountains" />
            <Photo
              src={photoCarpathians2}
              grid
              vertical
              caption="Kostrycha, Carpathian mountains"
            />
            <Photo
              src={photoCarpathians3}
              grid
              vertical
              caption="Kostrycha, Carpathian mountains"
            />
            <Photo
              src={photoCarpathians5}
              vertical
              grid
              caption="Kostrycha, Carpathian mountains"
            />
          </Collage>

          <Paragraph>
            At home, I have to two red cats 🐈🐈, though one is not quite as red
            as a desert.
          </Paragraph>
          <Collage>
            <Photo src={photo5} grid caption="I'm working with Platon" />
            <Photo src={photo6} vertical grid caption="Lastick & Platon" />
            <Photo src={photo7} grid caption="Lastick is waiting for work" />
          </Collage>
        </section>
        <section id="my-work" className={styles.section}>
          <h2 className={styles.heading}>my work 🗂️</h2>
          <Paragraph>
            I began my journey as a front-end engineer in early 2018 and rapidly
            advanced from a junior role to become a CTO, showcasing my growth
            and dedication in the tech field.
          </Paragraph>
          <Divider />
          <Work
            title="Merge"
            job="Full-stack developer, CTO and co-founder"
            time="Dec 2018 — present"
            href="https://merge.rocks"
            icon={merge}
          >
            <Paragraph>
              At Merge, my role extends beyond mere development. I am
              responsible for development proccesses in the agancy, development
              team management, technical strategy for agancy, clients
              communication, development discovery and development itself. I
              have been involved in the development of a wide range of projects
              as a front-end developer, back-end developer and also as a team
              leader.
            </Paragraph>
            <Collage>
              <Photo src={photoMerge1} grid caption="I am in my office" />
              <Photo
                src={photoMerge2}
                grid
                caption="With the team in the cafe (left – Viktoriia, right – Kate)"
              />
            </Collage>
            <Fullwidth Icon={GrProjects} title="Projects">
              <ul className={styles.projectsList}>
                <Project
                  className={styles.project}
                  title="Promtify"
                  time="2023"
                  description="AI templates builder. It's in-house project for Merge team. The development is conducted only by me."
                  href="https://app.promtify.ai"
                  status="production"
                  maxWidth={310}
                  stack={[
                    {
                      name: 'Next.js',
                      Icon: TbBrandNextjs,
                      color: '#080808',
                      href: 'https://nextjs.org/',
                    },
                    {
                      name: 'Storybook',
                      Icon: SiStorybook,
                      color: '#ff4785',
                      href: 'https://storybook.js.org/',
                    },
                    {
                      name: 'OpenAI',
                      Icon: TbBrandOpenai,
                      color: '#0d0d0d',
                      href: 'https://openai.com/blog/openai-api',
                    },
                    {
                      name: 'Supabase',
                      Icon: RiSupabaseFill,
                      color: '#37ac76',
                      href: 'https://supabase.com/',
                    },
                    {
                      name: 'Stripe',
                      Icon: BsStripe,
                      color: '#6c76e6',
                      href: 'https://stripe.com/',
                    },
                    {
                      name: 'CSS modules',
                      Icon: SiCssmodules,
                      href: 'https://github.com/css-modules/css-modules',
                      color: '#000',
                    },
                  ]}
                />

                <Project
                  className={styles.project}
                  title="RelayPay"
                  time="2023"
                  description="Crypto payment solution. Worked as a small team. I was involved in architecture, management and development of complex issues."
                  href="https://relaypay.io/"
                  status="production"
                  maxWidth={400}
                  stack={[
                    {
                      name: 'Next.js',
                      Icon: TbBrandNextjs,
                      color: '#080808',
                      href: 'https://nextjs.org/',
                    },
                    {
                      name: 'Storybook',
                      Icon: SiStorybook,
                      color: '#ff4785',
                      href: 'https://storybook.js.org/',
                    },
                    {
                      name: 'web3-onboard',
                      Icon: SiHiveBlockchain,
                      color: '#6370e5',
                      href: 'https://onboard.blocknative.com/',
                    },
                    {
                      name: 'Onfido',
                      Icon: TbEPassport,
                      color: '#3c46f6',
                      href: 'https://onfido.com/',
                    },
                    {
                      name: 'Tailwind',
                      Icon: SiTailwindcss,
                      color: '#38b2ac',
                      href: 'https://tailwindcss.com/',
                    },
                  ]}
                />

                <Project
                  className={styles.project}
                  title="Merge Academy"
                  time="2022"
                  description="Web academy platform of Merge. I was involved in the development of the platform and also as a course author and teacher."
                  href="https://merge.academy/"
                  status="production"
                  maxWidth={420}
                  stack={[
                    {
                      name: 'Remix',
                      Icon: SiRemix,
                      color: '#080808',
                      href: 'https://remix.run/',
                    },
                    {
                      name: 'Storybook',
                      Icon: SiStorybook,
                      color: '#ff4785',
                      href: 'https://storybook.js.org/',
                    },
                    {
                      name: 'Fondy',
                      Icon: TbTriangle,
                      color: '#32af4a',
                      href: 'https://fondy.ua/uk/',
                    },
                    {
                      name: 'Decap',
                      Icon: SiDecapcms,
                      color: '#ff0082',
                      href: 'https://decapcms.org/',
                    },
                    {
                      name: 'NestJS',
                      Icon: SiNestjs,
                      color: '#e0234e',
                      href: 'https://nestjs.com/',
                    },
                    {
                      name: 'SCSS',
                      Icon: SiSass,
                      color: '#c69',
                      href: 'https://sass-lang.com/',
                    },
                  ]}
                />

                <Project
                  className={styles.project}
                  title="Ember"
                  time="2022"
                  description="UK based finance management app. Worked in the client's team as a full-stack developer. Developed features and refactored a lot."
                  href="https://ember.co/"
                  status="production"
                  maxWidth={400}
                  stack={[
                    {
                      name: 'Next.js',
                      Icon: TbBrandNextjs,
                      color: '#080808',
                      href: 'https://nextjs.org/',
                    },
                    {
                      name: 'React Native',
                      Icon: TbBrandReactNative,
                      color: '#61dafb',
                      href: 'https://reactnative.dev/',
                    },
                    {
                      name: 'Prisma',
                      Icon: SiPrisma,
                      color: '#2c3e50',
                      href: 'https://www.prisma.io/',
                    },
                    {
                      name: 'GraphQL',
                      Icon: SiGraphql,
                      color: '#e53ead',
                      href: 'https://graphql.org/',
                    },
                    {
                      name: 'CSS',
                      Icon: SiCsswizardry,
                      color: '#1572b6',
                      href: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
                    },
                  ]}
                />
                <Project
                  className={styles.project}
                  title="Spiral Blue"
                  time="2021"
                  description="Website for Australian based space tech company. I was involved in setting up the entire project, fully backend, partially frontend and also leading the team."
                  status="offline"
                  maxWidth={470}
                  stack={[
                    {
                      name: 'Next.js',
                      Icon: TbBrandNextjs,
                      color: '#080808',
                      href: 'https://nextjs.org/',
                    },
                    {
                      name: 'Storybook',
                      Icon: SiStorybook,
                      color: '#ff4785',
                      href: 'https://storybook.js.org/',
                    },
                    {
                      name: 'Strapi',
                      Icon: SiStrapi,
                      color: '#8c4bff',
                      href: 'https://strapi.io/',
                    },
                    {
                      name: 'SCSS',
                      Icon: SiSass,
                      color: '#c69',
                      href: 'https://sass-lang.com/',
                    },
                  ]}
                />

                <Project
                  className={styles.project}
                  title="Noviscient"
                  time="2021"
                  description="Singapore based wealth management platform. I was engaged in frontend development independently, communicating directly with the backend (Python) dev."
                  href="https://www.noviscient.com/"
                  status="production"
                  maxWidth={510}
                  stack={[
                    {
                      name: 'React',
                      Icon: BiLogoReact,
                      color: '#68dbfb',
                      href: 'https://react.dev',
                    },
                    {
                      name: 'Redux',
                      Icon: TbBrandRedux,
                      color: '#764abc',
                      href: 'https://react-redux.js.org/',
                    },
                    {
                      name: 'Auth0',
                      Icon: SiAuth0,
                      color: '#eb5424',
                      href: 'https://auth0.com/',
                    },
                    {
                      name: 'Storybook',
                      Icon: SiStorybook,
                      color: '#ff4785',
                      href: 'https://storybook.js.org/',
                    },
                    {
                      name: 'SCSS',
                      Icon: SiSass,
                      color: '#c69',
                      href: 'https://sass-lang.com/',
                    },
                  ]}
                />

                <Project
                  className={styles.project}
                  title="Spotlyt"
                  time="2021"
                  description="Components library for data scientists form Poland based company BrytLyt. I worked in the client's team and independently developed a UI library for their applications."
                  status="demo"
                  href="https://storybook-spotlyt.netlify.app/"
                  maxWidth={520}
                  stack={[
                    {
                      name: 'React',
                      Icon: BiLogoReact,
                      color: '#61dafb',
                      href: 'https://react.dev',
                    },
                    {
                      name: 'Rollup',
                      Icon: SiRollupdotjs,
                      color: '#f23132',
                      href: 'https://rollupjs.org/',
                    },
                    {
                      name: 'Storybook',
                      Icon: SiStorybook,
                      color: '#ff4785',
                      href: 'https://storybook.js.org/',
                    },
                    {
                      name: 'NPM',
                      Icon: ImNpm,
                      color: '#cd3f3e',
                      href: 'https://www.npmjs.com/',
                    },
                    {
                      name: 'Styled-components',
                      Icon: SiStyledcomponents,
                      color: '#db7093',
                      href: 'https://styled-components.com/',
                    },
                  ]}
                />

                <Project
                  className={styles.project}
                  title="Vamp"
                  time="2020"
                  description="Kubernetes manager tool. I was involved as a frontend developer to add some new features."
                  status="offline"
                  maxWidth={280}
                  stack={[
                    {
                      name: 'React',
                      Icon: BiLogoReact,
                      color: '#61dafb',
                      href: 'https://react.dev',
                    },
                    {
                      name: 'GraphQL',
                      Icon: SiGraphql,
                      color: '#e53ead',
                      href: 'https://graphql.org/',
                    },
                    {
                      name: 'Antd',
                      Icon: SiAntdesign,
                      color: '#0170fe',
                      href: 'https://ant.design/',
                    },
                  ]}
                />

                <Project
                  className={styles.project}
                  title="Merge"
                  time="2020"
                  description="Website for the Merge agancy. Actually, it's the 3 or 4 version of the website."
                  status="production"
                  href="https://merge.rocks/"
                  maxWidth={260}
                  stack={[
                    {
                      name: 'Next.js',
                      Icon: TbBrandNextjs,
                      color: '#080808',
                      href: 'https://nextjs.org/',
                    },
                    {
                      name: 'Storybook',
                      Icon: SiStorybook,
                      color: '#ff4785',
                      href: 'https://storybook.js.org/',
                    },
                    {
                      name: 'Strapi',
                      Icon: SiStrapi,
                      color: '#8c4bff',
                      href: 'https://strapi.io/',
                    },
                    {
                      name: 'SCSS',
                      Icon: SiSass,
                      color: '#c69',
                      href: 'https://sass-lang.com/',
                    },
                  ]}
                />

                <Project
                  className={styles.project}
                  title="Evello"
                  time="2020"
                  status="demo"
                  href="https://media-scout.netlify.app/"
                  description="Video intelligence software platform. You can use any creds for login. We did this project together with Volodymyr Mazurets."
                  maxWidth={390}
                  stack={[
                    {
                      name: 'Vue 2',
                      Icon: IoLogoVue,
                      color: '#41b883',
                      href: 'https://v2.vuejs.org/',
                    },
                    {
                      name: 'Storybook',
                      Icon: SiStorybook,
                      color: '#ff4785',
                      href: 'https://storybook.js.org/',
                    },
                    {
                      name: 'SCSS',
                      Icon: SiSass,
                      color: '#c69',
                      href: 'https://sass-lang.com/',
                    },
                  ]}
                />

                <Project
                  className={styles.project}
                  title="TokenPlace"
                  time="2019"
                  status="offline"
                  description="Ultimate crypto trading tool. I did all the UI part, but without connecting the API because the client had its own development team."
                  maxWidth={420}
                  stack={[
                    {
                      name: 'Vue 2',
                      Icon: IoLogoVue,
                      color: '#41b883',
                      href: 'https://v2.vuejs.org/',
                    },
                    {
                      name: 'SCSS',
                      Icon: SiSass,
                      color: '#c69',
                      href: 'https://sass-lang.com/',
                    },
                  ]}
                />

                <Project
                  className={styles.project}
                  title="FundPlatform"
                  time="2018"
                  status="demo"
                  description="Hedge funds wealth management system. It's the first project of Merge. I was the only developer in the company and on the project as a front-end developer."
                  href="https://fundplatform.netlify.app/"
                  maxWidth={480}
                  stack={[
                    {
                      name: 'Vue 2',
                      Icon: IoLogoVue,
                      color: '#41b883',
                      href: 'https://v2.vuejs.org/',
                    },
                    {
                      name: 'Stripe',
                      Icon: BsStripe,
                      color: '#6c76e6',
                      href: 'https://stripe.com/',
                    },
                    {
                      name: 'SCSS',
                      Icon: SiSass,
                      color: '#c69',
                      href: 'https://sass-lang.com/',
                    },
                  ]}
                />
              </ul>
            </Fullwidth>
          </Work>
          <Divider />
          <Work
            title="Merge Academy"
            job="Course author and teacher"
            time="Apr 2022 — Apr 2023"
            href="https://merge.academy/"
            icon={mergeAcademy}
          >
            <Paragraph>
              At Merge Academy, I designed and taught a comprehensive front-end
              development course, drawing from my rich experience. Beyond
              teaching, I developed the academy&apos;s website and implemented
              automated processes to enhance the learning experience. This role
              allowed me to shape the next generation of developers, many of
              whom have become key contributors in the tech industry.
            </Paragraph>
          </Work>
          <Divider />

          <Work
            title="Beetroot Academy"
            job="Front-end teacher"
            time="Jul 2020 — Present"
            href="https://beetroot.academy/"
            icon={beetroot}
          >
            <Paragraph>
              As a teacher at Beetroot Academy, I not only taught front-end
              development but also played a crucial role in guiding two student
              groups to success. My teaching extended beyond the classroom, as I
              actively supported students in their practical projects, helping
              them to apply theoretical knowledge to real-world scenarios.
            </Paragraph>
            <Collage>
              <Photo
                src={photo2}
                grid
                caption="I present certificates to students in 2020"
              />
              <Photo
                src={photo3}
                grid
                caption="Some performance about academy"
              />
            </Collage>
          </Work>
          <Divider />
          <Work
            title="WiseAlpha"
            job="Front-end developer"
            time="Jul 2020 – Oct 2020"
            href="https://wisealpha.com/"
            icon={wisealpha}
          >
            <Paragraph>
              At WiseAlpha, my role revolved around trading and technology for
              the Corporate Bond Market. I contributed to the development of new
              features using{' '}
              <Tag
                href="https://backbonejs.org"
                iconColor="#002a41"
                Icon={DiBackbone}
              >
                Backbone
              </Tag>
              , and significantly enhanced the platform&apos;s styling and user
              interface using{' '}
              <Tag
                href="https://stylus-lang.com/"
                iconColor="#242424"
                Icon={DiStylus}
              >
                Stylus
              </Tag>
              . This experience underscored my ability to adapt and innovate,
              ensuring seamless user experiences in diverse technological
              environments.
            </Paragraph>
          </Work>
          <Divider />
          <Work
            title="Mavinx"
            job="Fullstack developer (part-time)"
            time="2019 – 2020"
            href="https://mavinx.com/"
            icon={mavinx}
          >
            <Paragraph>
              These companies are my friends and you have cooperated from time
              to time. I helped them with the development of some web projects,
              consulted on issues related to the frontend, and there with the
              hiring of frontend developers.
            </Paragraph>
            <Fullwidth Icon={GrProjects} title="Projects">
              <ul className={styles.projectsList}>
                <Project
                  className={styles.project}
                  title="Generator"
                  time="2021"
                  status="offline"
                  description="Blog website builder. I worked independently as a full-stack. It was the main backend which runs a static generator and generated an archive with a ready blog static blog. Also an admin app and the templates."
                  maxWidth={630}
                  stack={[
                    {
                      name: 'Node.js',
                      Icon: IoLogoNodejs,
                      color: '#539e43',
                      href: 'https://nodejs.org/',
                    },
                    {
                      name: 'Fastify',
                      Icon: SiFastify,
                      color: '#000000',
                      href: 'https://fastify.dev/',
                    },
                    {
                      name: 'Nuxt',
                      Icon: SiNuxtdotjs,
                      color: '#00dc82',
                      href: 'https://nuxt.com/',
                    },
                    {
                      name: 'Redis',
                      Icon: DiRedis,
                      color: '#dc382d',
                      href: 'https://redis.io/',
                    },
                    {
                      name: 'MUI',
                      Icon: SiMui,
                      color: '#0081cb',
                      href: 'https://material-ui.com/',
                    },
                  ]}
                />

                <Project
                  className={styles.project}
                  title="Wambla"
                  time="2019"
                  status="offline"
                  description="Netherland based real estate purchase/sale platform. Engaged in frontend development by contacting the backend developer and designer independently."
                  maxWidth={480}
                  stack={[
                    {
                      name: 'Nuxt',
                      Icon: SiNuxtdotjs,
                      color: '#00dc82',
                      href: 'https://nuxt.com/',
                    },
                    {
                      name: 'SCSS',
                      Icon: SiSass,
                      color: '#c69',
                      href: 'https://sass-lang.com/',
                    },
                  ]}
                />
              </ul>
            </Fullwidth>
          </Work>
        </section>
        <section id="my-projects" className={styles.section}>
          <h2 className={styles.heading}>my projects 🚀</h2>
          <Paragraph>
            Projects that I made for myself, friends, relatives and world on a
            free basis. My pet-projects are a blend of personal passion and
            skill development. Explore more on my{' '}
            <Tag
              href="https://github.com/a1exalexander"
              Icon={SiGithub}
              iconColor="#080808"
            >
              GitHub
            </Tag>
            .
          </Paragraph>
          <Fullwidth Icon={GrProjects} title="Projects">
            <ul className={styles.projectsList}>
              <Project
                className={styles.project}
                github="https://github.com/a1exalexander/svg-to-react"
                title="svg-to-react"
                time="2024"
                npm="https://www.npmjs.com/package/@onlyredcats/svg-to-react"
                status="production"
                href="https://www.npmjs.com/package/@onlyredcats/svg-to-react"
                description="CLI tool for generating React icons from SVG files"
                stack={[
                  {
                    name: 'Node.js',
                    Icon: IoLogoNodejs,
                    color: '#539e43',
                    href: 'https://nodejs.org/',
                  },
                  {
                    name: 'Javascript',
                    Icon: SiJavascript,
                    color: '#f7df1e',
                    href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
                  },
                ]}
              />
              <Project
                className={styles.project}
                github="https://github.com/a1exalexander/exchanger"
                title="Exchanger"
                time="2021"
                status="production"
                href="https://exchanger.in.ua"
                description="Hryvnia to other currencies converter"
                stack={[
                  {
                    name: 'React',
                    Icon: BiLogoReact,
                    color: '#68dbfb',
                    href: 'https://react.dev',
                  },
                  {
                    name: 'Redux',
                    Icon: TbBrandRedux,
                    color: '#764abc',
                    href: 'https://react-redux.js.org/',
                  },
                  {
                    name: 'CSS modules',
                    Icon: SiCssmodules,
                    href: 'https://github.com/css-modules/css-modules',
                    color: '#000',
                  },
                ]}
              />

              <Project
                className={styles.project}
                github="https://github.com/a1exalexander/elevendogs"
                title="Elevendogs"
                time="2021"
                status="production"
                href="https://elevendogs.com.ua"
                description="Barbershop website for my friend's business"
                stack={[
                  {
                    name: 'Next.js',
                    Icon: TbBrandNextjs,
                    color: '#080808',
                    href: 'https://nextjs.org/',
                  },
                  {
                    name: 'CSS modules',
                    Icon: SiCssmodules,
                    href: 'https://github.com/css-modules/css-modules',
                    color: '#000',
                  },
                ]}
              />

              <Project
                className={styles.project}
                github="https://github.com/a1exalexander/school23"
                title="School 23"
                time="2020"
                status="production"
                href="https://school23.vercel.app/"
                description="Kremenchuk school website for my mom, who is a director"
                stack={[
                  {
                    name: 'Next.js',
                    Icon: TbBrandNextjs,
                    color: '#080808',
                    href: 'https://nextjs.org/',
                  },
                  {
                    name: 'Firebase',
                    Icon: IoLogoFirebase,
                    color: '#ffa82c',
                    href: 'https://firebase.google.com/',
                  },
                  {
                    name: 'SCSS',
                    Icon: SiSass,
                    color: '#c69',
                    href: 'https://sass-lang.com/',
                  },
                ]}
              />

              <Project
                className={styles.project}
                title="Keenly"
                time="2020"
                status="production"
                href="https://keenly.shop/"
                description="Online store for my aunt's business"
                stack={[
                  {
                    name: 'Wix',
                    Icon: FaWix,
                    color: '#000000',
                    href: 'https://wix.com',
                  },
                ]}
              />

              <Project
                className={styles.project}
                title="Merge Place"
                time="2018"
                status="production"
                href="https://www.merge.place/"
                description="My first website that I made by myself for a co-working in Kremenchuk, Ukraine."
                maxWidth={250}
                stack={[
                  {
                    name: 'Vue 2',
                    Icon: IoLogoVue,
                    color: '#41b883',
                    href: 'https://v2.vuejs.org/',
                  },
                  {
                    name: 'SCSS',
                    Icon: SiSass,
                    color: '#c69',
                    href: 'https://sass-lang.com/',
                  },
                ]}
              />
            </ul>
          </Fullwidth>
        </section>
        <section id="my-certificates" className={styles.section}>
          <h2 className={styles.heading}>my certificates 🎓</h2>
          <Paragraph>
            Here are some of the course and worshop certifications I&apos;ve
            completed.
          </Paragraph>
          <Fullwidth>
            <div className={styles.certsList}>
              <div className={styles.certPadding} />
              <Certificate
                className={styles.certItem}
                src={cert4}
                backgroundColor="#3548fe"
                alt={getAlt('Projector: Engineering Discovery')}
              />
              <Certificate
                className={styles.certItem}
                src={cert2}
                backgroundColor="#100f14"
                alt={getAlt('Projector: SQL')}
              />
              <Certificate
                className={styles.certItem}
                src={cert3}
                backgroundColor="#100f14"
                alt={getAlt('Projector: CTO')}
              />
              <Certificate
                className={styles.certItem}
                src={cert1}
                alt={getAlt('Sololearn: SQL')}
              />
              <div className={styles.certPadding} />
            </div>
          </Fullwidth>
        </section>
      </main>
    </>
  );
}
