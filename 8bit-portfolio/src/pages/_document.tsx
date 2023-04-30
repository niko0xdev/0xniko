import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />
        <meta
          name="description"
          content="Hi, I'm Niko. I have over 8 years of experience in the Software Development. My interest in IT began at a young age, and I have since dedicated myself to learning and mastering various programming languages, software development methodologies, and tools. My passion for software engineering has driven me to strive towards becoming a Principal Software Engineer, where I can apply my skills and knowledge to lead complex projects and delve into core technologies."
        />
        <meta name="image" content="/images/gentle.svg" />
        <meta
          property="og:title"
          content="Niko | Senior Software Engineering, DevOps Engineer"
        />
        <meta
          property="og:description"
          content="Hi, I'm Niko. I have over 8 years of experience in the Software Development. My interest in IT began at a young age, and I have since dedicated myself to learning and mastering various programming languages, software development methodologies, and tools. My passion for software engineering has driven me to strive towards becoming a Principal Software Engineer, where I can apply my skills and knowledge to lead complex projects and delve into core technologies."
        />
        <meta property="og:image" content="/images/gentle.svg" />
        <meta property="og:type" content="website" />
        <meta
          name="twitter:title"
          content="Niko | Senior Software Engineering, DevOps Engineer"
        />
        <meta
          name="twitter:description"
          content="Hi, I'm Niko. I have over 8 years of experience in the Software Development. My interest in IT began at a young age, and I have since dedicated myself to learning and mastering various programming languages, software development methodologies, and tools. My passion for software engineering has driven me to strive towards becoming a Principal Software Engineer, where I can apply my skills and knowledge to lead complex projects and delve into core technologies."
        />
        <meta name="twitter:image" content="/images/gentle.svg" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
