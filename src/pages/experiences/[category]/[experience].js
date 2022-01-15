import React from "react";
import Head from "next/head";
import ExperienceCategory from "components/common/ExperienceItem";

import experiences, {experiencesItems} from "testData/experiences";
import activities from "testData/activities";

export default function Experience({
                                experience,
                                     experienceItem,
                                     activities
                              }) {
  return (
    <>
      <Head>
        <title>Recent Experiences - Builds Test Project</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ExperienceCategory
        category={experience}
        item={experienceItem}
        activities={activities}
      />
    </>
  )
}

// todo implement requests here
export async function getServerSideProps(context) {
  const {params: {category, experience}} = context;
  const categoryItem = experiences.find(item => item.path.includes(`/${category}`));
  if (!categoryItem) {
    return {
      notFound: true,
    }
  }

  const experienceItem = experiencesItems.find(item => item.path.includes(`/${experience}`));
  if (!experienceItem) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      experience: categoryItem,
      experienceItem,
      activities
    }, // will be passed to the page component as props
  }
}