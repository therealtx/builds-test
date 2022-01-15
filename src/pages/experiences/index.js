import Head from 'next/head'
import Header from "components/layout/Header";
import SearchBar from "components/common/SearchBar";
import ExperiencesList from "components/common/ExperiencesList";
import ExperiencesCategoriesGrid from "components/common/ExperiencesCategoriesGrid";

import experiences, { experiencesItems } from "testData/experiences";

export default function Index() {
  return (
    <>
      <Head>
        <title>Recent Experiences - Builds Test Project</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <SearchBar />

        <ExperiencesList
          title="Recent Experiences"
          items={experiencesItems}
        />
        <ExperiencesCategoriesGrid
          title="Popular Categories"
          items={experiences}
        />
        <ExperiencesList
          seeAllUrl="/experiences"
          title="Trending Experiences"
          items={experiencesItems}
        />
      </main>
    </>
  )
}
