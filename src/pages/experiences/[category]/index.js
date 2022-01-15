import React from "react";
import Head from "next/head";

import experiences, {experiencesItems} from "testData/experiences";

export default function Index({
                                experience,
                                experienceItems
                              }) {
  return (
    <>
      <Head>
        <title>Recent Experiences - Builds Test Project</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <h1>{experience.title}</h1>

      {experienceItems.length
        ? (
          <div>
            {experienceItems.map((item, index) => (
              <div key={index}>{item.title}</div>
            ))}
          </div>
        )
        : (
          <div>Not Defined Yet</div>
        )}

    </>
  )
}

// todo implement requests here
export async function getServerSideProps(context) {
  const {params: {category}} = context;
  const experience = experiences.find(item => item.path.includes(`/${category}`));
  if (!category || !experience) {
    return {
      notFound: true,
    }
  }

  const experienceItems = experiencesItems.filter(item => item.categoryId === experience.id);

  return {
    props: {
      experience,
      experienceItems
    }, // will be passed to the page component as props
  }
}