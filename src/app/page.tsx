import { BiLogoTypescript, BiLogoReact } from 'react-icons/bi';
import { ImNpm } from 'react-icons/im';
import { FaWix } from 'react-icons/fa';
import { DiBackbone, DiStylus, DiRedis } from 'react-icons/di';
import { GrProjects } from 'react-icons/gr';
import { RiSupabaseFill } from 'react-icons/ri';
import { GoWorkflow } from 'react-icons/go';
import {
  TbBrandNextjs,
  TbBrandReactNative,
  TbBrandOpenai,
  TbEPassport,
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
import photo7 from '../images/a00005.jpeg';
import cert1 from '../images/c1.png';
import cert2 from '../images/c2.png';
import cert3 from '../images/c3.png';
import merge from '../images/merge.png';
import mergeAcademy from '../images/merge-academy.ico';
import wisealpha from '../images/wisealpha.jpg';
import beetroot from '../images/beetroot.png';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Oleksandr Ratushnyi',
  description: 'Front-end Developer from Ukraine',
};

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>hey, I&apos;m Oleksandr Ratushnyi 👋</h1>
      <Paragraph>
        I&apos;m <strong>front-end developer</strong> from Ukraine. My 🫶 stack
        is{' '}
        <Tag href="https://react.dev" iconColor="#68dbfb" Icon={BiLogoReact}>
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
        . My specialization in web development, system design, team management
        and development processes.
      </Paragraph>
      <Photo
        loading="eager"
        src={photo1}
        caption="Me in the cafe is posing for a photo"
      />
      <Paragraph>
        I have experience in teaching and creating courses in front-end
        development. I have successfully released three groups of students in
        front-end development. Additionally, I crafted my own course for the
        Merge Academy.
      </Paragraph>
      <Collage>
        <Photo
          src={photo2}
          grid
          caption="I present certificates to students in 2020"
        />
        <Photo src={photo3} grid caption="Some performance" />
      </Collage>
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
      <Photo src={photo4} caption="somewhere in the Carpathians" />
      <Paragraph>
        At home, I have to two red cats 🐈🐈, though one is not quite as red as
        a desert, like Desert Eagle.
      </Paragraph>
      <Collage>
        <Photo src={photo5} grid caption="I'm working with Platon" />
        <Photo src={photo6} vertical grid caption="Lastick & Platon" />
        <Photo src={photo7} grid caption="Do damage" />
      </Collage>
      <section className={styles.section}>
        <h2 className={styles.heading}>my work 🗂️</h2>
        <Paragraph>
          I began my journey as a front-end engineer in early 2018 and rapidly
          advanced from a junior role to become a CTO, showcasing my growth and
          dedication in the tech field.
        </Paragraph>
        <Divider />
        <Work
          title="Merge"
          job="Full-stack developer, CTO and co-founder"
          time="2018 – present"
          href="https://merge.rocks"
          icon={merge}
        >
          <Paragraph>
            At Merge, my role extends beyond mere development; it&apos;s about
            envisioning and creating cutting-edge web applications in the
            fintech and SaaS sectors. I lead a team of talented developers,
            setting strategic directions, and fostering a culture of innovation.
            We&apos;ve turned numerous ambitious ideas into successful financial
            technology solutions and user-centric SaaS platforms, contributing
            significantly to the tech landscape.
          </Paragraph>
          <Fullwidth Icon={GrProjects} title="Projects">
            <ul className={styles.projectsList}>
              <Project
                title="Promtify"
                time="2023"
                description="AI templates builder"
                href="https://app.promtify.ai"
                status="production"
                stack={[
                  {
                    name: 'Next.js',
                    Icon: TbBrandNextjs,
                    color: '#080808',
                    href: 'https://nextjs.org/',
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
                ]}
              />

              <Project
                title="RealayPay"
                time="2023"
                description="Crypto payment solution"
                href="https://relaypay.io/"
                status="production"
                stack={[
                  {
                    name: 'Next.js',
                    Icon: TbBrandNextjs,
                    color: '#080808',
                    href: 'https://nextjs.org/',
                  },
                  {
                    name: 'Onfido',
                    Icon: TbEPassport,
                    color: '#3c46f6',
                    href: 'https://onfido.com/',
                  },
                ]}
              />

              <Project
                title="ForwardLane"
                time="2023"
                description="AI insights engine for data signal analysis"
                status="offline"
                stack={[
                  {
                    name: 'React',
                    Icon: BiLogoReact,
                    color: '#68dbfb',
                    href: 'https://react.dev',
                  },
                  {
                    name: 'React Flow',
                    Icon: GoWorkflow,
                    color: '#ff0072',
                    href: 'https://reactflow.dev/',
                  },
                ]}
              />

              <Project
                title="Merge Academy"
                time="2022"
                description="Web academy platform"
                href="https://merge.academy/"
                status="production"
                stack={[
                  {
                    name: 'Remix',
                    Icon: SiRemix,
                    color: '#080808',
                    href: 'https://remix.run/',
                  },
                  {
                    name: 'Decap CMS',
                    Icon: SiDecapcms,
                    color: '#ff0082',
                    href: 'https://decapcms.org/',
                  },
                ]}
              />

              <Project
                title="Ember"
                time="2022"
                description="Finance management app"
                href="https://ember.co/"
                status="production"
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
                ]}
              />
              <Project
                title="Spiral Blue"
                time="2021"
                description="Space tech project"
                status="offline"
                stack={[
                  {
                    name: 'Next.js',
                    Icon: TbBrandNextjs,
                    color: '#080808',
                    href: 'https://nextjs.org/',
                  },
                  {
                    name: 'Strapi CMS',
                    Icon: SiStrapi,
                    color: '#8c4bff',
                    href: 'https://strapi.io/',
                  },
                ]}
              />

              <Project
                title="Noviscient"
                time="2021"
                description="Wealth management platform"
                href="https://www.noviscient.com/"
                status="production"
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
                ]}
              />

              <Project
                title="Spotlyt"
                time="2021"
                description="Components library for data scientists"
                status="offline"
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
                    name: 'NPM',
                    Icon: ImNpm,
                    color: '#cd3f3e',
                    href: 'https://www.npmjs.com/',
                  },
                ]}
              />

              <Project
                title="Vamp"
                time="2020"
                description="Kubernetes manager tool"
                status="offline"
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
                title="Merge"
                time="2020"
                description="Agency website"
                status="production"
                href="https://merge.rocks/"
                stack={[
                  {
                    name: 'Next.js',
                    Icon: TbBrandNextjs,
                    color: '#080808',
                    href: 'https://nextjs.org/',
                  },
                  {
                    name: 'Decap CMS',
                    Icon: SiDecapcms,
                    color: '#ff0082',
                    href: 'https://decapcms.org/',
                  },
                ]}
              />

              <Project
                title="Evello"
                time="2020"
                status="offline"
                description="Video intelligence software platform"
                stack={[
                  {
                    name: 'Vue 2',
                    Icon: IoLogoVue,
                    color: '#41b883',
                    href: 'https://v2.vuejs.org/',
                  },
                ]}
              />

              <Project
                title="TokenPlace"
                time="2019"
                status="offline"
                description="Ultimate crypto trading tool"
                stack={[
                  {
                    name: 'Vue 2',
                    Icon: IoLogoVue,
                    color: '#41b883',
                    href: 'https://v2.vuejs.org/',
                  },
                ]}
              />

              <Project
                title="FundPlatform"
                time="2018"
                status="demo"
                description="Hedge funds wealth management system"
                href="https://fundplatform.netlify.app/"
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
                ]}
              />
            </ul>
          </Fullwidth>
        </Work>
        <Divider />
        <Work
          title="Merge Academy"
          job="Course author and teacher"
          time="2022 – 2023"
          href="https://merge.academy/"
          icon={mergeAcademy}
        >
          <Paragraph>
            At Merge Academy, I designed and taught a comprehensive front-end
            development course, drawing from my rich experience. Beyond
            teaching, I developed the academy&apos;s website and implemented
            automated processes to enhance the learning experience. This role
            allowed me to shape the next generation of developers, many of whom
            have become key contributors in the tech industry.
          </Paragraph>
        </Work>
        <Divider />
        <Work
          title="WiseAlpha"
          job="Front-end developer"
          time="2022"
          href="https://wisealpha.com/"
          icon={wisealpha}
        >
          <Paragraph>
            At WiseAlpha, my role revolved around trading and technology for the
            Corporate Bond Market. I contributed to the development of new
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
          title="Beetroot Academy"
          job="Front-end teacher"
          time="2019 – 2021"
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
        </Work>
        <Divider />
        <Work
          title="Freelance"
          job="Front-end developer"
          time="2017 – 2021"
          Icon={LuBird}
        >
          <Paragraph>
            My freelance journey was marked by diversity and adaptability. I
            worked on various projects, leveraging a wide array of technologies
            to deliver tailored front-end solutions. This period honed my skills
            in project management, client communication, and staying ahead of
            the curve in rapidly evolving tech trends.
          </Paragraph>
          <Fullwidth Icon={GrProjects} title="Projects">
            <ul className={styles.projectsList}>
              <Project
                title="Generator"
                time="2021"
                status="offline"
                description="Website generator tool"
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
                ]}
              />

              <Project
                title="Captains Club"
                time="2020"
                status="production"
                href="https://app.captains.club/apply"
                description="Golf club mobile app"
                stack={[
                  {
                    name: 'React Native',
                    Icon: TbBrandReactNative,
                    color: '#61dafb',
                    href: 'https://reactnative.dev/',
                  },
                  {
                    name: 'Expo',
                    Icon: SiExpo,
                    color: '#000020',
                    href: 'https://expo.dev/',
                  },
                ]}
              />

              <Project
                title="CircleOf"
                time="2020"
                href="https://circleof.com/"
                status="production"
                description="Family caregiving mobile app"
                stack={[
                  {
                    name: 'React Native',
                    Icon: TbBrandReactNative,
                    color: '#61dafb',
                    href: 'https://reactnative.dev/',
                  },
                  {
                    name: 'Expo',
                    Icon: SiExpo,
                    color: '#000020',
                    href: 'https://expo.dev/',
                  },
                ]}
              />

              <Project
                title="Wambla"
                time="2019"
                status="offline"
                description="Real estate purchase/sale platform"
                stack={[
                  {
                    name: 'Nuxt',
                    Icon: SiNuxtdotjs,
                    color: '#00dc82',
                    href: 'https://nuxt.com/',
                  },
                ]}
              />

              <Project
                title="Merge Place"
                time="2017"
                status="production"
                href="https://www.merge.place/"
                description="Coworking website"
                stack={[
                  {
                    name: 'Vue 2',
                    Icon: IoLogoVue,
                    color: '#41b883',
                    href: 'https://v2.vuejs.org/',
                  },
                ]}
              />
            </ul>
          </Fullwidth>
        </Work>
      </section>
      <section className={styles.section}>
        <h2 className={styles.heading}>my pet-projects 🚀</h2>
        <Paragraph>
          Projects that I made for myself, friends, relatives and world on a
          free basis. My pet-projects are a blend of personal passion and skill
          development. Explore more on my{' '}
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
              ]}
            />

            <Project
              github="https://github.com/a1exalexander/elevendogs"
              title="Elevendogs"
              time="2021"
              status="production"
              href="https://elevendogs.com.ua"
              description="Barbershop website"
              stack={[
                {
                  name: 'Next.js',
                  Icon: TbBrandNextjs,
                  color: '#080808',
                  href: 'https://nextjs.org/',
                },
              ]}
            />

            <Project
              github="https://github.com/a1exalexander/school23"
              title="School 23"
              time="2020"
              status="production"
              href="https://school23.vercel.app/"
              description="Kremenchuk school website"
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
              ]}
            />

            <Project
              title="Keenly"
              time="2020"
              status="production"
              href="https://keenly.shop/"
              description="Online shop"
              stack={[
                {
                  name: 'Wix',
                  Icon: FaWix,
                  color: '#000000',
                  href: 'https://wix.com',
                },
              ]}
            />
          </ul>
        </Fullwidth>
      </section>
      <section className={styles.section}>
        <h2 className={styles.heading}>course certificates 🎓</h2>
        <Paragraph>
          Here are some of the courses and certifications I&apos;ve completed.
        </Paragraph>
        <Fullwidth>
          <div className={styles.certsList}>
            <div className={styles.certPadding} />
            <Certificate
              className={styles.certItem}
              src={cert2}
              alt={getAlt('SQL Projector')}
            />
            <Certificate
              className={styles.certItem}
              src={cert3}
              alt={getAlt('CTO Projector')}
            />
            <Certificate
              className={styles.certItem}
              src={cert1}
              alt={getAlt('Sololearn SQL')}
            />
            <div className={styles.certPadding} />
          </div>
        </Fullwidth>
      </section>
    </main>
  );
}
